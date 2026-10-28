/**
 * Product content and implementation status for Dronzer AI.
 *
 * Every status here must reflect what is actually built. Only the
 * infrastructure items are confirmed; everything in the trading pipeline is
 * planned. Update this file (not the components) as phases complete.
 */

export type Status =
  | "done"
  | "in-progress"
  | "planned"
  | "not-connected"
  | "not-running"
  | "disabled"
  | "manual";

export interface Item {
  title: string;
  body: string;
  status: Status;
  meta?: string;
}

export const capabilities: Item[] = [
  {
    title: "Market context",
    body: "A session-level read of NIFTY 50 trend, volatility and NIFTY BANK context before any option contract is considered.",
    status: "planned",
  },
  {
    title: "Data ingestion & quality checks",
    body: "Historical and intraday data collected, checked for gaps, stale ticks and outliers, then stored for reproducible research.",
    status: "planned",
    meta: "Parquet · DuckDB · PostgreSQL",
  },
  {
    title: "Quantitative features",
    body: "Price, volatility, open-interest and term-structure features generated from validated data only.",
    status: "planned",
    meta: "pandas · NumPy",
  },
  {
    title: "Model inference & evaluation",
    body: "Models evaluated out-of-sample against preregistered thresholds, with every run versioned and tracked.",
    status: "planned",
    meta: "scikit-learn · LightGBM",
  },
  {
    title: "Risk filtering",
    body: "Explicit limits on size, loss and data freshness, plus slippage and transaction-cost estimates, applied before anything reaches review.",
    status: "planned",
  },
  {
    title: "Human review & manual execution",
    body: "Each candidate is reviewed against a pre-trade checklist. Orders are placed manually, outside Dronzer.",
    status: "manual",
  },
  {
    title: "Post-trade review",
    body: "Outcomes, slippage and decision quality journaled and fed back into research, including discipline and psychology notes.",
    status: "planned",
  },
];

export const workflow: Item[] = [
  { title: "Market data ingestion", body: "Collect NIFTY 50 index, option chain and NIFTY BANK context data.", status: "planned" },
  { title: "Data validation", body: "Reject gaps, stale quotes and outliers before anything downstream sees them.", status: "planned" },
  { title: "Feature engineering", body: "Derive reproducible features from validated data only.", status: "planned" },
  { title: "Regime & context analysis", body: "Classify the session: trend, range, volatility expansion or event risk.", status: "planned" },
  { title: "Model evaluation & research", body: "Out-of-sample tests against preregistered thresholds and phase gates.", status: "planned" },
  { title: "Risk checks", body: "Size, loss, freshness, slippage and cost limits. A failed check stops the candidate.", status: "planned" },
  { title: "Human review", body: "A person works through the pre-trade checklist and approves or rejects.", status: "manual" },
  { title: "Manual execution", body: "Orders are placed by hand with the broker. Dronzer never submits orders.", status: "manual" },
  { title: "Post-trade analysis", body: "Journal, slippage review and feedback into the next research cycle.", status: "planned" },
];

export const principles: { title: string; body: string }[] = [
  { title: "Data quality first", body: "No feature, model or signal runs on data that has not passed validation." },
  { title: "Explicit risk limits", body: "Position size, daily loss and exposure limits are written down before trading, not after." },
  { title: "Reproducible research", body: "Every result can be rebuilt from versioned data, code and configuration." },
  { title: "Experiment tracking", body: "Every run is logged with its parameters, data window and outcome, including the failures." },
  { title: "Statistical validation", body: "Preregistered hypotheses, tolerances and out-of-sample tests, with phase gates that are not relaxed." },
  { title: "Model-version awareness", body: "Every decision records which model version and feature set produced it." },
  { title: "Cost & slippage realism", body: "Spreads, slippage and transaction costs are modelled, not ignored." },
  { title: "Manual approval", body: "Nothing executes without a person approving it against a checklist." },
  { title: "Post-trade review", body: "Each trade is reviewed for process quality, not just profit or loss." },
];

export const milestones: { group: string; items: Item[] }[] = [
  {
    group: "Infrastructure",
    items: [
      { title: "Cloud VM provisioned", body: "Google Cloud compute instance created.", status: "done" },
      { title: "Static IPv4 reserved", body: "Reserved and verified as the server's outbound address.", status: "done" },
      { title: "Base server packages", body: "Operating system and base tooling installed.", status: "done" },
      { title: "Application environment", body: "Runtime, storage and service configuration being prepared.", status: "in-progress" },
    ],
  },
  {
    group: "Research platform",
    items: [
      { title: "Market data pipeline", body: "Ingestion, validation and storage.", status: "planned" },
      { title: "Feature & research store", body: "Reproducible feature generation and historical research.", status: "planned" },
      { title: "Model evaluation & tracking", body: "Experiments, validation and phase gates.", status: "planned" },
      { title: "Risk checks & checklist", body: "Pre-trade limits and review workflow.", status: "planned" },
    ],
  },
  {
    group: "Connectivity",
    items: [
      { title: "Broker API", body: "Not configured. No authenticated broker requests are made.", status: "not-connected" },
      { title: "Live trading", body: "Disabled. This project does not place orders.", status: "disabled" },
    ],
  },
];

export const dashboardModules = [
  "Overview",
  "Market Context",
  "Option Research",
  "Signal Review",
  "Risk Checks",
  "Experiments",
  "Trade Journal",
  "Data Health",
  "Settings",
] as const;

export const systemStatus: { label: string; status: Status; value: string }[] = [
  { label: "Market data", status: "not-connected", value: "Not connected" },
  { label: "Broker API", status: "not-connected", value: "Not connected" },
  { label: "Signal engine", status: "not-running", value: "Not running" },
  { label: "Execution mode", status: "manual", value: "Manual approval required" },
  { label: "Last data update", status: "not-connected", value: "Not available" },
];

export const preTradeChecks = [
  "Data freshness within tolerance",
  "Daily loss limit not breached",
  "Position size within limit",
  "Spread and slippage estimate acceptable",
  "Model and feature-set version recorded",
  "Event calendar reviewed",
  "Manual approval recorded",
] as const;
