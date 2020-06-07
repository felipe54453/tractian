import React, { Component } from "react";
import "./App.css";
import myData from "./tractian_data.json.json";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HighchartsReact highcharts={Highcharts} options={{ myData }} />
      </div>
    );
  }
}
