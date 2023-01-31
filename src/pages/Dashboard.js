import React from 'react';
import {Link} from "react-router-dom";

const Dashboard = ({stock}) => {
  return (
    <div>
      {stock.map((stock) => (
        // <div key={stock.name}>
        //   <div>{stock.name}</div>
        //   <div>{stock.lastPrice}</div>
        //   <div>{stock.change}</div>
        // </div>
        <ul>
          
            <Link to={`${stock.stock}`} key={stock.stock}>
              <li>{stock.name}</li>
            </Link>
     
        </ul>
      ))}
    </div>
  );
}

export default Dashboard

