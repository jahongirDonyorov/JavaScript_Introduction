// -=-=-=-=-=-=- JavaScript 
//  - sinxron(synchrous) va asinxron(asynchrouns) tushinchalar 1/2 
//  - sitTimeout qanday ishlaydi ?
//  - setInterval qanday ishlaydi ?
//  - Garbage collection / clearinterval / clearTimeout


// Bular method lekn JS metodi emas, lekn hamma browserlar support qiladi

//  - SetTimeut(callback, sec, ...args) - bir marta yuradi 
//      - returns tiremId
//      - try with callback
//      - try with function referencs // setTimeout(sayHi,3000,...agrs)
//      - try delay eith 0
//      - try with multiple delay 
//  - setInterval(callback, sec) - qayta qayta yuradi 
//      - returns timerId
//      - try with new Date sec 
//  - Garbage Collection - avtomatic garbage collected bo'lmaydi. 
//      - 
//      - 


// // -=-=-=-=-=-=-=- SetTimeut()
// // qandaydur amalni malum vahdan kiyin ishlatilishida SetTimeut() dan foydalaniladi 
// // Misol: user saytga kirgandan kiyin malum vaht utganda qandaydur surovnama chiqishi 

// // Bu 3 ta parametr oladi SetTimeut(callback, time, arg)

// // 1 - callback function 
// // 2 - time 1-callback function qanchadan kyinnishga tushushini bildiradi 
// // 3 - arg callback(params) parametrlariga shuyirdan qiymat bersak buladi 

// // setInterval((a,b) => {}, 1000, 'Hiy', 'How are you');
// // 1 - (a,b) => {} fnc ochib olyapmiz va unga 2 ta parametr beryapmiz paramlarning qiymati mavjud emas 
// // 2 - 1000 bu qanchadan kiyin callback ishga tushishi 1000 1 sekundga teng 
// // 3 - 'hiy' va 'How are you' callback parametrlarining qiymati 'Hiy' a ning 'How are you' b ning qiymati hisoblanadi 

// // setTimeut kyu ga utib ketadi kyu hamma code ishlab bulgandan kiyin setTimeout uziga berilgan vahdan kiyin ishlaydi

// // Misollarga utamiz 

// console.log(1)

// setTimeout(() => {
//   console.log(2)
// }, 1000)

// console.log(3)

// // biz code yurgizganimizda birinchi hamma code ishlaydi kiyin setTimeout dagi uziga berilgan vahdan kyin ishlaydi 
// // yane 1,3 chiqadi va setTimeout uziga 1 va 3 chiqqandan kiyin uziga berilgan vah 1000 (1 secund) dan kiyin chiqadi 
// // value ketma ketlik buyicha 1,2,3 chiqish kerak edi lekn 2 setTimeout bulganligi uchun 1,3,2  chiqadi

// // JS (Singil Srit) bulganligi uchun setTimeout kutib utirmaydidagi uni Queue utkazib boshqa kodlarni uqib chiqadi

// // agar biz 2 ta setTimeout yozsak bular asinxron bulganligi uchun ketma ketlikda chiqmaydi 
// // qaysi birining vahti kichik bulsa usha chiqadi 
// setTimeout(() => {
//   console.log(4)
// }, 2000)

// setTimeout(() => {
//   console.log(5)
// }, 1000)

// // bu holatda birinchi 5 chiqib kiyin 4 chiqadi chunke 4 2 secundan kiyin ishlaydi 5 esa 1 secundan kiyin
// // value: 1,3,2,5,4

// #############

// tushishi mumkun bulgan savollarga vajoblar

// // 1

// // biz time ga 0 quysakham setTimeout asinxron bulganligi uchun queue ga utadi va hamma code ishlagandan sung
// // bu malumot chiqadi 
// setTimeout((a) => {
//   console.log(a)
// },0, 'age:') // age: parametr hisobida a ga teng buldi
// console.log('18')
// // bu holatda birinchi 18 kiyin age: chiqadi 0 secund quygan bulsakham setInterval asinxron
// // asinxron lar outomatik queue ga utib ketadiva oddiy code (sinxron) ishlab bulgandan kiyin ishlaydi 

// // 2

// // biz fnc ichida for ni 10 000 gach aylantirsak va time 0 bulgan setTimeout dan kiyin chaqirsak  
// // birinchi qaysi chiqadi 

// const get = () => {
//   for(i = 0; i <= 10000; i++){
//     // console.log(i)
//   }
//   console.log('one')
// }

// setTimeout(() => {
//   console.log('thwo')
// },0)

// get()

// console.log('three')

// // shu kurinishda value qanday chiqadi ?
// // setTimeout hamma code ishlagandan kiyin ishlaydi degandik code 100000 martta for aylansaham usha tugagandan kiyingina 
// // setTimeout va setInterval chiqadi chunke bular queue ga utib ketadi asinxron bulganligi uchun 

// // bu kurinishda value birinchi sinxronlarni ketma ketlik buyicha chiqaradi birinchi fnc 'one' chiqadi  
// // kiyin console 'three' chiqadi va oxiri setInterval queue ga utganligi uchun 'thwo' chiqadi 

// // -=-=-=-  bizda asinxron(asynchrouns) va sinxron(synchrous) tushinchalari mavjud 

// // setTimeout va setInterval asinxron xisonlanadi 
// // yane kod jsni uzini ketmaketligida ishlab boraversa yane birinma ketin kodlarni chiqaraversa sinxron hisoblanadi 
// // asinxron esa bajarilishiga qanchadir vaht ketganligi uchun snxron kodlar buni kutib utirmasdan utib ketadi 
// // bu esa hammasi ishlab bulgandan kiyin chiqadi


//#########################

// -=-=-=-=-=-=- setInterval
// bu ham setTimeout dek faqat bu takroriy ishlaydi yane time 1 secunt quysak har 1 secuntda ishlaydi 
// setTimeout esa bir martta ishlas edi 

// tuzilishi setTimeout blan birhil faqat kalit suzi uzgaradi set setInterval ga 

setInterval(() => {
  // console.log('Hi')
}, 1000); // har 1 secuntda Hi suzini qayta qayta chiqaraveradi uzimiz codni tuxtatmaganimizcha

// Mison:
// soat har bir sekutda yangilanib tursin desak 
let id = setInterval(() => {
  let date = new Date()
  console.log(
    `Today: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  ) 
  
}, 1000);// terminalda hunuk jurinishi mumkun lekn chromeda bulganda soat yurayorgandek buladi

//-=-=-=-=-= Event loop
// malumot asinxron bulib ishlashiga kup vah ketadigan bulsa va Call Stack ga chiqsa qolgan codlarni tuxtatib quymaslik uchun 
// asinxron bulgan (WEB AP) malumot birdan Wep Ap ga yuboriladi va uyirda berilgan vaht (ish) Bajarilgandan sungham birdan
// Call Stack ga chiqolmaydi chiqsa ketma ketlik buziladi shuning uchun kutishga queue ga yuboruladi u yirda hamma sinxron bulgan kodlar 
// chiqib bulishini kutadi va ular chiqqandan sung asinxron bulgan malumotlar (setInterval, setTimeout, fech, dom) vaht berilmaganlari 
// joylashish tartibi vah berilganlari vahtga qarab chiqadi 

// malumot (qanchadir vahtdan kiyin eng ohirida chiqishi) da bulgan malumotning aylanishiga Evenet Loop deyiladi
// a -> call Stack
// setTimeout -> Web AP -> Callback Queue -> Call Stack - Event loop deyiladi shu jarayonga 
// 


// Garbage Collaction

// bularning qiymati tuxtagandan kiyinham automatik rafshda Memorydan uchib ketmaydi 
//  setInterval shunchake uzidan uzi tuxtamaydiham qancha value chiqaraversa hammasi memory (heap) da qolib ketaveradi 
// bularni uchirib tashlash uchun clearInterval va clearTimeout dan foydalanamiz 

// bu ikkalasi codni tuxtatadi va heap da qolgan malumotlari Garbagr Collaction qilib uchirib tashlaydi 

// -=-=-=-=- clearinterval
// bu bizga codni tuxtatadi yane codni ishlatib bulganimizdan sung tuxtatadi 
clearInterval(id)

// -=-=-=-=- clearTimeout
// buham tuxtatadi faqat bu clearTimeout nisbatan 



// -=-=-= Homework 
// nechta ichki funtion bulsa hamma argument yigindisini chiqarsin
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6;
// sum(6)(-1)(-2)(-3) == 0;
// sum(0)(1)(2)(3)(4)(5) == 15
function sum(a){
  let currentSum = a;

  function innerSum(b){
    currentSum += b;
    return innerSum
  }
  innerSum.toString = function() {
    return currentSum
  }
  return innerSum
}
console.log(sum(1)(2))





// -=--=- setInterval 10 martta ishlasin 1 secuntdan va tuxtasin

let count = 0;
const interval = setInterval(() => {
  console.log(' Har 1 soniyada bir martta ishlaydi ')
  count++
  console.log(count)

  if(count === 10){
    clearInterval(interval) // 10 marta ishladikdan so'ng intervalni to'xtatish
  }
},1000)

// Tahlil:

// kodimiz har ishlagan vahtida count ga bir qushilib boradi va fnc ichidagi if da count teng bulsa 10 ga
// setInterval ni clearInterval qilyapmiz (tuxtatyapmiz)

// count: bush verable bunga har code ishlaganda 1 qushilib boradi 
// bu biz kod 10 martta ishlaganini bilishimiz uchun va kodni tuxtatishimiz uchunkerak 
