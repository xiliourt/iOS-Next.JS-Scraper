import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'iOS Regional Pricing Scraper',
  description: 'iOS Regional Pricing Scraper',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
      <Footer git="https://github.com/xiliourt/iOS-Next.JS-Scraper" />
    </html>
  );
}
