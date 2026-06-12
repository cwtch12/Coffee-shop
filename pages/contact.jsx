import Link from "next/link";

export default function Contact() {
  return (
    <div style={{ fontFamily: "Arial", background: "#f5efe6", minHeight: "100vh" }}>

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "28px" }}>☕</span>
          <span style={{ fontSize: "22px", fontWeight: "bold", color: "#5c3317" }}>Farrago of Coffee</span>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#5c3317" }}>Home</Link>
          <Link href="/menu" style={{ textDecoration: "none", color: "#5c3317" }}>Menu</Link>
          <Link href="/contact" style={{ textDecoration: "none", color: "#5c3317" }}>Contact</Link>
        </div>
      </nav>

      <div style={{ padding: "60px 40px", textAlign: "center" }}>
        <h1 style={{ color: "#5c3317", fontSize: "42px" }}>Find Us ☕</h1>
        <p style={{ fontSize: "18px", color: "#888" }}>We brewed it, you just have to show up.</p>
      </div>

      <div style={{ background: "#3b1f0e", padding: "60px 80px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "40px" }}>

        <div style={{ maxWidth: "250px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span style={{ fontSize: "24px" }}>☕</span>
            <span style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>Farrago of Coffee</span>
          </div>
          <p style={{ color: "#ccc", lineHeight: "1.8" }}>
            Try once, feel nice. Try twice, suffice. Try numerous times... well, you live here now. 😄
          </p>
        </div>

        <div>
          <h3 style={{ color: "white", marginBottom: "16px" }}>Quick Links</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="/" style={{ textDecoration: "none", color: "#ccc" }}>Home</Link>
            <Link href="/menu" style={{ textDecoration: "none", color: "#ccc" }}>Menu</Link>
            <Link href="/contact" style={{ textDecoration: "none", color: "#ccc" }}>Contact</Link>
          </div>
        </div>

        <div>
          <h3 style={{ color: "white", marginBottom: "16px" }}>Contact</h3>
          <p style={{ color: "#ccc" }}>📍 Neend Wadi, Maharashtra</p>
          <p style={{ color: "#ccc" }}>✉️ hello@farragocoffee.com</p>
        </div>

        <div>
          <h3 style={{ color: "white", marginBottom: "16px" }}>Follow Us</h3>
          <div style={{ display: "flex", gap: "16px", fontSize: "28px" }}>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>

      </div>

      <div style={{ background: "#2a1508", padding: "20px", textAlign: "center" }}>
        <p style={{ color: "#aaa" }}>© 2026 Farrago of Coffee. All Rights Reserved.</p>
      </div>

    </div>
  );
}