import React from "react";
import "./styles/Coin.css";
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
      <div className="coinPage-Container">
        <div className="coinPage-Info-Container">
          <h1>{coin.name}</h1>
          <img
            className="coin-Icon"
            alt="coin-icon"
            src={coin.image.large}
          ></img>
          <div className="coinData-Container">
            <div className="coinData-Row">
              <h3 className="coinData-RowLabel">Symbol: </h3>
              <h3 className="coinData-RowData">{coin.symbol}</h3>
            </div>
            <div className="coinData-Row">
              <h3 className="coinData-RowLabel">Current Price: </h3>
              <h3 className="coinData-RowData">
                $ {coin.market_data.current_price.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinData-Row">
              <h3 className="coinData-RowLabel">Market Cap: </h3>
              <h3 className="coinData-RowData">
                $ {coin.market_data.market_cap.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinData-Row">
              <h3 className="coinData-RowLabel">Total Volume: </h3>
              <h3 className="coinData-RowData">
                $ {coin.market_data.total_volume.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinData-Row">
              <h3 className="coinData-RowLabel">24hr High: </h3>
              <h3 className="coinData-RowData green">
                $ {coin.market_data.high_24h.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinData-Row">
              <h3 className="coinData-RowLabel">24hr Low: </h3>
              <h3 className="coinData-RowData red">
                $ {coin.market_data.low_24h.usd.toLocaleString()}
              </h3>
            </div>
          </div>
          <Link to="/">
            <div className="coinPage-RouteButton">Go Back</div>
          </Link>
        </div>
      </div>
    );
  }
};

export default Coin;
