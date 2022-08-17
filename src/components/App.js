import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [fourSushis, setFourSushis] = useState([]);
  const [budget, setBudget] = useState(100);
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setSushis(data)
    })
  }, [])

  return (
    <div className="app">
      <SushiContainer />
      <Table  />
    </div>
  );
}

export default App;
