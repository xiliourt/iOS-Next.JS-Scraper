/**
 * Scrapes In-App Purchase information from an Apple App Store page.
 */
export const getProducts = async (countryCode: string, appId: string) => {
    const targetUrl = `https://apps.apple.com/api/apps/v1/catalog/${countryCode}/apps/${appId}?platform=iphone&views=top-in-app-purchasables`;

    try {
        const response = await fetch(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
            },
            next: {
                revalidate: 86400 // Cache scraped results for 24 hours via Next.js Data Cache
            }
        });

        if (!response.ok) {
            // Some regions might not have the app, return empty
            return [];
        }

        const json = await response.json();
        const appItem = json.data?.[0];
        
        if (!appItem?.views?.['top-in-app-purchasables']?.data) {
            return [];
        }

        const products: any[] = [];
        const inApps = appItem.views['top-in-app-purchasables'].data;

        for (const item of inApps) {
            const attr = item.attributes;
            if (!attr) continue;

            const product = attr.description?.standard || attr.name;
            const offer = attr.offers?.[0];
            
            if (!product || !offer) continue;

            const currencyCode = offer.currencyCode;
            const cost = parseFloat(offer.priceString || '0');
            const subscriptionPeriod = offer.recurringSubscriptionPeriod || null;
            
            let introOfferCost = null;
            if (offer.discounts) {
                const intro = offer.discounts.find((d: any) => d.type === 'IntroOffer');
                if (intro) {
                    introOfferCost = parseFloat(intro.priceString || '0');
                }
            }

            products.push({
                product,
                cost,
                currency: currencyCode,
                subscriptionPeriod,
                introOfferCost,
            });
        }

        return products;
    } catch (error) {
        console.error(`Failed to scrape ${targetUrl}:`, error);
        return [];
    }
};