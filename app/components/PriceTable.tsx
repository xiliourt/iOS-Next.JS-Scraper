'use client';

import React from "react";
import { TableRow } from "../types";

interface PriceTableProps {
  availableProducts: string[];
  selectedProduct: string;
  setSelectedProduct: (p: string) => void;
  sortedData: TableRow[];
  requestSort: (key: keyof TableRow) => void;
  getSortClass: (key: keyof TableRow) => string;
  targetCurrency: string;
}

export const PriceTable: React.FC<PriceTableProps> = ({
  availableProducts,
  selectedProduct,
  setSelectedProduct,
  sortedData,
  requestSort,
  getSortClass,
  targetCurrency,
}) => {
  if (availableProducts.length === 0) return null;

  const formatCurrency = (amount: number, currency: string) => {
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
      }).format(amount);
    } catch (e) {
      return `${amount.toFixed(2)} ${currency}`;
    }
  };

  return (
    <div className="results-container">
      <div className="product-selector">
        <label htmlFor="product-select">Displaying prices for:</label>
        <select 
          id="product-select" 
          aria-label="Select a product to view its prices"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          {availableProducts.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th className={getSortClass('originalCurrency')} onClick={() => requestSort('originalCurrency')}>Currency</th>
            <th className={getSortClass('originalCost')} onClick={() => requestSort('originalCost')}>Original Cost</th>
            <th className={getSortClass('convertedCost')} onClick={() => requestSort('convertedCost')}>Converted Cost</th>
            <th className={getSortClass('countries')} onClick={() => requestSort('countries')}>Countries</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id}>
              <td>{row.originalCurrency}</td>
              <td>{formatCurrency(row.originalCost, row.originalCurrency)}</td>
              <td>
                {row.convertedCost !== null 
                  ? `${formatCurrency(row.convertedCost, targetCurrency)} ${targetCurrency}`
                  : "N/A"}
              </td>
              <td>{row.countries.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
