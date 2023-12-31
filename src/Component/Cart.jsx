import { useEffect, useState } from "react";

export const Cart = ({ title, totalTime, totalPrice, remaining }) => {
  return (
    <>
      <div className={"lg:w-[19.5rem] p-6 bg-white h-fit rounded-xl"}>
        <h1 className={"mb-4 text-[1.125rem] text-[#2F80ED] font-bold"}>
          Credit Hour Remaining {remaining} hr
        </h1>
        <hr />
        <h1 className={"mt-4 mb-[1.31rem] text-xl font-bold"}>Course Name</h1>
        <ol className={"mb-6 leading-[1.875rem] text-[#1c1b1b99]"}>
          {title.map((data, idx) => (
            <li key={idx} className={"flex gap-1"}>
              <span>{idx + 1}</span> {data}
            </li>
          ))}
        </ol>
        <hr />
        <p className={"mb-4 mt-4 font-medium"}>
          Total Credit Hour : {totalTime}
        </p>
        <hr />
        <p className={"mt-4 font-semibold"}>Total Price : {totalPrice} USD</p>
      </div>
    </>
  );
};
