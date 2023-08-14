// // -=-=-=-=-=-=-=- Arrays  1/3
// Muntarija
//    - Array nma ?
//    - Accessing array elemnt 
//    - new Array 
//    - Loops with arrays 
//    - Methods: lenght, at, pop, push, ,shift, unsheft, splice, slice, concat, indexOf, lastindexOf, va boshqalar

// // buni katta kantenr deb olsak buladi ichiga harhil malumot solishimiz mumkun va usha arrayni chaqirish blan ichidagi hamma malumotlarni olish imkoniyati buladi 
// // ichidagi malumotlarni keraklisini olmoqchi bulsak index buyicha [] ichida chaqoroladi 

// // array [] qavslar yordamida yasaladi va obj dek verablega biriktiriladi 
// // buning ichida hohlagan malumotimizni yozishimiz mumkun 

// //  -=-=-=-=-=- har doim index 0 dan element 1 dan boshlanadi  -=-=-=-=-=-=-=-

// // element 1    2      3      4          5     6       7        8        9
// // index   0    1      2      3          4     5       6        7        8
// let arr = [1,'salom',true,function(){},{l:1},null, undefined,Symbol(),[1234]]
// // index 0 dan boshlanganligi uchun har doim elementdan bitta kam buladi yane 9 ta element 8 index mavjud

// // buni chaqirish orqali array ichidagi hamma malumotlarni olishimiz mumkun 
// console.log(arr) // [1,'salom',true,function(){},{l:1},null, undefined,Symbol(),[1234]]

// // bu malumotlarni faqat uzimizga keraklisini olsakham buladi
// // array nomi va [] ichiga olmoqchi bulgan narsamizning indexsi yoziladi arr[1]
// console.log(arr[1]) // salomni chiqrib berdi 


// // -=-=-=-=- array methode - length
// // bu array ning uzunligini (ichida nechta element borligini ) chiqaradi
// console.log(arr.length) // 9  chiqadi chunke bizga elementni 1 dan sanaydi 

// // bu orqali eng oxirgi malumotni chiqarishimiz mumkun 
// console.log(arr[arr.length]) // arr[arr.length] === arr[9] - bu holatda hechnarsa chiqmaydi chunke arr da 9 ta index yuq value:undefined
// // bu holatda oxirgi malumotni chiqarmoqchi bulsak arr.length dan 1 ni ayirishimiz kerak chunke bizda 9 - index yuq hechnarsa chiqmaydi 
// console.log(arr[arr.length - 1]) // arr[8] yozgan bilan bir hil bizda 8 - index bulganligi uchun buni chiqarib beradi value:[1234]

// // aytishlarin mumkun shuncha ish qilmasdan arr[8] qilib quysam buladiku deb 
// // tug'ri shunday qilsaham buladi lekn array ichida 100 ga yaqin malumot bulsa uni bittalab sanab chiqishimiz kerak buladi 
// // yokeda arrayga malumot qushilib borsa hardoim arrayning eng oxirgi eng oxirgi (new) malumotini olmoqchi bulsak har yangi malumot qushilganda 
// // uni sanab arr[99] ar[100] qilib bittadan yozishimiz kerak buladi 

// // -=-=-= oxiridan bitta oldingini chiqarmoqchi bulsak -2 qilamiz 
// console.log(arr[arr.length -2]) // Symbol() chiqadi 


// // -=-=-=--=-
// // tug'ridan tug'ri [] ichida - lik qiymat yozolmaymiz 
// console.log(arr[-2]) // bu holatda undefined chiqadi 
// // chunke -2 digan index mavjud emas 
// // biz - lik qiymat kiritishimiz uchun at methode dan foydalanamiz
// console.log(arr.at(-2)) // Symbol chiqadi - qiymat orqadan sanab keladi


// -=-=-=-=-=-=-=-=-= Array destrakche 
// biz obj dek arrayniham destrakche qilishimiz mumkun 
let obj = {name:'Jahon',age:18}
let {name,age} = obj 
console.log(name) // bu holatdaham value chiqardi obj.name qilmasakham
// biz objni shu holatda destrakche qilolardik

// arrayniham qilsak buladi faqat bunda key bulmaganligi uchun element buyicha buladi va uzining qavslarida []
// element    1          2        3
let ar1 = ['Jahon', 'Doniyarov', 18, ]
// [] ichiga element buyicha ixtiyoriy yangi nom verable yozamiz 
//      1         2        3
let [FirsName, LasName, NewAge] = ar1 // bu holatda biz bu verablelarni chaqirib array ichidagi valularni olishimiz mumkun 
// 1 - verable arrayning birinchi elementiga teng 2-si 2 - elementga teng va qolganlariham shu tariqa ketadi 
console.log(FirsName, LasName, NewAge) // Jahon, Doniyarov, 18 - chiqadi 

// masalan arrayda malumot kup bulsa biz birinchisini chiqarib qolsanini bitta verablega biriktirmoqchi bulsak ...verable yozamiz 
let [ism, ...qolgani] = ar1
// birinchisi Jahon ga teng bulyapdi qolgan hammasi ikkinchi verable (qolgani) ga teng bulyapdi 
console.log(ism) // Jahon
console.log(qolgani) // ['Doniyarov', 18]

// // =-=-=-=-=-=-=-= new Array

// let ar = new Array()
// let ar1 = []
// // ikkalasini chaqirsakham birhil malumot chiqadi 
// console.log(ar) // []
// console.log(ar1) // []
// // bularning uzunligiham bir hil bulyapdi 


// // oddiy arraydan new Array ning  farqlari

// // agar biz oddiy array ichiga 5 yozsak 5 oddiy array ichdagi elementga aylanadi 
// ar1 = [5]
// console.log(ar1) // value: [ 5 ] chiqadi 

// // lekn new Array ichiga 5 kiritsak bu array ichida hech qanaqa malumoti bulmagan 5 ta item yasab beradi
// ar = new Array(5)
// console.log(ar) // value: [ <5 empty items> ] - yane 5 ta element bor deyapdi

// // bularni uzunligini kursak 
// console.log(ar.length) // new Array da value:5 chiqdi 
// console.log(ar1.length) // oddiy arrayda esa value:1 chiqdi

// // new Array bizga parametrdan array yasab berish uchun ishlatilarkan 
// // lekn bunga parametr string yokeda 1,2,3 holatida kiritilsa bu erray element yasab beradi
//  ar = new Array('7')
//  console.log(ar) // ['7'] chiqadi uzunligi 1 buladi 
//  ar = new Array(3,5)
//  console.log(ar) // [ 3, 5,] chiqaradi uzunligi 2 buladi



//  // -=-=-=-=-=-= qiymatni uzgartirish

// let ar2 = []
// // biz buning malumotini uzgartirishimiz mumkun 
// ar2[0] = 20
// // arrayning 0 - indexsiga 20 mani birlashtiryapdi 
// console.log(ar2) // [20]
// ar2[3] = 30
// // 3-indexsiga 30 ni tenglashtirdi lekn bizda 0,1,2 indexlar bulmaganligi uchun ularga bush item biriktirib ketadi 
// console.log(ar2) // [ <3 empty items>, 30 ] - bulish kerak lekn biz 0 - indexga malumot biriktirganligimiz uchun 20 2ta bush item 30 chiqaradi
// // value: [ 20, <2 empty items>, 30 ]
// ar2[3] = 'salom'
// // biz 3 indexsda turgan 30 qiymatni 'salom'ga uzgartirdik
// console.log(ar2) // value: [ 20, <2 empty items>, 'salom' ]


// // -=-=-=-=-= toString - Methode 

// // bu arrayni string qilib beradi 
// console.log(ar2.toString()) // 20,,,salom
// console.log(typeof ar2) // object - chiqadi chunke arrayning data type object edi 
// console.log(typeof ar2.toString()) // string

// // -=-=-=-=-= join - Methode 
// // buham arrayni string qilib beradi 
// console.log(typeof ar2.join()) // string 
// // buni toStringdan farqi parametr kiritsak buladi 
// console.log( ar2.join(',')) // bu holatda har bir element orasiga , quyib chiqadi value:20,,,salom
// console.log( ar2.join('')) // bu holatda vergulsiz chiqqaradi value: 20salom
// console.log( ar2.join('/')) // bu holatda har bir element orasiga / quyib beradi 20///salom


// // -=-=-=-=-=- Arraylarni qushish

// let a = [1,2,3,4]
// let b = [5,6,7,8]
// console.log(a+b) // bu holatda qushsak bizga array sifatida emas string sfatida qushib beradi 
// // value: 1,2,3,45,6,7,8 / bu string holatda bulyapdi 4 blan 5 addelne element bulishi kerak edi lekn string 
// // holatda qushilganligi uchun a ni oldiga b ni quyib quyyapdi shunga ikkalsini orasida ',' yuq 

// // -=-=- .concat() - Methode
// // bu bizga arraylarni qushish uchun ishlatiladi 
// console.log(a.concat(b)) // a ga b ni array sifatida qushib beradi 
// // value: [1,2,3,4,5,6,7,8]
// // concat() ga istaganimizcha parametr yozishimiz mumkun ekan 
// console.log(a.concat(b,'salom',['english'],{salom:'hello'})) // a ga hammasini qushib beradi ketma ketlikda 
// // value: [ 1, 2, 3, 4, 5, 6, 7, 8, 'salom', 'english', { salom: 'hello' } ]


// // No Primative data type larni hammasini type object bulganligi uchun ularni typedan ajratib olih qiyin 

// // -=-=-=-=-=- array type ni kurish
// // biz array taypeni tug'ridan tug'ri kurolmaymiz typeof blan kurganimizda object chiqadi
// // chunke array NO Primative data type Object ga kirar edi 
// console.log(typeof {}) // object
// console.log(typeof []) // object 
// // ikkalasidaham obj chiqadi chunke ikkalasiham object data type ga kiradi


// // -=-=-=-=-=-= Array.isArray(...)
// // Aynan array ekanligini bilish uchun Array.inArray(...) - Methode dan foydalanamiz 

// console.log(Array.isArray([])) // true chiqadi chunke bu array
// console.log(Array.isArray({})) // false chiqadi chunke bu array emas 


// // -=-=-=-= Array comparision 
// // [] == 0 = true 
// // [] == '0' = false 
// // [] ichida qiymat bulmaganligi uchun 0 buladi shunechun 0ga teng bulyapdi lekn 'string ichidagi ' 0 ga teng bulmaydi 
// // shu narsaga comparision deyiladi


// // -=-=-=-=-=- Array Loops 
// // array ichidagi hamma malumotni bitta bitta chiqarmoqchi bulsak 
// let user = ['Joahongir','Elshod', 'Dilshod', 'Elmirod', 'Jasur', 'Jasmin']
// // console.log(user[1])
// // console.log(user[2])
// // console.log(user[3])
// // console.log(user[4])
// // shu holatda chiqarishga tug'ri keladi arrayda 100 ga yaqin element bulsa choqiryotganda kodimiz juda katta bulib ketadi 
// // buni bitta konsonle da chiqarishimiz mumkun 

// for(i = 0; i < 5; i++){
//   // console.log(i) // 1 dan turtgacha tug'ri chiqaryapdi bu ham tug'ri usul 
// }
// // lekn bu i < 5 qilganligimiz uchun faqat 5 - elementgacha aylanadi arrayga elemetlar qushilib borsa qolganini chiqarmaydi 
// // buni oldini olish uchun i < user.length deyishimiz klerak shunda arrayga qancha element qushilsaham hammasini chiqaradi 
// for(i = 0; i < user.length; i++){
//   // console.log(i) // i bizga hamma index larni qaytaryapdi 
//   // bu indexdagi malumotlarni olib ollish uchun
//   console.log(user[i]) // har aylanganda bittadan nomer quyib boradi va boshidan ohirigacha ketma ketlikda valuelar chiqib boradi 
// }

// // yuqoridagi usul JavaScriptning eski usullaridan hisoblanadi hozir buning boshqacha osonroq variantlariham mavjud 

// // 1 - usul 
// // -=-=-=-=-= for of
// // value chiqaradi
// for(i of user){ // of (ning) - yane srray ning ichidagi malumotlarni of uzidan oldingi verablega biriktirib beradi 
//   console.log(i) // arrayni tuliq aylanadi va birdan valularini chiqarib beradi bizga index qaytarib utirmaydi 
//   // bunda user[i] qilishimiz kerak emas uzi birdan valueni chiqaradi 
// }

// // 2 - usul 
// // -=-=-=-=-= for in 
// // index chiqaradi
// for(i in user){ // in (ichida) - user ichidagi indexlarni i ga biriktirib beradi 
//   console.log(i) // bu index qaytaradi faqat birdan valuesini chiqarib bermaydi / uzi tuliq aylanadi 
//   // bunda valueni chiqarish uchun user[i] qilishimiz kerak buladi
//   console.log(user[i]) 
// }

// // ikkala usuldaham length yozishimiz kerak emas uzi arrayni tuliq aylantiradi 


// ####################


// -=-=-=-=-=-=-=- Array Methode


// 1  - .length - ex: tunicate exaple // ar.length = 3
// 2  - .at(index) - same as [index], but accepts negative new feature old browsers can't read 
// 3  - .pop() - removes last elemnt 
// 4  - .push(item) - adds an item to the lement 
// 5  - .shift() - removes last element 
// 6  - .unshift() - add last element
// 7  - .splice(index, count) / .solice(sInd , count, ...insertItem) - remove / insert  
//           - returns spliced claue / removes from origin /
// 8  - 
// 9  - .slice(sIndex, eindex) - only copy / return sliced value
// 10 - .concat (arr) - let array = [1,2,3,4]
//            - array.concat(1) === array.concat([1])
// 11 - .indexof(item,from) - search from start 
//           - cant find NaN - returns false 
// 12 - .lastindexOf(item,from) - search from end 
// 13 - .includes(value) -array ichida value bor yuqligini aniqlaydi 
//          - try with comparation 
//          - try with !
// 14 - .find vs finter - ex: try o find the same item or obj key value
//        - try with numbers
//        - try with string // localeCompare 
// 15 - .reverse - teskarisiga uzgartiradi 
// 16 - .split() - string to array 
// 17 - .join() - array to string

// -=-=-=-= Usege 

// 1. -=-=-=-=- .length
// bu bizga arrayning uzunlihini ulchab beradi 
let ar = [1,2,3,4,5,6]
console.log(ar.length) // value: 6

// 2. -=-=-=-=- .at()
//  array ichidagi malumotlarni keraklisini olish uchun ishlatiladi 
console.log(ar.at(2)) // 2 - indexdagi malumotni chiqaradi 
// buni avzalligi - qiymatham oladi 

// 3. -=-=-=-=- .pop()
// arrayning eng oxirgi qiymatini chiqarib tashlaydi  (uchiradi)
ar.pop()
console.log(ar) // value: [ 1, 2, 3, 4, 5 ] 6 ni chiqarib tashadi

// 4. -=-=-=-=- .push()
// bu arrayga malumot qishadi / qushiladigan malumot arrayning oxiridan qushiladi 
ar.push('salom',11, [0,9,8]) // nechta malumot qushmoqchi bulsa shu tariqa yozib ketishimiz mumkun 
console.log(ar) // value: [ 1, 2, 3, 4, 5, 'salom', 11, [0, 9, 8] ] - salom qushildi 

// 5. -=-=-=-=- .shift()
// arrayning boshidan malumot chiqarib tashlaydi (uchiradi)
ar.shift()
console.log(ar) // [ 2, 3, 4, 5, 'salom', 11, [ 0, 9, 8 ] ]

// 6. -=-=-=-=- unshift(...)
// arrayning boshidan malumot qushadi 
ar.unshift({name:'John'})
console.log(ar) // [ { name: 'John' }, 2, 3, 4, 5, 'salom', 11, [ 0, 9, 8 ] ]

// 7. -=-=-=-=- .splice()
// buni universal desakham buladi bu arrayga malumot qusholadi malumot olib tashlay oladi va bor malumotni uzgartiroladi 
let arr = [1,2,3,4,5]
// 2 ta paramert olsa 1 dan ikkinchisigacha bulgan indexdagi malumotni kesib oladi 
// arr.splice(0,2) // 0 - indexdan 2 indexgacha bulgan malumotlarni kesib oladi 2 ni uzi qoladi 0 va 1 olib tashlanadi 
console.log(arr) // [3,4,5] 
// 3 va undan ortiq qiymat bulsa 1 dan 2 gacha kesb olingan malumotni urniga buni quyadi 
arr.splice(0,2, 'John', 'Alisa', 'Malika')
console.log(arr) // [ 'John', 'Alisa', 'Malika', 3, 4, 5 ]

let arr1 = [1,2,4,5]
// bu yirga 3 qolib ketga biz 3 ni qushmoqchi bulsak 
arr1.splice(2,0, 3) // 2,0 degani 2 dan kiyin qushadi 0 hechnarsa uchu=irilmasin degan manoni anglatadi 3 qushiladi
console.log(arr1) // [ 1, 2, 3, 4, 5 ]

// 8.  -=-=-=-=- .slice()
// buham splice dek arraydan malumotni kesb oladi faqat bu arrayning asl holatini uzgartirmaydi 
// bu faqat kesb oladi 
let spl = [1,2,3,4]
let sli = [1,2,3,4]

spl.splice(0,2)
sli.slice(0,2)
console.log(spl) // [ 3, 4 ] - bunda kesib olingan narsalar chiqarilib yuqorilyapdi
console.log(sli) // [ 1, 2, 3, 4 ] - bunda kesb olingan bulsaham arrayning uzgai uzgarmagan
// bularni console da kursak 
console.log(spl.splice(2,2)) // bu 2 - indexdan boshlab 2 ta index kesb oladi
console.log(sli.slice(2,2)) // bu esa 2 dan 2 gacha kesib oladi

// 9.  -=-=-=-=- .concat()
let a = [1,2,3,4];
let b = [5,6,7,8]
// bu bizga arraylarni qushish ularga boshqa malumotlar qushish uchun ishlatiladi 
console.log(a.concat(b)) // a ga b ni array sifatida qushib beradi 
// value: [1,2,3,4,5,6,7,8]
// concat() ga istaganimizcha parametr yozishimiz mumkun ekan 
console.log(a.concat(b,'salom',['english'],{salom:'hello'})) // a ga hammasini qushib beradi ketma ketlikda 
// value: [ 1, 2, 3, 4, 5, 6, 7, 8, 'salom', 'english', { salom: 'hello' } ]

// 10. -=-=-=-=- .indexOf()
// bu bizga kerakli malumot arrayda nechinchi indexda borligini kursatadi 
// agar usha malumot arrayda bulsa indexsini chiqaradi bulmasa -1 chiqaradi
let arr4 = [4,1,3,4,2, 'Jahon',16,4]
console.log(arr4.indexOf('Jahon')) // 5 chunke Jahon arrayning 5 indexsida joylashga
// usha malumot arrayda 2 ta bulsa bu birinchisini indexsini chiqaradi ikkinchisi kurish uchun bu usuldan foydalanamiz 
console.log(arr4.indexOf(2, 4)) // value:4 - bu hozir  4 2 - indexdan boshlab izlaydi agar buni quymasak 4 0-indexdaham borligi uchun 0 dagini chiqaradi 
console.log(arr4.indexOf(4)) // value: 0

// 11. -=-=-=-=- .lastIndexOf
// bu ham huddi indexOf blan bir hil faqat bu ohiridan tekshirib keladi 
console.log(arr4.lastIndexOf(4)) // value: 7

// 12. -=-=-=-=- .join()
// bu arrayni valularini qushib string qilib beradi (bunga berilgan parametr har bir value orasida chiqadi)
console.log(typeof arr4.join()) // string 
// buni toStringdan farqi parametr kiritsak buladi 
console.log( arr4.join(',')) // bu holatda har bir element orasiga , quyib chiqadi value: 4,1,3,4,2,Jahon,16,4
console.log( arr4.join('')) // bu holatda vergulsiz chiqqaradi value: 41342Jahon164
console.log( arr4.join('/')) // bu holatda har bir element orasiga / quyib beradi value: 4/1/3/4/2/Jahon/16/4

// 13. -=-=-=-=- .split()
// bu stringni arrayga aylantiradi 
let str = '1,2,3,4'
console.log(str.split()) // value: [ '1,2,3,4' ]
console.log(str.split(',')) // har , kurgan joyida array ichida bitta element yaratadi value: [ '1', '2', '3', '4' ]
console.log(str.split('')) // har bitta lementni array ichida '' ga olib chiqadi value: [ '1', '2', '3', '4' ]

console.log(arr4.join('-').split('-')) // bu arrayni birinchi orasiga - quyib string qildi va - bor lementlarni arrayga yana aylantirdi
// value: [ '4', '1', '3', '4', '2', 'Jahon', '16', '4' ] - bu holda - borlar arrayga aylanganda - lar yuqoladi 

// 15. -=-=-=-=- .reverse()
// bizga errayni teskari yurgizib beradi 
let rev = [1,2,3,4,5]
console.log(rev.reverse()) // value: [5,4,3,2,1]

// 16. -=-=-=-=- .includes()
// bu bizga kerakli element arrayni ichida bor yuqligini tekshirib beradi
console.log(rev.includes(4)) // true chunke 4 rev ni ichida bor
console.log(rev.includes(41)) // false chunke 41 rev ni ichida yuq
