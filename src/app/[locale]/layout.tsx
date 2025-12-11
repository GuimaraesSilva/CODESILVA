import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
// import NavBar from "@/components/NavBar/NavBar";
// import Header from "@/components/Header/Header";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Web Developer",
  description: "Showcasing my work as a web developer",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${jost.variable} antialiased custom-bg min-h-screen font-sans text-white`}
      >        
        <NextIntlClientProvider locale={locale}>
          {/* <Header />
          <NavBar /> */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
