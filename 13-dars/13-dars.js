// =-=-=-=-=-=-=-=-= Array 2/3
// -=-=-=-=- Advanced Array Methods
// 1 - .find(callback(item,index,array)) - find item
// 2 - .findIndex(callback(item,index,array)) - return index from end
// 3 - .findlastIndex(callback(item,index,array)) - return index for end
// 4 - .reduce(reducer(sum, current),initilVal) - see ref below
//          - reducer always returns
// 5 - .sort(callback()) - joylashish urnini uzgartiradi
// 6 - .filter(callback(item,index,array)) - returns all posibilties
// 7 - .forEach(item,index,array) - has not return
// 8 - .map(item,index,array)  -has return // trasform
// 9 - .every(callback) - check every item and return true / false
// 10 - .some(callback) - check some of item and return true / false
// 11 - .fill(value, stratIndex, endindex) - filling
// 12 - .copyWithin(targetPos, strat, end) - [0,1,2,3,4,5]
//        -copyWithin(0,3,4) // 3,1,2,3,4,5 - .copyWithin(1,2,3) // 0,3,2,3,4,5
// 13 - .flat(layer)  - [1,2,3,[[[4]]],5]  // defaul 1
//        - .flat(1) // [1,2,3,[[4]],5]
//        - .flat(2) // [1,2,3, [4],5]
//        - .flat(3) // [1,2,3,4,5]
//        - .flat(infinity) // [1,2,3,4,5]
// 14 - .flatMap(callback) - [1,2,[3,4],[5]].flatMap(v=v) // [1,2,3,4,5]
// 15 - .Array.from(any, callback) - new array yasab beradi
//         - Array.from('webbrain') // ['w','e','b','b','r','a','i','n']
//         - Array.from([1,2,3], (x)=>x+x) // [2,4,6]
//         - range - Array.from({length: (stop - start) / step * 1}, (_,i) => strat + i * step)
// 16 - .new Set(arr) - removes deplicate ex: new Set([1,2,3,4,4,5,6,6]) // [1,2,3,4,5,6]
// 17 - .new Map() - let mapper = new Map([[1,'a'],[2,'b'],[3,'c']])
// 18 - .
// 19 - .
// 20 - .
// 21 - .
// 22 - .
// 23 - .
// 24 - .
// 25 - .
// 26 - .
// 27 - .
// 28 - .
// 29 - .
// 30 - .

// // -=-=-=-=-=-=- Filter
// // bizga malumotlaarni filterlab beradi

// // fil.filter(()=>{})
// // filter har doim calback function oladi functionning 3 ta parametiri bor
// //  1    2                3
// // fil.filter((value,index,array)=>{})

// // 1 - parametr array ichidagi valueni chiqarib beradi
// // 2 - parametr arran ichidagi indexlarni chiqarib beradi
// // 3 - parametr array ni uzini nazarda tutadi bu kup ishlatilmaydi

// // bu huddi for loop dek ayalanadi har aylangada parametrlar array ichidagi value va indexlarga bitta bitta teng bub boradi
// let a = [1,2,'salom',6,{a:12}]

// a.filter((value,index) => { // calback fnc hardoim return blan qaytishi kerak
//   // console.log(value) // value:  1 2 salom 6 { a:12 }
//   // console.log(index) // value: 0 1 2 3 4
// })

// let b = [1,32,3,4,55,64,0]
// let res = b.filter((value, index) => {

//   // return qilganimizda true bulgan elementlar rest (array) ga qushiladi false bulsa qishilmaydi
//   // return false
//   // return true

//   // true false ni 0 va 1 blan ham ifodalasak buladi
//   // return 1 // bu holatda kup chilik 1 chiqadi deydi lekn 1 true bulgamligi uchun buni true deb hisoblaydi va trueda chiqqan malumot 1 daham chiadi
//   // 0 qilsakham huddi shunday false da chiqaan hamma narsa bundaham chiqadi

//   // valueni uzini return qilsak ham buladi
//   return value // valueni uzini chaqirsak bu bizga 0 larni ignor qilib yuboradi
//   // [ 1, 32, 3, 4, 55, 64 ] - 0 lar yuq uchirilib qashlangan

// })

// // true qaytgan holati res
// console.log(res) // [1,32,3,4,55,64] - resga malumotlar qushilyapdi

// // false qaytgan holati res
// console.log(res) // [] - chunke false bulganda hechnarsa qaytmaydi

// // -=-=-=- filtirdan foydalanib kuramiz
// // bizga faqat 10 dan kichik sonlarni qaytarishi kerak

// let rest = b.filter((value,index) => {
//   return value < 10 // true bulgan sonlar restga qushilib boradi false lar esa qushilmaydi

// })
// console.log(rest) // [ 1, 3, 4, 0 ] - faqat 10 dan kichiklarni chiqaryapdi

// // Biz bu narsani string ga nisbatanham ishlatishimiz mumkun ekan

// let c = ['orange','apple','banana','kiwi']
// // harifi 5 tadan kup bulgan malumotlarni chiqarib tashlasin desak

// rest = c.filter((value,index) => {
//   return value.length <= 5
// })
// console.log(rest) // [ 'apple', 'kiwi' ]

// // masalan bizda array ichidagi obj da talabalar ruyhati bor ulardan ismi, yoshi, id, lari mavjud
// // yoshi 2002 bulgan talabalarni bizga chiqarsin

// let student = [
//   { id: 1, year: 2001, name: 'Elshod'},
//   { id: 2, year: 2003, name: 'Begzod'},
//   { id: 3, year: 2004, name: 'John'},
//   { id: 4, year: 2004, name: 'Boymirod'},
//   { id: 5, year: 2002, name: 'Xusayin'},
//   { id: 6, year: 2003, name: 'Saddam'},
//   { id: 7, year: 2002, name: 'Belladen'},
//   { id: 8, year: 2003, name: 'Jorj'},
//   { id: 9, year: 2002, name: 'Jurabek'}
// ]
// let ar = student.filter((a,b)=>{
//   return a.year === 2002
// })
// console.log(ar) // bizga yoshi 2002 bulganlarnigina chiqaryapdi Xusayin, Belladen, Jurabek
// // masalan talabaning baholari bulsa biz bahosi GPA ga qarab chiqar deyishimiz ham mumkun

// ####################

// // -=-=-=-=-= sort()
// // buham filter qilib beradi
// // array malumotlarini aske kode buyicha ketma ketlikda joylashtiradi

// let a = [2,5,1,5,3,7,5]
// let b = [1,3,83,65,33,73,25,77]

// console.log(a.sort()) // [1,2,3,5,5,5,7] - ketma ketlikda joylashtiryapdi aske kode buyicha
// console.log(b.sort()) // [1,25,3,33,65,73,77,83] - 2 xonali sonlarda sonning birinchi raqamiga qaram joylashtiradi 255 hulsaham 3 dan oldin kuradi chunke 2 3 dan oldin keladi
// // Bu holatda tugri ishlamaydi bizga tug'ri ishlashi uchun calback fnc klerak buladi

// let res = b.sort((a,b) => {
//   // return a - b // bu holatda js uzining algaretimidan foydalanadi  value:  1,  3, 25, 33,65, 73, 77, 83
//   // har bitta sonni olib uzidan kiyingilariga solishtirib chiqadi kichigindan kattasiga qarab filterlaydi
//   return b - a // bu teskarisi jkattasidan kichigiga qarab taqqoslaydi  value: 83, 77, 73, 65,33, 25,  3,  1
// })
// console.log(res)

// // buniham stringa nisbatan ishlatsak buladi
// // aske kod ketma ketligida joylashtiradi
//  let str = ['orange','apple','banana','kiwi']

//  console.log(str.sort()) // [ 'apple', 'banana', 'kiwi', 'orange' ] aske kode buyicha chiqaradi

//   str = ['orange','apple','Banana','Kiwi']
//  // aske kode da katta harflar birinchi keladi

//  console.log(str.sort()) // value: [ 'Banana', 'Kiwi', 'apple', 'orange' ]
//  // buni tig'rlash uchun localeCompare dan foydalanamiz
//  // localeCompare bizga katta harflarni ignor qilib beradi endi alifboga qarab filtir qiladi
//  console.log(str.sort((a,b) => a.localeCompare(b))) // [ 'apple', 'Banana', 'Kiwi', 'orange' ]

//  // yuqoridagi studentlar misolida kursak

//  let student = [
//   { id: 1, year: 2001, name: 'Elshod'},
//   { id: 2, year: 2003, name: 'Begzod'},
//   { id: 3, year: 2004, name: 'John'},
//   { id: 4, year: 2004, name: 'Boymirod'},
//   { id: 5, year: 2002, name: 'Xusayin'},
//   { id: 6, year: 2003, name: 'Saddam'},
//   { id: 7, year: 2002, name: 'Belladen'},
//   { id: 8, year: 2003, name: 'Jorj'},
//   { id: 9, year: 2002, name: 'Jurabek'}
// ]

// let rest = student.sort((a,b) => {
//   return a.year - b.year // bu yil buyicha ketmaketlikda ketishi uchun ishlatiladi
//   // yili eng kattasidan kichigiga qarab filterlanadi
//   // agar biz ismlarga nisbtan filter qilmoqchi bulsak
//   return a.name.localeCompare(b)  // harfga nisbatan harflarning ketrma ketligi buyicha filter qilib beradi
// })
// console.log(rest)

// search va filter farqi
// search malumotni joylashish urnini uzgartiradi
// filter uzimizga kerakligi qolib qolgani chiqib keratadi

//####################

// -=-=-=-=-=- find
// find filter blan birhil buham filter qilib beradi va bungaham callback yozilishi kerak
let num = [1, 2, 34, 3, 25, 44, 0];
// bu true false da ishlaydi true bulsa code tuctaydi
console.log(
  num.find((value) => {
    return value === 34; // valusi 34 ga teng bulganini chiqar degani
  })
);

let student = [
  { id: 1, year: 2001, name: "Elshod" },
  { id: 2, year: 2003, name: "Begzod" },
  { id: 3, year: 2004, name: "John" },
  { id: 4, year: 2004, name: "Boymirod" },
  { id: 5, year: 2002, name: "Xusayin" },
  { id: 6, year: 2003, name: "Saddam" },
  { id: 7, year: 2002, name: "Belladen" },
  { id: 8, year: 2003, name: "Jorj" },
  { id: 9, year: 2002, name: "Jurabek" },
];
// id 5 ga teng bulgan studentni name ni chiqar desak
let res = student.find((value) => {
  return value.id === 5;
});
console.log(res.name); // Xusayin chiqayapdi chunke uning id si 5 ga teng

// filter vs find farqi 

// filter uziga kerakli narsani izlayotganda masalan id:3 ni [] ichidan 3 ni topgandan kiyinham array ni tuliq kutib chiqadi 
// bizga 3 kerak birinchi 1 ni kuradi kiyin 2 ni va 3 topildi lekn filter 4,5,6,7,8,9 larniham kurib chiqadi 

// find esa 3 ni topgandan kiyin tuxtaydi qolganlarini kurmaydi shuning uchun filterdan tezroq ishlaydi 

// ikkalasiham bitta ishni qiloladi lekn uz urnida ishlatganimiz yaxshi 
// filterni uz nomi blan filter bror narsani sartirofka qilish kerak bulganida ishlatsak buladi
// find ni uz nomi blan find bror narsani topadi buldi 

// -=-=-=-=-=- findIndex
// bu indexsini qaytaradi uni ichidagiu malumotni uqib bulmaydi 
// bu bizga usha id 5 bulgan talaba nechinchi indexdaligini bilib berish uchun kerak 

 res = student.findIndex((value) => {
  return value.id === 5;
});
console.log(res.name); // undeffined qaytaradi - chunke bu index qaytarganligi uchun uning malumotini olib bulmaydi 
console.log(res) // 4 - id 5 bulgan studend 4 indexda ekan 

// -=-=-=-=-=- findlastIndex
// findIndex blan bir xil faqat bu oxiridan qidiradi 

//####################
