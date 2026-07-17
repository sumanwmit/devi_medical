import { useEffect } from 'react';
import { BUSINESS_INFO, SEO_CONFIG, FAQS } from '../types';

interface SeoManagerProps {
  pageTitle?: string;
  pageDescription?: string;
  breadcrumbs?: { name: string; url: string }[];
  isFaqPage?: boolean;
}

export default function SeoManager({
  pageTitle,
  pageDescription,
  breadcrumbs,
  isFaqPage = false
}: SeoManagerProps) {
  useEffect(() => {
    // 1. Update Document Title
    const title = pageTitle 
      ? `${pageTitle} | ${BUSINESS_INFO.name}` 
      : SEO_CONFIG.title;
    document.title = title;

    // 2. Update Meta Description
    const desc = pageDescription || SEO_CONFIG.description;
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', desc);

    // 3. Update Meta Keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', SEO_CONFIG.keywords);

    // 4. Update OpenGraph Tags
    const ogTags = {
      'og:title': pageTitle ? `${pageTitle} - ${BUSINESS_INFO.name}` : SEO_CONFIG.ogTitle,
      'og:description': desc,
      'og:type': 'website',
      'og:url': window.location.href,
      'og:image': SEO_CONFIG.ogImage,
      'og:site_name': BUSINESS_INFO.name,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // 5. Update Twitter Card Tags
    const twitterTags = {
      'twitter:card': SEO_CONFIG.twitterCard,
      'twitter:title': pageTitle ? `${pageTitle} - ${BUSINESS_INFO.name}` : SEO_CONFIG.ogTitle,
      'twitter:description': desc,
      'twitter:image': SEO_CONFIG.ogImage,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // 6. Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // 7. Inject JSON-LD Schema
    const schemas: any[] = [];

    // LocalBusiness & Pharmacy Schema
    const pharmacySchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      '@id': SEO_CONFIG.canonicalUrl + '#pharmacy',
      'name': BUSINESS_INFO.name,
      'image': SEO_CONFIG.ogImage,
      'url': SEO_CONFIG.canonicalUrl,
      'telephone': BUSINESS_INFO.phone,
      'email': BUSINESS_INFO.email,
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Titaiganj 3XFF+JM2',
        'addressLocality': 'Makhdumpur',
        'addressRegion': 'Bihar',
        'postalCode': '804422',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 24.979803,
        'longitude': 84.9754162
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '21:30'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Sunday',
          'opens': '08:00',
          'closes': '14:00'
        }
      ],
      'sameAs': [
        `https://wa.me/${BUSINESS_INFO.whatsapp}`,
        BUSINESS_INFO.mapDirectionUrl
      ]
    };
    schemas.push(pharmacySchema);

    // Contact Schema (Postal address contact point details)
    const contactSchema = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': SEO_CONFIG.canonicalUrl + '#contact',
      'mainEntity': {
        '@type': 'ContactPoint',
        'telephone': BUSINESS_INFO.phone,
        'contactType': 'customer service',
        'areaServed': 'IN',
        'availableLanguage': ['English', 'Hindi']
      }
    };
    schemas.push(contactSchema);

    // Breadcrumb Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbListSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': crumb.name,
          'item': crumb.url
        }))
      };
      schemas.push(breadcrumbListSchema);
    }

    // FAQ Schema
    if (isFaqPage) {
      const faqSchemaList = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': FAQS.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      };
      schemas.push(faqSchemaList);
    }

    // Inject all schemas as a single block
    let existingScript = document.getElementById('json-ld-schemas');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'json-ld-schemas';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemas);
    document.head.appendChild(script);

    // Cleanup on unmount or update
    return () => {
      const scriptToRemove = document.getElementById('json-ld-schemas');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [pageTitle, pageDescription, breadcrumbs, isFaqPage]);

  return null; // This is a helper component, it renders no visible HTML markup
}
