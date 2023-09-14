import "./App.css";
import { Cards } from "./Component/Cards.jsx";
import { Cart } from "./Component/Cart.jsx";
import { useState } from "react";

function App() {
  const [dataForCart, setdataForCart] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCart = (dataCart) => {
    const { title, credit, price } = dataCart;
    const isAvailable = dataForCart.find((data) => title === data);
    if (isAvailable) {
      return;
    } else {
      setdataForCart([...dataForCart, title]);
    }

    setTotalTime(totalTime + credit);
    setTotalPrice(totalPrice + price);
  };
  return (
    <div className={"bg-[#F3F3F3] pt-[3.13rem]"}>
      <h1 className={"text-center text-[2rem] font-bold  mb-8"}>
        Course Registration
      </h1>
      <div className={"flex justify-center  "}>
        <Cards handleCart={handleCart}></Cards>
        <Cart
          title={dataForCart}
          totalTime={totalTime}
          totalPrice={totalPrice}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
