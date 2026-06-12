import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: "#f5efe6", minHeight: "100vh", fontFamily: "Georgia, serif" }}>

      {/* Navbar */}
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
        <Link href="/menu">
          <button style={{ background: "#5c3317", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontSize: "16px" }}>
            Order Now
          </button>
        </Link>
      </nav>

      {/* Hero */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "60px 40px" }}>
        <div style={{ maxWidth: "500px" }}>
          <p style={{ color: "#5c3317", fontWeight: "bold" }}>☕ Your Coffee Journey Starts Here</p>
          <h1 style={{ fontSize: "52px", color: "#2c1a0e", lineHeight: "1.2", margin: "10px 0" }}>
            Try once<br />
            <span style={{ color: "#5c3317" }}>Get addicted</span>
          </h1>
          <p style={{ color: "#666", margin: "20px 0" }}>Start your day with our delicious coffee made from the finest beans.</p>
          <Link href="/menu">
            <button style={{ background: "#5c3317", color: "white", border: "none", padding: "14px 28px", borderRadius: "8px", cursor: "pointer", fontSize: "16px" }}>
              Explore Menu
            </button>
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="coffee"
          style={{ width: "45%", borderRadius: "16px", objectFit: "cover", height: "420px" }}
        />
      </div>

    </div>
  );
}