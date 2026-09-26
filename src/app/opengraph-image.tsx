import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "DitM — Software, AI i automatyzacje dla firm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image() {
  const logo = await readFile(
    path.join(process.cwd(), "public/brand/ditm-logo.svg"),
    "base64",
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#F5F7FA",
          color: "#0F172A",
          padding: "52px 70px",
          justifyContent: "space-between",
        }}
      >
        {/* Use the same corrected DM geometry as the navigation and favicon. */}
        <img
          src={`data:image/svg+xml;base64,${logo}`}
          width={250}
          height={97}
          alt="DitM"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1.08,
          }}
        >
          <span>Dobry kod.</span>
          <span>Mniej pracy.</span>
          <span style={{ color: "#2F6BFF" }}>Więcej możliwości.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 23,
            borderTop: "1px solid #CBD5E1",
            paddingTop: 24,
            justifyContent: "space-between",
          }}
        >
          <span>Software · AI · Automatyzacje</span>
          <span>DitM</span>
        </div>
      </div>
    ),
    size,
  );
}
