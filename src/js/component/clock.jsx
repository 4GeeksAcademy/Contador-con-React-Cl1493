import React, { useEffect, useState } from "react";

function Counter (props) {
    let counter= 0;
    setInterval(function(){
        const six = Math.floor(counter/100000);
        const five = Math.floor(counter/10000);
        const four = Math.floor(counter/1000);
        const three = Math.floor(counter/100);
        const two = Math.floor(counter/10);
        const one = Math.floor(counter/1);
        counter ++;},1000);
    return (
        <div className="bigCounter">
            <div className="reloj"><i class="fa-regular fa-clock"></i></div>
            <div className="six">{props.digitSix % 10}</div>
            <div className="five">{props.digitFive % 10}</div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    );
}

Counter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number
};
export default Counter;
