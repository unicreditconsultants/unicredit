import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata = {
  title: "Unicredit | Leading Bank Loan Consultants",
  description: "We have a comprehensive range of financial products to craft the perfect solution for your unique needs.",
  keywords: "Unicredit, loans, bank, consultants, personal loan, home loan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
