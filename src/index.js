import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia";

ReactDOM.render(<App />, document.getElementById("root"));


const trimmedDescription = emojipedia.map(emojiDetail => emojiDetail.meaning.substring(0,100) )
console.log(trimmedDescription);

var numbers = [3,56,2,48,5];

var newNums = numbers.filter(x => x > 10);
console.log(newNums);

var reducedNum = numbers.reduce((previousValue,currentValue)=> previousValue+currentValue);
console.log(reducedNum);