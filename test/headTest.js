const head = require('../head');
const assertEqual = require('../assertEqual');


assertEqual(head([]), 5); //should FAIL
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //should PASS