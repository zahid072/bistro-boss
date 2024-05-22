import React from "react";

const PopularMenuCard = ({ menu }) => {
  const { image, name, price, recipe } = menu;
  return (
    <div className="flex gap-4 p-2 border">
      <img className="size-20 rounded-r-full rounded-b-full" src={image} alt="" />
      <div>
        <div className="flex justify-between mb-3"><h1 className="text-xl font-semibold">{name} --------------</h1> <p className="font-semibold text-yellow-400">${price}</p></div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default PopularMenuCard;
