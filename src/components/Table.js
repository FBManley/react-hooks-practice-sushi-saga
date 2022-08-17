import React from "react";
import SushiWallet from "./SushiWallet";

function Table() {
 
  return (
    <>
      <h1 className="remaining">You have: ${} remaining!</h1>
      <div className="table">
        <div className="stack">{}</div>
        <SushiWallet  />
      </div>
    </>
  );
}

export default Table;