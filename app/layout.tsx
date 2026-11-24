import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Wilder Miranda | Analista de Dados",
  description:
    "Wilder Miranda, Analista de Dados. Portfólio com projetos em SQL, Python, Power BI e Excel.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body className="font-[family-name:var(--font-geist)] text-[0.95rem] sm:text-[0.92rem] text-[#555555] bg-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}