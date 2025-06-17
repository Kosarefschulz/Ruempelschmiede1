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
      const url = pathname + (searchParams.toString() ? '?' + searchParams.toString() : '');
      
      // Track page view with enhanced parameters
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: url,
        anonymize_ip: true,
        custom_parameters: {
          page_type: getPageType(pathname),
          content_group1: getContentGroup(pathname)
        }
      });
      
      // Track scroll depth
      let maxScroll = 0;
      const handleScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          trackScrollDepth(scrollPercent);
        }
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      // Track time on page
      const startTime = Date.now();
      const handleUnload = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (window.gtag && timeOnPage > 10) {
          window.gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            value: timeOnPage,
            custom_parameters: {
              page_path: pathname,
              time_seconds: timeOnPage
            }
          });
        }
      };
      
      window.addEventListener('beforeunload', handleUnload);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('beforeunload', handleUnload);
      };
    }
  }, [pathname, searchParams]);
  
  const getPageType = (path: string): string => {
    if (path === '/') return 'homepage';
    if (path.startsWith('/artikel')) return 'article';
    if (path.startsWith('/leistungen')) return 'service';
    if (path === '/kontakt') return 'contact';
    if (path === '/preise') return 'pricing';
    return 'other';
  };
  
  const getContentGroup = (path: string): string => {
    if (path.startsWith('/artikel')) return 'ratgeber';
    if (path.startsWith('/leistungen')) return 'services';
    if (path === '/kontakt' || path === '/preise') return 'conversion';
    return 'navigation';
  };

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
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              cookie_flags: 'SameSite=Strict;Secure',
              cookie_expires: 63072000, // 2 years
              custom_map: {
                'dimension1': 'service_type',
                'dimension2': 'location',
                'dimension3': 'referral_source'
              }
            });
            
            // Enhanced ecommerce for lead tracking
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              custom_parameter: true
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

// Enhanced event trackers for business analytics
export const trackContactFormSubmit = (service?: string, location?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'Contact',
      event_label: service || 'General',
      custom_parameters: {
        service_type: service,
        location: location,
        lead_source: 'website_form'
      }
    });
    
    // Enhanced ecommerce event
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/lead_conversion`
    });
  }
};

export const trackPhoneClick = (phoneNumber: string, source?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'call_initiated', {
      event_category: 'Contact',
      event_label: 'Phone',
      custom_parameters: {
        phone_number: phoneNumber,
        source_page: window.location.pathname,
        interaction_source: source || 'button'
      }
    });
  }
};

export const trackWhatsAppClick = (source?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_initiated', {
      event_category: 'Contact',
      event_label: 'WhatsApp',
      custom_parameters: {
        source_page: window.location.pathname,
        interaction_source: source || 'floating_button'
      }
    });
  }
};

export const trackServiceView = (serviceName: string, location?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      event_category: 'Service',
      event_label: serviceName,
      custom_parameters: {
        service_type: serviceName,
        location: location
      }
    });
  }
};

export const trackArticleRead = (articleTitle: string, category: string, readTime?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'article_read', {
      event_category: 'Content',
      event_label: articleTitle,
      custom_parameters: {
        article_category: category,
        estimated_read_time: readTime
      }
    });
  }
};

export const trackPriceCalculation = (service: string, price: number, location?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'price_calculated', {
      event_category: 'Calculator',
      event_label: service,
      value: price,
      custom_parameters: {
        service_type: service,
        location: location,
        calculated_price: price
      }
    });
  }
};

export const trackScrollDepth = (percentage: number) => {
  if (typeof window !== 'undefined' && window.gtag && percentage >= 25) {
    window.gtag('event', 'scroll', {
      event_category: 'Engagement',
      event_label: `${percentage}%`,
      custom_parameters: {
        scroll_depth: percentage,
        page_path: window.location.pathname
      }
    });
  }
};