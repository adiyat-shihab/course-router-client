import "./App.css";
import { Cards } from "./Component/Cards.jsx";
import { Cart } from "./Component/Cart.jsx";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [dataForCart, setdataForCart] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [credit, setCredit] = useState(0);
  const [reamaining, setRemaining] = useState(20);

  const handleCart = (dataCart) => {
    const { title, credit, price } = dataCart;
    const isAvailable = dataForCart.find((data) => title === data);
    if (totalTime === 20) {
      return toast.error("You are reach 20 hour");
    } else if (reamaining <= 0 || credit > reamaining) {
      return toast.error("Opps! You haven't enough Credit ");
    } else {
      if (isAvailable) {
        return toast.success("Already Selected");
      } else {
        setdataForCart([...dataForCart, title]);
      }
      setCredit(credit);
      setTotalTime(totalTime + credit);
      setTotalPrice(totalPrice + price);
    }
  };
  const handleTime = (time) => {
    if (time < 0) {
      return;
    } else {
      setRemaining(time);
    }
  };
  useEffect(() => {
    const time = reamaining - credit;
    handleTime(time);
    console.log(time);
  }, [totalTime]);
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
          remaining={reamaining}
        ></Cart>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
