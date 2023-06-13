// -#-#-#-#-#-#-#-#- Kirish

// -=-=-=-=-=-=- belgilar -=-=-=-=-=-=-=-

// -#-#-# - eng asosiy narsalar
// -=-=-= - mavzu nomi
// --=--=-- - qushimcha malumotlar
// !_!_ - Eslatma ( yodlash qilish shart bulgan narsalar )
// #_#_#_#_# - darsning (mavzuning) oxiri (tugashi)

// #_#_#_#_#_#_#

// -=-=-=-=-=-=- Type Convirsiond - data type larni uzgartirish

// String > Number

// // Number
// let a = 12,
//   b = 13;

// console.log(a + b); // 25
// // Numberlar ustida arifmetik amallar bajarilganda hamma narsa tug'ri ishlaydi
// // lekn string qushilsa xatoliklar yuzaga keladi

// let c = "12"; // bu string son yozilgan bulsaham u '' ichida bulganligi uchun string hisoblanadi
// console.log(a + c); // 1212 buladi javob chunke JS number blan stringni qushganda faqatgina bir birini yoziga obkeb birlashtirib quyadi
// // bunaqa hatolikni tug'irlash uchun  string uzgaruvchi oldiga arifmitik amal quwiwimiz kerak
// console.log(a + +c); // 24
// // 1 - plus 2 ta variable ni bir birga qushish uchun 2 - plus (+c) stringni numberga uzgartirish uchun
// // string oldidan arifmirik amal qushsak u numberga aylanadi


// // -=-=-=-=-=-= Number() -=-=-=-=-=-=-
// let num = 3.43
// // Stringni Number qilib beradi 
// console.log(Number(c) + a) // 24
// console.log(Number(num)) // 3.43 number holatda
// // agar bizga string kasr bulsa number holatga yaxlitlanib utishi kerak bulsa Numberga qushimcha Methodes bor 

// // -=-=-=-=-= .parseInt()
// // Yaxlitlab beradi
// console.log(Number.parseInt(num)) // 3 - 3.43 ni yaxlitlab 3 chiqarib berayapdi
// // bularni Number quymasdan yozsakham buladi
// console.log(parseInt(num)) // 3 

// // -=-=-=-=-= .parseFloat()
// // bu uz holida chiqarib beradi Number() uzida chiqarganidek 
// console.log(Number.parseFloat(num)) // 3.43
// // bularni Number quymasdan yozsakham buladi
// console.log(parseFloat(num)) // 3.43


// // -=-=-=-=-=-= NaN -=-=-=-=-=-=-=
// // Raqam bulmagan malumotlar ustida arifmirik amal bajarilsa NaN chiqadi
// // NaN - N (Not), a (a) , N (Number) - Not a Number (raqam emas) degan manoanglatadi

// // -=-=-=-=-=-= isNaN() -=-=-=-=-=-=-=

// // is oldinga utganligi uchun bu suroq ? shaklga utyapdi
// // Bu elementimiz NaN yoke NaN emasligini bilib beradi
// console.log(isNaN(a)); // false chunke a uzgaruvchisi NaN emas

// // NaN bulishi uchun number va string qushilib ketgan element bulishi kerak

// let n = '1h';
// console.log(isNaN(n))// true chunke bu Not a Number


// #_#_#_#_#_#_#_#_#_#_#_#_#_#



 