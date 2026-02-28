export interface PriceEntry {
  product: string;
  currency: string;
  cost: number;
  countries: string[];
}

export interface TableRow {
  id: string;
  product: string;
  originalCost: number;
  originalCurrency: string;
  convertedCost: number | null;
  targetCurrency: string;
  countries: string[];
}
