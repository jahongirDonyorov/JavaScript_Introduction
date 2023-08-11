// -=-=-=-=-=-=-=-=-=-=- Advanced
// JavaScript - 16 - new Map, new Set, weakMap, wearSet

// // -=-=-=- new Map (key,value colliction)
// // bu bizga obj yaratib beradi buni biz bemalol obj urnida ishlatishimiz mumkun
// let obj = {}; // {}
// let map = new Map(); // Map(0) {} - bu mapdan kelyotganini bildirib turadi Map() - uzunlikni kursatadi

// obj.title = "webbeain";
// // new Map niham huddi objni uzgartirgandek uzgartirsak buladi
// map.title = "webbeain";

// console.log(obj); // { name: 'webbeain' }
// console.log(map); // Map(0) { name: 'webbeain' }
// // biz faqat uzimizga kerakli key valuesiniham olishimiz mumkun
// console.log(obj.title); // webbeain
// console.log(map.title); // webbeain

// // farqi
// // Map(0) {} - (0) bu bizga mapni uzunligini chiqaradi
// console.log(map.size); // 0 chiqaradi chunke map ichida hechnarsa yuq webbeain tenglashtirib quyilgan

// // -=-=-=-=- Malumot qushish
// // -=-=-=-=-=-.set()
// // new Map ga malumot qushish uchun .set() Methodidan foydalanamiz
// map.set("name", "IT Center"); // birinchi qiymat key buladi ikkinchisi value
// console.log(map); // 1 Map(1) { 'name' => 'IT Ceneter', name: 'webbeain' }
// // Map(1) chiqyapdi chunke mapning ichiga biz malumot qushdik  => bu bizga name ga IT Center aloqador degani

// // biz bu qushgan malumotimizni map.name qilib ololmaymiz
// console.log(map.name); // undefined

// // -=-=-=-=- Malumot olish (chaqirish)
// // -=-=-=-=-=- .get()
// // buni olish uchun .get() dan foydalanishimiz kerak

// console.log(map.get('name')) // map ni ichidagi name nomli key valuesini chiqarib beradi value: IT Center
// console.log(map.get('title')) // undefined chidagi chunke map ichida bunaqa key yuq obj ichida bor bu buni ma.title qilsak chiqadi 

// // Yane biz map yaratganimizda ham obj yasadik ham Map yasadik 
// // Map sifatida ishlatsak map bub ishlaydi obj sifatida ishlatsak obj bulib ishlaydi 

// // Misol: map sifatidaham Obj sifatidaham birhil keyli value qushamiz 

// // obj sifatida malumot qushish
// map.age = 18

// // Map sifatida malumot qushish 
// map.set('age',19)

// // qaysi holatda malumot qushgan bulsak shu holatda chaqirolamiz 
// // . blan qushsak . blan chaqirolamiz set blan qushgan bulsak get blan chaqirolamiz 

// // obj holatda chaqirish 
// console.log(map.age) // bunda 18 chiqadi 

// // Map holatda chaqirish 
// console.log(map.get('age')) // bunda 19 chiqadi 

// // bitta mapni bir vahni uzida 2 ta obj va map yaratsak buladi va unlarni ishlatolamiz 


// // -=- Biz obj da hamma narsani key sifatida berib ketolmaymiz 
// // Misol:
// // map.1 = 1; 

// // Lekn mapda biz bularniham key qilib berishimiz mumkun ekan 
// // Misol:
// map.set( 123,'GEEK academy')
// console.log(map.get(123)) // GEEK academy ni chiqarib beradi 


// // -=-=-=-=-=- .has()
// // bu biz hohlagan key map ichida bor yuqligini bilib beradi 
// console.log(map.has(123)) // true chiqadi chunke map ichida 123 degan key bor 

// // -=-=-=-=-=- .delete()
// // bu map ichidagi malumotni uchirib tashlaydi 
// console.log(map.delete(123))
// console.log(map) // 123 degan keyni uchirib tashladi 
// console.log(map.has(123)) // false chunke 123 uchirib tashlandi 


// // -=-=-=-=-=- .clear()
// // bu hechqanday parametr olmaydi va ichidagi hamma keylarni uchirib tashlaydi 
// console.log(map.clear())
// console.log(map) // Map(0) buldi ichida umuman malumot qolmadi 
// // faqat 2 ta obj ning malumotlari qolgan value: Map(0) { title: 'webbeain', age: 18 }

// // -=-=-=-=-= defaul qiymat kiritish 
// // Map([[]]) array ichidan array ochib qiymat bersak buladi 
// let map1 = new Map([['name','Jahon'], ['age',18]])
// console.log(map1) // Map(2) { 'name' => 'Jahon', 'age' => 18 }

// // -=-=-=- .keys()
// // bu faqat keylarni chiqarib beradi 
// console.log(map1.keys()) // [Map Iterator] { 'name', 'age' }

// // -=-=-=- .values 
// // faqat value larni chiqarib beradi 
// console.log(map1.values()) // [Map Iterator] { 'Jahon', 18 }

// // -=-=-=- .entries()
// // key valularni obj ichida array sifatida chiqaradi 
// console.log(map1.entries())

// // -=-=-=- for loop (of)

// // har bitta malumotini olib beradi 
// for(i of map1){
//   console.log(i) // [ 'name', 'Jahon' ], [ 'age', 18 ]
// }

// // map1.entries qilsakham huddi shu malumot chiqadi 
// for(i of map1.entries()){
//   console.log(i) // [ 'name', 'Jahon' ], [ 'age', 18 ]
// }

// // map1.keys qilsak keylarni values qilsak valuelarni chiqqaradi  // string holatda chiqaradi 


// // -=-=-=-=- entries().next()
// // for loop dek ishlaydi faqat buni uzimiz yurgizishimiz kerak 
// let gen = map1.entries()
// // yane 1-chaqirganimizda 1-elemt chiqadi 2-chairganimizda ikkinchisi 
// console.log(gen) // [Map Entries] { [ 'name', 'Jahon' ], [ 'age', 18 ] } - 2ta element bor ekan ichida  
// console.log(gen.next()) // { value: [ 'name', 'Jahon' ], done: false } bizga birinchi elementni chiqarib berdi
// // done bizga bu oxirgi elementmi degani bu oxirgi element bulmaganligi uchun false chiqdi

// console.log(gen.next()) // { value: [ 'age', 18 ], done: false } 2-elemetni chiqarib berdi 
// console.log(gen.next()) // { value: undefined, done: true } malumot qolmagani uchun undefined va done true chiqyapdi

// //-=-=-=-=-=- forEach
// // new Map da forEach ishlaydi / forEach arraylar blan ishlas edi new Map blan ham ishlaydi 
// map1.forEach((element) => {
//   console.log(element)
// })
// // lekn map fncsini ishlatolmaymiz 
// // map1.map((element) => {
// //   console.log(element)
// // })

// // bu degani new Map ning uzini forEach bor 

// // -=-=-=-=-=- Object.fromEntries()
// // new Map ni oddiy obj qilib beradi 
// console.log(map1) // Map(2) { 'name' => 'Jahon', 'age' => 18 } 

// // bir martta map ishlatdik endi oddiy obj qilmoqchimiz 

// console.log(Object.fromEntries(map1)) // { name: 'Jahon', age: 18 }
// console.log(Object.fromEntries(map1).name) // jahon chiqaradi 
// //  map1.name qilsak undefined chiqadi chunke buni bu holatda chaqirib bulmaydi 
// console.log(map1.name)


// #################

// // -=-=-=-=-=-=- new Set (value colliction)
// // bu ham huddi new Map dek faqat bunda faqat value buladi key bulmaydi

// let set = new Set(); // Set(0) {}

// // bu hardoim yenek value qabul qiladi new Set da bitta value 2 martta chiqmaydi 
// // bitta valueni 2 martta qushsak u automatik ravishda uchirib tashlanadi 

// // -=-=-=-=-=- .add()
// // malumot qushadi 
// // new Set bulganda deblikate (takroriy) malumotlarni remove (uchirib) tashlaydi

// // console.log(set.add('name', 'Jahon')) // bunga bu holatda 2 ta malumot qushib bulmaydi new Set da key va value bulmaydi
// // bu holatda qushsakham faqat birinchisi name qushiladi 

// console.log(set.add('Jahon')) // Set(1) { 'Jahon' } 

// let obj = {name: 'GEEK'} // obj new Set ga value sifatida qushilyapdi 
// console.log(set.add(obj)) // Set(1) { {name: 'GEEK'} } - obj qushib beryapdi  

// // bz new Set ga functionnniham value sifatida qushishimiz mumkun 
// function name(params) {
//   console.log()
// }
// console.log(set.add(name))

// // bitta malumotni nechchi martta qushishimizdan qattiy nazar faqat bittasini qabul qiladi 
// set.add('Webbrain')
// console.log(set)
// set.add('Webbrain')
// console.log(set)
// // bizda ikkalasidaham faqat bitta webbeain chiqyapdi biz 2 martta quwgan bulsakda 
// // new Set da bitta malumot faqat bir martta chiqadi 

// // -=-=-=-=-=- .has()
// // new set ichida bizga kerakli malumot bor yuqligini aniqlab beradi 

// // new map da key nomi blan valueni chaqirardik bunda key yuq shuning uchun valueni uzi ham key ham value urnini bosadi 
// // biz chaqirishda yoke tekshirishda value nomini yozamiz 

// console.log(set.has('Jahon')) // true
// console.log(set.has(obj)) // true
// console.log(set.has(name)) // true - chunke set ichida uchalasiham bor 

// // -=-=-=-=-=- .delete()
// // bu malumotni uchiradi 
// console.log(set.delete('Jahon'))

// // new Set bulganda nmaga dubleketlarni chiqarib yuboradi
// // new Set yunik key qabul qilganligi uchun bitta narsani nechchi martta deblikate qilsakham qolganlari chiqib bittasi qoladi 


// ############## 
// weakMap
// bu new Map GarbageCollaction bulganda memore (heap) dan new Map malumotlarini uchurib tashlaydi
// GarbageCollaction obj larda uzi automatik ravishda ishlatilmaydigan valueni uchirib tashlaydi lekn 
// new Map da bu uchib ketmaydi uzimiz uchirishimiz kerak 

let map = new Map([
  ['name','jahon']
])

console.log(map) // Map(1) { 'name' => 'jahon' }

// biz buni ojb keyga biriktirsak buladi 
let obj = {data: map} // map qiymatlari obj key data ga tenglashdi 

console.log(obj.data) // Map(1) { 'name' => 'jahon' }
// endi biz map ni malumotlarini null ga tenglashtirsak map malumotlari memory (Heap) da qolib ketadi
map = null
console.log(map) // null buldi lekn map ning malumotlarini GarbageCollaction outomatik memory (heap) dan uchirib tashlamaydi 
// map ning eski qiymati ortiqch joy olib turaveradi 

// Biz kodimizmi new Map emas weakMap blan yozsak bizga eski memory heap da qolib ketgan valueni automatik uchirib tashlaydi 

console.log(obj.date) //  Map(1) { 'name' => 'jahon' } biz map qiymatini obj da bemalol ishlatolamiz 


let ma = weakMap([
  ['name','jahon']
])
 ma = null // bu holatda weakMap ning eski qiymati uchib ketadi 
// lekn weakMap da 

// -=-=-=-=-=- WearSet
// bu ham huqqi weakMap dek faqat new Set ga nisbatan