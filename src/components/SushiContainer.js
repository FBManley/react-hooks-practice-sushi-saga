import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer() {
  
  return (
    <div className="belt">
      <Sushi />
      <MoreButton />
    </div>
  );
}

export default SushiContainer;