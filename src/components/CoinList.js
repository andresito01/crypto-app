import React from "react";
import "./styles/CoinList.css";
import { useNavigate } from "react-router-dom";

const CoinList = ({
  id,
  icon,
  coinName,
  coinSymbol,
  price,
  marketCap,
  priceChange,
}) => {
  const navigate = useNavigate();

  return (
    <div className="coin-container">
      <div className="coin-container-header"></div>
      <div className="coin-row">
        <div className="coin">
          <img alt="coin-icon" src={icon}></img>
          <p className="coin-name">{coinName}</p>
          <p className="coin-symbol">{coinSymbol}</p>
          <p className="coin-price">$ {price.toFixed(2)}</p>
          {priceChange < 0 ? (
            <p className="coin-price-change red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-price-change green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-market-cap">$ {marketCap.toLocaleString()}</p>
          <button
            className="more-info-button"
            onClick={() => {
              navigate(`/coin/${id}`);
            }}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinList;
