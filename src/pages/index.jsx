import React, { useState } from "react";
import { Grid } from "../components/Grid";
import { Chart } from "../components/Chart";
import { mergeTwoArrays, timeSince, updateHistory } from "../utils";
import "bootstrap/dist/css/bootstrap.min.css";

const ws = new WebSocket("ws://city-ws.herokuapp.com/");

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [historicalData, setHistoricalData] = useState({});
  const [selectedCity, setSelectedCity] = useState("");

  ws.onopen = () => {
    console.log("Connected");
  };

  ws.onmessage = (evt) => {
    const updatedData = JSON.parse(evt.data);
    updatedData.forEach((ele) => {
      ele.aqi = parseFloat(ele.aqi).toFixed(2);
      ele.timestamp = new Date().toString();
      ele.formattedTime = timeSince(new Date(ele.timestamp));
      ele.key = `${ele.city}`;
    });

    const newObj = updateHistory({ ...historicalData }, updatedData);
    setHistoricalData(newObj);

    setData(mergeTwoArrays(data, updatedData, "city"));
  };

  ws.onclose = () => {
    console.log("disconnected");
  };

  const gridProps = {
    data,
    setSelectedCity,
  };

  const chartProps = {
    historicalData,
    selectedCity,
  };

  return (
    <div>
      <Chart {...chartProps} />
      <Grid {...gridProps} />
    </div>
  );
};

export default HomePage;
