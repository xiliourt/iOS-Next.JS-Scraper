# Instant deploy with vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fxiliourt%2FiOS-Next.JS-Scraper)

Updated code to use an open API JSON endpoint - it now uses <1s CPU/call and caches outgoing requests on Vercel.

# Plans
- Bulk scraping and build a backend database cache
  - Retrive top 200 apps:
  - ```
     curl http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topfreeapplications/limit=200/offset=2/json | jq '.feed.entry[].id.attributes["im:id"]'
    ```
  - Run through scraper, scraping all available inApps from top 200
  - Cache in database
- Database queries
  - Biggest savings on all inApps TRY vs selected currency
  - Biggest savings on category of inApps TRY vs selected currency
  - Etc
