import React from "react";

const Stock = ({ stock }) => {
  console.log(stock);

  return (
    <div>
      {stock.map((stock) => (
        <div key={stock.name}>
          <div>{stock.name}</div>
          <div>{stock.lastPrice}</div>
          <div>{stock.change}</div>
        </div>
      ))}
    </div>
  );
};

export default Stock;
