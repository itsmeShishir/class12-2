import React from "react";

function Card({img, title, body}) {
  return (
    <div className="w-[400px] h-[600px] border-2 border-gray-200 ">
        <img className="w-[400px]  object-cover" src={img} alt="" />
        <h2 className="p-2 font-bold text-3xl ">{title}</h2>
        <p className="p-2 text-gray-600">
            {body}
        </p>
        <a href="#" className="p-2 text-red-600"> Read More</a>
    </div>
  );
}

export default Card;
