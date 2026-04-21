import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import SplashCursor from "@/components/SplashCursor";
import { ClickSpark } from "@/components/effects/click-spark";
import { NoiseOverlay } from "@/components/effects/noise-overlay";
import { AnimatedBackground, FloatingParticles } from "@/components/effects/animated-background";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://elenev.vercel.app"),
  title: {
    default: "Rehan Raza | AI Researcher & Automation Engineer",
    template: "%s | Rehan Raza",
  },
  description:
    "19-year-old AI researcher and automation engineer from India. Building intelligent systems, automation pipelines, AI research projects, web experiences, and advanced developer tooling.",
  keywords: [
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
    "Nexus AI",
    "Project RT",
    "Portfolio",
  ],
  authors: [{ name: "Rehan Raza" }],
  creator: "Rehan Raza",
  publisher: "Rehan Raza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elenev.vercel.app",
    siteName: "Rehan Raza - AI Researcher & Automation Engineer",
    title: "Rehan Raza | AI Researcher & Automation Engineer",
    description:
      "19-year-old AI researcher and automation engineer from India. Building intelligent systems, automation pipelines, and AI research projects.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rehan Raza - AI Researcher & Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@itz_rez785",
    creator: "@itz_rez785",
    title: "Rehan Raza | AI Researcher & Automation Engineer",
    description:
      "19-year-old AI researcher and automation engineer from India. Building intelligent systems and AI research projects.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://elenev.vercel.app",
    languages: {
      "en-US": "https://elenev.vercel.app",
    },
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-void text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Global Effects - Visible on all pages */}
          <SplashCursor />
          <ClickSpark />
          <NoiseOverlay />
          <AnimatedBackground />
          <FloatingParticles />

          {/* Navigation */}
          <Navigation />

          {/* Page Content - No transitions to ensure reliable navigation */}
          <main className="relative z-10">
            {children}
          </main>

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Rehan Raza",
                jobTitle: "AI Researcher & Automation Engineer",
                url: "https://elenev.vercel.app",
                sameAs: [
                  "https://github.com/eleviacorps",
                  "https://linkedin.com/in/elenviacious",
                  "https://instagram.com/itz_rez785",
                ],
                worksFor: {
                  "@type": "Organization",
                  name: "Independent",
                },
                knowsAbout: [
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Automation",
                  "Web Development",
                  "Python",
                  "Next.js",
                  "React",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "India",
                },
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
