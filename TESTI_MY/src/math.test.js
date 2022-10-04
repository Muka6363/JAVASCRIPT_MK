const { sum } = require("./math.js");

describe("Toplama fonksiyonu yapalım", () => {
  it("10 + 5 = 15 mi?", () => {
    expect(sum(10, 5)).toBe(15);
    //     expect(sum(10, 5)).toBe(10); // hata mesajı vermesı ıcın
  });
});
// const calculateTotal = (price, vat = 0.18) => price * (1 + vat);
// const sum = (n1, n2) => (n1 + n2);
