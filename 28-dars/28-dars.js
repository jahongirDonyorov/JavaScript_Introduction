// -=-=- Generator functions

// Muntarija
//    - generator function nima ? // yield, return
//    - loop with generator function
//    - ID generating with generator function with real example
//    - .next va return properties haqida

// -=-=-=-=-=-=-=-=- Generation function *
// // bu fnc oxirida * quyib yasaladi 'function* name' yoke 'function *name' shu holatda yoziladi
// function* getName() {

//   // -=-=-=-=-=- yield
//   // bu return blan bir hil va bitta ishni bajaradi
//   yield 1 // fncga 1 ni qaytaryapdi
//   yield 2
//   // returndan kiyin boshqa code ishlamas edi lekn bundan kiyin ishlaydi
// }
// // bu functionni malumotlarini tug'ridan tug'ri ololmaymiz

// const generetor = getName();
// const gr = getName();
// // bularham huddi class lardek ishlaydi ikkala veriablega alohida  alohida fnc malumotlarini copy qilib beradi birining ishlashi ikkinchisiga tasr qilmaydi

// console.log(generetor.next()) // next uzining methode bu bizga value va undan kiyin malumot bor yuqligini kursatadi 
// // { value: 1, done: false } // done bundan kiyin malumot yuqmi degani malumot bulmasa true buladi
// console.log(generetor.next()) // { value: 2, done: false } // bundan kiyin malumot bulmasaham false chiqyapdi chunke bu hali bundan kiyingisini kurmadi
// console.log(generetor.next()) // { value: undefined, done: true } // endi true chunke 3 ni tekshirdi hechqanday malumot yuq

// // next( qilmasdan malumotni ololmaymiz)

// console.log(gr.next()) // { value: 1, done: false }
// // bu yana 1 dan boshlandi u yurganlari bunga tasir qilmaydi

// // -=-=- biz ichidagi hamma malumotlarni tugaguncha olmoqchi bulsak fot loop dan foydalansak buladi
// const gn = getName()
// for(value of gn){
//   console.log(value) // 1, 2 ni chiqarib beryapdi

// }

// // buni dplite operator blanhgam qilsak buladi
// console.log([...generetor]) // 1,2 ichidagi hamma malumotni yoyib beradi

// -=-=- demak shu yirgacha generetor fnc nmaligini ba qanday ishlatilishini yushinib oldik

// #####################

// bizda kuplab malumotlar bulsa front ni uzida yunik id berishda qiynalardik id berganimizdan sung ichidagi bitta malumotni uchirib yuborsak hatoliklar bulardi

let user = [
  { id: 1, name: "Eshmat1" },
  { id: 2, name: "Eshmat2" },
  { id: 3, name: "Eshmat3" },
  { id: 4, name: "Eshmat4" },
  { id: 5, name: "Eshmat5" },
  { id: 6, name: "Eshmat6" },
];

// // delete fnc ochamiz
// const onDelete = (id) => {
//   let res  = user.filter((vl) => vl.id !== id)
//   user = res
// };

// // add fnc ochib olamiz
// const add = (usr) => {
//   // user = [...user, {id:7,name:usr}] // id ni qulda qushyapmiz
//   // lekn biz id ni har doim ruchnoy quyib ketolmaymiz buni automatik qiyadigan qilishimiz kerak
//   user = [...user,{id:user.length + 1, name:usr}] // user ni uzunligiga 1 ni qushib natijani id ga beryapdi
// };
// // add('Gulmashakar') // bu id:7 bulib qushilyapdi
// console.log(user)

// // Hozircha tug'ri ishlayapdi lekn bitta malumotni uchirib undan kiyin malumot qushsakche

// onDelete(3) // id 3 ni uchirib yuborayapdi
// add('John') // bizda bitta malumot uchirilganligi uchun buningham id bundan oldinginiham id si 7 bulib qolyapdi

// console.log(user)

// // value:
// // [
// //   { id: 1, name: 'Eshmat1' },
// //   { id: 2, name: 'Eshmat2' },
// //   { id: 4, name: 'Eshmat4' },
// //   { id: 5, name: 'Eshmat5' },
// //   { id: 6, name: 'Eshmat6' },
// //   { id: 6, name: 'John' }
// // ]

// // xatolik qanday bulyapdi ?
// // buyirda biz qulda bergan 6 ta id miz bor uzunligi 6 ga teng
// // id - 1  length - 1   id 1    length  1
// // id - 2  length - 2   id 2    length  2
// // id - 3  length - 3   delete  delete
// // id - 4  length - 4   id 4    length  3
// // id - 5  length - 5   id 5    length  4
// // id - 6  length - 6   id 6    length  5 + 1 === new id ga
// // id - 6 chunke length + 1, 6 ga teng bulyapdi

// // demak bitta malumot uchgandan kiyin qulda bergan id larimiz soni kamayadi lekn id si qulda berilganligi uhun uzgarmaydi
// // oxirgi id 6 bub turaveradi

// // biz id beryotganimizda user elementlari soniga 1 ni qushib ushani id qilib ber degandik
// // bizda bittasini uchirganimiz uchun elementlar soni 5 ta bulyapdi 1 ni qushsak 6 buladi
// // oxirgi id ham 6 edi yangi automatik beriladigan id ham 6 bulib 2 ta 6 bub qoladi

// // Misol:
// user = [
//   { id: 1, name: "Eshmat1" },
//   { id: 2, name: "Eshmat2" },
//   { id: 3, name: "Eshmat3" },
//   { id: 4, name: "Eshmat4" },
//   { id: 5, name: "Eshmat5" },
//   { id: 6, name: "Eshmat6" },
// ];

// // add('Gulmashakar1')
// // onDelete(3)
// // add('Gulmashakar2')
// // add('Gulmashakar3')
// // onDelete(7)

// console.log(user)

// // malumot  qaysi id larda qanqay chiqadi  qaysilar uchib qaysilar qushiladi

// // length 6 ga teng
// add('Gulmashakar1') // 6 + 1 = id 7
// onDelete(3) // id 3 ni olib tashlayapdi va yana length 6 ga teng bulib qolyapdi
// add('Gulmashakar2') // 6 + 1 = id 7
// add('Gulmashakar3') // 7 + 1 = id 8
// onDelete(7) // bizda id 7 2 ta edi ikkalasiham uchib ketti
// // bitta Gulmashakar3 id 8 bulib qolyapdi qolgan hammasi uchib ketti
// // console.log(user)

// // value:
// // [
// //   { id: 1, name: 'Eshmat1' },
// //   { id: 2, name: 'Eshmat2' },
// //   { id: 4, name: 'Eshmat4' },
// //   { id: 5, name: 'Eshmat5' },
// //   { id: 6, name: 'Eshmat6' },
// //   { id: 8, name: 'Gulmashakar3' }
// // ]

// bunaqa hatoliklarni oldini olish uchun Generetor fnc dan foydalanamiz

//#####################

// -=-=-=-=-=-=-=- Generetor

function* getGenerator() {
  let id = user.length; 
  while (true) {
    // oddiy fnc da while true qilib quysak tuxtamasdan yurib ketadi lekn generator fnc da yield buni tuxtatadi
    yield ++id; // shuyirda code tuxtaydi kiyin yana boshidan boshlanadi
  }
}
let generator = getGenerator();

// console.log(generator.next()); // 1
// console.log(generator.next()); // 2
// console.log(generator.next()); // 3
// console.log(generator.next()); // 4

// bu bizga tug'ri ishlayapdi endi biz buni uzimizni fnc ga quysak 

const onDelete = (id) => {
  let res  = user.filter((vl) => vl.id !== id)
  user = res
};

const add = (usr) => {
  
  // user = [...user,{id:user.length + 1, name:usr}] // bu holatda emas endi generator.next() qilamiz 

  user = [...user,{id:generator.next().value, name:usr}] // generator dan kelyotgan malumotni valuesi olyapmiz
};

// onDelete(4) // buyirda delete qiladigan bulsak bundaham hatoliklar buladi 

add('Gulmashakar1')
onDelete(1) // delete ni buyirda bitta qushgandan sung qilsak hatoliklar bulmaydi
onDelete(3)
add('Gulmashakar2')
add('Gulmashakar3')
// onDelete(7)

console.log(user)


// biz bunda parametr bersakham buladi 

function* getFunc(param) {

  // param.map((v) => {
  //   console.log(v)
  //   yield v;
  // }) 

  // bu holatda ishlamaydi chunke map uzidan array qaytaradi 
  // bu holatda ishlaydigan qilsak buladi 

  for(vl in param){
    console.log(vl)
    // yield vl
    let newVl = yield vl // bu next dan kelyotgan paramga teng buladi 

    console.log(newVl)
  }
}

const gt = getFunc([1,2,3,4])

console.log(gt.next())  // 1
console.log(gt.next())  // 2
console.log(gt.next())  // 3


// next ga bergan value larimiz uzining valuesiga qushilishi kerak 

function* addParam(param) {
  let i = 0;
  while (true) {
    // next dan kelyotgan param yield ga teng let a = yield bu usha valuega teng buladi 
    let gn = yield ++i;
    if(gn) i += gn 
  }
}

let addPar = addParam()

console.log(addPar.next()) //  i 1
console.log(addPar.next(3)) // i 2 + 3 = 5
console.log(addPar.next(5)) // i 3 + 5 = 8

// yield vs return
// yield kodni vahtinchalik pause qilib turadi return tuxtatib quyadi