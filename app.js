// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  'Raindrops on roses',
  'whiskers on kittens',
  'Bright copper kettles',
  'warm woolen mittens',
];
console.log(raindrops); // Raindrops on roses
//เป็นการใช้ array destructuring ซึ่งอ้างอิงค่าตาม index ใน array
console.log(whiskers); //whiskers on kittens
//เป็นการใช้ array destructuring ซึ่งอ้างอิงค่าตาม index ใน array
console.log(aFewOfMyFavoriteThings); // [ 'Bright copper kettles', 'warm woolen mittens' ]
//เป็นการใช้  spread operator กับ array destructuring ซึ่งอ้างอิงค่าตาม index ใน array ที่เหลือทั้งหมด