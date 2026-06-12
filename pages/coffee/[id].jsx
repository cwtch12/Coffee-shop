import { useRouter } from "next/router";

const coffeeMenu = [
  {id:1,name:"Espresso",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a",price:120,details:"Strong and rich coffee shot made from premium coffee beans.",offer:"Buy 1 Get 1 Free"},
  {id:2,name:"Cappuccino",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1534778101976-62847782c213",price:180,details:"Espresso with steamed milk and thick foam.",offer:"10% OFF"},
  {id:3,name:"Latte",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1561047029-3000c68339ca",price:200,details:"Smooth espresso blended with creamy milk.",offer:"Free Cookie"},
  {id:4,name:"Americano",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",price:150,details:"Espresso diluted with hot water for a milder taste.",offer:"15% OFF"},
  {id:5,name:"Mocha",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1578314675249-a6910f80cc4e",price:220,details:"Coffee blended with chocolate and steamed milk.",offer:"Free Brownie"},
  {id:6,name:"Flat White",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93",price:210,details:"Velvety microfoam with rich espresso.",offer:"20% OFF"},
  {id:7,name:"Macchiato",category:"Hot Coffee",image:"https://images.unsplash.com/photo-1511920170033-f8396924c348",price:190,details:"Espresso topped with a small amount of milk foam.",offer:"Free Extra Shot"},
  {id:8,name:"Irish Coffee",category:"Special Coffee",image:"https://images.unsplash.com/photo-1512568400610-62da28bc8a13",price:280,details:"Coffee flavored with cream and special syrup.",offer:"25% OFF"},
  {id:9,name:"Cold Brew",category:"Cold Coffee",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735",price:230,details:"Slow brewed coffee served chilled.",offer:"Free Ice Cream Scoop"},
  {id:10,name:"Iced Latte",category:"Cold Coffee",image:"https://images.unsplash.com/photo-1517701604599-bb29b565090c",price:240,details:"Chilled espresso with milk and ice cubes.",offer:"10% OFF"},
  {id:11,name:"Iced Mocha",category:"Cold Coffee",image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699",price:260,details:"Cold coffee with chocolate flavor and whipped cream.",offer:"Free Chocolate Topping"},
  {id:12,name:"Frappuccino",category:"Blended Coffee",image:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",price:290,details:"Blended iced coffee with cream and flavoring.",offer:"15% OFF"},
  {id:13,name:"Vanilla Latte",category:"Flavored Coffee",image:"https://images.unsplash.com/photo-1497636577773-f1231844b336",price:250,details:"Classic latte infused with vanilla syrup.",offer:"Free Vanilla Shot"},
  {id:14,name:"Caramel Macchiato",category:"Flavored Coffee",image:"https://images.unsplash.com/photo-1509785307050-d4066910ec1e",price:270,details:"Espresso, milk and caramel drizzle.",offer:"20% OFF"},
  {id:15,name:"Hazelnut Coffee",category:"Flavored Coffee",image:"https://images.unsplash.com/photo-1498804103079-a6351b050096",price:260,details:"Rich coffee flavored with hazelnut syrup.",offer:"Free Muffin"},
  {id:16,name:"Turkish Coffee",category:"International Coffee",image:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",price:300,details:"Traditional finely ground coffee prepared in Turkish style.",offer:"10% OFF"},
  {id:17,name:"Affogato",category:"Dessert Coffee",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",price:320,details:"Espresso poured over vanilla ice cream.",offer:"Free Ice Cream Upgrade"},
  {id:18,name:"Vietnamese Coffee",category:"International Coffee",image:"https://images.unsplash.com/photo-1511920170033-f8396924c348",price:280,details:"Strong coffee served with condensed milk.",offer:"15% OFF"},
  {id:19,name:"Pumpkin Spice Latte",category:"Seasonal Coffee",image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93",price:310,details:"Seasonal latte with pumpkin spice flavors.",offer:"Free Cinnamon Topping"},
  {id:20,name:"Nitro Cold Brew",category:"Premium Coffee",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735",price:350,details:"Cold brew infused with nitrogen for a creamy texture.",offer:"25% OFF"},
];

export default function CoffeeDetail() {
  const router = useRouter();
  const { id } = router.query;

  const coffee = coffeeMenu.find((item) => item.id === Number(id));

  if (!coffee) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial" }}>
      <img src={coffee.image} alt={coffee.name} style={{ width: "100%", borderRadius: "12px" }} />
      <h1>{coffee.name}</h1>
      <p>{coffee.details}</p>
      <p><b>Price:</b> ₹{coffee.price}</p>
      <p><b>Offer:</b> {coffee.offer}</p>
    </div>
  );
}