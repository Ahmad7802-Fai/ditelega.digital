import { ImageResponse } from "next/og";

type OGProps = {
  title: string;
  subtitle?: string;
};

export function generateOG({ title, subtitle }: OGProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background:
            "linear-gradient(135deg, #020617, #022c22, #064e3b)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* ================= BACKGROUND GLOW ================= */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            background: "#22c55e",
            opacity: 0.2,
            filter: "blur(120px)",
            top: -120,
            left: -120,
            borderRadius: "50%",
          }}
        />

        {/* ================= TOP (LOGO + BADGE) ================= */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* 🔥 LOGO + BRAND */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <img
              src="https://ditelaga.digital/og-image-public.jpg"
              width="42"
              height="42"
              style={{
                objectFit: "contain",
              }}
            />

            <span
              style={{
                fontSize: 26,
                fontWeight: 600,
              }}
            >
              Ditelaga Digital
            </span>
          </div>

          {/* 🔥 TRUST BADGE */}
          <div
            style={{
              fontSize: 18,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(34,197,94,0.15)",
              border: "1px solid rgba(34,197,94,0.4)",
            }}
          >
            ⭐ Trusted by 100+ Clients
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div
          style={{
            maxWidth: 900,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 🔥 TITLE */}
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>

          {/* 🔥 SUBTITLE */}
          {subtitle && (
            <p
              style={{
                fontSize: 28,
                marginTop: 24,
                opacity: 0.85,
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* ================= FOOTER ================= */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            opacity: 0.7,
          }}
        >
          <span>ditelaga.digital</span>

          <span>🚀 Digital Growth Partner</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}