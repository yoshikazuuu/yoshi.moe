import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNavbar } from "@/components/floating-navbar";
import { LayoutTransition } from "@/components/layout-transition";

export const metadata: Metadata = {
  title: "Jerry Febriano",
  description:
    "Your average comp-sci undergraduate that addicted to black theme.",
  openGraph: {
    url: "https://yoshi.moe",
    siteName: "Jerry Febriano",
    images: [
      {
        url: "https://www.yoshi.moe/yoshi_og.png",
        width: 1200,
        height: 630,
      },
      {
        url: "https://www.yoshi.moe/yoshi_og.png",
        width: 1200,
        height: 630,
        alt: "og",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutTransition
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </LayoutTransition>
          <FloatingNavbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
