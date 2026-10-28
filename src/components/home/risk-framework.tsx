import { Section } from "@/components/ui/section";
import { principles } from "@/config/dronzer";

export function RiskFramework() {
  return (
    <Section
      id="risk"
      index="04"
      label="Risk framework"
      title="The rules come before the model."
      intro="These are the principles the platform is being built around. They describe intent and design, not features that have already been validated in production."
    >
      <ol className="grid overflow-hidden rounded-xl border border-line-subtle bg-line-subtle gap-px sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((p, i) => (
          <li key={p.title} className="group bg-background p-7 transition-colors hover:bg-surface">
            <span className="font-mono text-xs text-ink-3 tabular transition-colors group-hover:text-crimson-bright">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-medium text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
