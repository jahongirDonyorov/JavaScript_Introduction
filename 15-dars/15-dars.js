// -=-=-=-=-=-=-=-=-=-=-=-=- BASICS 
// -=-=-=-=--=- JavaScript 15

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


