import { useEffect, useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json"


function App() {
  const [money, setMoney] = useState(2310424320000)
  const [basket, setBasket] = useState([])

  useEffect(() => {
    console.log(basket)
  }, [basket])

  return (
    <section  >
      <Header money={money} />
      {
        products.map(product => (
          <Product key={product.id} product={product} basket={basket} setBasket={setBasket} />
        ))
      }
    </section>
  );
}

export default App;
