import { NextResponse } from 'next/server';
import { countryData, filterHighestPriceProducts, groupProducts, ScrapedProduct } from '@/lib/utils';
import { getProducts } from '@/lib/scraper';

export const maxDuration = 60; 

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
        
        const allScrapedResults: ScrapedProduct[] = [];
        
        const CONCURRENCY_LIMIT = 50;
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
