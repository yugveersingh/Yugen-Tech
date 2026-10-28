import { Section } from "@/components/ui/section";

const stack = [
  "Python",
  "pandas · NumPy",
  "Parquet · DuckDB",
  "PostgreSQL",
  "TimescaleDB, where justified",
  "scikit-learn",
  "LightGBM, where appropriate",
  "Experiment tracking",
];

const outOfScope = ["Single equities", "Commodities", "Crypto", "Global futures"];

export function ResearchScope() {
  return (
    <Section
      id="research"
      index="02"
      label="Research scope"
      title="Narrow by design."
      intro="One instrument, studied properly, before anything else is added. The scope only grows when the roadmap's phase gates are passed."
    >
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <article className="relative overflow-hidden rounded-xl border border-line bg-surface p-8 sm:p-10">
          <div aria-hidden className="absolute inset-y-0 left-0 w-px bg-crimson" />
          <p className="label text-crimson-bright">Primary instrument</p>
          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            NIFTY 50 index options
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line-subtle bg-line-subtle">
            {[
              ["CE", "Call options"],
              ["PE", "Put options"],
            ].map(([code, name]) => (
              <div key={code} className="bg-surface-raised p-5">
                <p className="font-mono text-2xl text-ink">{code}</p>
                <p className="mt-1 text-sm text-ink-3">{name}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-2">
            Both sides are studied with the same data, features and risk checks. Neither is
            favoured by default.
          </p>
        </article>

        <div className="grid gap-4">
          <article className="rounded-xl border border-line bg-surface p-7">
            <p className="label">Context input</p>
            <h3 className="mt-4 text-xl font-semibold text-ink">NIFTY BANK</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
              Read as market context only, where the research design justifies it. It is not a
              traded instrument.
            </p>
          </article>
          <article className="rounded-xl border border-line-subtle p-7">
            <p className="label">Out of scope for now</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {outOfScope.map((s) => (
                <li key={s} className="rounded border border-line-subtle px-2.5 py-1 text-[13px] text-ink-3 line-through decoration-ink-3/50">
                  {s}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-line-subtle pt-8 md:flex-row md:items-baseline md:gap-10">
        <p className="label shrink-0">Planned research stack</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-ink-2">
          {stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
