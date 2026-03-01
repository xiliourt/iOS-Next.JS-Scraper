'use client';

import React, { useState, useEffect, useMemo } from "react";
import { PriceEntry, TableRow } from "./types";
import { LOADING_MESSAGES } from "./constants";
import { LoadingScreen } from "./components/LoadingScreen";
import { Controls } from "./components/Controls";
import { PriceTable } from "./components/PriceTable";
import Footer from './components/Footer';
import './globals.css';

const App = () => {
  const [appId, setAppId] = useState("6477489729");
  const [targetCurrency, setTargetCurrency] = useState("AUD");
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [fakeProgress, setFakeProgress] = useState(0);

  const [rawAppData, setRawAppData] = useState<Record<string, PriceEntry[]> | null>(
    null
  );
  const [data, setData] = useState<TableRow[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof TableRow;
    direction: "asc" | "desc";
  } | null>({ key: "convertedCost", direction: "asc" });

  const [availableProducts, setAvailableProducts] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  // Handle message cycling and fake progress during loading
  useEffect(() => {
    let messageInterval: number | undefined;
    let progressInterval: number | undefined;

    if (loading) {
      setLoadingMessageIndex(0);
      setFakeProgress(5);

      messageInterval = window.setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
      }, 6000);

      progressInterval = window.setInterval(() => {
        setFakeProgress((prev) => {
          if (prev < 90) return prev + Math.random() * 2;
          if (prev < 98) return prev + 0.1;
          return prev;
        });
      }, 1000);
    } else {
      setFakeProgress(0);
    }

    return () => {
      if (messageInterval) clearInterval(messageInterval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [loading]);

  const fetchAppData = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!appId) {
      setError("Please enter an App ID.");
      return;
    }

    setLoading(true);
    setError(null);
    setRawAppData(null);
    setData([]);
    setAvailableProducts([]);
    setSelectedProduct("");

    try {
      const scrapeUrl = `/api/scrape?appId=${encodeURIComponent(appId)}`;

      const appRes = await fetch(scrapeUrl);
      if (!appRes.ok)
        throw new Error(`Failed to fetch app data: ${appRes.statusText}`);

      const appJson = await appRes.json();
      setRawAppData(appJson);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "An unknown error occurred");
      setLoading(false);
    }
  };

  useEffect(() => {
    const updateConversion = async () => {
      if (!rawAppData || !targetCurrency) return;

      setProcessing(true);
      setError(null);

      try {
        const ratesRes = await fetch(
          `https://open.er-api.com/v6/latest/${targetCurrency}`
        );
        if (!ratesRes.ok) throw new Error("Failed to fetch exchange rates");
        const ratesData = await ratesRes.json();
        const rates = ratesData.rates;

        const groupedData: Record<string, TableRow> = {};

        Object.keys(rawAppData).forEach((productName) => {
          if (productName === "statusCode" || productName === "headers") return;

          const entries = rawAppData[productName];
          if (!Array.isArray(entries)) return;

          entries.forEach((entry) => {
            const pName = entry.product || productName;
            const groupKey = `${pName}|${entry.currency}|${entry.cost}`;

            if (!groupedData[groupKey]) {
              const rate = rates[entry.currency];
              let converted = null;
              if (rate) {
                converted = entry.cost / rate;
              }

              groupedData[groupKey] = {
                id: groupKey,
                product: pName,
                originalCost: entry.cost,
                originalCurrency: entry.currency,
                convertedCost: converted,
                targetCurrency: targetCurrency,
                countries: [...entry.countries],
              };
            } else {
              groupedData[groupKey].countries.push(...entry.countries);
            }
          });
        });

        const processedRows: TableRow[] = Object.values(groupedData).map((row) => ({
          ...row,
          countries: Array.from(new Set(row.countries)).sort((a, b) =>
            a.localeCompare(b)
          ),
        }));

        const products = Array.from(
          new Set(processedRows.map((r) => r.product))
        ).sort();
        setAvailableProducts(products);
        setData(processedRows);
      } catch (err) {
        console.error(err);
        setError(
          err instanceof Error ? err.message : "Error calculating conversions"
        );
      } finally {
        setLoading(false);
        setProcessing(false);
      }
    };

    updateConversion();
  }, [rawAppData, targetCurrency]);

  useEffect(() => {
    if (availableProducts.length > 0) {
      if (!selectedProduct || !availableProducts.includes(selectedProduct)) {
        setSelectedProduct(availableProducts[0]);
      }
    }
  }, [availableProducts]);

  const filteredData = useMemo(() => {
    if (!selectedProduct) return [];
    return data.filter((row) => row.product === selectedProduct);
  }, [data, selectedProduct]);

  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;

    return [...filteredData].sort((a, b) => {
      let aValue: any = a[sortConfig.key];
      let bValue: any = b[sortConfig.key];

      if (sortConfig.key === "countries") {
        aValue = (a.countries[0] || "").toLowerCase();
        bValue = (b.countries[0] || "").toLowerCase();
      } else if (typeof aValue === "string") {
        aValue = (aValue || "").toLowerCase();
        bValue = (bValue || "").toLowerCase();
      } else if (aValue === null) aValue = 0;
      else if (bValue === null) bValue = 0;

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  const requestSort = (key: keyof TableRow) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortClass = (key: keyof TableRow) => {
    let cls = "sortable";
    if (sortConfig && sortConfig.key === key) {
      cls += ` sorted-${sortConfig.direction === "asc" ? "ascending" : "descending"}`;
    }
    return cls;
  };

  return (
    <div className="app-container">
      <h1>App Store Price Scraper</h1>

      <Controls
        appId={appId}
        setAppId={setAppId}
        targetCurrency={targetCurrency}
        setTargetCurrency={setTargetCurrency}
        fetchAppData={fetchAppData}
        loading={loading}
        processing={processing}
      />

      {error && <div className="error">{error}</div>}

      <LoadingScreen
        loading={loading}
        processing={processing}
        fakeProgress={fakeProgress}
        loadingMessageIndex={loadingMessageIndex}
      />

      <PriceTable
        availableProducts={availableProducts}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        sortedData={sortedData}
        requestSort={requestSort}
        getSortClass={getSortClass}
        targetCurrency={targetCurrency}
      />

      {!loading && !processing && data.length === 0 && !error && (
        <div
          className="empty-state"
          style={{ textAlign: "center", padding: "4rem", opacity: 0.5 }}
        >
          <p>Enter an App ID and search to view global pricing comparisons.</p>
        </div>
      )}
    </div>
    <Footer git="https://github.com/xiliourt/iOS-Next.JS-Scraper" />
  );
};

export default App;
