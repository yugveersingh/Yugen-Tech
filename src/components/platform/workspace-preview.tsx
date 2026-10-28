import { Inbox } from "lucide-react";
import { BrandMark } from "@/components/brand/logo";
import { StatusBadge } from "@/components/ui/status-badge";
import { dashboardModules, preTradeChecks, systemStatus } from "@/config/dronzer";
import { cn } from "@/lib/utils";

/*
 * Frontend-only preview of the future Dronzer workspace.
 * It deliberately renders no market values, signals or order controls:
 * there is no backend, broker connection or data feed behind it.
 */

const chainColumns = ["CE OI", "CE IV", "CE LTP", "Strike", "PE LTP", "PE IV", "PE OI"];
const contextRows = ["NIFTY 50", "NIFTY BANK"];

export function WorkspacePreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface lg:grid lg:grid-cols-[228px_minmax(0,1fr)]">
      <Sidebar />
      <div className="min-w-0 border-line-subtle p-5 sm:p-8 lg:border-l">
        <header className="flex flex-col gap-4 border-b border-line-subtle pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label">Workspace</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Overview</h1>
          </div>
          <p className="font-mono text-xs text-ink-3">Session: not available · Data as of: not available</p>
        </header>

        <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line-subtle bg-line-subtle sm:grid-cols-2 xl:grid-cols-5">
          {systemStatus.map((s) => (
            <div key={s.label} className="bg-surface-raised p-4">
              <dt className="label text-[10px]">{s.label}</dt>
              <dd className="mt-3">
                <StatusBadge status={s.status} label={s.value} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <Panel title="Option research" note="NIFTY 50 · CE / PE">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-right font-mono text-xs">
                <caption className="sr-only">Option chain (no data available)</caption>
                <thead>
                  <tr className="border-b border-line-subtle text-ink-3">
                    {chainColumns.map((c) => (
                      <th
                        key={c}
                        scope="col"
                        className={cn("px-3 py-2.5 font-medium", c === "Strike" && "bg-surface-hover text-center text-ink-2")}
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={chainColumns.length} className="p-0">
                      <Empty
                        title="Option chain unavailable"
                        body="Market data is not connected. Strikes, prices and open interest will appear here once the data pipeline is live."
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Panel>

          <Panel title="Market context" note="Context only">
            <ul className="divide-y divide-line-subtle">
              {contextRows.map((r) => (
                <li key={r} className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm text-ink">{r}</span>
                  <span className="font-mono text-xs text-ink-3">No feed</span>
                </li>
              ))}
              <li className="flex items-center justify-between px-5 py-4">
                <span className="text-sm text-ink">Session regime</span>
                <span className="font-mono text-xs text-ink-3">Not classified</span>
              </li>
            </ul>
          </Panel>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <Panel title="Signal review">
            <Empty title="No signals" body="The signal engine is not running. Nothing here is a trading recommendation." />
          </Panel>

          <Panel title="Pre-trade risk checks" note="Manual approval required">
            <ul className="divide-y divide-line-subtle">
              {preTradeChecks.map((c) => (
                <li key={c} className="flex items-center justify-between gap-4 px-5 py-3">
                  <span className="text-sm text-ink-2">{c}</span>
                  <StatusBadge status="planned" label="Not evaluated" />
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="mt-6">
          <Panel title="Trade journal">
            <Empty title="No entries" body="Trades are executed manually outside Dronzer. Reviews will be journaled here once the journal is built." />
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="border-b border-line-subtle bg-background/40 lg:border-b-0">
      <div className="hidden items-center gap-2.5 border-b border-line-subtle px-5 py-4 lg:flex">
        <BrandMark className="h-6 w-6" />
        <span className="text-[13px] font-medium tracking-[0.14em] text-ink">WORKSPACE</span>
      </div>
      <nav aria-label="Workspace modules" className="overflow-x-auto">
        <ul className="flex gap-1 p-3 lg:flex-col">
          {dashboardModules.map((m, i) => {
            const isActive = i === 0;
            return (
              <li key={m} className="shrink-0">
                <span
                  aria-current={isActive ? "page" : undefined}
                  aria-disabled={isActive ? undefined : true}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-md px-3 py-2 text-[13px]",
                    isActive
                      ? "bg-surface-hover text-ink shadow-[inset_2px_0_0_#ad2632]"
                      : "cursor-not-allowed text-ink-3"
                  )}
                >
                  {m}
                  {!isActive && <span className="hidden font-mono text-[9px] uppercase tracking-wider text-ink-3/70 lg:inline">Planned</span>}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

function Panel({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="overflow-hidden rounded-lg border border-line-subtle bg-surface-raised/50">
      <header className="flex items-center justify-between gap-3 border-b border-line-subtle px-5 py-3">
        <h2 className="text-sm font-medium text-ink">{title}</h2>
        {note && <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">{note}</span>}
      </header>
      {children}
    </section>
  );
}

function Empty({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col items-center px-6 py-12 text-center font-sans">
      <Inbox aria-hidden className="h-5 w-5 text-ink-3" />
      <p className="mt-3 text-sm font-medium text-ink-2">{title}</p>
      <p className="mt-1 max-w-sm text-[13px] leading-relaxed text-ink-3">{body}</p>
    </div>
  );
}
