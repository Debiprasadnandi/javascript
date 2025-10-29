let score = false;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"=> 33
// "33abc"=> NaN
// true => 1 , false =>0
// "rocky" => NaN

let isLoggedIn  = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false, "rocky" => true

let somenumber = 33;
let stringNumber = String(somenumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// number 33 is now converted to "33" string.