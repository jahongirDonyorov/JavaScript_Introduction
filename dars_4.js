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

// //  variables > boolean

// // true = 1, false = 0

// // true = !0, !null, !undefined - larga teng emas
// // false = !1 - ga teng emas

// console.log(Boolean(1)) // true
// console.log(Boolean(0)) // false

// console.log(true == 1) // true
// console.log(false == 0) // true
// // true false urniga 1 va 0 dan foydalansakham buladi. 0 va 1 qaytishiga qarab code tug'ri notug'ri ekanligini bilishimiz mumkun

// console.log(true == '1') // true chiqadi chunke stringdan number holatga utganda bu 1 qiymatni qaytaradi
// console.log(true == '3') // false

// console.log(false == null) // false
// console.log(false == undefined) // false
// console.log(undefined == null) // true

// #_#_#_#_#_#_#_#_#_#_#_#_#_#

// // -=-=-=-=-=-=- Basic operators, maths

// // 1. Addition +,
// // 2. Subtraction -,
// // 3. Multiplication *,
// // 4. Division /,
// // 5. Remainder %,
// // 6. Braces (),
// // 7. Exponentiation **,
// // 8. Equality =, -=, ===,
// // 9. Obrivations +=, ==, /=, *=,
// // 10. Increment ++,
// // 11. Decrement --,

// // _!_!_!_!_!_!_ Buyirdaham arifmetik amallar matimatikadagidek ketma ketlikda buladi

// // misol: 1+4-(2-5)*4/2 - 1. ()ichi; 2. *; 3. /; 4. +; 5. -; - ketmaketligi buyicha ishlanadi


// //     1. Qushish (+)
// // holatga qarab xar xil vazifani bajarishi mumkun
// // misol:
// let a = 1,
//   b = "2";

// console.log(a + b); // oddiy holatda narsalarni bir biriga qushadi
// // value: 12; 1 blan 2 ni bir biriga yoqin qilib quyadi b string bulganligi uchun

// console.log(a + +b); // bu usulda
// // 1 - plus oddiy qushishni bajaradi
// // 2 - plus b (string) ni numberga aylantiradi

// // +b buyirdagi + arifmetik amallarimizga halaqt bermaydi bu faqat b (string) ni number qilib beradi


// //     2. Ayirish (-)
// console.log(a - +b); // -1


// //     3. Kupaytirish (*)
// console.log(a * +b); // 2


// //     4. bulish (/)
// console.log(a / +b); // 0.5


// //     5. Qoldiq (%)
// // son bitta qiymatga bulinganda ortib qolgan qismi qoldiq diyiladi
// console.log(101 % 10); // buyirda qoldiq 1


// //     6. Qavs ()
// // buni ham oddiy matimatikada ishlatgandek arifmetik amallar bajarishda ishlatamiz
// console.log(1 + 4 - ((2 - 5) * 4) / 2); // 11
// // har doim birinchi qavs ichi ishlanadi


// //     7. Daraja **,
// // bu bizga sonning darajsini chiqarib beradi
// // 2 ning 4 - darajasi 16 - 2 ni uziga 4 martta kupaytiradi

// // misol:
// //                     1     2          3          4
// console.log(2 ** 4)//  2,  2 * 2 = 4, 4 * 2 = 8, 8 * 2 = 16
// console.log(40 ** 6) // value: 4096000000


// //     8. Equality =, ==, ===,
// // tengliklar 

// // 1. =
// // (=) bittalik tenglik. bundan bror bir narsaga boshqa bir narsani tenglashtirish uchun foydalanamiz 
// let tit = 2; // tit nomli variableni 2 ga tenglashtiryapdi
// tit = 4; // tit nomli qiymati 2 ga teng variableni qiymatini 4 ga tenglashtiryapdi 

// // 2. ==
// // (==) ikkitalik tenglik bu 2 ta narsani bir biriga taqqoslashda ishlatiladi
// console.log(2 == '2') // true
// // bu faqat songa qarayapdi data types ni hisobga olmayapdi 2 == '2' bulsaham tug'ri buladi chunke ikkalasiham 2 
// // bu unchalik chuqur tekshirmaydi 1 ta narsasi tug'ri kelsaham true chiqaradi 

// // 3. ===
// // (===) uchtalik tenglik bu 2 ta narsani bir biriga taqqoslashda ishlatiladi
// // faqat bu har bir narsaga ahamiyat beradi yani bir biriga 100% tug'ri bulishi kerak
// console.log(2 === '2') // false chunke bittasining ata type pi string bittasiniki number 
// console.log(2 === 2) // true ikkalasiham number bulganligi uchun 
// // bu chuqur tekshiradi hamma narsasi 100% tug'ri bulsa true chiqaradi


// //     9 . Obrivations +=, -=, /=, *=,
// // 1. += 
// // uzini qiymatiga kerakli sonni qushib uziga tenglashtiradi

// // x += 10, (x = x + 10) - shuni qisqartmasi
// // 10 += 20, (10 = 10 + 20) = 30

// let tex = 10;
// // 10   10 + 20 =  12
//    tex = tex + 2; 
//    console.log(tex); // value: 12

// // buning qisqartirilgan usuliham mavjud
// //  12 =12+2 = 14
//     tex += 2; // value: 14

// // Qolganlariham (-=, /=, *=) huddi shundek faqat belgilariga qarab ayirib (-), bulib (/), kupaytiradi(*)


// //     10. Increment ++,
// // Bu ++ songa 1 qushib beradi
// // x++, (x = x + 1) - shuning qisqartmasi

// let c = 1;
// console.log(c); // value: 1
// c++;
// console.log(c); // value: 2

// // console.log ni uzidaham c++ qilsak buladi

// console.log(c++); // value: 1
// // chunke ++ c dan kiyin turganligi uchun console 1 - c ni qiymatini chiqaradi kiyin ucha qiymatga 1 ni qushadi
// console.log(c); // value: 2
// // chunke bundan oldin c qiymati (1) ni chiqarib unga 1 qushgan edi kiyin c 2 ga teng bulagan

// console.log(c++); // value: ???
// console.log(c); // value: ???

// /*** !_!_!_!

// Eslatma: Single srit

// Single srit ning holatiam manashunda har bir amalni 1ta 1ta birn ketn bajaryapdi
// agar mount srit bulganida ikkala amalni birdan bajarib 1 - holatni uzida 2 chiqargan bulardi 

// !_!_!_! ***/

// // ++ ni oldinga chiqarsakham buladi
// let d = 1;
// console.log(++d); // value: 2
// // chunke ++ oldinda bulganligi uchun birinchi d ga 1 ni qushub kiyin d qiymatini chiqaryapdi
// console.log(++d); // value: 3

// // misol:
// let x = 19;

// console.log(x++); // 1. value: ???
// ++x;
// console.log(++x); // 2. value: ???
// x++;
// console.log(x++); // 3. value: ???


// //     11. Decrement --, (bu ham huddi ++ dek faqat ayiradi)
// // Bu -- sondan 1 ayiradi
// // x--, (x = x - 1) - shuning qisqartmasi

// let n = 3;
// console.log(n); // value: 3
// n--;
// console.log(n); // value: 2

// // console.log ni uzidaham c-- qilsak buladi
// console.log(n--);
// // chunke -- n dan kiyin turganligi uchun console 1 - n ni qiymatini chiqaradi kiyin usha qiymatdan 1 ni ayiryapdi
// console.log(n) // value: 1
// // -- ni oldinga chiqarsakham buladi
// let inc = 1;
// console.log(--inc); // value: 0

