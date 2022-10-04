const fahrenheitToCelsius = (temp) => (temp - 32) / 1.8;

const celsiusToFahrenheit = (temp) => temp * 1.8 + 32;

const calculateTotal = (price, vat = 0.18) => price * (1 + vat);

const fibonacci = (num = 1) => {
  if (num < 1) {
    throw new Error("Must enter a number greater than 0");
  }

  const series = [1, 1];
  for (let i = 2; i < num; i++) {
    const a = series[i - 1];
    const b = series[i - 2];
    series.push(a + b);
  }
  return series[num - 1];
};

const sum = (n1, n2) => n1 + n2;
// ! node module export
module.exports = {
  calculateTotal,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  fibonacci,
  sum,
};

//! esm module export
// export { calculateTotal,
//  celsiusToFahrenheit,
//  fahrenheitToCelsius,
//  fibonacci};

/*
Test aşamaları.
1. Test esnasında üretilen verilerin gereksiz yere gitup'a puhlanmasını engellemek için gitignore dosyası oluşturup. node.gitignore'yi seçiyoruz.
2. Terminalde test yapacağımız klasörün içine konumlanıyoruz. (npm init -y) komutunu çalıştırıyoruz. Bu komutla. bir package.json dosyası oluşuyor.
3. package.json içerisinde test key'inde henüz test yapılmadığını görüyoruz.
4. (npm install jest) veya (npm install --save-dev jest) komutunu çalıştırıp jest'i kuruyoruz. Bu komutla node_modules klasörümüzün içi doluyor.
5. Bir hata olduğunda npm'i sildikten sonra tamamen temizlemek için (npm cache clear --force) komutu çalıştırılabilir.
6. package.json test keyine "test": "jest --coverage" yazıyoruz.
7. Test yapacağımız dosyanın içerisindeki fonksiyonları import edebileceğimiz, ayrıca test komutlarını yazacağımız bir "test.js" dosyası oluşturuyoruz. örnek(math.test.js)
8. İki tür test yapabiliyoruz. node module, es6 module ile. Test edilecek dosyada export, test yapacak dosyada import ediyoruz.
9.  es6 module export syntaxı: module.exports = {test edilecek fonksiyonlar};
10  node module export syntaxı: module.exports = {test edilecek fonksiyonlar};
11. es6 module import syntaxı: import {test edilecek fonksiyonlar} from './math(dosya yolu)';
11. node module import syntaxı: const { } = require("./math.js(dosya yolu)");
12. Test dosyamızda asağıdaki kodu yazıyoruz.
describe("fonksiyon adı", () => {
  it("sorgu adı-içeriği", () => {
    expect(fonksiyon ve parametreleri).toBe(beklenen sonuç);
  });
});
Örnek:
describe("sum", () => {
  it("10 ile 15 toplamı 25 mi?", () => {
    expect(sum(10, 15)).toBe(25);
  });
});
13. coverage dosyası explorer ile açılarak içerisindeki index.html dosyası incelenebilir. Test ile ilgili raporların tarayıcı üzerinden gösterilmesi için.
14. Terminale "nmp test" komutunu yazarak test'i başlatıyoruz.

*/
