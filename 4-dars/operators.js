// Arifmetik operatorlar: (Arithmetic Operators:)
//   - + Qo'shish
//   - - Ayirish
//   - * Ko'paytirish
//   - / Bo'lish
//   - % Qoldiqli bo'lish

// Taqqoslash operatorlari: (Comparison Operators:)
//   - == Tengmi (qiymatlar bir xil)
//   - === Tengmi (qiymatlar bir xil va tur)
//   - != Teng emasmi
//   - !== Teng emasmi (qiymatlar bir xil va tur)
//   - > Katta
//   - < Kichik
//   - >= Katta yoki teng
//   - <= Kichik yoki teng

// Mantiqiy operatorlar: (Logical Operators:)
//   - && Va (AND)
//   - || Yoki (OR)
//   - ! Qaytarilgan qiymatning qaytishini boshqarish (NOT)
//   - ?? - Nullesh

// Bitwise operatorlar: (Bitwise Operators:)
//   - & Bitwise va
//   - | Bitwise yoki
//   - ^ Bitwise xor
//   - ~ Bitwise negatsiya
//   - << Bitlarni chapga surish
//   - >> Bitlarni o'ngga surish

// Tartiblash operatorlari: (Assignment Operators:)
//   - Math.min() Eng kichik qiymatni topish
//   - Math.max() Eng katta qiymatni topish

// Tasdiqlovchi operatorlari: (Assignment Operators)
//   - = Qiymatni o'zgartirish
//   - += Qiymatga qo'shish va yig'indini qaytarish
//   - -= Qiymatdan ayirish va farqni qaytarish
//   - *= Ko'paytirish va ko'paytmani qaytarish
//   - /= Bo'lish va ulamani qaytarish

// Boshqa operatorlar: (Other Operators)
//    - ++ Oshirish (Increment)
//    - -- Kamaytirish (Decrement)
//    - ?: Shartli (Conditional (Ternary) operator) if else


// -=-=-=-=-=- Used 

// Arifmetik operatorlar: (Arithmetic Operators:)
var sum = 5 + 3; // 8
var difference = 10 - 4; // 6
var product = 6 * 2; // 12
var quotient = 20 / 5; // 4
var remainder = 10 % 3; // 1

// Taqqoslash operatorlari: (Comparison Operators:)
var isEqual = 5 == 5; // true
var isStrictEqual = 5 === "5"; // false
var isNotEqual = 10 != 7; // true
var isNotStrictEqual = 10 !== "10"; // true
var isGreater = 8 > 5; // true
var isLess = 3 < 10; // true
var isGreaterOrEqual = 7 >= 7; // true
var isLessOrEqual = 4 <= 3; // false

// Mantiqiy operatorlar: (Logical Operators:)
var logicalAnd = true && false; // false
var logicalOr = true || false; // true
var logicalNot = !true; // false


// Bitwise operatorlar: (Bitwise Operators:)
var bitwiseAnd = 5 & 3; // 1
var bitwiseOr = 5 | 3; // 7
var bitwiseXor = 5 ^ 3; // 6
var bitwiseNot = ~5; // -6
var leftShift = 8 << 2; // 32
var rightShift = 16 >> 2; // 4

// Tartiblash operatorlari: (Assignment Operators:)
var minValue = Math.min(10, 4, 8); // 4
var maxValue = Math.max(7, 12, 9); // 12

// Tasdiqlovchi operatorlari: (Assignment Operators)
var x = 5;
x = x + 3; // x = 8
x += 2; // x = 10
x -= 4; // x = 6
x *= 3; // x = 18
x /= 2; // x = 9

// Boshqa operatorlar: (Other Operators)

// ++ Oshirish (Increment) operatori
var x = 5;
x++; // x = 6

// -- Kamaytirish (Decrement)  operator
var y = 8;
y--; // y = 7

// ?: Shartli (Conditional (Ternary) operator) if else
var yosh = 18;
var yoshiyetkinmi = (yosh >= 18) ? 'Yoshyetkin' : 'Yoshyetkin emas';
// Ushbu holatda, agar yosh 18 dan katta yoki teng bo'lsa, yoshiyetkinmi ga 'Yoshyetkin' qiymati beriladi, aks holda 'Yoshyetkin emas'
