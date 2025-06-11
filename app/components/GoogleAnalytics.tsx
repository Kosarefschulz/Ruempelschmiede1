'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: { [key: string]: any }
    ) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && window.gtag) {
      const url = pathname + searchParams.toString();
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: url,
        anonymize_ip: true,
      });
    }
  }, [pathname, searchParams]);

  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}

// Event tracking helper functions
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific event trackers
export const trackContactFormSubmit = (service?: string) => {
  trackEvent('generate_lead', 'Contact', service || 'General');
};

export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('click', 'Contact', 'Phone', undefined);
  trackEvent('contact', 'engagement', phoneNumber);
};

export const trackWhatsAppClick = () => {
  trackEvent('click', 'Contact', 'WhatsApp');
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('view_item', 'Service', serviceName);
};