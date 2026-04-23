export interface Country {
  countryCode: string;
  countryName: string;
  currency: string;
}

export const countryData: Country[] = [
    { countryCode: 'dz', countryName: 'Algeria', currency: 'USD' },
    { countryCode: 'ao', countryName: 'Angola', currency: 'USD' },
    { countryCode: 'ai', countryName: 'Anguilla', currency: 'USD' },
    { countryCode: 'ag', countryName: 'Antigua and Barbuda', currency: 'USD' },
    { countryCode: 'ar', countryName: 'Argentina', currency: 'USD' },
    { countryCode: 'am', countryName: 'Armenia', currency: 'USD' },
    { countryCode: 'au', countryName: 'Australia', currency: 'AUD' },
    { countryCode: 'at', countryName: 'Austria', currency: 'EUR' },
    { countryCode: 'az', countryName: 'Azerbaijan', currency: 'USD' },
    { countryCode: 'bs', countryName: 'Bahamas', currency: 'USD' },
    { countryCode: 'bh', countryName: 'Bahrain', currency: 'USD' },
    { countryCode: 'bb', countryName: 'Barbados', currency: 'USD' },
    { countryCode: 'by', countryName: 'Belarus', currency: 'USD' },
    { countryCode: 'be', countryName: 'Belgium', currency: 'EUR' },
    { countryCode: 'bz', countryName: 'Belize', currency: 'USD' },
    { countryCode: 'bm', countryName: 'Bermuda', currency: 'USD' },
    { countryCode: 'bt', countryName: 'Bhutan', currency: 'USD' },
    { countryCode: 'bo', countryName: 'Bolivia', currency: 'USD' },
    { countryCode: 'bw', countryName: 'Botswana', currency: 'USD' },
    { countryCode: 'br', countryName: 'Brazil', currency: 'BRL' },
    { countryCode: 'vg', countryName: 'British Virgin Islands', currency: 'USD' },
    { countryCode: 'bn', countryName: 'Brunei Darussalam', currency: 'USD' },
    { countryCode: 'bg', countryName: 'Bulgaria', currency: 'BGN' },
    { countryCode: 'kh', countryName: 'Cambodia', currency: 'USD' },
    { countryCode: 'ca', countryName: 'Canada', currency: 'CAD' },
    { countryCode: 'cv', countryName: 'Cape Verde', currency: 'USD' },
    { countryCode: 'ky', countryName: 'Cayman Islands', currency: 'USD' },
    { countryCode: 'cl', countryName: 'Chile', currency: 'CLP' },
    { countryCode: 'cn', countryName: 'China', currency: 'CNY' },
    { countryCode: 'co', countryName: 'Colombia', currency: 'COP' },
    { countryCode: 'cr', countryName: 'Costa Rica', currency: 'USD' },
    { countryCode: 'hr', countryName: 'Croatia', currency: 'EUR' },
    { countryCode: 'cy', countryName: 'Cyprus', currency: 'EUR' },
    { countryCode: 'cz', countryName: 'Czech Republic', currency: 'CZK' },
    { countryCode: 'dk', countryName: 'Denmark', currency: 'DKK' },
    { countryCode: 'dm', countryName: 'Dominica', currency: 'USD' },
    { countryCode: 'do', countryName: 'Dominican Republic', currency: 'USD' },
    { countryCode: 'ec', countryName: 'Ecuador', currency: 'USD' },
    { countryCode: 'eg', countryName: 'Egypt', currency: 'EGP' },
    { countryCode: 'sv', countryName: 'El Salvador', currency: 'USD' },
    { countryCode: 'ee', countryName: 'Estonia', currency: 'EUR' },
    { countryCode: 'sz', countryName: 'Eswatini', currency: 'USD' },
    { countryCode: 'fj', countryName: 'Fiji', currency: 'USD' },
    { countryCode: 'fi', countryName: 'Finland', currency: 'EUR' },
    { countryCode: 'fr', countryName: 'France', currency: 'EUR' },
    { countryCode: 'gm', countryName: 'Gambia', currency: 'USD' },
    { countryCode: 'ge', countryName: 'Georgia', currency: 'USD' },
    { countryCode: 'de', countryName: 'Germany', currency: 'EUR' },
    { countryCode: 'gh', countryName: 'Ghana', currency: 'USD' },
    { countryCode: 'gr', countryName: 'Greece', currency: 'EUR' },
    { countryCode: 'gd', countryName: 'Grenada', currency: 'USD' },
    { countryCode: 'gt', countryName: 'Guatemala', currency: 'USD' },
    { countryCode: 'gy', countryName: 'Guyana', currency: 'USD' },
    { countryCode: 'hn', countryName: 'Honduras', currency: 'USD' },
    { countryCode: 'hk', countryName: 'Hong Kong', currency: 'HKD' },
    { countryCode: 'hu', countryName: 'Hungary', currency: 'HUF' },
    { countryCode: 'is', countryName: 'Iceland', currency: 'USD' },
    { countryCode: 'in', countryName: 'India', currency: 'INR' },
    { countryCode: 'id', countryName: 'Indonesia', currency: 'IDR' },
    { countryCode: 'ie', countryName: 'Ireland', currency: 'EUR' },
    { countryCode: 'il', countryName: 'Israel', currency: 'ILS' },
    { countryCode: 'it', countryName: 'Italy', currency: 'EUR' },
    { countryCode: 'jm', countryName: 'Jamaica', currency: 'USD' },
    { countryCode: 'jp', countryName: 'Japan', currency: 'JPY' },
    { countryCode: 'jo', countryName: 'Jordan', currency: 'USD' },
    { countryCode: 'kz', countryName: 'Kazakhstan', currency: 'KZT' },
    { countryCode: 'ke', countryName: 'Kenya', currency: 'USD' },
    { countryCode: 'kr', countryName: 'Korea, Republic of', currency: 'KRW' },
    { countryCode: 'kw', countryName: 'Kuwait', currency: 'USD' },
    { countryCode: 'kg', countryName: 'Kyrgyzstan', currency: 'USD' },
    { countryCode: 'la', countryName: 'Lao People\'s Democratic Republic', currency: 'USD' },
    { countryCode: 'lv', countryName: 'Latvia', currency: 'EUR' },
    { countryCode: 'lb', countryName: 'Lebanon', currency: 'USD' },
    { countryCode: 'lr', countryName: 'Liberia', currency: 'USD' },
    { countryCode: 'lt', countryName: 'Lithuania', currency: 'EUR' },
    { countryCode: 'lu', countryName: 'Luxembourg', currency: 'EUR' },
    { countryCode: 'mo', countryName: 'Macao', currency: 'USD' },
    { countryCode: 'mg', countryName: 'Madagascar', currency: 'USD' },
    { countryCode: 'mw', countryName: 'Malawi', currency: 'USD' },
    { countryCode: 'my', countryName: 'Malaysia', currency: 'MYR' },
    { countryCode: 'mv', countryName: 'Maldives', currency: 'USD' },
    { countryCode: 'ml', countryName: 'Mali', currency: 'USD' },
    { countryCode: 'mt', countryName: 'Malta', currency: 'EUR' },
    { countryCode: 'mr', countryName: 'Mauritania', currency: 'USD' },
    { countryCode: 'mu', countryName: 'Mauritius', currency: 'USD' },
    { countryCode: 'mx', countryName: 'Mexico', currency: 'MXN' },
    { countryCode: 'fm', countryName: 'Micronesia, Federated States of', currency: 'USD' },
    { countryCode: 'md', countryName: 'Moldova, Republic of', currency: 'USD' },
    { countryCode: 'mn', countryName: 'Mongolia', currency: 'USD' },
    { countryCode: 'ms', countryName: 'Montserrat', currency: 'USD' },
    { countryCode: 'mz', countryName: 'Mozambique', currency: 'USD' },
    { countryCode: 'mm', countryName: 'Myanmar', currency: 'USD' },
    { countryCode: 'na', countryName: 'Namibia', currency: 'USD' },
    { countryCode: 'np', countryName: 'Nepal', currency: 'USD' },
    { countryCode: 'nl', countryName: 'Netherlands', currency: 'EUR' },
    { countryCode: 'nz', countryName: 'New Zealand', currency: 'NZD' },
    { countryCode: 'ni', countryName: 'Nicaragua', currency: 'USD' },
    { countryCode: 'ne', countryName: 'Niger', currency: 'USD' },
    { countryCode: 'ng', countryName: 'Nigeria', currency: 'NGN' },
    { countryCode: 'mk', countryName: 'North Macedonia', currency: 'USD' },
    { countryCode: 'no', countryName: 'Norway', currency: 'NOK' },
    { countryCode: 'om', countryName: 'Oman', currency: 'USD' },
    { countryCode: 'pk', countryName: 'Pakistan', currency: 'PKR' },
    { countryCode: 'pw', countryName: 'Palau', currency: 'USD' },
    { countryCode: 'pa', countryName: 'Panama', currency: 'USD' },
    { countryCode: 'pg', countryName: 'Papua New Guinea', currency: 'USD' },
    { countryCode: 'py', countryName: 'Paraguay', currency: 'USD' },
    { countryCode: 'pe', countryName: 'Peru', currency: 'PEN' },
    { countryCode: 'ph', countryName: 'Philippines', currency: 'PHP' },
    { countryCode: 'pl', countryName: 'Poland', currency: 'PLN' },
    { countryCode: 'pt', countryName: 'Portugal', currency: 'EUR' },
    { countryCode: 'qa', countryName: 'Qatar', currency: 'QAR' },
    { countryCode: 'ro', countryName: 'Romania', currency: 'RON' },
    { countryCode: 'ru', countryName: 'Russia', currency: 'RUB' },
    { countryCode: 'sa', countryName: 'Saudi Arabia', currency: 'SAR' },
    { countryCode: 'sn', countryName: 'Senegal', currency: 'USD' },
    { countryCode: 'sc', countryName: 'Seychelles', currency: 'USD' },
    { countryCode: 'sl', countryName: 'Sierra Leone', currency: 'USD' },
    { countryCode: 'sg', countryName: 'Singapore', currency: 'SGD' },
    { countryCode: 'sk', countryName: 'Slovakia', currency: 'EUR' },
    { countryCode: 'si', countryName: 'Slovenia', currency: 'EUR' },
    { countryCode: 'sb', countryName: 'Solomon Islands', currency: 'USD' },
    { countryCode: 'za', countryName: 'South Africa', currency: 'ZAR' },
    { countryCode: 'es', countryName: 'Spain', currency: 'EUR' },
    { countryCode: 'lk', countryName: 'Sri Lanka', currency: 'USD' },
    { countryCode: 'kn', countryName: 'St. Kitts and Nevis', currency: 'USD' },
    { countryCode: 'lc', countryName: 'St. Lucia', currency: 'USD' },
    { countryCode: 'vc', countryName: 'St. Vincent and The Grenadines', currency: 'USD' },
    { countryCode: 'sr', countryName: 'Suriname', currency: 'USD' },
    { countryCode: 'se', countryName: 'Sweden', currency: 'SEK' },
    { countryCode: 'ch', countryName: 'Switzerland', currency: 'CHF' },
    { countryCode: 'tw', countryName: 'Taiwan', currency: 'TWD' },
    { countryCode: 'tj', countryName: 'Tajikistan', currency: 'USD' },
    { countryCode: 'tz', countryName: 'Tanzania, United Republic of', currency: 'TZS' },
    { countryCode: 'th', countryName: 'Thailand', currency: 'THB' },
    { countryCode: 'tt', countryName: 'Trinidad and Tobago', currency: 'USD' },
    { countryCode: 'tn', countryName: 'Tunisia', currency: 'USD' },
    { countryCode: 'tr', countryName: 'Turkey', currency: 'TRY' },
    { countryCode: 'tm', countryName: 'Turkmenistan', currency: 'USD' },
    { countryCode: 'tc', countryName: 'Turks and Caicos', currency: 'USD' },
    { countryCode: 'ug', countryName: 'Uganda', currency: 'USD' },
    { countryCode: 'ua', countryName: 'Ukraine', currency: 'USD' },
    { countryCode: 'ae', countryName: 'United Arab Emirates', currency: 'AED' },
    { countryCode: 'gb', countryName: 'United Kingdom', currency: 'GBP' },
    { countryCode: 'us', countryName: 'United States', currency: 'USD' },
    { countryCode: 'uy', countryName: 'Uruguay', currency: 'USD' },
    { countryCode: 'uz', countryName: 'Uzbekistan', currency: 'USD' },
    { countryCode: 've', countryName: 'Venezuela', currency: 'USD' },
    { countryCode: 'vn', countryName: 'Vietnam', currency: 'VND' },
    { countryCode: 'ye', countryName: 'Yemen', currency: 'USD' },
    { countryCode: 'zw', countryName: 'Zimbabwe', currency: 'USD' },
];

export const getCurrencyFromCountryCode = (code: string) => {
    const country = countryData.find(c => c.countryCode === code);
    return country ? country.currency : null;
};

export function parseNumberWithSeparators(price: string) {
    const cleanString = price.replace(/[^0-9.,]/g, '');
    if (!cleanString) return NaN;

    const lastDot = cleanString.lastIndexOf('.');
    const lastComma = cleanString.lastIndexOf(',');

    if (lastDot === -1 || lastComma === -1) {
        const separator = lastDot > -1 ? '.' : ',';
        const parts = cleanString.split(separator);

        if (parts.length > 2) {
            return parseFloat(cleanString.replace(new RegExp(`\\${separator}`, 'g'), ''));
        }

        if (parts.length === 2) {
            const integerPart = parts[0];
            const fractionalPart = parts[1];

            if (fractionalPart.length === 3 && integerPart.length > 0) {
                return parseFloat(integerPart + fractionalPart);
            }
            if (separator === ',') {
                return parseFloat(integerPart + '.' + fractionalPart);
            }
            return parseFloat(cleanString);
        }
        return parseFloat(cleanString);
    }

    if (lastDot > lastComma) {
        return parseFloat(cleanString.replace(/,/g, ''));
    } else {
        return parseFloat(cleanString.replace(/\./g, '').replace(',', '.'));
    }
}

export const normalizePrice = (price: string) => {
    const priceLower = price.toLowerCase();

    const handleIndonesian = (keyword: string) => {
        if (priceLower.includes(keyword)) {
            const numericPart = priceLower.split(keyword)[0];
            const numberString = numericPart.replace(/\./g, '').replace(',', '.').replace(/[^0-9.]/g, '');
            const baseNumber = parseFloat(numberString);
            if (!isNaN(baseNumber)) {
                const multiplier = keyword === 'juta' ? 1000000 : 1000;
                return baseNumber * multiplier;
            }
        }
        return null;
    };

    const jutaResult = handleIndonesian('juta');
    if (jutaResult !== null) return jutaResult;

    const ribuResult = handleIndonesian('ribu');
    if (ribuResult !== null) return ribuResult;

    return parseNumberWithSeparators(price);
};

export interface ScrapedProduct {
    product: string;
    cost: number;
    countryCode: string;
    countryName: string;
    currency: string;
    subscriptionPeriod?: string | null;
    introOfferCost?: number | null;
}

export function filterHighestPriceProducts(allProducts: ScrapedProduct[]) {
    const highestPriceProducts = new Map<string, ScrapedProduct>();

    for (const product of allProducts) {
        // We group by product name and subscription period, to differentiate Monthly vs Yearly if the names are identical
        const key = `${product.countryCode}-${product.product}-${product.subscriptionPeriod || 'none'}`;
        const existing = highestPriceProducts.get(key);
        const currentCost = product.cost;

        if (isNaN(currentCost)) continue;

        if (!existing) {
            highestPriceProducts.set(key, product);
            continue;
        }

        const existingCost = existing.cost;
        if (isNaN(existingCost) || currentCost > existingCost) {
            highestPriceProducts.set(key, product);
        }
    }
    return Array.from(highestPriceProducts.values());
}

export interface GroupedProduct {
    product: string;
    currency: string;
    cost: number;
    countries: string[];
    subscriptionPeriod?: string | null;
    introOfferCost?: number | null;
}

export function groupProducts(allProducts: ScrapedProduct[]) {
    const groupedByProductAndPrice = allProducts.reduce((acc: any, item) => {
        const normalizedCost = item.cost;
        if (isNaN(normalizedCost)) return acc;

        const effectiveCurrency = getCurrencyFromCountryCode(item.countryCode) || item.currency;
        const key = `${item.product}-${effectiveCurrency}-${normalizedCost}-${item.subscriptionPeriod || 'none'}-${item.introOfferCost !== undefined && item.introOfferCost !== null ? item.introOfferCost : 'none'}`;

        if (!acc[key]) {
            acc[key] = {
                product: item.product,
                currency: effectiveCurrency,
                cost: normalizedCost,
                countries: new Set(),
                subscriptionPeriod: item.subscriptionPeriod,
                introOfferCost: item.introOfferCost,
            };
        }
        acc[key].countries.add(item.countryName);
        return acc;
    }, {});

    const finalGroupedData: Record<string, any[]> = {};
    for (const group of Object.values(groupedByProductAndPrice) as any[]) {
        if (!finalGroupedData[group.product]) {
            finalGroupedData[group.product] = [];
        }
        group.countries = Array.from(group.countries);
        finalGroupedData[group.product].push(group);
    }
    return finalGroupedData;
}