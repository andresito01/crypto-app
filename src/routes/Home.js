import React, { useState, useEffect } from "react";
import "../App.css";
import Axios from "axios";
import Refresh from "../images/refresh.png";
import CoinList from "../components/CoinList.js";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

  const getCoinRequest = () => {
    Axios.get(url).then((response) => {
      console.log(response.data);
      setCoins(response.data);
    });
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    getCoinRequest();
  }, []);

  return (
    <div className="screen">
      <div className="header-container">
        <h1>Welcome to the CryptoChecker</h1>
        <div className="button-container">
          <input
            placeholder="Search for a Coin"
            type="text"
            onChange={handleSearch}
          />
          <img
            onClick={getCoinRequest}
            src={Refresh}
            alt="Refresh Button"
          ></img>
        </div>
      </div>
      <div className="coinlist-container">
        {filterCoins.map((coins) => (
          <CoinList
            id={coins.id}
            icon={coins.image}
            coinName={coins.name}
            coinSymbol={coins.symbol}
            price={coins.current_price}
            marketCap={coins.market_cap}
            priceChange={coins.price_change_percentage_24h}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
