"use client";  // This makes it a Client Component

import { useEffect } from "react";
import { usePathname } from "next/navigation";  // Replacing useRouter with usePathname
import Script from 'next/script'; // For adding gtag.js

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID; // Google Analytics ID from environment variable

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Replacing useRouter with usePathname for App Router

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    handleRouteChange(pathname); // Call handleRouteChange on first render
  }, [pathname]);

  return (
    <>
      {/* Google Analytics Script */}
      {GA_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {children}
    </>
  );
}
