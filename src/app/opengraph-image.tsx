import { ImageResponse } from "next/og";
import { BrandMark } from "@/components/brand/logo";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 90px",
          gap: 70,
          background: "#08090b",
          borderBottom: "6px solid #ad2632",
          color: "#f0eff1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#d8424f" }}>NIFTY 50 OPTIONS INTELLIGENCE</div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: 14, marginTop: 28 }}>
            DRONZER<span style={{ color: "#d8424f", marginLeft: 28 }}>AI</span>
          </div>
          <div style={{ fontSize: 34, color: "#aaa9b0", marginTop: 26 }}>Market intelligence. Disciplined decisions.</div>
          <div style={{ fontSize: 17, color: "#83838c", marginTop: 46, letterSpacing: 2 }}>
            RESEARCH PROJECT · IN DEVELOPMENT · NO LIVE TRADING
          </div>
        </div>
        <BrandMark size={340} />
      </div>
    ),
    size
  );
}
