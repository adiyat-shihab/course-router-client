import "./App.css";
import { Cards } from "./Component/Cards.jsx";
import { Cart } from "./Component/Cart.jsx";

function App() {
  return (
    <div className={"bg-[#F3F3F3] pt-[3.13rem]"}>
      <h1 className={"text-center text-[2rem] font-bold  mb-8"}>
        Course Registration
      </h1>
      <div>
        <Cards></Cards>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
