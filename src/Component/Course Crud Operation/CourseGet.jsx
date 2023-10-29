import { useContext } from "react";
import { authContext } from "../AuthProvider.jsx";

export const CourseGet = () => {
  const { data } = useContext(authContext);
  console.log(data);
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={data?.data?.imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data?.data?.courseName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
