// -#-#-#-#-#-#-#-#-#-#- JavaScript 9

// -=-=-=-=-= Object 2/2

// // -=-=-=-=-=- this
// // this  === window = true
// // bu ikkalasi bir biriga teng va JS dagi eng katta obj lardan (js dagi hamma narsa obj)

// // this Object ga nisbatan ishlatiladi
// // this uzi turgan obj ichidagi malumotlarni qaytaradi

// let user = {
//   name: 'Jahon',
//   sayHi(){ // functionni bu holatdaham yozishimiz mumkun
//     // console.log(this) // bu holatda this uzi turgan obj (user) ni hamma malumotlarini qaytaradi

//     // console.log(`Hi ${name}`) // bu holarda 'name is not defined' bunday uzgaruvchi yuq deydi
//     console.log(`Hi ${this.name}`) // bu holatda this user hisoblanib aynan user ni ichidan chaqirganimizdek buladi
//     // console.log(`Hi ${user.name}`) // ikkalasiham bitta malumotni chiqaradi

//     // console.log(this.name === user.name) // true

//     // ikkalasi bir hil narsa
//     // Lekn this ni ishlatish maslahat beriladi chunke obj (user) nomini uzgartirishimiz mumkun
//     // agar bizar user nomini uzgartirib quysam hamma user.name larni uzgartirib chiqishim kerak buladi thisda unaqa emas
//     // obj name uzgarsaham this ona obj si hisobida ishlayveradi

//   },
//   // -=-=-=- errow functionda thi yuq
//   getName: () => {
//     console.log(`Hi, ${this.name}`) // undefined chiqadi
//   },
//   // buni faqat oddiy functionni wrapper qilish orqali thi ishlaydigan qilishimiz mumkun
//   // constraktor fnc
//   getAge: function () {
//     return () => { // fnc ichida return blan arraw fn ochib olamiz shundagina ishlaydi
//       console.log(`Hi, ${this.name}`)  // bunda javob tug'ri chiqadi
//     }
//   }
// }
// // user.sayHi(); // user ichidagi functionni ishga ushirdik

// // doim this blan ishlash

// // masalan biz obj user ni a blan tenglashtirsak user qiymatni null qilsak
// let a = user;
// user = null; // bizda user uchib ketyapdi va endi user.name da xatolik buladi
// // this esa user ning copy si a ga nisbatanham ishlayveradi
// a.sayHi();
// a.getName();
// a.getAge()(); // bu constraktor fnc ni chaqirish


// ##########


// -=-=-=-=-=- constraktor fnc
// // function ichidagi functionni chaqirish uchun shundan foydalanamz

// // function getName(){
// //   console.log(this)
// // }

// // console.log(getName()) // this obj ga ishlatilishi kerak edi biz fnc ga ishlatsak fnc ni tuliq chiqaradi(ichki malumotlarini)
// // console.log(new getName()) // getName {} - chiqaradi

// // buni ichida global verable yaratish uchun this dan foydalanamz
// function getName(){
//   this.name = 'Jahon',
//   age = 12,
//   this.sayHi = function(){
//     console.log(this) //  new getName().sayHi() holatda chaqirsakham undefined chiqadi chunki fnc ga return qaytmasa u undefined buladi
//     return 'hey' // endi hey ni qaytaradi chaqirganmzda
//   }
// }
// console.log(new getName().name) // ichidagi name ni alohida tashqarida chaqirib olsak bularkan
// console.log(new getName().age) // bunda undefined chiqadi
// console.log(new getName().sayHi()) // hey

// // -=-=-=-=-=-  New.target constraktor blan ochilgan ochilmaganligini bilish uchun
// function getName(name){
//   console.log(new.target)
// }
// getName('elshod')// undefined chiqadi - chunke konstraktor blan fnc chaqirilmagan
// new getName('elshod') // [Function: getName] - konstraktor blan function chaqirilganligi uchun

// ############

// // Qachonke obj key [] ichida kelsagina deynamic buladi

// // biz Symbol niham objga key qilolarkanmiz
// // bu bizga yunik id li key qilishimiz uchun kerak / deynamik key (dwynamek istaganimizgacha uzgartirishimiz mumkun bulgan key)

// let id1 = Symbol('id')
// let id2 = Symbol('id')

// let obj = {
//   // Symbol('id1'):909001 - bu holatda Symbol ni yozolmaymiz
//   // biz Symbol ni uzgaruvchisini uzini tug'ridan tig'ri yozishimiz kerak buladi
//   id1: '09981', // bu oddiy key
// }
// console.log(obj[id1]) // undefined chiqadi
// // [...] bu uzgaruvhini oladi va uning valusini obj ichidan izlaydi hozir id1 valusi Symbol('id') bunaqa key obj ichida yub va quyib bulmaydi

// // [] set va get qiladi

// let obj2 = {
//   [id1]:'John2',// bu uzgaruvchini yozish usuli / id1 degan uzgaruvchini valuesini bu yirga key sifatida quyadi
//   // id1 degan verable topib oladi va uzning qiymatini key sifatida quyadi
//   // [id1] === Symbol('id') qilganimiz blan faqat Symbol ni (Symbol('id')) holatda yozib bulmaganligi uchun uni verable sifatida [ichida] olsak buladi
//   // [...] keylay set va get qilishda foydalaniladi
//   // [id5]:0990, // id5 degan verable yuqligi uchun error buladi / id5 ni uzi key bulolmaydi bu holatda qchonke shunaqa verable bulsa ushaning qimati key buladi
// }
// console.log(obj2[id1])// bu holatda John2 chiqadi
// // bu hozir id1 ning qiymati Symbol('id') ni obj key sifatida izlayapdi bizda [id1] dagn key mavjud u uzgaruvchi bulganligi uchun u emas uning valusi Symbol('id') key buladi
// // demak biz izlayotgan key verabledan kelyotgan value sifatida mavjud ekan
// // bu holatda biz key nomi yane verable valusini hohlagancha uzgartirishimiz mumkun
// id1 = 'name' // bu yirda id1 valuesi name ga teng buldi
// let obj3 = {
//   [id1]:'Hello!!! I am Jahongir'
//   // Bu holatda key id1 ning valusi name ga teng bulyapdi
// }
// console.log(obj3[id1]) // Hello!!! I am Jahongir

// #################

// // Distructure

// let obj = {
//   name: 'Geek Akademy',
//   title: 'IT Center',
//   age: '34567'
// }

// console.log(obj.name)
// console.log(obj.name)// agar keyni kup chaqirsak har doim obj.name qilishimiz kerak buladi buni osonlashtirish mumkun
// // biz buni name ni uzini yozib chaqriradigan qilsak buladi
// // console.log(name) // hozir ishlamaydi chunke bu obj keyni emas balke name degan verableni izlaydi
// // buning uchun birinchi obj ichidagi keylarni chiqarib olishimiz kerak

// // const {} = obj
// // bu holatda obj {} ga tenglashtirilyapdi biz {} ichida obj keylarni olishimiz mumkun
// const {name,title,age} = obj // verables ochib ularga obj keylarni biriktiryapdi
// // verable nomi blan key nomi bir hil bulishi kerak
// console.log(name)
// // bu holatda bizar bir martta obj ichidan keylarni chiqarib olib ularni hohlagancha uzini yozib chaqirishimiz mumkun
// console.log(name)

// // let name = 'salom'; bu holatda biz verable ocholmaymiz chunke name degan verable ochilgan yuqorida

// // agar shunaqa holat bulib qolsa yane bizda name dgan verable bor obj ichidagi keyni chiqarib oishimiz kerak
// let user = 'Jahon'

// let obj2 = {
//   user:'Malika',
//   age:17,
// }
// // biz buni Distructure qilmoqchimiz
// // let {user} = obj2 // bu holatda chiqarib ololmaymiz chunke bizda user degan verable bor biz yana bitta shunaqa nomli verable ocholmaymiz

// // boshqa nom blan chiqaramiz desak key blan verable nomi birhil bulishi kerak
// // let{use} = obj2 // bu usulham bulmaydi chunke bizda use degan key yuq

// // yangi qiymat biriktirib chiqarib olishimiz mumkun
// let {user:newUser} = obj2
// // user : dan kiyin yangi qiymat biriktirildi newUser buyirga ixtiyoriy nom quysak buladi
// console.log(newUser)// bu holatda ishlaydi

// // -=-=-=-=-=-

// // obj ichidagi obj malumotlariniham Distructure qilsak buladi

// let obj3 = {
//   id:1283,
//   password:2004,
//   child: {
//     text:'testing text'
//   }

// }
// let {id, password, child} = obj3

// console.log(child) // bu holatda child objni tuliq chiqaradi
// // ichidagi qiymatni olish uchun child.name qilishimiz kerak
// console.log(child.text) // bizga child ichidagi malumotni chiqarayapdi
// // lekn biz name ni uzini yozib child ichidagi malumotni olishimiz kerak

// // childni uzini Distructure qilishimiz uchun child:{...} qilishimiz kerak

// let {child:{text}} = obj3

// console.log(text)
// // bu holatda endi text ni uzini yozibham obj3 ichidagi childning ichidagi key valusini olsak bularkan

// // agar Distructure bulmaganda biz text ni bu holatda chaqirgan bulardik
// console.log(obj3.child.text)

// /*
// Eslatma:
//    Agar Distructure qilyotganimizda {name:text} yozilsa bu usha verable (name) ning yangi nomi buladi
//    Agar {name:{}} bulsa bu name ning ichidagi keylarniham chiqarib olish buladi
// */

// #################

//  -=-=-=-=- Spread (yoymoq) operator

/* 
JavaScript'dagi "spread" (kengaytirish) operatori, massiv yoki ob'ekt ifodalarini ajratib olish orqali ularning 
tarkibidagi elementlarni yoki xususiyatlarni boshqa bir massiv yoki ob'ekt ichiga kengaytirishga yordam 
beradigan operator hisoblanadi. Spread operatori uchta nuqta belgisi (...) bilan ifodalangan.
 */

//Array

const arr1 = [1,2,3]
console.log(...arr1) // velue:1,2,3 - bu bizga [] ichidagi malumotlarni [] dan chiqarib yozib beradi 

const arr2 = [4,5,6] 
// biz bu 2 ta array malumotlarini spret yordamida 1 ta verablega biriktirsak buladi 

const NewArr = [...arr1, ...arr2]
console.log(NewArr) // value: [ 1, 2, 3, 4, 5, 6 ]

// Object

const obj1 = { a: 1, b: 2 };
// console.log(...obj1) // biz buni bu holatda chaqirolmaymiz 
// chunke bu obj ichidagi malumotlarni {} dan chiqarib quyadi bu holda sintaksis xato buladi chunke 
// a:1 xato bular faqat obj ichida bulishi kerak {a:1}
console.log({...obj1}) // bu holda chaqirsak buladi

const obj2 = { c: 3, d: 4 };
// bularniham birlashtirsak buladi 

const NewObj = {...obj1, ...obj2}
console.log(NewObj) // value: { a: 1, b: 2, c: 3, d: 4 }

// faqat 2 ta obj ni bir biriga qushib emas balke ularga boshqa qiymat qushsakham buladi 

console.log({...obj1,...NewArr})// obj1 ga NewArr ning hamma malumotlarini qushadi
console.log(...arr1, 9,2,{}) // arr1 ni yoyib quyadi 1,2,3 va ulardan kiyin 9,2,{} ni qushadi

// obj ga yana bir misol

const obj3 = {
  name:'Jahon',
  age:18,
}
const obj4 = {
  ...obj3,
  id:876,
  title:'John',
  ...obj1
}

// Bularni Function lardaham ishlatsak buladi 

function sum(a,b,c){
  return a+b*c
}

// biz sum ning parametiri a,b,c ga chaqirganda qiymat berishimiz kerak 
console.log(sum(1,4,2)) // bu oddiy usul 

// lekn biz spread yozdamidaham bersak bularkan 
let numbers = [1,2,3]// shu [] ichidagi qiymatlarni sum parametiriga berishim kerak 
console.log(sum(...numbers))// bu [] ichidagi malumotlarni yoyib beradi sum(1,2,3) qib yozgan blan bir hil 

// buni nimalarda ishlatamiz desangiz
// msalan user tomonidan kiritilgan sonlarni hisoblash kerak 
let a = 10;
let b = 9;
let c = 5;
let d = 5;
let f = 56;
let l = 6;
let g = 3;
// bular malumotlar prompt dan kelishiham mumkun 

function NewFunc(a,b,c,d,f,l,g){
  return a+c*d+b+f/l+g
}
// biz bularni har biriga bittadan parametrlarini berib chiqsak 
console.log(NewFunc(a,b,c,d,f,l,g)) // bizda kodimiz kupayb ketadi chunke parametrlar bundanham kup bulishi mumkun 
// biz buni 1 ta array [] ga yozib spread yozdamida quyishimiz mumkun 

const user = [a,b,c,d,f,l,g] // bular user kiritgan malumotga qarab har hilcha buladi 

console.log(NewFunc(...user))// bu holatda codimiz ancha kam va qulay buladi 
