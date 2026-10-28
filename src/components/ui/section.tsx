import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  index?: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

/**
 * Home-page section with an editorial header: numbered mono label on the
 * left rail, title and intro on the right. Collapses to one column on mobile.
 */
export function Section({ id, index, label, title, intro, className, children }: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("border-t border-line-subtle py-20 sm:py-28", className)}
    >
      <div className="container">
        <header className="grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-12">
          <p className="label pt-2">
            {index && <span className="mr-3 text-crimson-bright">{index}</span>}
            {label}
          </p>
          <div className="max-w-3xl">
            <h2
              id={headingId}
              className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]"
            >
              {title}
            </h2>
            {intro && (
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-2 sm:text-lg">
                {intro}
              </p>
            )}
          </div>
        </header>
        <div className="mt-14 lg:mt-16">{children}</div>
      </div>
    </section>
  );
}
