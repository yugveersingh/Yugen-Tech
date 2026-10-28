import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";
import { workflow } from "@/config/dronzer";
import { cn } from "@/lib/utils";

const PHASES = [
  { name: "Data", steps: [0, 1, 2] },
  { name: "Research", steps: [3, 4, 5] },
  { name: "Decision & review", steps: [6, 7, 8] },
];

export function Workflow() {
  return (
    <Section
      id="workflow"
      index="03"
      label="Research workflow"
      title="Nine stages. Two of them are a person."
      intro="The machine does the collection, validation and analysis. The decision and the order stay with a human. A stage that fails stops everything after it."
    >
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-0">
        {PHASES.map((phase, p) => (
          <div key={phase.name} className={cn(p > 0 && "lg:border-l lg:border-line-subtle lg:pl-8", p < 2 && "lg:pr-8")}>
            <p className="label mb-5 flex items-center gap-3">
              <span className="h-px w-6 bg-crimson" aria-hidden />
              {phase.name}
            </p>
            <ol className="flex flex-col gap-3">
              {phase.steps.map((i) => {
                const step = workflow[i];
                const isHuman = step.status === "manual";
                return (
                  <li
                    key={step.title}
                    className={cn(
                      "rounded-lg border p-5 transition-colors",
                      isHuman
                        ? "border-crimson/35 bg-crimson-soft"
                        : "border-line-subtle bg-surface hover:border-line"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-mono text-xs text-crimson-bright tabular">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <StatusBadge status={step.status} label={isHuman ? "Human" : undefined} />
                    </div>
                    <h3 className="mt-3 font-medium text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{step.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
