const sparkBars = [38, 47, 42, 61, 55, 73, 67, 86, 76, 94, 82, 100];

export function DashboardPreview() {
  return (
    <div className="dashboard-frame relative overflow-hidden rounded-[1.7rem] p-[1px] sm:rounded-[2.1rem]">
      <div className="dashboard-inner rounded-[calc(1.7rem-1px)] p-3 sm:rounded-[calc(2.1rem-1px)] sm:p-5">
        <div className="flex items-center justify-between px-2 pb-4 sm:px-3 sm:pb-5">
          <div className="flex items-center gap-2">
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="window-dot" />
          </div>
          <div className="hidden rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-xs text-white/36 sm:block">
            Willow &amp; Co. · September 2026
          </div>
          <div className="avatar">WC</div>
        </div>

        <div className="dashboard-grid rounded-[1.35rem] border border-white/[0.055] bg-[#080d1d]/82 p-4 sm:p-6 lg:p-7">
          <div className="mb-5 flex items-end justify-between gap-4 sm:mb-7">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/30">Dashboard</p>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">Good morning, Willow &amp; Co.</h3>
            </div>
            <span className="hidden text-xs text-white/30 sm:inline">Updated just now</span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <MetricCard label="Revenue" value="$8,426.40" hint="+12.4%" />
            <MetricCard label="Real profit" value="$5,284.10" hint="+8.7%" highlight />
            <MetricCard label="Profit margin" value="62.7%" hint="Healthy" />
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.55fr_0.9fr]">
            <div className="mini-card p-4 sm:p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-white/35">Profit performance</p>
                  <p className="mt-1 text-sm font-medium text-white/76">Last 30 days</p>
                </div>
                <span className="text-xs text-white/30">$5.2k</span>
              </div>
              <div className="mt-8 flex h-28 items-end gap-1.5 sm:gap-2">
                {sparkBars.map((height, index) => (
                  <span
                    key={index}
                    className="chart-bar flex-1 rounded-t-md"
                    style={{ height: `${Math.max(18, height)}%`, opacity: 0.38 + index * 0.04 }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-white/22">
                <span>Aug 10</span><span>Aug 20</span><span>Sep 08</span>
              </div>
            </div>

            <div className="mini-card p-4 sm:p-5">
              <p className="text-xs text-white/35">At a glance</p>
              <div className="mt-5 space-y-5">
                <TinyMetric label="Orders" value="184" />
                <TinyMetric label="Average order" value="$45.80" />
                <TinyMetric label="Total costs" value="$3,142" />
              </div>
            </div>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Insight label="Top profit product" value="Watercolor Wedding Crest" stat="$2,967" />
            <Insight label="Largest cost" value="Product materials" stat="$1,327" />
            <Insight label="Pilot insight" value="Margin improved this week" stat="+3.2%" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, hint, highlight = false }: { label: string; value: string; hint: string; highlight?: boolean }) {
  return (
    <div className={`mini-card p-4 sm:p-5 ${highlight ? "metric-highlight" : ""}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-white/35">{label}</p>
        <span className="metric-hint">{hint}</span>
      </div>
      <p className="mt-5 text-xl font-semibold tracking-[-0.045em] text-white sm:text-2xl">{value}</p>
    </div>
  );
}

function TinyMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-end justify-between border-b border-white/[0.055] pb-4 last:border-0 last:pb-0">
      <p className="text-xs text-white/35">{label}</p>
      <p className="text-sm font-medium text-white/78">{value}</p>
    </div>
  );
}

function Insight({ label, value, stat }: { label: string; value: string; stat: string }) {
  return (
    <div className="mini-card flex items-center justify-between gap-4 p-4">
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.13em] text-white/25">{label}</p>
        <p className="mt-1 truncate text-xs font-medium text-white/62">{value}</p>
      </div>
      <span className="shrink-0 text-xs font-semibold text-white/82">{stat}</span>
    </div>
  );
}
