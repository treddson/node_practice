const uuid = require("uuid");

const newUuid = uuid();

console.log(`Your new Univesally unique identifier is ${newUuid}`);

const myLibrary = require("./my-library");
myLibrary.myFirstMethod();
