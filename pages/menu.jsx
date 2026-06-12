import Link from "next/link";
import { useState } from "react";

const coffeeMenu = [
  {id:1,name:"Espresso",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a",price:120,offer:"Buy 1 Get 1 Free"},
  {id:2,name:"Cappuccino",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1534778101976-62847782c213",price:180,offer:"10% OFF"},
  {id:3,name:"Latte",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1561047029-3000c68339ca",price:200,offer:"Free Cookie"},
  {id:4,name:"Americano",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",price:150,offer:"15% OFF"},
  {id:5,name:"Mocha",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1578314675249-a6910f80cc4e",price:220,offer:"Free Brownie"},
  {id:6,name:"Flat White",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93",price:210,offer:"20% OFF"},
  {id:7,name:"Macchiato",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1511920170033-f8396924c348",price:190,offer:"Free Extra Shot"},
  {id:8,name:"Irish Coffee",category:"Special Coffee",image:"https://images.unsplash.com/photo-1512568400610-62da28bc8a13",price:280,offer:"25% OFF"},
  {id:9,name:"Cold Brew",category:"Cold Coffee",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735",price:230,offer:"Free Ice Cream Scoop"},
  {id:10,name:"Iced Latte",category:"Cold Coffee",image:"https://images.unsplash.com/photo-1517701604599-bb29b565090c",price:240,offer:"10% OFF"},
  {id:11,name:"Iced Mocha",category:"Cold Coffee",image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699",price:260,offer:"Free Chocolate Topping"},
  {id:12,name:"Frappuccino",category:"Blended Coffee",image:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",price:290,offer:"15% OFF"},
  {id:13,name:"Vanilla Latte",category:"Flavored Coffee",image:"https://images.unsplash.com/photo-1497636577773-f1231844b336",price:250,offer:"Free Vanilla Shot"},
  {id:14,name:"Caramel Macchiato",category:"Flavored Coffee",image:"https://images.unsplash.com/photo-1509785307050-d4066910ec1e",price:270,offer:"20% OFF"},
  {id:15,name:"Hazelnut Coffee",category:"Flavored Coffee",image:"https://images.unsplash.com/photo-1498804103079-a6351b050096",price:260,offer:"Free Muffin"},
  {id:16,name:"Turkish Coffee",category:"International Coffee",image:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",price:300,offer:"10% OFF"},
  {id:17,name:"Affogato",category:"Dessert Coffee",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",price:320,offer:"Free Ice Cream Upgrade"},
  {id:18,name:"Vietnamese Coffee",category:"International Coffee",image:"https://images.unsplash.com/photo-1511920170033-f8396924c348",price:280,offer:"15% OFF"},
  {id:19,name:"Pumpkin Spice Latte",category:"Seasonal Coffee",image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93",price:310,offer:"Free Cinnamon Topping"},
  {id:20,name:"Nitro Cold Brew",category:"Premium Coffee",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735",price:350,offer:"25% OFF"},
];

const categories = ["Hot Coffee", "Cold Coffee", "Blended Coffee", "Flavored Coffee", "Special Coffee"];

export default function Menu() {
  const [active, setActive] = useState("Hot Coffee");
  const filtered = coffeeMenu.filter(c => c.category === active);

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

      <div style={{ padding: "20px 40px" }}>
        <h1 style={{ textAlign: "center", color: "#5c3317", marginBottom: "20px" }}>Our Menu</h1>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{ padding: "8px 16px", borderRadius: "20px", border: "none", cursor: "pointer",
                background: active === cat ? "#5c3317" : "#eee", color: active === cat ? "white" : "black" }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {filtered.map(coffee => (
            <Link key={coffee.id} href={`/coffee/${coffee.id}`} style={{ textDecoration: "none", color: "black" }}>
              <div style={{ background: "white", borderRadius: "12px", overflow: "hidden" }}>
                <img src={coffee.image} alt={coffee.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div style={{ padding: "12px" }}>
                  <h3>{coffee.name}</h3>
                  <p>₹{coffee.price}</p>
                  <p style={{ color: "green" }}>{coffee.offer}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}