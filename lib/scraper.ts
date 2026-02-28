import * as cheerio from 'cheerio';

/**
 * Scrapes In-App Purchase information from an Apple App Store page.
 */
export const getProducts = async (countryCode: string, appId: string) => {
    const targetUrl = `https://apps.apple.com/${countryCode}/app/${appId}`;

    try {
        const response = await fetch(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) {
            // Some regions might not have the app, return empty
            return [];
        }

        const html = await response.text();
        const $ = cheerio.load(html);
        const products: { product: string; cost: string }[] = [];

        $('.text-pair').each((_, element) => {
            const spans = $(element).find('span');
            if (spans.length >= 2) {
                const product = $(spans[0]).text().trim();
                const cost = $(spans[1]).text().trim();
                if (product && cost) {
                    products.push({ product, cost });
                }
            }
        });

        return products;
    } catch (error) {
        console.error(`Failed to scrape ${targetUrl}:`, error);
        return [];
    }
};
