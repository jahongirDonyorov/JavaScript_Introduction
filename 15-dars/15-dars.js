// -=-=-=-=-=-=-=-=-=-=-=-=- BASICS 
// -=-=-=-=--=- JavaScript 15
import { moment } from "./homework.js"
console.log(moment().format('L'))
// // -=-=-=- Destructuring - map with key like a obj 

// // - object - keylarni ajratib olishga nisbatan.
// //    - general case 
// //    - as a function parameter
// //    - nested objects 

// // - arrays - elementlarni ajratib olishga aytiladi.
// //    - in general case 
// //    - obj.entries()
// //    - ...rest 
// //    - nested array 


// // -=-=-=-=-=-=- Object

// let obj = {name: 'Jahongir', age: 18}
// // name valuesini olmoqchi bulsak har doim obj.name qilishimiz kerak
// console.log(obj.name)
// // lekn destructuring blan biz name ni uzini yozib obj ichidagi valuesini olishimiz mumkun ekan
// let {name,age} = obj // destructuring buldi / biz name va age keylarini objdan chiqarib oldik 
// // destructuring qilyotganimizda biz yaratayotgan verable key nomi blan birhil bulishi kerak 

// console.log(name) // bizga obj ichidagi name valuesini chiqarib beradi 

// // -=-=-= function

// // biz fnc ga parametr sifatida obj bersak uniham destructuring qilib olsak buladi 
// // oddiy usul
// function GetName(data){ // data obj ga teng bulyapdi 
//   // bizga faqat name ni uzi kerak bulsa data.name qilishimiz kerak buladi 
//   console.log(data.name) // Jahon
// }
// GetName({name:'Jahon', age:18})

// // destructuring usul 
// // lekn biz buni data.name emas alohida parametr sifatida name ni uzini yozib chiqaradigan qilishimiz mumkun
// // buni qilishda () ichiga data emas {} chiqarmoqchi bulgan key nomlari objniki blan bir hil bulishi kerak 
// function GetUser ({name,age}){
//   console.log(name) // Jahon
//   console.log(age) // 18
// }
// GetUser({name:'Jahon', age:18})

// // agar parametr obj emas oddiy holatda kelib qolsa destructuring qilgan bulsak error beradi code tuxtaydi 
// // GetUser(1) // xato bulib code tuxtaydi
// // buni tug'irlash uchun () ichiga oddiy holatda parametr beramiz va unda defoult qiymat (bush {}) beramiz agar name bulsa chiqar bulmasa chiqarma deymiz 

// const GetData = (data = {}) => {
//   console.log(data?.name) // bulmasa undefined chiqadi buldi 
// }
// GetData()

// // -#-#-#-#-#-

// let object = {name: 'Jahongir',title: 'IT Center', data: {year: 1999}}
// // biz obj ni array qilishimiz mumkun 
// console.log(Object.entries(object))
// // value: array ichida array chiqayapdi 

// // [
// //   [ 'name', 'Jahongir' ],
// //   [ 'title', 'IT Center' ],
// //   [ 'data', { year: 1999 } ]
// // ]

// // bu array bundi biz buni map qilsak buladi Object.entries yordamida 
// Object.entries(object).map((value,index) => {
//   console.log(value) // value har bitta arrayni uzini qaytaradi 
// })
// // value: [ 'name', 'Jahongir' ],[ 'title', 'IT Center' ],[ 'data', { year: 1999 } ]
// // biz bu holatdaham destructuring qilishimiz mumkun value yozganimizga faqat birinchi elementlar name title data chiqadigan qilib 

// // value array bulganligi uchun biz valueni [value] qilib destructuring qilsak buladi 
// Object.entries(object).map(([key,value],index) => { // [] ichida 1-yoilgan suz array birinchi elementiga ikkinchi yozilgani ikkinchi elementiga teng bulyapdi
//   console.log(key) // bu holatda bizga faqat birinchi elementlarni chiqaradi 
//   // value: name, title, data 
//   console.log(value) // bu holatda bizga faqat ikkinchi elementlarni chiqaradi
//   // value: Jahongir, IT Center, {year: 1999}
// })


// // -=-=-=-=-= Array

// let arr = ['Apple', 'Orange', 'Banano']
// // buni ichidagi malumotlarni olish uchun arr[1] qilardik 
// console.log(arr[0])
// // lekn bularniham destructuring qilib verablega biriktirsak buladi 
// // arrayniham destructuring qilsak buladi bunda key bulmaganligi uchun tartib raqami buyicha joylashtirishimiz kerak 
// // obj da destructuring qilganda uzining {qavslaridan} foydalanganimizdek bundaham uzining [qavslaridan] foydalanamiz 
// let [a,b,c] = arr // bunda [] ichida quygan nomimiz ahamiyatga ema emas uzimiz hohlagan nom quysak buladi 
// // birinchi a arrayning birinchi elementiga 2 - si ikkinchi elementiga qolganlariham tartib raqam buyicha teng bulib ketaveradi 
// console.log(a) // bunda bizga arraydagi 1-lement Apple ni chiqaradi 
// console.log(c) // arraydagi 3 - element Banano chiqadi 

// // Agar arrayda malumot kup bulsayu biz faqat birinchisini addelne verablega qolgan hammasini bitta verablega quymoqchi bulsak 
// // siplit operatordan foydalanamiz ...b 

// let ar = ['MERS','BMW', 'GM', 'GENISESS', 'LAMBARGINE']
// let [Car, Cars] = ar // bu holatda MERS Car ga teng buldi va qolgan hammasini Cars ga teng buldi 
// console.log(Car) // MERS 
// console.log(Cars) // ['BMW', 'GM', 'GENISESS', 'LAMBARGINE']



// ####################


// -=-=-=-=-=-=- New Date()
// bu bizga vaht ( Yil, Oy, Hafta, Kun, Soat, Daqiqa ) lar bilan ishlashda kerak buladi 

// new Date
//   new Date() - current time
//   new Date(sec) - start date / 1970, play with sec - 1000 = 1sec 
//   new Date('2023-08-07') - defult date, play with it  
//   getFullYear() - 4 digit number // 2022 - getYear() is depricated
//   getMonth() - 0~11 month by index 
//   getDate() - 1~31 day 
//   getHours() - 1~24
//   getMinutes() - 1~60
//   getSeconds - 1~60 
//   getMilliSeconds - 1~60
//   getTime() - 1970 yildan boshlab vahni secundda ko'rsatadi 

// -=-=-=-=-

// -=-=-=-=- new Date | Methode
console.log(new Date()) // bu bizga sana yasb beradi 
// value: 2023-08-06T14:23:01.974Z

// -=-=-=-=- Date.now() | Methode
// bu bizga 1970 yildan hozirgacha qancha secunt bulgan bulsa ushani chiqarib beradi
console.log(Date.now()) // 2023/08/06 soat 19:29 da chiqarganimizda bizga value: 1691332196125 chiqadi 
// biz buni urniga new Date ning Methodelaridan foydalanishimiz mumkun

// Methodes new Date 

// new Date verablega biriktirb quyamiz  new Date.aaa() qilib kub kode yozmaslik uchun 

let date = new Date() // biz bu new Date methodelari blan aniq vahtni chiqarib olishimiz mumkun 

// -=-=-=- .getTime()
// bu bizga huddi Date.now() dek 1970 yildan hozirgacha bulgan secunds ni chiqaradi 
console.log(date.getTime()) // value: 1691332434210

// -=-=-=- .getMilliSeconds()
// bu bizga millisecuntni chiqarib beradi 
console.log(date.getMilliseconds())

// -=-=-=- .getSeconds()
// bu bizga secuntni chiqarib beradi 
console.log(date.getSeconds())

// -=-=-=- .getMinutes()
// bu bizga menutni chiqarib beradi 
console.log(date.getMinutes())

// -=-=-=- .getHours()
// bu bizga soatni chiqarib beradi 
console.log(date.getHours())

// -=-=-=- .getDay()
// bu bizga bugun haftaning nechinchi kuni ekanligini chiqarib beradi 
console.log(date.getDay()) 
// value: 0 chiqaryapdi chunke bugun haftaning (1-kuni) yakshanba / haftani 0 dan hisoblaydi (index dek)

// -=-=-=- .getDate()
// bu bizga oyning nechinchi kuni ekanligini chiqarib beradi 
console.log(date.getDate()) // 6 chiqardi chunke bugun 6 - avgus

// -=-=-=- .getMonth()
// bu bizga yilning nechinchi oyi ekanligini chiqarib beradi 
// faqat bu 0 dan boshlanadi (index dek) 
console.log(date.getMonth()) // 7 chiqardi 0 dan boshlangani uchun avgus 8 - oy
//  + 1 qilib tug'ri chiqaradigan qilishimizham mumkun / bunday qilmasakham uzimiz tushinshinamiz 6 chiqarsa 7 va hokozo
console.log(date.getMonth() + 1) // 8 - bu holatda tug'ri javob chiqadi  

// -=-=-=- .getFullYear()
// bu bizga hozirgi yilni chiqarib beradi 
console.log(date.getFullYear()) // 2023


// -=- bulardan foydalangan holda  function yozib tuliq vahtni chiqarishimiz mumkun 

const getTuday = (symbol) => { // parametr 2 - usulda quyilgan 
  let date = new Date();
  // 1 - usul 

  // return `Tuday: ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}` // Tuday: 6-8-2023
  // bu holatda '-' larni uzimiz quyib chiqayapmiz buni uzgartirmoqchi bulsak bittalab uzgartirish kerak buladi 

  // biz buni parametr sfatida bersakham buladi
  return `Tuday: ${date.getDate()}${symbol}${date.getMonth()+1}${symbol}${date.getFullYear()}` // Tuday: 6/8/2023

}
// birinchi usul 
console.log(getTuday()) // Tuday: 6-8-2023
// ikkinchi usul
console.log(getTuday('/')) // parametrga nma bersak usha blan oralarini ojratadi Tuday: 6/8/2023
// buni yaxshi tomoni hohlaganimizcha buni uzgartirolamiz
console.log(getTuday('.')) // Tuday: 6.8.2023


// -=- funtion yozib tuliq soatni chiqaradigan qilamiz 

const getTime = (symbol) => {
  return `Time: ${date.getHours()}${
    symbol}${date.getMinutes()}${
    symbol}${date.getSeconds()}${
    symbol}${date.getMilliseconds()}`
} 
console.log(getTime(':')) // 2:39:35:471

// -=- Hafta kunlar nomini chiqaradigan qilish 
// hafta nomlarini yozib olamiz va ularni getDate) dan kelyotgan sonlarga biriktiramiz 

let weeks = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba']

console.log(weeks[date.getDay()]) // Yakshanba tug'ri chiqardi 
// biz kelyotgan malumotni qisqartirsakham buladi slice() blan 
console.log(weeks[date.getDay()].slice(0,5))   // Yaksh

// homework moments kutubhonasini yasab kelish   


// ####################

// -=-=-=-=- JSON - JavaScript Object Notation
// bu bizga malumotni kichik va hamma dasturlash tili uqiydigan qilib beradi 
// backend ga malumotlarham JSON farmatda boradi ham backend dan JSON formatda keladiham

// JSON har doim [] - ichida obj holatda buladi [{}] va obj key va valulari har doim 2 talik qushtirnoqda "" yozilishi shart 
// bulmasa xato buladi bitta numberni "" siz yozsak buladi 

// Misol uchun 
let user = {name:'Webbrain', year:2004} // shu kodning json variantini yozamiz 
// bizda json file ochilgan usha yirda shu kodning jason kurinishi mavjud
// [ {"name":"webbrain", "year": 2004} ] - JSON varianti

// Misol uchun 
// alert(user) // value: [object Object]
// bu holatda value chiqmaydi chunke bu obj holatida 

// biz buni JSON qilsak kiyin alert da qiymat chiqadi 
// alert(JSON.stringify(user)) // value: {"name":"Jahon","age":18}


// !-=-=-! Biz backend tayyor bulmaganda uzimizga json yordamida  vahtinchalik server qilib ishlatsakham buladi 


// Methodes
// BackEnd ga malumot yuborish malumotni JSON qilishimiz kerak 
// -=-=-=-=-=- JSON.stringify(objName,['name'],4)

// bu 3 ta parametr oladi 
//    1-si JSON ga uzgarishi kerak bulgan obj 
//    2-si [] ichida objning aynan qaysi keylari JSON bulib chiqishi 
//    3-si nistet (ichma ich) objlarda tab blan joy tashlab beradi 4 bulsa 4 ta tab 


// -=- Oddiy holat bitta parametr blan hammasini JSON qilish 
// bu bizga objni json qilib beradi 
console.log(JSON.stringify(user)) // {"name":"Webbrain","year":2004}


// -=- Replasit 2-parametrni qushib uzimizga kerakli elementlarni JSON qilish 
let a = {user:'GEEK', password:2004, id:5}
// masalan bizga faqat password blan id JSON bulishi kerak buning uchun 2 - parametrdan fotdalanamiz 
console.log(JSON.stringify(a,['password', 'id'])) // {"password":2004,"id":5} - faqat ikkalasini JSON qilib berdi 


// -=- Indertation 3-parametr blan nistet elementlarni chiqarib yaxshi uqilishi uchun joy tashlab beradi tap blan 
// yaxshiroq uqilishi uchun farmating qilib beradi 

let use = {
  name: 'John',
  year:123432,
  date: {fullName: 'Jahongir Doniyarov', age:18}
}

console.log(JSON.stringify(use, ['name','year','date','fullName','age'])) // 3 parametr bulmaganligi uchun 
// {"name":"John","year":123432,"date":{"fullName":"Jahongir Doniyarov","age":18}} bu holatda chiqadi 

console.log(JSON.stringify(use, ['name','year','date','fullName','age'],4)) // 3 parametr bulmaganligi uchun 
// value:
// {
//   "name": "John",
//   "year": 123432,
//   "date": {
//       "fullName": "Jahongir Doniyarov",
//       "age": 18
//   }
// }
// bu holatda chiqadi date ni ichidagilar 3 - parametr 4 bulganligi uchun 4 ta tab tashlab yozilgan 

// ## -=-=-=-=-=-=-=-=

// backendam bizga malumotni JSON holatda yuboradi biz uni JSOn dan oddiy holatga utgazishimiz kerak 
// BackEnd dan malumot olish 

// -=-=-=-=-=- JSON.parse()
// bu JSON malumotni obj qilib beradi 

let json = JSON.stringify(use) // malumot JSON bulayapdi 
console.log(json) // {"name":"John","year":123432,"date":{"fullName":"Jahongir Doniyarov","age":18}}

let obj = JSON.parse(json) // malumot JSONdan obj ga utyapdi 
console.log(obj)
// value: { name: 'John', year: 123432, date: { fullName: 'Jahongir Doniyarov', age: 18 } }
  



