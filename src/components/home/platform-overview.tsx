import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";
import { capabilities } from "@/config/dronzer";

export function PlatformOverview() {
  return (
    <Section
      id="platform"
      index="01"
      label="Platform"
      title="One decision pipeline, from raw data to reviewed trade."
      intro="Dronzer is decision support, not an autopilot. Each stage below has a single job and a clear status. None of the trading pipeline is live yet."
    >
      <ol className="border-b border-line-subtle">
        {capabilities.map((c, i) => (
          <li
            key={c.title}
            className="grid gap-3 border-t border-line-subtle py-7 transition-colors hover:bg-surface/50 md:grid-cols-[64px_minmax(0,1fr)_minmax(0,1.5fr)_150px] md:gap-8 md:px-2"
          >
            <span className="font-mono text-sm text-ink-3 tabular">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-lg font-medium text-ink">{c.title}</h3>
            <div>
              <p className="text-[15px] leading-relaxed text-ink-2">{c.body}</p>
              {c.meta && <p className="mt-2 font-mono text-xs text-ink-3">{c.meta}</p>}
            </div>
            <div className="md:text-right">
              <StatusBadge status={c.status} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
