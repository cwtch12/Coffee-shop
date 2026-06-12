    export default function Home() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .page { background: #0a1628; color: #fff; min-height: 100vh; font-family: sans-serif; }

        nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 48px;
          background: rgba(5, 10, 25, 0.85);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .logo { font-size: 18px; font-weight: 500; }
        .nav-links { display: flex; gap: 32px; }
        .nav-links a { font-size: 14px; color: rgba(255,255,255,0.8); text-decoration: none; }
        .nav-links a:hover { color: #fff; }

        .hero {
          position: relative; min-height: 520px;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 80px 24px; overflow: hidden;
          background: radial-gradient(ellipse at 60% 40%, #0d4a35 0%, #061422 50%, #020a14 100%);
        }
        .hero h1 { font-size: 48px; font-weight: 500; margin-bottom: 16px; }
        .hero p { font-size: 18px; color: rgba(255,255,255,0.7); margin-bottom: 32px; }

        .btn {
          background: #0ca17b; color: #fff;
          border: none; border-radius: 6px;
          padding: 14px 32px; font-size: 15px;
          cursor: pointer;
        }
        .btn:hover { background: #1beb41; }

        footer {
          background: rgba(5, 10, 25, 0.9);
          padding: 16px 48px;
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 13px; color: rgba(255,255,255,0.5);
        }
        .footer-links { display: flex; gap: 24px; }
        .footer-links a { color: rgba(255,255,255,0.5); text-decoration: none; }
      `}</style>

      <div className="page">
        <nav>
          <span className="logo">FineModelAI</span>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Career</a>
          </div>
        </nav>

        <div className="hero">
          <div>
            <h1>FineModelAI</h1>
            <p>The Future of Artificial Intelligence</p>
            <button className="btn">Explore AI</button>
          </div>
        </div>

        <footer>
          <span>© 2026 FineModelAI. All rights reserved.</span>
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
        </footer>
      </div>
    </>
  )
}