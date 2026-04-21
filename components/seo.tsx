"use client";

import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
}

export function SEO({
  title,
  description = "19-year-old AI researcher and automation engineer from India. Building intelligent systems, automation pipelines, AI research projects, and web experiences.",
  keywords = [],
  ogImage = "/og-image.png",
  noindex = false,
}: SEOProps) {
  const fullTitle = title ? `${title} | Rehan Raza` : "Rehan Raza | AI Researcher & Automation Engineer";
  const fullKeywords = [
    "Rehan Raza",
    "AI Researcher",
    "Automation Engineer",
    "Full-Stack Developer",
    "Quant Systems",
    "AI Fine-tuning",
    "Developer Tools",
    "Next.js",
    "Python",
    "Web Development",
    "Machine Learning",
    ...keywords,
  ].join(", ");

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content="Rehan Raza" />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Rehan Raza Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@itz_rez785" />
      <meta name="twitter:creator" content="@itz_rez785" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="color-scheme" content="dark" />
      <link rel="canonical" href="https://elenev.vercel.app" />
    </Head>
  );
}
