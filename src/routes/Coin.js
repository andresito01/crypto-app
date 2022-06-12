import React from "react";
import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    console.log(id);
    Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
      (response) => {
        console.log(response.data);
        setCoin(response.data);
      }
    );

    // eslint-disable-next-line
  }, []);

  if (coin) {
    return (
      <div className="header-container">
        <h1>{coin.name}</h1>
      </div>
    );
  }
};

export default Coin;
