const assertEqual = require("../assertEqual")
const tail = require("../tail")

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2);