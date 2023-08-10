// -=-=-=-=-=-=-=- Bugun urganamiz
// Scope nma ?
// Lexical Environment nima ?
// Closure nima ?
// Carbage collection with scapes.

// -=-=-=- Variable Scope 
//  - JavaScript - is very function oriented programming
//  - Code balcks
//      - {...} - test Variables inside and outside the scope.
//  - if, for, while - have their own scope 
//      - for(let i = 1) - i looks like outside variable, but it's not
//  - Lexical Environment - is the environment of the function where it is written.
//      - has two parts: Environment Record and Referencs to outer lexical environment 
//      - Environment Record - an object stores all local variables / local mem
//      - Reference to outer lexical enviroment - associated with outer 
//      - drow callstack
//  - Closer - function which remembers outer variables.
//  - Garbage collection - lexical enviranment is removed after fun



// -=-=-=-=-=-=- Scope 

// // buni bitta bilok desakham buladi {}, [],
// let obj = {} // {} bu obj ning Scope hisoblanadi 
// let fnc = () => {} // bu function ning Scope hisoblanadi 
// let arr = [] // [] bu array scope hisoblanadi 


// // console.log(a) // Cannot access 'a' before initialization
// // bu holatda bizga veriable borligini biladi lekn pasta bulganligi uchun veriableni bu yirda chaqirib bulmaydi deydi

// // agar umuman bulmagan veeriable ni yozsak u holatda verable is not definet chiqadi (bu uzgaruvchi topilmadi)
// // console.log(c) 
// // console.log(b)

// // lekn var da ochilgan veriable ni chaqirsak undefined chiqadi yane b degan veriable bor lekn unda qiymat birikmagan degandek
// console.log(b) // undefined
// // viz vardagi veriableni uzgartirishda yana var yozib uzgartirsak buladi 
// var b = 5; 
// console.log(b)// 5
// var b = 7
// console.log(b) // 7
// // let bilan ochilganlani bu holatda uzgartirsa bulmaydi

// let a = 1
// var b = 1


// // -=-=-=-=- Scope ni shu yordamida yaxshiroq tushinishimiz mumkun 

// { // Scope
//   let name = 'John' // let uzining Scope {} dan tashqarida ishlamaydi
//   // let scope ichida yozilgan bulsa u faqat uz scope ichida ishlaydi 
// }
// // console.log(name) // name is not defined buladi 

// // lekn biz scope ichida var yozsak uni tashqaridaham ishlatolamiz 
// {
//   var name = 'John' // bu uz scope daham undan tashqarudaham ishlayveradi 
// }
// console.log(name) // Jahon chiqaradi chunke var global yane uz scope dan tashqaridaham ishlaydi 


// // Scope function (if, for, while) larga nisbatanham ishlatiladi 

// for(let i = 0; i < 10; i++){ // () ichidagi narsalar scopedan {} tashqarida turgandek bulishi mumkun lekn bularning hammasi scope ga tegishli 
//   console.log(i) // i scope ga tegishli hsoblanadi uni faqat shuyirda ishlatsak buladi 
// }
// // console.log(i) // i is nor defined
// // biz buni buyirda chaqirolmaymiz chunke i for scope ning ichda joylashgan 

// // lekn biz bu holatda yozsak 
// for(i = 0; i < 10; i++){ // i let blan yozilmasa automatik ravishda var buladi yane hozir  i var blan ochilgan 
//   console.log(i) // bu tug'ri ishlaydi chunke uzining scope ichida 
//   // har bir aylangandagi javobni chiqaradi 
// }
// console.log(i) // i var bulganligi uchun buni tashqarida chaqirsakham ishlaydi 
// // 10 chiqaradi yane tuliq ishlab bulgandagi javobini

// // var ishlatish tavsiya berilmaydi chunke u kup joy oladi va yangi verable yaratayotganimizda 
// // adashib var a = 2 bulsaham var a = 10 qilib ketsakham bizga hatolik kursatmaydi 

// -=-=-=-=-=-=- Lexical Envirmonment
// uz Scope dan tashqaridagi malumotni uz scope ichida chaqirishida 

// Lixecal Envirmonment uzida 2 ta malumot saqlaydi local (usha scope ichidagi) malummotlar manzilini Local Memorey  (Environment Record)
// va Global (usha scope dan tashqaridagi) malumotlarning manzilini uzida saqlaydi (outer lexical enviroment)


let name = 'John'

function getName() {
  let age = 18
  // yane biz varebalni izlaganimizda lixecal envament bizga referens qaytaradi uning
  // referensi tashqaridagi verablelar manziliga ega

  console.log(name) // name uz scope dan topilmagandan sung Lixecal envament referens qaytaradi usha referensda
  // tashqaridagi veriablelar manzili buladi usha buyicha bunga name ning malumoti keladi 


  return function() {
    console.log(age,name) // bunda 2 ta lexical envament bulyapdi 
    // uz scope da age bulmaganligi uchun referens keladi referensda bundan bitta yuqori getName dagi vereblelar manzili buladi
    // ushlar ichini qaraydi agar uziga kerakli malumot bulsa oladi

    // name scope da yuq referens getName veriablela manzilini tashlaydi uyirdaham yuq referens yana bir martta ishlaydi va getName
    // danham yuqoridagi scope veriable manzillarini tashlab beradi 

    // name ga birinchi getName ning local envimenti referens buladi uyirdaham name yuqligi uchun outur envamenti referens buladi (puterga chiqib ketadi)
    // name -> getName local envament -> outer envament 
  }
}
getName()

function outer() {
  // buham Lixecal Environment hisoblanadi lekn bulda Environment Record vs Reference to outer lexical enviroment yuq
  // yane uzini memoriysini saqlab turadigan Record va tashqaridan malumot keladigan referens
}

// -=-=-=-=-=-=- Closer
// uz scope dan tashqaridagi veriablening ishlatilishiga Closer deyiladi 
// lexical envament fnc ga referens beradi faqat (manzilni kelishi) Closer esa usha narsa ishlatilishi hisoblanadi 

let a = 'GEEK'

function getUSer() {
  let b = 'webbrian'
  console.log(a) // Closer - chunke tashqaridagi verable ni ishlatyapdi
  console.log(b) // bu uzining veriablisini ishlatganligi uchun Closer emas
}