/**
 * Scrapes In-App Purchase information from an Apple App Store page.
 */
export const getProducts = async (countryCode: string, appId: string) => {
    let nextUrl: string | null = `https://apps.apple.com/api/apps/v1/catalog/${countryCode}/apps/${appId}/view/top-in-app-purchasables?platform=iphone&offset=0`;
    const products: any[] = [];

    try {
        while (nextUrl) {
            // Ensure full URL is formed if the next link is relative
            const targetUrl: string = nextUrl.startsWith('http') ? nextUrl : `https://apps.apple.com/api/apps/v1/${nextUrl}`;

            const response = await fetch(targetUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
                },
                next: {
                    revalidate: 86400 // Cache scraped results for 24 hours via Next.js Data Cache
                }
            });

            if (!response.ok) {
                // Some regions might not have the app, break
                break;
            }

            const json = await response.json();
            const inApps = json.data;

            if (!inApps || inApps.length === 0) {
                break;
            }

            for (const item of inApps) {
                const attr = item.attributes;
                if (!attr) continue;

                const product = attr.name || attr.description?.standard;
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

            // check if there's a next link
            nextUrl = json.next || null;
        }

        return products;
    } catch (error) {
        console.error(`Failed to scrape ${nextUrl}:`, error);
        return products;
    }
};