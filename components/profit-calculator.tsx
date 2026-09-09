"use client";

import { useMemo, useState } from "react";
import { track } from "@vercel/analytics";

const fields = [
  ["sale", "Item sale price", "45.00"],
  ["shippingCharged", "Shipping charged to buyer", "0.00"],
  ["fees", "Marketplace + payment fees", "5.20"],
  ["productCost", "Product / materials cost", "12.00"],
  ["packaging", "Packaging", "1.50"],
  ["shippingCost", "Your shipping cost", "4.80"],
  ["ads", "Ads / marketing allocated to order", "0.00"],
  ["other", "Other order costs", "0.00"],
] as const;

type Key = typeof fields[number][0];

export function ProfitCalculator() {
  const [values, setValues] = useState<Record<Key, string>>(() => Object.fromEntries(fields.map(([k,,v]) => [k,v])) as Record<Key,string>);
  const number = (k: Key) => Math.max(0, Number.parseFloat(values[k]) || 0);
  const result = useMemo(() => {
    const revenue = number("sale") + number("shippingCharged");
    const costs = number("fees") + number("productCost") + number("packaging") + number("shippingCost") + number("ads") + number("other");
    const profit = revenue - costs;
    const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
    return { revenue, costs, profit, margin };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  function update(key: Key, value: string) { setValues((v) => ({ ...v, [key]: value })); }

  return (
    <div className="calculator-shell mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-[1fr_.82fr]">
      <div className="calculator-panel p-6 sm:p-8">
        <div className="mb-6"><p className="text-xs font-semibold uppercase tracking-[.18em] text-white/34">Order economics</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.04em]">Enter your numbers</h2></div>
        <div className="grid gap-4 sm:grid-cols-2">{fields.map(([key,label]) => <label className="calculator-field" key={key}><span>{label}</span><div className="calculator-input-wrap"><span>$</span><input inputMode="decimal" value={values[key]} onChange={(e)=>update(key,e.target.value)} aria-label={label}/></div></label>)}</div>
      </div>
      <div className="calculator-result p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-white/34">Estimated result</p>
        <div className="mt-7"><span className="text-sm text-white/42">Real profit</span><p className={`mt-1 text-5xl font-semibold tracking-[-.06em] ${result.profit < 0 ? "text-red-300" : "text-white"}`}>${result.profit.toFixed(2)}</p><p className="mt-2 text-sm text-white/42">{result.margin.toFixed(1)}% profit margin</p></div>
        <div className="mt-8 space-y-4 border-t border-white/[.07] pt-6"><CalcRow label="Revenue" value={result.revenue}/><CalcRow label="Total costs" value={result.costs}/><CalcRow label="Profit" value={result.profit} strong/></div>
        <button className="secondary-button mt-8 w-full justify-center" type="button" onClick={()=>track("profit_calculator_used", { margin: Math.round(result.margin) })}>Save this insight</button>
        <p className="mt-3 text-center text-xs leading-5 text-white/26">No account required. Seller Studio will automate this across your orders.</p>
      </div>
    </div>
  );
}

function CalcRow({ label, value, strong=false }: { label:string; value:number; strong?:boolean }) {
  return <div className="flex items-center justify-between"><span className={strong ? "font-medium text-white/78" : "text-white/40"}>{label}</span><strong className={strong ? "text-white" : "text-white/70"}>${value.toFixed(2)}</strong></div>;
}
