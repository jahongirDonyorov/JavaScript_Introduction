// Clas ochishimiz uchun class va name{} yozishimiz kerak
// class Users {
//   // buni ichiga fulname fnc yozsak
//   fullName(a) {
//     console.log(`HI ${a}`)
//   }
// }

// // buni faqat constraktive holatda chaqirsak buladi

// let usr1 = new Users()
// let usr2 = new Users()

// // bizga class qanday bulsa ushanday 2 ta malumot yasab oldi
// console.log(usr1) // Users {} chiqaradi ichidagi fnc kurinmayapdi

// // biz Users ichidagi fnc ni bu ikkalasidaham ishlatolamiz
// usr2.fullName()// bundaham obj dek . blan chaqiriladi

// // Biz buni Deynamic qilishimiz mumkun ekan
// // Parametr berib

// usr1.fullName('Webbrain') // HI Webbrain
// usr1.fullName('PDP')  // HI PDP
// usr1.fullName('NT')  // HI NT

// // usr1 va usr2 Users dan malumot copy qilib olgan alohida alohida templete ikkalasini bir biriga umuman aloqasi yuq

// // Masalan: har fnc chaqirilganda age qiymati birga oshib borsin desak
// class getNumber {
//   age = 0;
//   getNum(num){
//     console.log(++this.age) // biz class  va obj larda uzining scobidan yashqaridagi narsalarni this blan olardik age ni uzini yozib quyolmazmiz
//   }
// }

// let num1 = new getNumber() //
// let num2 = new getNumber() //
// // ikkalasigaham class lar alohida alohida birikyapdi

// // num1 ni chaqirganimizda

// num1.getNum() // 1
// num1.getNum() // 2
// num1.getNum() // 3
// // har chaqirganimizda 1 qushilyapdi

// // num2 ni chaqirsak bu yana 1dan boshlanadi chunke num1 ga classimiz alohida num2 ga alohida ishlaydi
// num2.getNum() // 1
// num2.getNum() // 2

// // biz class ni tenglashtiryotganimizda class nomidan kiyin () quyayapmiz

// // let a = getNumber('John') // () bungaham paramert bersak buladi

// // lekn class paramertni tug'ridan tug'ri ololmaydi shuning uchun constraktor dan foydalanishimiz kerak buladi

// // -=-=-=-=-=- Constraktor
// // Bu bizga class chaqirilgan payt unga parametr berilsa usha parametrni olish uchun ishlatiladi
// // class chaqirilgan payt har doim constraktor birinchi yuradi siz uni chaqirishingiz shart emas

// class Constrac {
//   // constructor(title){ // constraktor chaqirilgan paytda berilgan parametrga teng buladi
//   //   console.log(title) // Jahon
//   // }
//   // welcomeMsg() {
//   //   console.log(`Hi ${title}, welcome to Webbrain`)
//   //   // bu holatda bizga error beradi chunke biz yozgan title prametr title ni nazarda tutmayapdi bu verable izlayapdi
//   //   // chunke title uzining scope dan tashqarida chaqirib bulmaydi uni constraktor ichida chaqirsak buladi
//   // }

//   // ###############

//   constructor(title){
//     // console.log(this) // class ni uzini chiqarayapdi
//     // biz global verable yaratib unga title ni tenglashtirishimiz kerak (global verable this blan yaratiladi)
//     this.title = title // biz this blan title verablesini global qildik va uni title parametiriga birlashtirdik
//   }
//   welcomeMsg() {
//     console.log(`Hi ${this.title}, welcome to Webbrain`)
//     // Hi John, welcome to Webbrain endi malumot tug'ri chiqadi
//   }
//   // -=-=-= declare variable
//   // birdan this ga teng buladigan verable constraktor dan tashqarida yoziladi  va unga let var qilib bulmaydi
//   name = 'Jahongir' // buni hohlagan joyimizda this blan chaqirsak buladi
// }

// let cons1 = new Constrac('John')
// let cons2 = new Constrac('Jorj')

// cons1.welcomeMsg()

//=-=-=-=-=-=-

// -=-=-=-=- getter settter

// // bular class daham ishlaydi bulardaham huddi obj dek ishlaydi

// // biz oddiy holatda class ichidagi functionni chaqirganimizda unga boshqa qiymat tinglab quyolmaymiz
// // cons1.getFunc = 'Webbrain' // bu holatda qilsak fnc qiymati stringa uzgarib ketadi va kiyin buni fnc sufatida chaqirolmaymiz
// // get1.getFunc()// is not a function

// class getSet {
//   set getFunc(value){ // bu value biz fnc ga qiymat tenglashtirganimizdagi qiymat parametr bulib keladi bu yirga
//     console.log(value)
//     // console.log('Getter Setter')
//   }
//   get getFunc(){
//     console.log('Getter Setter')
//   }

//   // -=-=-=-=-=-  Computer names

//   // biz deynamic function ochib beradi (function nomini deynamic usulda quyamiz)
//   ['web' + 'brain'](title){ // function nomi web + brain qushilmasi  webbrain buladi
//     console.log(title)
//   }
// }

// let get1 = new getSet()
// let get2 = new getSet()

// get1.getFunc = 'Webbrain' // yangi qiymat qushilyapdi
// get1.getFunc // get set qilingandan sung fnc ni () siz chaqiramiz

// // biz deynamic function nimizni chaqiramiz
// get1.webbrain('hello') // bezga fnc ishlab hello ni chiqarib berayapdi

// ###############

// Meros olish

// biz hamma hayvonlarni nomi va tezligini chiqarmoqchimiz
class Robbit {
  info() {
    console.log(`quyon`);
  }
  spet() {
    console.log(`Runs 12 km per hour`);
  }
}
let rb = new Robbit();
rb.info(); // quyon
rb.spet(); // Runs 12 km per hour
// shu holatda javob chiqadi lekn 5 6 ta hayvon bulsa har birining ichida spet degan fnc bittadan buladi
// har birida takrorlanganligi uchun biz bitta class ga spet fnc ni yozib olsak va boshqa class larga bu fnc yozmasakham har birini ichida bor qilishimiz mumkun
// buning uchun spet fnc yozilgan class ni boshqalariga meroslab berishmiz kerak

class AnimalsSpet {
  spet(name) {
    console.log(`Runs ${name} km per hour`);
  }
  parent() {
    console.log("U r calling parent");
  }
}

// Meroslash extends (kengayritish) blan bajariladi yani bir class ni malumotlarini kengaytirib boshqa klasnikiniham quwib beradi

class Robbits extends AnimalsSpet {
  // AnimalsSpet ning hamma malumotlari Robbit ga ham utdi // Robbit ni __proto__ siga AnimalsSpet joylashtirb quyilyapdi kurinmasaham
  info() {
    console.log(`Quyon: `);
  }
}
class Wolf extends AnimalsSpet {
  // AnimalsSpet ning hamma malumotlari Wolf ga ham utdi // Wolf ni __proto__ siga AnimalsSpet joylashtirb quyilyapdi kurinmasaham
  info() {
    console.log(`Buri:`);
  }
}

// let Spet = new AnimalsSpet() // biz spet ni chiqarib olishimiz kerak emas chunke uning qiymatlari biz tenglashtirgan class lardaham bor
let robbit = new Robbits();
let wolf = new Wolf();

robbit.info(); // Quyon:
// spetni chiqarish uchun robbit.spet qilamiz robbit ni ichida spet degan fnc yozilmagan bulsaham u qiymat bor chunke AnimalsSpet dan meros qilib olganmiz
robbit.spet(11); // Run 11 km per hour

wolf.info(); // Buri:
// bungaham AnimalsSpet ning malumotlari meros bulib utgan / bundaham spet bor
wolf.spet(10); // Run 10 km per hour

// -=-=-=-=-=- super
// bu bizga meros olgan class ichida meros bergan class ning malumotlarini (fnc) ishlatish, chaqirish uchun ishlatiladi

class user extends AnimalsSpet {
  // biz child ichida AnimalsSpet ning perent fnc ni ihslatishimiz mumkun
  child() {
    // buni ishlatish uchun super key bortidan foydalanamiz
    super.parent(); // U r calling parent
    console.log("us salom"); // us salom / bu ikkalasi us.child() qilganimizda chiqadi
  }
}
let us = new user();
// console.log(us)
us.child(); // super.parent qilganligimiz uchun parentning ham qiymati chiqdi

//  -=-=-=-=-=-=- Overidding constructor

robbit.info("Quyun"); // bu parametr AnimalsSpet gaham joylashishi kerak
robbit.spet(11);
// Quyon :
// Run 11 km per hour emas

// Quyon runs 11 km per hour chiqishi kerak

class Animal {
  // biz shartning parametirini olishimiz kerak
  // buning uchun constraktordan foydalanamiz
  constructor(name) {
   
    // bundadn vozis olgan element construkrorining ichida super blan qiymat berilgan bulsa usha qiymat bizning constructor parametirimiz (name) ga teng buladi
    // console.log(name) // endi biz bu parametrni global qilib spet da ishlatsak buladi
    this.name = name; // biz name parametirini global verable ga tenglashtirdik
  }
  spet(spet) {
    console.log(`${this.name} Runs ${spet} km per hour`);
  }
}

class Shark extends Animal {
  // bunga kelyotgan shark degan parametr constructor ga boadi
  constructor(name, title) { // Meros olgan class ning constructorida har doim super bulishi kerak bulmasa ishlamaydi Meros bergan (Animal) da esa bulish majburiy emas 
    // console.log(name) // shark
    // biz bu parametrni buning parenti Animal ga berishimiz uchun superdan foydalanamiz
    // superga berilgan qiymat uu voris olgan class (Animal) ning construktoriga teng buladi
    super(name); // bu qiymat Animal constructorining parametiriga teng buldi
    // title Animal ga yuborilmaydi faqat super ga yozilganlari yuboriladi
  }
}

let shark = new Shark("Shark"); // bu parametr constructor ga boradi
shark.spet(11); // Shark Runs 11 km per hour
// bizga tuliq javobni chiqarib berayapdi

let tulki = new Shark("Tulki"); // desak bizga tulkini chiqarib beradi
tulki.spet(10); // Tulki Runs 10 km per hour

// construcrore yozilmasaham class da defulte holatda constructore buladi
// constructor(...args){super(...args)} shu kurinishda buladi defulte constructore
// bunda superham bulganligi uchun agar biz uzimiz hohlagandek constructor yozmasak defulte ishlat hamma params ni parent class ga yuboradi 

class An {
  constructor(name) {
    console.log(name);
  }
}

class leon extends An {
  // ichida constructore bulmasa defulte constrore ishlaydi va hamma parametrni An ga yuboradi
  //   constructor(...agrs){ // hamma parametrni olyapdi
  //     super(...args) // hammasini An ga yuboryapdi
  //   }
}

let an = new An("Buri");
let le = new leon("Sher");

// An constructor ichidagi console da nma chiqadi
// Sher Buri ikkalasini qiymatiham chiqadi leon ni ichida constructore yozilmagan bulsaham defulte constructore bor degan edik
// shu holatdagi constructore
// class leon extends An{
//   constructor(...agrs){
//     super(...args)
//   }
// }
