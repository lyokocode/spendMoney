import { useEffect, useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json"


function App() {

  const getLocalStorage = () => {
    let basket = localStorage.getItem("basket");
    if (basket) {
      return JSON.parse(localStorage.getItem("basket"))
    } else {
      return []
    }
  }



  const [money, setMoney] = useState(2310424320000)
  const [basket, setBasket] = useState(getLocalStorage())
  const [total, setTotal] = useState(0)




  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket))

    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * products.find(product => product.id === item.id).price)
    }, 0))
  }, [basket])

  const resetBasket = () => {
    setBasket([])
  }

  return (
    <section  >
      <Header money={money} total={total} />
      <div className="container products" >
        {
          products.map(product => (
            <Product key={product.id} product={product} basket={basket} setBasket={setBasket} total={total} money={money} />
          ))
        }
      </div>
      {
        total > 0 &&
        <Basket basket={basket} products={products} total={total} resetBasket={resetBasket} />
      }
    </section>
  );
}

export default App;
