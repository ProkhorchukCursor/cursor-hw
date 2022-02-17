//Variables

const candy = 15.678;
const banana = 123.965;
const dress = 90.2345;

//1)

const maxPrice = Math.max(candy, banana, dress);

// console.log(maxPrice);

//2)

const minPrice = Math.min(candy, banana, dress);

// console.log(minPrice);

//3)

const summ = candy + banana + dress;

// console.log(summ);

//4)

const candyFloor = Math.floor(candy);
const bananaFloor = Math.floor(banana);
const dressFloor = Math.floor(dress);

const summFloor = candyFloor + bananaFloor + dressFloor;

// console.log(summFloor);

//5)

const summRound = Math.round(summ / 100) * 100;

// console.log(summRound);

//6)

const summBooleanDouble = Math.floor(summFloor) % 2 !== 1;
const summBooleanNotDouble = Math.floor(summFloor) % 2 === 1;

// console.log(summBooleanDouble);
// console.log(summBooleanNotDouble);

//7)

const rest = 500 - summ;

// console.log(rest);

//8)

const mean = Math.round((summ / 3) * 100) / 100;

// console.log(mean);

//9)

const discount = Math.floor(Math.random() * 100);

// console.log(discount);

//10)

const summDiscount = Math.round(summ * (discount / 100));
const toPay = summ - summDiscount;
const toPayRound = Math.round(toPay * 100) / 100;

// console.log(toPayRound);

//11)

const costPrice = Math.round((summ / 2) * 100) / 100;
const profit = (costPrice * 100 - summDiscount * 100) / 100;

// console.log(profit);

// Advanced

const string = `
  Максимальна цiна: ${maxPrice} $
  Мiнiмальна цiна: ${minPrice} $
  Вартiсть всiх товарiв: ${summ} $
  Сума цiлих цiн товарiв: ${summFloor} $
  Округлена сума цiн товарiв: ${summRound} $
  Чи є сума всiх товарiв парним числом?: ${summBooleanDouble} $
  Чи є сума всiх товарiв непарним числом?: ${summBooleanNotDouble} $
  Решта: ${rest} $
  Cереднє округлене цiн: ${mean} $
  Знижка: ${discount} %
  Сума до оплати: ${toPayRound} $
  Чистий прибуток: ${profit} $
`;

console.log(string);
