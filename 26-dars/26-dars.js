// Statec

// class Academy {
//   // Academy ochilgan vahti 
//   age = 0;
//   getYear() {
//     // har ishlaganda 1 yil utgan buladi va 1 qushilib boradi 
//     console.log(++this.age)
//   }
// }

// let student1 = new Academy
// let student2 = new Academy
// // har biri uchun bittadan templete ochib beradi ikkalasi alohida alohida buladi (malumotni bitta joydan oladi lekn alohida ishlaydi)
// // bittasini uzgargani ikkinchisiga tasir qilmaydi (age ikkalasiga alohida alohida beriladi)

// // birinchi yil kelgan studentlar
// student1.getYear() // 1  / Academy ochilganiga 1 yil buldi
// // ikkinchi yil ham shu studentlar uqidi
// student1.getYear() // 2 / Academy ochilganiga 2 yil buldi 
// // uchinchi yil yangi studentlar keldi 
// student2.getYear() // 1 / Academy ochilganiga 3 yil buldi 
// // lekn yangi studentlar kelganligi uchun bu yana 1 dan boshlab hisoblayapdi ammo Academy ochilganiga 3 yil bulgan 1 yil emas 
// // biz buni static qilishimiz kerak yane hamma uquvchi uchun Academy bir vahda ochilgan uni vahti boshqa uquvchilar uchun uzgarib qolmaydi 
// // yangi uquvchi kelsaham Academy ochilgan vahti boshidan emas davomidan ketishi kerak 

// // Nechta student qilsakham hammasini bitta templete qilishimiz kerak 
// // Biz buni tug'irlash uchun Static dan foydalanamiz 
// class GEEK {
//   static year = 0 // satatic veriable
//   // year ni static qildik 
//   getYear(){
//     // static malumotni chaqirganimizda biz this ishlatolmaymiz class nomi blan chaqiramiz 
//     console.log(++GEEK.year)
//     // getYear  ni qancha har hilcha verable lar bilan chaqirsakham u davom etib ketaveradi 
//   }
//   // biz fnc ni uziniham static qilishimiz mumkun ekan 
//   static getYear(){ // satatic function 
//     console.log(++this.year) // buni static qilsak fnc nomini yozishimiz shart emas this blan chaqirsakham buladi 
//   }
// }
// // static malumotlarni chairishda constraktor yozmaymiz bularni tug'dan tug'ri chaqiramiz 
// let st1 = new GEEK
// let st2 = new GEEK
// // bu holatda ikkalasigaham bitta static ochilyapdi bittasini uzgargani ikkinchisigaham tasir qiladi 

// st1.getYear() // 1 / ochilganiga 1 yil buldi 
// st1.getYear() // 2 / ochilganiga 2 yil buldi 
// st2.getYear() // 3 / ochilganiga 3 yil buldi 

// // bunda yangi talabalar kelsaham vaht davomidan ketyapdi boshidan boshlanmayapdi

// // static holatda tug'ridan tug'ri chairiladi 
// GEEK.getYear() // 4
// GEEK.getYear() // 5
// GEEK.getYear() // 6
// // bitta class dan chaqiryapmizmi qanday chaqirsakham davom etib ketadi 


// ###################


// -=-=-=-=-=-=- Private and Protected
// uzer kurishi kerak bulgan va kurishi kerak bulmagan elementlar bor 


// masalan biz bitta kampanyada ishlayapmiz bitta code bor uni juniorlar tigishi mumkun emas 
// biz har doim ularga buni tegish mumkun emas deb aytolmaymiz shuning uchun class larda Private bor 

// -=-=-=-=-=- Protected verable 

class Protected {
  // JS da public (hamma ishlatsa buladigan) bulgan verables ning oldidan _ quyib yozsak yaxshi buladi 
  // bu bizga verable Private emasligini bildiradi (buning fazifasi faqat shu) bror amal bajarmaydi (buni quymasdan yozsakham buladi lekn buni quyganimiz yaxshi)
  _name = 'Webbrain'
  // protected #name yoziladi (tegib bulmaydigan verable ligini ogohlantiradi) bu faqat scope ichida ishlaydi tashqarida chaqirib bulmaydi 
  #protacted = 'dont touch it'
  getName() {
    console.log(this.#protacted)// buyirda malumotni chiqaradi 
    // lekin buni class dan tashqarida ishlatolmaymiz 
  }
}

let pr = new Protected

console.log(pr) // Protected { _name: 'Webbrain' } - bizga proptacted verable valueda chiqmaydi 

// Bi buning qiymatini getter setter blan uzgartirishimiz mumkun 
class Protec {
  _name = 'Webbrain'
  #protacted = 'dont touch it'
  get getName() {
    console.log(this.#protacted)
  }
  set getName(value) {
    this.#protacted = value
  }
}
let pro = new Protec

pro.getName // dont touch it

pro.getName = 'I want to touch it' // qiymat uzgaryapdi

pro.getName // I want to touch it

// uzgartirsak buladi faqat tegishli (ruxsat berilgan) kishilargina bunga tegsin degan manoni bildiradi 
// # blan ochilgan kodlarni juniorlarga teginishni taqiqlab quyishimiz mumkun ularga faqat _ blan boshlanganlarni uzgartirishi mumkun deb aytib quysak buladi 

// console.log(pro.length) class larda array va obj Methodelari ishlamaydi biz buni ishlaydigan qilishimizham mumkun ekan 


// -=-=-=-=-=-=-=- Built-in Clasess 
// class Array Object dan meros olishi ham mumkun 
// bu holda Arraydan olsa arrayga ishlatiladigan barcha Methodelar bundagaham ishlaydi Object dan olsa objda ishlaydigan barcha Methodelar ishlaydi 

// -=-=- Array

// Oddiy meros olgandek extends dan foydalanamiz endi bror clasdan emas eng katta bosh array (Array) dan meros olamiz 
class Arr extends Array{} // Arrayning barcha hususiyatlari bunga utdi  
let ar = new Arr()
// bu holatda biz ar. qilib arrayning barcha methodelarini ishlatishimiz mumkun buladi 
console.log(ar.length) // class ichidagi elementlar sonini (uzunligini) chiqarib beradi

// -=-=- Object

class Obj extends Object{}
let obj = new Obj
// bu holatda biz obj. qilib Objectning barcha methodelarini ishlatishimiz mumkun buladi 
console.log(obj.valueOf) // vlaularni chiqarib beradi 


// #################### 


// -=-=-=-=-=-=- instanceof
// bu bizga bir class ikkinchisidan extends (meros olgan) copy bulganligini texshirib beradi

console.log(Arr instanceof Array) // true 
console.log(obj instanceof Object) // true 
console.log(Array instanceof Protected) // false - chunke Array Protected dan meros olmagan (copy bulmagan)

let a = []

console.log(a instanceof Array) // true - chiqadi - chunke a ning ham qiymati array bunikiham array ikkalasining malumotlari bir hil 
console.log(a instanceof Object) // true - chiqadi - array ning ham data type obj (array ham obj ga kiradi) 

let b = () => {}

console.log(a instanceof Array) // false - chiqadi - chunke b function array emas va arraydan merosham olmagan
console.log(a instanceof Object) // true - chiqadi - chunke b ning type ham obj (functionham obj ga kiradi)

// errorni qanaqa type da ekanligini aniqlab beradi 


// -=-=-=-=-=-=- Mixins 
// class larni qiymatini extends ishlatmasdan bir biriga tenglashtirish (meros olish)

// Object.assign() // bu bizga obj larni bir biriga qushib berardi buni class daham ishlatsak buladi
// biz bu ishni class larda extends  (meros olish) yozdamida bittasining qiymatini ikkinchisiga tenglashtirardik 

// extends ishlatmasdanham buni Mixins Object.assign() yozdamida qulda qilishimiz mumkun ekan 

class Users {
  getName(){
    console.log('no name')
  }
}

let us = {
  info() {
    console.log('no info')
  }
}
let ur = new Users()

// ur.info() // bunda ishlamaydi chunke users ni ichida info yuq  / is not a function chiqadi

// ikkalasining malumotlarini birlashtiramiz 
Object.assign(Users.prototype, us) // userning prototype ga (malumotlariga) us ning malumotlari qushildi

ur.info() // bunda infoning qiymatini chiqaradi



// -=-=-=-=-=- Homework 

// Error nmada
class Animal {
  constructor(name) { // bunga parametr kelmagan biz super yozdamida rabbit dan parametr yuborsak hatolik tuxtaydi 
    this.name = name
  }
}

class Rabbit extends Animal{
  constructor(name){ // error super ishlatilmaganligi uchun chiqyapdi
    // buning parentiga Animal ga super yozdamida parametr biriktirishimiz kerak
    super(name)
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('Wite Robbit'); // Error: this is not defined 
// alert(robbit.name);
console.log(rabbit.name)


// Error nmada 
class Rabbits extends Object{ // Meros olgan class constructorida super bulmassa xatolik buladi bunda super yuqligi uchun xatolik buldi
  constructor(name){
    super() // bush bulsaham super yozishimiz kerak bu ota elementiga argument qaytarishi kerak 
    this.name = name
  }
}

let rabbits = new Rabbits('Rab');
// alert(rabbits.hasOwnProperty('name')); // Error
console.log(rabbits.hasOwnProperty('name')); // Error