import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  schema
}) => {
  const siteTitle = "SRI JAYARAMA CONSTRUCTION PVT.LTD";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || "Building dreams since 1996. SRI JAYARAMA CONSTRUCTION PVT.LTD offers premium apartments, villas, and plots in Mahabubnagar.";
  const metaKeywords = keywords || "construction, real estate, apartments, villas, plots, Mahabubnagar, Telangana, SRI JAYARAMA CONSTRUCTION";
  const metaImage = image || "https://sriramalandmark.com/og-image.jpg"; // Replace with actual default OG image URL
  const metaUrl = url || "https://sriramalandmark.com";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
