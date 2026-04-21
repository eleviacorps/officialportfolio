import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { ClickSpark } from "@/components/effects/click-spark";
import { NoiseOverlay } from "@/components/effects/noise-overlay";
import { PageTransition } from "@/components/motion/page-transition";

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

export const metadata: Metadata = {
  title: "Alex Chen | Creative Developer & AI Engineer",
  description:
    "Awwwards-worthy portfolio showcasing premium web experiences, AI solutions, and interactive digital art.",
  keywords: [
    "developer",
    "portfolio",
    "react",
    "next.js",
    "AI",
    "web development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative min-h-screen overflow-x-hidden bg-void">
            <CustomCursor />
            <ClickSpark />
            <NoiseOverlay />
            <Navigation />
            <PageTransition>
              <main className="relative z-10">{children}</main>
            </PageTransition>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
