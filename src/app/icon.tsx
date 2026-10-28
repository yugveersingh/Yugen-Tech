import { ImageResponse } from "next/og";
import { BrandMark } from "@/components/brand/logo";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#08090b", borderRadius: 7 }}>
        <BrandMark size={28} />
      </div>
    ),
    size
  );
}
