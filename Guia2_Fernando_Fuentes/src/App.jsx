import { useEffect, useState } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import { db } from "./data/db"
import Guitar from "./components/Guitar";

function App() {

  const [data, setData] = useState(db);

  const initialCart = () => {
    const localCart = localStorage.getItem('cart');
    return localCart ? JSON.parse(localCart) : [];
  }

  const [cart, setCart] = useState(initialCart());

  // automatically stores all the values when cart is modified
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <>
      <Header cart={cart} setCart={setCart}/>
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {/* Componente */}

          {data.map((guitar) => (
            <Guitar guitar={guitar} key={guitar.id} cart={cart} setCart={setCart}/>
          ))}

        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
