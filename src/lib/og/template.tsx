import { ImageResponse } from "next/og";

export const contentType = "image/png";

/* 🔥 warna per service (lebih terang + hidup) */
const SERVICE_THEME: Record<string, any> = {
  seo: {
    bg: "linear-gradient(135deg, #020617 0%, #052e16 40%, #16a34a 100%)",
    accent: "#22c55e",
    glow: "rgba(34,197,94,0.5)",
  },
  "google-ads": {
    bg: "linear-gradient(135deg, #020617 0%, #1e3a8a 40%, #2563eb 100%)",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.5)",
  },
  "facebook-ads": {
    bg: "linear-gradient(135deg, #020617 0%, #1e40af 40%, #1d4ed8 100%)",
    accent: "#60a5fa",
    glow: "rgba(96,165,250,0.5)",
  },
  "landing-page": {
    bg: "linear-gradient(135deg, #020617 0%, #14532d 40%, #22c55e 100%)",
    accent: "#4ade80",
    glow: "rgba(74,222,128,0.5)",
  },
  "company-profile": {
    bg: "linear-gradient(135deg, #020617 0%, #134e4a 40%, #0f766e 100%)",
    accent: "#2dd4bf",
    glow: "rgba(45,212,191,0.5)",
  },
  ecommerce: {
    bg: "linear-gradient(135deg, #020617 0%, #78350f 40%, #f59e0b 100%)",
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.5)",
  },
  branding: {
    bg: "linear-gradient(135deg, #020617 0%, #581c87 40%, #a855f7 100%)",
    accent: "#c084fc",
    glow: "rgba(192,132,252,0.5)",
  },
  "management-system": {
    bg: "linear-gradient(135deg, #020617 0%, #164e63 40%, #06b6d4 100%)",
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.5)",
  },
  "social-media-management": {
    bg: "linear-gradient(135deg, #020617 0%, #831843 40%, #ec4899 100%)",
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.5)",
  },
  "video-ads": {
    bg: "linear-gradient(135deg, #020617 0%, #7f1d1d 40%, #ef4444 100%)",
    accent: "#f87171",
    glow: "rgba(248,113,113,0.5)",
  },
  default: {
    bg: "linear-gradient(135deg, #020617 0%, #052e16 40%, #16a34a 100%)",
    accent: "#22c55e",
    glow: "rgba(34,197,94,0.5)",
  },
};

type OGProps = {
  title: string;
  subtitle?: string;
  service?: string;
};

export function generateOG({ title, subtitle, service }: OGProps) {
  const theme = SERVICE_THEME[service || ""] || SERVICE_THEME.default;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background: theme.bg,
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 🔥 GLOW KANAN */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            background: theme.glow,
            borderRadius: "50%",
            filter: "blur(140px)",
            top: -150,
            right: -150,
          }}
        />

        {/* 🔥 GLOW KIRI */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            background: theme.accent,
            opacity: 0.25,
            borderRadius: "50%",
            filter: "blur(160px)",
            bottom: -150,
            left: -150,
          }}
        />

        {/* TOP */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              opacity: 0.9,
            }}
          >
            Ditelaga Creative Digital
          </div>

          <div
            style={{
              fontSize: 18,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.15)",
            }}
          >
            ⭐ Trusted
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-1px",
              textShadow: "0 6px 30px rgba(0,0,0,0.4)",
            }}
          >
            {title}
          </div>

          {subtitle && (
            <div
              style={{
                fontSize: 30,
                marginTop: 24,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div>https://ditelaga.digital</div>
          <div>🚀 Growth Partner</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}