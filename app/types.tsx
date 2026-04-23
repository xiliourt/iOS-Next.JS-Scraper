export interface PriceEntry {
  product: string;
  currency: string;
  cost: number;
  countries: string[];
  subscriptionPeriod?: string | null;
  introOfferCost?: number | null;
}

export interface TableRow {
  id: string;
  product: string;
  originalCost: number;
  originalCurrency: string;
  convertedCost: number | null;
  targetCurrency: string;
  countries: string[];
  subscriptionPeriod?: string | null;
  introOfferCost?: number | null;
  convertedIntroOfferCost?: number | null;
}