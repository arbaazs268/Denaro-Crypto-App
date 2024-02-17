import React from "react";
import HistoryChart from "../components/HistoryChart";
import CoinDetails from "../components/CoinDetails";

const CryptoDetail = () => {
  return (
    <div className="wrapper-container mt-10">
      <HistoryChart />
      <CoinDetails/>
    </div>
  );
};

export default CryptoDetail;
