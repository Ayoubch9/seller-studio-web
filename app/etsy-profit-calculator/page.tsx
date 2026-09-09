import type { Metadata } from "next";
import { Header } from "@/components/header";
import { ProfitCalculator } from "@/components/profit-calculator";

export const metadata: Metadata = {
  title: "Free Etsy Profit Calculator",
  description: "Estimate your Etsy order profit and margin after fees, product costs, packaging, shipping, ads and other expenses.",
  alternates: { canonical: "/etsy-profit-calculator" },
};

export default function CalculatorPage() {
  return (
    <main id="top" className="site-shell min-h-screen overflow-hidden">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <Header />
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Free seller tool</p>
          <h1 className="mt-5 text-balance text-5xl font-semibold leading-[.98] tracking-[-.06em] sm:text-7xl">Etsy Profit Calculator</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">See what a sale leaves behind after marketplace fees, product cost, packaging, shipping, ads and other expenses.</p>
        </div>
        <ProfitCalculator />
        <div className="calculator-note mx-auto mt-8 max-w-4xl rounded-2xl p-5 text-sm leading-6 text-white/38">
          This calculator is an estimation tool. Enter the marketplace fees that apply to your own account and transaction. Actual Etsy fees can vary by country, payment setup, advertising and other factors.
        </div>
        <div className="mt-14 text-center"><p className="text-sm text-white/36">Calculating one order is useful. Calculating every order automatically is Seller Studio.</p><a className="primary-button mt-5" href="/#early-access">Join Seller Studio early access →</a></div>
      </section>
    </main>
  );
}
