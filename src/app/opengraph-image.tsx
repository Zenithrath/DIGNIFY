import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Dignify — Digital Studio. Digital systems built with clarity.";

export default async function OgImage() {
  const [anton] = await Promise.all([
    readFile(join(process.cwd(), "src/app/assets/fonts/Anton-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0B0B",
          color: "#F3F1EC",
          padding: 56,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            borderTop: "180px solid #F3F1EC",
            borderLeft: "180px solid transparent",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #2A2A2A", paddingBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", width: 40, height: 40, border: "1px solid #F3F1EC", position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: 10,
                  top: 9,
                  width: 6,
                  height: 22,
                  backgroundColor: "#F3F1EC",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 16,
                  top: 9,
                  width: 15,
                  height: 22,
                  backgroundColor: "#F3F1EC",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 31,
                  top: 31,
                  width: 4,
                  height: 4,
                  backgroundColor: "#10B981",
                }}
              />
            </div>
            <span style={{ fontFamily: "Anton", fontSize: 34, letterSpacing: 2 }}>DIGNIFY</span>
          </div>
          <span style={{ fontFamily: "Anton", color: "#9C9C94", fontSize: 16, letterSpacing: 3 }}>DIGITAL STUDIO</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingTop: 24 }}>
          <div style={{ display: "flex", fontFamily: "Anton", fontSize: 92, lineHeight: 1.08, letterSpacing: 1 }}>
            <span>DIGITAL SYSTEMS</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", fontFamily: "Anton", fontSize: 92, lineHeight: 1.08, letterSpacing: 1, marginTop: 8 }}>
            <span style={{ backgroundColor: "#10B981", color: "#0B0B0B", padding: "0 14px", marginRight: 16 }}>BUILT</span>
            <span>WITH CLARITY.</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid #2A2A2A", paddingTop: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontFamily: "Anton", color: "#9C9C94", fontSize: 15, letterSpacing: 2 }}>FOUNDED BY DIJE + IGNAS</span>
            <span style={{ fontFamily: "Anton", color: "#10B981", fontSize: 15, letterSpacing: 2 }}>DESIGN · DEVELOP · AUTOMATE</span>
          </div>
          <span style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Anton", color: "#10B981", fontSize: 15, letterSpacing: 2 }}>
            SYS / 01
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Anton", data: anton, style: "normal", weight: 400 },
      ],
    },
  );
}

