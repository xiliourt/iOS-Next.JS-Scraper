import { NextResponse } from 'next/server';
import { countryData, filterHighestPriceProducts, groupProducts, ScrapedProduct } from '@/lib/utils';
import { getProducts } from '@/lib/scraper';

export const maxDuration = 60; // Extend Vercel timeout if possible (Pro only, but good practice)

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const appId = searchParams.get('appId');

    if (!appId) {
        return NextResponse.json({ message: 'appId is required' }, { status: 400 });
    }

    // Clean App ID (remove 'id' prefix if user included it, or ensure it has it)
    // Apple URLs usually look like .../app/id123456789
    const cleanAppId = appId.startsWith('id') ? appId : `id${appId}`;

    try {
        // Since Vercel serverless functions have limits, we'll process in parallel but with a concurrency limit
        // or just try to do them all if the timeout allows.
        // For a hobby account, 10s is tight for 150+ requests.
        // Let's try to do them in chunks.
        
        const allScrapedResults: ScrapedProduct[] = [];
        
        // We'll use a smaller subset for the demo if it's too slow, 
        // but the user asked to convert the logic which used ALL countries.
        // To avoid timeout, we might want to limit to top countries or let the user choose.
        // However, I will implement it for all and see.
        
        const CONCURRENCY_LIMIT = 20;
        const chunks: any[][] = [];
        for (let i = 0; i < countryData.length; i += CONCURRENCY_LIMIT) {
            chunks.push(countryData.slice(i, i + CONCURRENCY_LIMIT));
        }

        for (const chunk of chunks) {
            const chunkResults = await Promise.all(chunk.map(async (country) => {
                try {
                    const products = await getProducts(country.countryCode, cleanAppId);
                    return products.map(p => ({
                        ...p,
                        countryCode: country.countryCode,
                        countryName: country.countryName,
                        currency: country.currency
                    }));
                } catch (err) {
                    console.error(`Error scraping ${country.countryName}:`, err);
                    return [];
                }
            }));
            allScrapedResults.push(...chunkResults.flat());
        }

        const filteredProducts = filterHighestPriceProducts(allScrapedResults);
        const groupedData = groupProducts(filteredProducts);

        return NextResponse.json(groupedData);

    } catch (error: any) {
        console.error('Scraping failed:', error);
        return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
    }
}
