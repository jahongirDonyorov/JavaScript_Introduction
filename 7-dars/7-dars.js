// // Savollar
// // 1. switch vs if else farqi
// // 2. for loop parametrs ?
// // 3. for parametrs tushib qolganda qanday holat buladi (...;....;...;)

// // JavaScript 6 -> Basics 1/3 fineshed

// // =-=-=-=-=-=-=- While, Do While  -=-=-=-=-=-=-=

// // ------ While (){}
// // bu ham huddin for dek vazifani bajaradi lekn strukturasi fordan ancha farq qiladi
// // bunda uzgaruvchi tashqarida yoziladi va () ichiga faqat bitta shartni uzi yoziladi

// //   1        2        3    4
// // while (condition) {code,step}

// // 1. while - kalit suzi
// // 2. () - condition faqat bitta shart yziladi true bulsa code ishlaydi false bulsa ishlamaydi
// // 4. {} - code yoziladi 2 (true) bulsa 3 {code} resultatga chiqadi
// // 3. step(i++,i--) - nechtadan yurishi

// // example - one
// let i = 1
// while(i <= 10){
//   console.log(i)// value: 1,2,...,10  - gacha qiymatni bitta consolda chiqarib berdi
//   i++
// }

// // example - twoo
// let c = 3;
// while(c == 0){
//   console.log(c) // value: 3,2,1,0 - i-- bulganligi uchun orqaga sanayapdi
//   // alert(i) // value: ?
//   c--;
// }

// // =============

// // -=-=-=-=-=-=-=- Do{} While()
// // bu While bilan bir hil faqat bu birinchi codeni uqib kiyin shartni uqiydi
// // shart false bulsaham code bir martta chiqadi bunda

// //  1   2    3    4       5
// // do{code,step}while(condition)

// // 1. do - kalit suz
// // 2. {} - code yoziladi
// // 3. step(i++,i--) - nechtadan yurishi
// // 4. while - ikkinchi kalit suz
// // 5. () - shart - agarda 4 () tug'ri bulsa 2 {} code ishlaydi

// let a = 0
// do{
//   console.log(a)
//   a--;
// }while(false)
// // bu sal boshqacharoq 1-do ichida code yoziladi va 2-while ichida shart yoziladi
// // while ichidagi true bulsa do ishlaydi

// // do birinchi ishlab kiyin while ichidagi shartni tekshiradi true bulsa davom etadi false bulsa tuxtaydi
// // lekn birinchi qiymat bir martta chiqadi

// #_#_#_#_#_#_#_#_#_#_#_#

// -=-=-=-=-=-=-=-=-=- Function Basics -=-=-=-=-=-=-=-=-=

// -=-=-=-=-=- Function Declaration

// Formula
//     1      2      3
// function age( )  { }
// 1. function - kalit suz
// 2. age() - function nomi / () ichiga argument yoziladi
// 3. { } - code

// !_!_!_! funtion hech qachon oddiy holatda ishlamaydi uni uzidan tashqarida chaqirish kerak

// 4. function dan tashqarida fnc name va () blan chaqiriladi. m: age()

// -=-=-=-=- Avzalliklari
// 1. re-usable - qayta foydalanish
// 2. call any time u want - xohlagan vaqtda hohlagan joyda chaqirish
// 3. dynamic - bitta kodni harhil qilib chiqarish

// -=-=-=-=- Usege - (ishlatilishi)

// 1. re-usable

// Misol:
function func() {
  console.log("salom");
  console.log(1 + 3);
  for (i = 2; i <= 4; i++) {
    console.log(i);
  }
}
func(); // shuyirda fnc 1 - martta ishlaydi
//  buni biz hohlagancha chaqirishimiz mumkun
func(); // fnc 2 - martta ishlaydi
// bu kode kerak bulganida hohlagancha chaqirishimiz mumkun

// 2. call any time u want
// Misol one:
// function Declaration ni biz hohlagan joyimizda chaqirishimiz mumkun uzidan tepadaham pasdaham

getAvr(); // pasdagi fnc ni tepada chaqiryapmz

// yane bizga kerakli vahda functionni yurgizishimiz mumkun
// DOM orqale bitta misol

// Bizga submit dgan kinopka bosilgandagina fnc ishlasin deyishimizham mumkun
function getAvr() {
  console.log("Success");
}
// biz buni html dagi buttonga onclick yozdamida uladik endi button bosilganda getAvr ishlaydi (chaqiriladi) necha martta bossak ushancha ishlaydi

// Misol two:
// yuqorida kursatilgandek bu kodni bizga kerak vahtda chaqirishimizham mumkun ekan

// 1 - ishlatish
console.log(1);
console.log(1);
console.log(1);
// biz kodni shu holatda yozsak boshqa joyda yana shu kodni ishlatmoqchi bulib qolsak yana shuncha yozisimiz kerak buladi
// bu bizniung kodimiz kupayib ketishiga olib keladi

// 2 - ishlatish
console.log(1);
console.log(1);
console.log(1);

// functionda bulasa

function test() {
  console.log(1);
  console.log(1);
  console.log(1);
}
// 1 - ishlatish
test();

// 2 - ishlatish
test();

// () li narsa bulsa function hisoblanadi
// alert(), propmtp(), ... , larham function larga kiradi bular js ni uzda bulganligi uchun fnc Mhethode deyiladi

// alert()
// bu holatda yozsak alertni chaqirmasakham yurib ketadi lekn fnc ni uzimizga kerakli vahda chaqirsakgina yuradi

// 3. dynamic

function name() {
  console.log("John, Welcom to facebook");
}
// biz har bir odam kirganda ungaham huddi shunday bulib faqat uzining ismida chiqarishimiz mumkun
// har bir user ismini kiritib kirganda John ning urniga uning ismini quyib chiqarsak buladi

// () bunga paramert (argument)lar yoziladi
// () bunga yozilgan narsa funtion verable hisoblanadi verable ga qiymat fnc chaqirilyotganda beriladi
function user(name1, name2) {
  // 2ta function verable ochib oldik / bu yirga hohlagancha parametr yozsak buladi
  // ularda hozir hech qanday qiymat yuq uzini chaqirsak
  console.log(name1); // undefinide chiqadi chunke verable ochib unga qiymat bermadik
}
// qiymat chaqirishda () ichiga ketma ketlikda yoziladi
//      1       2
user("Malika", "Lola");
// 1. 1- name1 ning qiymati
// 2. 2- name2 ning qiymati

// qiymatlar shu tartibda yoziladi 1 - ga 1-da 2 - ga 2-da yozamiz
user("Malik", "Lobar", "Barno"); // bunda 3-qiymat bor lekn verable yuq
// bu holatda xatolik bulmaydi qachon 3-verable yozsak ushanga birikb ketadi

// shu holatda yozib John urniga user name quyib ketsak buladi
function use(a) {
  console.log(a, "Welcom to facebook");
  // console.log(`${a} Welcom to facebook`) bu holatdaam chaqirsak buladi huqqir verable dek
}
use("Elshod"); // value: Elshod Welcom to facebook
use("Dilshod"); // value:  Dilshod Welcom to facebook
use("Shomrod"); // value:  Shomrod Welcom to facebook
// har bir chaqirilgan valuega qarab verable qiymatini uzgartiradi

// classWork

// -=-=-=-=-=- Function expression
// 3 ta parametrli (name,surnaem,age) function yaratinglar va qiymat berib chiqinglar
// value: John, Doniyarov, 18 - dan 5 ta harhil chiqsin qiymatlarda chiqsin

// vareble ga biriktirilgan functionlar function expression deyiladi

// sayHi() // fnc expression bu holatda chaqirib bulmaydi error beradi
// error
// Cannot access 'sayHi' before initialization - bu fnc yuq demayapdi bor lekn bunday chariqib bulmaydi deyapdi
// is not define not  bulsa fundan fnc yuq degani buladi
const sayHi = function () {
  console.log("say Hi");
};
// biz buni uzidan yuqorida chairolmaymiz
sayHi(); // tug'ri holat

// -=-=-=-=-=- Arrow Function

const arrow = () => {};

// verable fnc ichida bulsa inner verable tshqarisida bulsa outer verable diyaladi

// -=-=-=-=-=-=-= verable shadow

// bu inner verable vs outer verable nomi bir xil bulisa verable shadow deyiladi
let title = "Jahongir";
const shadow = () => {
  let title = "Doniyarov";
  console.log(title); // value: Doniyarov
};
console.log(title); // Jahongir
shadow(); // Doniyarov

// =-=-=-=-=-= Defult qiymat
const telegram = (name, surName) => {
  console.log(name, surName); // John undefinide / 2 ga qiymat berilmaganligi uchun
};
telegram("John"); // 2- (surname) ga qiymat berilmagan console da undefinide chiqadi
// lekn biz telegramga ismimizni uzini kiritsak hech qachon ism va undefinide chiqmaydi ismni uzi chiqadi
// surname busa chiqar bumasa chiqarma deymiz
const teleg = (name, surName = '') => { // surname bulsa chiqar bulsama bush joyni chiqar degani 
  // bu avval ishlatilgan yullar
  
  // if else holatda
  // if (surName) console.log(name, surName);
  // else console.log(name);

  // ?:
  // surName ? console.log(name, surName) : console.log(name)

  // ||
  //                1           2
  // console.log(name, surName || '')
  // agar surName bulsa chiqar bulmasa chiqarma name ni uzini chiqar dedik
};
teleg("John", "Doniyarov");

// -=-=-=-=-=- Callback Function

// -#-#-#-#-#- Hoisting nma
// hosting verable larni va function expression larni js codeimizning eng yuqorisida declayer (tyaratishga) aytiladi
