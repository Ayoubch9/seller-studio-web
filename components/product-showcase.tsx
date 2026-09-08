"use client";

import { useState } from "react";

const tabs = [
  { id: "dashboard", label: "Dashboard" },
  { id: "products", label: "Products" },
  { id: "analytics", label: "Analytics" },
  { id: "orders", label: "Orders" },
] as const;

type Tab = typeof tabs[number]["id"];

export function ProductShowcase() {
  const [tab, setTab] = useState<Tab>("dashboard");

  return (
    <div className="product-showcase">
      <div className="product-tabs" role="tablist" aria-label="Seller Studio product views">
        {tabs.map((item) => (
          <button key={item.id} className={tab === item.id ? "product-tab active" : "product-tab"} onClick={() => setTab(item.id)} type="button">
            {item.label}
          </button>
        ))}
      </div>

      <div className="product-window" key={tab}>
        {tab === "dashboard" && <DashboardView />}
        {tab === "products" && <ProductsView />}
        {tab === "analytics" && <AnalyticsView />}
        {tab === "orders" && <OrdersView />}
      </div>
    </div>
  );
}

function DashboardView() {
  return <div className="screen-grid">
    <ScreenMetric label="Revenue" value="$8,426.40" meta="+12.4%" />
    <ScreenMetric label="Real profit" value="$5,284.10" meta="+8.7%" active />
    <ScreenMetric label="Profit margin" value="62.7%" meta="Healthy" />
    <div className="screen-panel screen-chart lg:col-span-2">
      <div className="screen-panel-head"><div><span>Profit performance</span><strong>Last 30 days</strong></div><strong>$5.2k</strong></div>
      <div className="line-chart"><svg viewBox="0 0 640 190" preserveAspectRatio="none"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="currentColor" stopOpacity=".26"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs><path className="area" d="M0,152 C45,142 68,126 108,130 C157,135 174,92 223,101 C272,111 288,70 335,79 C381,88 406,47 453,65 C505,85 529,30 584,45 C612,52 627,29 640,21 L640,190 L0,190 Z"/><path className="line" d="M0,152 C45,142 68,126 108,130 C157,135 174,92 223,101 C272,111 288,70 335,79 C381,88 406,47 453,65 C505,85 529,30 584,45 C612,52 627,29 640,21"/></svg></div>
    </div>
    <div className="screen-panel">
      <div className="screen-panel-head"><div><span>At a glance</span><strong>Shop health</strong></div></div>
      <MiniRow label="Orders" value="184" /><MiniRow label="Avg. order" value="$45.80" /><MiniRow label="Total costs" value="$3,142" />
    </div>
  </div>;
}

function ProductsView() {
  const rows = [
    ["Watercolor Wedding Crest", "$4,826", "$2,967", "68%"],
    ["Invitation Suite", "$2,140", "$1,006", "47%"],
    ["Floral Monogram", "$1,036", "$742", "71%"],
  ];
  return <div className="screen-panel product-table-wrap">
    <div className="screen-panel-head"><div><span>Products</span><strong>Profitability by product</strong></div><span className="screen-pill">Last 30 days</span></div>
    <div className="product-table">
      <div className="product-tr product-th"><span>Product</span><span>Revenue</span><span>Profit</span><span>Margin</span></div>
      {rows.map((r, i) => <div className="product-tr" key={r[0]}><span><i className="product-thumb">{i + 1}</i>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><span className={i === 1 ? "margin medium" : "margin"}>{r[3]}</span></div>)}
    </div>
  </div>;
}

function AnalyticsView() {
  return <div className="screen-grid analytics-grid">
    <ScreenMetric label="Revenue" value="$8.4k" meta="+12.4%" /><ScreenMetric label="Profit" value="$5.28k" meta="+8.7%" active /><ScreenMetric label="Costs" value="$3.14k" meta="+18.1%" />
    <div className="screen-panel lg:col-span-2"><div className="screen-panel-head"><div><span>Revenue vs. profit</span><strong>September</strong></div><span className="screen-pill">30D</span></div><div className="bar-analytics">{[32,46,41,58,50,68,61,76,71,84,79,92].map((h,i)=><div className="analytics-bar" key={i}><i style={{height:`${h}%`}}/><b style={{height:`${Math.max(18,h-23)}%`}}/></div>)}</div></div>
    <div className="screen-panel"><div className="screen-panel-head"><div><span>Cost mix</span><strong>$3,142</strong></div></div><CostBar label="COGS" value="42%" width="42%"/><CostBar label="Fees" value="20%" width="20%"/><CostBar label="Shipping" value="17%" width="17%"/><CostBar label="Other" value="21%" width="21%"/></div>
  </div>;
}

function OrdersView() {
  const orders = [["#4938","Watercolor Wedding Crest","$125.00","$77.10"],["#4937","Invitation Suite","$84.00","$39.48"],["#4936","Floral Monogram","$52.00","$36.92"]];
  return <div className="screen-panel product-table-wrap"><div className="screen-panel-head"><div><span>Orders</span><strong>Every order, fully costed</strong></div><span className="screen-pill">184 this month</span></div><div className="orders-list">{orders.map((o,i)=><div className="order-row" key={o[0]}><div><span className="order-id">{o[0]}</span><strong>{o[1]}</strong></div><div><span>Sale</span><strong>{o[2]}</strong></div><div><span>Profit</span><strong>{o[3]}</strong></div><div className="order-status">{i===1 ? "47% margin" : "62% margin"}</div></div>)}</div></div>;
}

function ScreenMetric({label,value,meta,active=false}:{label:string;value:string;meta:string;active?:boolean}) { return <div className={active ? "screen-metric active" : "screen-metric"}><div><span>{label}</span><em>{meta}</em></div><strong>{value}</strong></div> }
function MiniRow({label,value}:{label:string;value:string}) { return <div className="mini-row"><span>{label}</span><strong>{value}</strong></div> }
function CostBar({label,value,width}:{label:string;value:string;width:string}) { return <div className="cost-row"><div><span>{label}</span><strong>{value}</strong></div><i><b style={{width}}/></i></div> }
