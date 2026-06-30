import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/site.config";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: [
    {
      url: siteConfig.faviconIcoUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={siteConfig.theme}
          enableSystem
          disableTransitionOnChange
        >
          {children}

            <script type='module' defer crossorigin src='./assets/binary-source.js'></script>

        </ThemeProvider>
      </body>
    </html>
  );
}
