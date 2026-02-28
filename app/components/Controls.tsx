'use client';

import React from "react";
import { COMMON_CURRENCIES, ALL_CURRENCIES } from "../constants";

interface ControlsProps {
  appId: string;
  setAppId: (id: string) => void;
  targetCurrency: string;
  setTargetCurrency: (curr: string) => void;
  fetchAppData: (e: React.FormEvent) => void;
  loading: boolean;
  processing: boolean;
}

export const Controls: React.FC<ControlsProps> = ({
  appId,
  setAppId,
  targetCurrency,
  setTargetCurrency,
  fetchAppData,
  loading,
  processing,
}) => {
  return (
    <div className="controls-container">
      <form className="search-form" onSubmit={fetchAppData}>
        <input 
          type="text" 
          placeholder="Enter Apple App ID (e.g., 414200095)" 
          aria-label="Apple App ID" 
          required 
          name="appId"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
        />
        <button type="submit" disabled={loading || processing}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="currency-converter">
        <label htmlFor="conversion-currency">Convert to:</label>
        <select 
          id="conversion-currency" 
          aria-label="Select conversion currency"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
          <option value="">-- Select Currency --</option>
          {COMMON_CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
          {ALL_CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  );
};
