import React, { useState, useEffect } from "react";
import Foto from "../../img/Flaticon.jpg";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const six = Math.floor((counter / 100000) % 10);
  const five = Math.floor((counter / 10000) % 10);
  const four = Math.floor((counter / 1000) % 10);
  const three = Math.floor((counter / 100) % 10);
  const two = Math.floor((counter / 10) % 10);
  const one = Math.floor(counter % 10);

  return (
    <div className="bigCounter">
      <div className="reloj">
        <img src={Foto} style={{width: "45px"}}></img>
      </div>    
      <div className="six">{six}</div>
      <div className="five">{five}</div>
      <div className="four">{four}</div>
      <div className="three">{three}</div>
      <div className="two">{two}</div>
      <div className="one">{one}</div>
    </div>
  );
}


export default Counter;
