// -#-#-#-#-#-#-#-#- Kirish

// -=-=-=-=-=-=- belgilar -=-=-=-=-=-=-=-

// -#-#-# - eng asosiy narsalar
// -=-=-= - mavzu nomi
// --=--=-- - qushimcha malumotlar
// !_!_ - Eslatma ( yodlash qilish shart bulgan narsalar )
// #_#_#_#_# - darsning (mavzuning) oxiri (tugashi)

// #_#_#_#_#_#_#

// -=-=-=-=-=-=- Type Convirsiond - data type larni uzgartirish

// // String > Number

// // Number
let a = 12,
  b = 13;

// console.log(a + b); // 25
// // Numberlar ustida arifmetik amallar bajarilganda hamma narsa tug'ri ishlaydi
// // lekn string qushilsa xatoliklar yuzaga keladi

// let c = "12"; // bu string son yozilgan bulsaham u '' ichida bulganligi uchun string hisoblanadi
// console.log(a + c); // 1212 buladi javob chunke JS number blan stringni qushganda faqatgina bir birini yoziga obkeb birlashtirib quyadi
// // bunaqa hatolikni tug'irlash uchun  string uzgaruvchi oldiga arifmitik amal quwiwimiz kerak
// console.log(a + +c); // 144


// /*** !_!_!_!

// Eslatma: Number + String 

// Faqat gina + amalida shunqa xatolik buladi yani 2 ta quwiluvchini bir biriga yopishtirib quyadi
// qolgan amallar (-,*,/) da misollar tug'ri ishlaydi string oldidan + quyish kerak emas

// !_!_!_! ***/


// console.log(9 - '2') // 7
// console.log(9 / '2') // 4.5
// console.log(9 * '2') // 18

// console.log(typeof(c)) // string
// console.log(typeof(-c)) // number

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

// // let v = 12,
// //    f= 'dd';
// // let h = v + +f;
// // console.log(isNaN(h))

// // // NaN bulishi uchun number va string qushilib ketgan element bulishi kerak

// let n = '1h';
// console.log(isNaN(+n))// true chunke bu Not a Number

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
// // 8. Equality =, ==, ===,
// // 9. Obrivations +=, -=, /=, *=,
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
// console.log(a - -b); // -1

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
// console.log(2 === '2') // false chunke bittasining data type pi string bittasiniki number
// console.log(2 === 2) // true ikkalasiham number bulganligi uchun
// // bu chuqur tekshiradi hamma narsasi 100% tug'ri bulsa true chiqaradi

// //     9 . Obrivations +=, -=, /=, *=,
// // 1. +=
// // uzini qiymatiga kerakli sonni qushib uziga tenglashtiradi

// // x += 10, (x = x + 10) - shuni qisqartmasi
// // 10 += 20, (10 = 10 + 20) = 30

// let tex = 10;
// // 10   10 + 2 =  12
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
// // holat 1
// console.log(c++); // value: 2 + 1 = 3
// // chunke ++ c dan kiyin turganligi uchun console 1 - c ni qiymatini chiqaradi kiyin usha qiymatga 1 ni qushadi
// console.log(c++); // value: 3 + 1 =4
// // chunke bundan oldin c qiymati (1) ni chiqarib unga 1 qushgan edi kiyin c 2 ga teng bulagan

// // console.log(c++); // value: ???
// // console.log(c); // value: ???

// // /*** !_!_!_!

// // Eslatma: Single srit

// // Single srit ning holatiham manashunda har bir amalni 1ta 1ta birn ketn bajaryapdi
// // agar mount srit bulganida ikkala amalni birdan bajarib 1 - holatni uzida 3 chiqargan bulardi

// // !_!_!_! ***/

// // ++ ni oldinga chiqarsakham buladi
// let d = 1;
// console.log(++d); // value: 2
// // chunke ++ oldinda bulganligi uchun birinchi d ga 1 ni qushub kiyin d qiymatini chiqaryapdi
// console.log(++d); // value: 3

// // misol:
// let x = 19;

// console.log(x++); // 1. value: ??? / 19 // 19, 19 + 1 = 20
// ++x; // 21
// console.log(++x); // 2. value: ??? / 22
// x++; // 22 + 1 = 23
// console.log(x++); // 3. value: ??? 23, 23 + 1

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

// #_#_#_#_#_#_#_#_#_#_#_#_#_#

// // -=-=-=-=-=-=-=-=-=- Comparision
// // <,>, ==, ===, <=, >=,!, malumotlarni compare qilish doim true yoki false qiymat qaytaradi

// // 1. < > - Katta kichik belgisi, elementlarni taqqoslashda ishlatamiz

// let a = 10,
// b = 13,
// c = 10;

// console.log(a > b) // false, chunke buyirda a katta b dan deyapdi lekn a, b dan kichik
// console.log(a < b) // true, chunke a , b dan kichik
// // tug'ri bulsa true notug'ri bulsa false chiqadi
// console.log(c < b) // false
// // 2. =, ==, ===

// // 2.1 - = verablega yangi qiymat tenglashtirish uchun ishlatiladi
// let f = '11'; // f ga '11' qiymat tenglashtirildi

// // 2.2 - == taqqoslash 2 ta narsani bir biriga taqqoslaydi
// // faqat qiymatni uzini tekshiradi
// console.log(c == f) // true

// // 2.3 - === Qattiy tenglik
// // data type niham tekshiradi
// console.log(c === f) // false

// // 3. <=, >= - Katta yoke teng , kichik yoke teng.
// // >< belgilar bu holatda har doim = ni chap tomonida bulishi kerak =<, >= - bu holatlar notug'ri
// // <=, >= - true

// // ikkalasidan bittasi tug'ri kelsa true chiqaradi
// console.log(c <= a) // true  -  katta
// console.log(c <= b) // true  -  teng

// console.log(c >= a) // true - teng
// console.log(c >= b) // false - kichkina

// // --=--=--=-- ASCII TABLE
// // har bir harf, belgilarning raqami. tartib raqamiga qarab katta kichigligini aniqlasak buladi. raqam qancha katta bulsa darajasi oshadi
// // A 65, a 97 = bu a bundan A katta
// console.log('A' > 'a') // false. ASCII TABLE buyicha kichik a birinchi keladi
// console.log('a' > 'A') // true.

// console.log('abcb' > 'abca') // true har bir harfni bitta bitta tekshirib boradi

// // boshidan hisoblaydi boshidagi bittasi kichik bulib qolsa qolgan hammasi kichik hisoblanadi undan kiyin nechchi qancha kelishidan qatte nazar
// console.log('567' < '299999') // false chunke boshida 5 dan 2 kichkina qolganini ahamiyatga olmay ketadi boshida bittasi kichik bulsa

// // 4. !=, !== - Teng emas
// // bularniham taqqoslashda ishlatamiz faqat bular teng emasligini taqqoslaydi
// // teng bulmasa true teng bulsa false chiqadi
// // qolgan belgilar blanham ishlatsak buladi kattamas kichikmas >! <!
// // 4.1 - !=  Teng emas
// // bu faqat qiymatni tekshiradi

// console.log(1 != '1') // false chunke 1 blan 1 teng
// console.log(1 != 2) // true chunke bu ikkalasi bir biriga teng emas

// // 4.2 - !==  Qattiy teng emas
// // bu data type lariniham tekshiradi

// console.log(1 !== '1') // true chunke 2 xil data typeda ikkalasi bu data type niham tekshirar edi ikkalasi bir biriga teng emas
// console.log(1 !== 1) // false ikkalasi bir biriga teng

// // 5. !NOT - inkor, hamma narsani teskarisi faqat true false ga nisbatan
// // true va false oldiga ! quysak usha narsani teskarisini chiqaradi
// console.log(!true) // false teskarisini chiqardi
// console.log(!false) // true teskarisini chiqardi

// console.log(!1) // false 1 true bulganligi uchun uni teskarisini chiqarayapdi
// console.log(!'1') // bundaham shunday

// console.log(!0) // true 0 false bulganligi uchun uni teskarisi (true) ni chiqarayapdi

// // -=-=-=-=-=-=-=- Logical Operations
// // 1. || OR

// console.log(true || true) // true
// console.log(false || true) // true
// console.log(true || false) // true
// console.log(false || false) // true

// // ikkala qiymatdan biri yoke ikkalasiham true bulsa true chiqaradi
// // false chiqishi uchun ikkalasiham false bulishi kerak

// // Misol: Uquv markazi ceo, admen bulsa yoke ikkalasidan biri bulsa ochiq buladi . uquv markazi ochiq yoke yopiqligini bil
// // || bu bizga ikkalasidan biri bulsaham true chiqaradi

// let ceo = true;
// let admin = false;

// console.log(ceo || admin) // true - markaz ochiq chunke admen bulmasaham ceo shuyirda
// // ikkalasidan bittasi true bulsaham true chiqaradi
// // qachonke ikkalasiham false bulsa false chiqadi
// console.log(false  || false ) // false

// // 2. && AND
// // Qattiy ikkalasiham true bulishi kerak agar ikkalasidan bittasi false bulsa unda javob false chiqari

// console.log(true && true) // true
// console.log(false && true) // false
// console.log(true && false) // false
// console.log(false && false) // false

// /* msalan: Siz ishga topshirmoqchisiz ishga kirish uchun 1. O'g'il va 2. 18 yoshdan dan katta bulishingiz kerak
// agar ikkalasidan bittasi bulmasa siz ishga qabul qilinmaysiz */

// let JNS = true,
//   age = false;

//   console.log(JNS && age) // false
// // chunke age false
// // agar or || bulganda ikkalasidan biri bulsaham true chiqardi

// =-=-=-=-=-= Homework

// // 1. Prefix and Postfix
// let a = 1,
//   b = 1;
// let c = ++a; // ?
// let d = b++; // ?

// // 2. Assinment result
// let a = 2;
// let x = 1 + (a *= 2);// ?

// 3. Type Conversion
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2


/*** !_!_!_!

// Eslatma: Number + String 

// Faqat gina + amalida shunqa xatolik buladi yani 2 ta quwiluvchini bir biriga yopishtirib quyadi
// qolgan amallar (-,*,/) da misollar tug'ri ishlaydi string oldidan + quyish kerak emas

!_!_!_! ***/

// 4. Comparision

5 > 4 // ?
'apple' > 'pineapple' // ?
'2' > '12' // ?
undefined == null // ?
undefined === null // ?
null == '\n0\n' // ?
null === +'\n0\n' // ?
