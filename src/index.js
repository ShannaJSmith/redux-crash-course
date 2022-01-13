import { pipe } from 'lodash/fp';

let input = "    JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// compose is a higher order function. Here we are just passing references to them, not calling them
const transform = pipe(trim, toLowerCase, wrapInDiv);
// now we don't have to nest the functions from "result"
// console.log("transform", transform(input));

//must read right to left. And too much parathesis.
// const result = wrapInDiv(toLowerCase(trim(input)));
// console.log("result", result);