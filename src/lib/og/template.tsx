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
          padding: "64px",
          background: "#020617",
          color: "white",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* === GRID BACKGROUND === */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* === GLOW 1 === */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            background: "#10b981",
            opacity: 0.12,
            filter: "blur(160px)",
            top: -200,
            left: -200,
            borderRadius: "50%",
          }}
        />

        {/* === GLOW 2 === */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            background: "#22d3ee",
            opacity: 0.08,
            filter: "blur(180px)",
            bottom: -200,
            right: -200,
            borderRadius: "50%",
          }}
        />

        {/* === TOP BAR === */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img
              src="https://ditelaga.digital/og-image-public.jpg"
              width="40"
              height="40"
              style={{ borderRadius: 12 }}
            />
            <span style={{ fontSize: 24, fontWeight: 600 }}>
              Ditelaga Digital
            </span>
          </div>

          {/* Glass Badge */}
          <div
            style={{
              fontSize: 16,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
            }}
          >
            ⭐ Trusted by 100+ Clients
          </div>
        </div>

        {/* === CONTENT === */}
        <div
          style={{
            maxWidth: 820,
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              background:
                "linear-gradient(90deg, #ffffff 0%, #a7f3d0 50%, #67e8f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{
                fontSize: 28,
                marginTop: 28,
                color: "#94a3b8",
                maxWidth: 700,
                lineHeight: 1.5,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* === FOOTER === */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            color: "#64748b",
            zIndex: 2,
          }}
        >
          <span>https://ditelaga.digital</span>
          <span style={{ color: "#facc15" }}>
            🚀 Digital Growth Partner
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}