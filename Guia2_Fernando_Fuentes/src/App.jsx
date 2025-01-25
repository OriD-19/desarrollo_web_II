import { useState } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import { db } from "./data/db"
import Guitar from "./components/Guitar";

function App() {

  const [data, setData] = useState(db);
  console.log(data);

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {/* Componente */}

          {data.map((guitar) => (
            <Guitar guitar={guitar} />
          ))}

        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
