import type { Status } from "@/config/dronzer";
import { cn } from "@/lib/utils";

const STYLES: Record<Status, { label: string; dot: string; text: string }> = {
  done: { label: "Complete", dot: "bg-success", text: "text-success" },
  "in-progress": { label: "In progress", dot: "bg-warning", text: "text-warning" },
  planned: { label: "Planned", dot: "border border-ink-3 bg-transparent", text: "text-ink-3" },
  "not-connected": { label: "Not connected", dot: "border border-ink-3 bg-transparent", text: "text-ink-3" },
  "not-running": { label: "Not running", dot: "border border-ink-3 bg-transparent", text: "text-ink-3" },
  disabled: { label: "Disabled", dot: "bg-crimson-bright", text: "text-crimson-bright" },
  manual: { label: "Manual", dot: "bg-ink-2", text: "text-ink-2" },
};

interface StatusBadgeProps {
  status: Status;
  /** Override the default label, e.g. "Manual approval required". */
  label?: string;
  className?: string;
}

/** Status always carries a text label; colour is never the only signal. */
export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const s = STYLES[status];
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em]",
        s.text,
        className
      )}
    >
      <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
      {label ?? s.label}
    </span>
  );
}
