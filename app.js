// finds the sum of two numbers
const sum = (a,b) => {
    return a + b
}

function fromEuroToDollar (euro) {
    // ensure user does not pass a negative # or any data type other than a number
    if (euro < 0 || typeof euro != 'number') return undefined; 
    else return euro * 1.22;
}

function fromDollarToYen (dollar) {
    if (dollar < 0 || typeof dollar != 'number') return undefined;
    else return dollar * 127.78;
} 

function fromYenToPound (yen) {
    if (yen < 0 || typeof yen != 'number') return undefined;
    else return yen / 156.25;
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };