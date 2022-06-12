import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import Axios from "axios";
import Refresh from "../images/refresh.png";

const Home = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getCoinRequest = () => {
    Axios.get(url).then((response) => {
      console.log(response.data);
      setCoins(response.data);
    });
  };

  useEffect(() => {
    getCoinRequest();
  }, []);

  return (
    <div className="App">
      <div className="header-container">
        <h1>Welcome to the CryptoChecker</h1>
        <div className="button-container">
          <input placeholder="Search for a Coin" type="text" />
          <img
            onClick={getCoinRequest}
            src={Refresh}
            alt="Refresh Button"
          ></img>
        </div>
      </div>
      <div className="coinlist-container"></div>
    </div>
  );
};

export default Home;
