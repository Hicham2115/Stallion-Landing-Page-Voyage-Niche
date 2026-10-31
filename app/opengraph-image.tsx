import { ImageResponse } from "next/og";

export const alt = "Stallion Advertising — Sites web, CRM et applications pour agences de voyage au Maroc";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#0a0c0d", color: "#f9faf9", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80 }}>
      <div style={{ color: "#bafc0c", fontSize: 26, marginBottom: 50 }}>STALLION ADVERTISING</div>
      <div style={{ fontSize: 68, fontWeight: 900 }}>Sites web, CRM et applications.</div>
      <div style={{ color: "#bafc0c", fontSize: 52, marginTop: 24 }}>Pour votre agence de voyage.</div>
      <div style={{ fontSize: 25, marginTop: 45 }}>Solutions sur mesure · Maroc</div>
    </div>,
    size,
  );
}
