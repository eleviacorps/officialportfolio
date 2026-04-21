import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SplashCursor from "@/components/SplashCursor";
import { ClickSpark } from "@/components/effects/click-spark";
import { NoiseOverlay } from "@/components/effects/noise-overlay";
import { PageTransition } from "@/components/motion/page-transition";
import { TracingBeam } from "@/components/ui/tracing-beam";

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
  title: "Rehan Raza | AI Researcher & Automation Engineer",
  description:
    "Building intelligent systems, automation pipelines, AI research projects, web experiences, and advanced developer tooling.",
  keywords: [
    "AI Researcher",
    "Automation Engineer",
    "Full-Stack Developer",
    "Quant Systems",
    "AI Fine-tuning",
    "Developer Tools",
    "Next.js",
    "Python",
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
          <div className="relative min-h-screen w-full overflow-x-hidden bg-void">
            <SplashCursor />
            <ClickSpark />
            <NoiseOverlay />
            <TracingBeam>
              <PageTransition>
                <main className="relative z-10 w-full">{children}</main>
              </PageTransition>
            </TracingBeam>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
