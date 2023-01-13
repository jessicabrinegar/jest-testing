
// import the fx sum from app.js
const {sum} = require('./app.js');
// start your first test
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("Euro to usd exchange rate should be 1.22", () => {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.22; 
    expect(dollars).toBe(expected);
});
test("Fx should only allow positive numbers", () => {
    const { fromEuroToDollar } = require('./app.js');
    const result = fromEuroToDollar('arg');
    const result1 = fromEuroToDollar(-4.2);
    expect(result).toBeUndefined();
    expect(result1).toBeUndefined();
});

test("Usd to yen exchange rate should be 127.78", () => {
    const {fromDollarToYen} = require('./app.js');
    const dollars = fromDollarToYen(7.5);
    const expected = 7.5 * 127.78;
    expect(dollars).toBe(expected);
});

test("Yen to pound exchange rate should be .0064", () => {
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(2);
    const expected = 2 / 156.25;
    expect(pounds).toBe(expected);
});