import { compose, pipe } from "lodash/fp";
let input = "    JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

//must read right to left. And too much parathesis.
const result = wrapInDiv(toLowerCase(trim(input)))
console.log("result", result)