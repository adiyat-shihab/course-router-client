import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { Card } from "./Card.jsx";

export const Cards = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("../../public/course.json")
      .then((data) => data.json())
      .then((mainData) => setCard(mainData));
  }, []);

  return (
    <div className={"px-[3.75rem]"}>
      <div className="grid grid-cols-3 gap-6 ">
        {card.map((data) => (
          <Card data={data}></Card>
        ))}
      </div>
    </div>
  );
};
