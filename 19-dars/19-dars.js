// Atomic habist kitobini uqish 2 haftada

// -=-=-=-=-=-=-=-=- JavaScript - 
// - Nega var bugungi kunda kam ishlatiladi ?
// - IIFE: immediately invoked function expression 
// - Global Object: window, global, globalThis
// - Function as an Object.
// - NFE: Named Function Expression
// - new Function: constructor function 

// - bugungi kunda bu malumotlar ishlatilmaydi interview da savol urnida tushadi faqat 

// -=-=-=-=-=- var 
// birinchi var va let farqini bilib olsak 

// -=-=-=-=-=- 1 - Farqi

// biz let ni uzidan yuqorida chaqirsak bizga  ReferenceError: Cannot access 'a' before initialization
// qaytaradi yane a ga kirishning imkoni yuq degan (a degan verable bor faqat uni uqishni iloji yuq)
// console.log(a) // ReferenceError

// biz var ni uzidan yuqorida chaqirsak undifenid chiqadi hech qanday error bulmaydi 
console.log(b) // undefined

let a = 10;
var b = 10;
// bizda 2 ta uzgaruvchi mavjud bittasi let bittasi var 


// -=-=-=-=-=- 2 - Farqi
// Biz let va varni local va Global verablelar deyishimiz mumkun yane let local var global 
// biz 2 ta verableniham bitta scope ichida yozsak va ikkalasiniham scopedan tashqarida chaqirsak 
// var global bulganligi uchun scope ichidagi malumotni chiqaradi let esa faqat scope ichida ishlaydi scope tashqarisida chaqirib bulmaydi 

// biz scope ichida 2 ta verable let va var ni yozib olamiz
{
  let c = 12 // let scope dan tashqarida ishlamaydi 
  var d = 12 // var scope dan tashqaridaham ishlaydi 
}
// biz scope ichidagi letni chaqirsak bizga ReferenceError: c is not definet chiqadi 
// console.log(c) // ReferenceError: c is not defined
// lekn biz varni scope dan tashqarida chaqirsak bizga valuni chiqarib beradi 
console.log(d) // 12

// -=-=-=-=- var ishlatilmasligini kam ishlatilishini sababi 

// Misol 

// let
let use = 10; 
console.log(use) // 10
function getUse () {
  let use = 30
  console.log(use) // 30 - bu 30 qiymati faqat scope ichida qoladi u out dagi use ning qiymatini yangilab yubormaydi
  // chunke let scope dan tashqarida ishlamaydi out use blan scope ichidagi use boshqa boshqa verablelar hisoblanadi
}
getUse()
console.log(use) // 10 - chunke use qiymati 10 ga teng {} use = 30 qilgani faqat {} ichida ishlaydi u boshqa verable hisoblanadi 


// var
var user = 10
console.log(user) // 10
function getUser () {
  var user = 40 // bu ishlaganda out use ning qiymatini yangilab yuboradi
  console.log(user) // 40 - hamma userning qiymati 40 ga teng buldi 
  // oddiy qiymatni uzgartirish bulyapdi var scope dan tashqarida ishlaganligi uchun 
}
getUser()
console.log(user) // 40 - var global bulganligi uchun fnc ishlaganda user 10 {} ichidagi user 40 ga teng bulyapdi va qiymat 40 ga uzgaryapdi
// bizga jaob 10 bulish kerak edi lekn var global bulganligi uchun scope tashqarisidagi qiymatni scope ichida uzgartirib uni tashqarida yana ishlatsak buladi

// var da shunaqa holatlarda hatoliklar bulib turadi scope ichidagi verable blan tashqaridagini nomi birhil bulsa ikkalasi bittas verable hisoblanib ketadi 
// var da kod yozibham buni tugi'rlash mumkun buning uchun IIFE dan foydalanamiz 

// -=-=-=-=-= IIFE - immediately invoked function expression 
// tepadagi varda bulgan hatoni tug'irlashda ishlatiladi 
// bu nomi yuq function bulishi kerek 

// biz functionni ()  ichiga olishimiz kerak buladi functionimiz nomiz expression function bulishi kerak 

var us = 10
console.log(us)
// (function() {
//   var us = 30;
//   console.log(us)
// })(); // 2 - () bu qavs bizga fnc ni chaqirish uchun  kerak buni nomi bulmaganligi uchun nomini yozib chaqirolmaymiz name(qilib)
// () buni ichida bulgandan kiyin var bulsaham uzining scope dan tashqarida ishlolmaydi 
console.log(us) // 10 chiqadi chunke fnc ishlagandaham uni ichidagi us faqat scope ichida ishlaydigan bulib qoladi 
// va scope dagi us out dagi us ni qiymatini uzgartirmaydi 

// varni Shu holatda scope dan tashqarida ishlamaydigan qilsak buladi 

// IIFE - deb shunda aytiladi 

// var letga uzgargandan kiyin IIFE ishlatilmay ketti



// -=-=-=-=-=-=-=-=-=- window / globalThis
// window brawserdagi hamma narsa hisoblanadi globalThis ham huddi shunday 
// global ham shunday narsa faqat u node ni uzida uishlaydi 

// code da ishlatishimiz uchun globalThis bor global ni uzini ishlatolmaymiz 
// globalThis ham huddi this dek 


// buni ishlatishdan maqsad biz ochgan verablini globalThis yordamida hohlagan joyimizda chaqirishimiz mumkun 

globalThis.global = 30; // bunga hohlagan narsamizni biriktirishimiz mumkun va hohlagan joyimizda chaqirishimiz mumkun 
// biz bu verablini hohlagan joyimizda ishlatishimiz mumkun faqat globalThis.global qilib 
(() => {
  var a =20;
  console.log(a,globalThis.global) 
  // 20, 30 chiqadi chunke birinchi uzini ixhidagi verabli chaqirilyapdi kiyin globalThis blan global verable chaqirilyapdi 
})();

console.log(global); // 30
// buni urniga window yozsak  ishlamaydi 

// window.win = 90 // ReferenceError: window is not defined
// console.log(window.win) // window ni html da ishlatsak  uqiydi 

// -=-=-=-=-=-=-=- Function as an Object
// -=-=-=-=-=- function.name 
// function nomini chiqarib beradi 
function test() {
  console.log('hey js')
}
console.log(test.name) // test bu bizga fnc nomini chiqrib beradi 
// uzi nomi yozib chaqirayapmiz deyishingiz mumkun lekn bizga fnc nomi qaytarish kerak bulgan fahlarda buni ishlatsak buladi 
// juda kam ishlatiladi 


// -=-=-=-=-=-=- length
// function ichidagi parametrlarni soni (uzunligi) ni chiqarib beradi 
function fnc(a,b,c) {
 console.log('hi') 
}
console.log(fnc.length) // 3 chiqaradi chunke 3 ta argument bor 
// argument split (...) operatorda yozilgan bulsa uni egnor qiladi uqimaydi (a,b,c,...res) qilingan bulsa


// -=-=-=-=-=-=-=- NFE - Named Function Expression

// bu 2 ta nomli function buladi vazifasi functionni uzini ichida chaqirish 
const getName = function callback(name){ // callback getName fnc ning 2-nomi bulyapdi bu nami faqat fnc ichida chaqirolamiz 
  console.log(`Hi, ${name}`)
  // return callback() // getName fnc ni uzini ichida yana chairirb quyayapmiz bu holatda
  // javoblar kup buub ketadi juda kup martta functionni ishga tushiradi 
}
getName('Webbrain')
// ikkinchi nomini fnc tashqarisida chaqiradigan bulsak error beradi 


// -=-=-=-=-=-=-= new Function() 
// birinchi function {} yuq (ichida) string holatda code yoziladi 
let fn = 12
let getAge = new Function(`let fn = 1; console.log(fn)`) // 1 chiqadi new fnc da string ichida code yoziladi 
getAge() 
console.log(fn)