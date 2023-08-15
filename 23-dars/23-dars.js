
// -=-=-=-=- Advanced Object | setter and getter function 

// Muntarija 
//    - properties flag and descript
//    - defineProperty 
//    - getOwnPropertyDescriptor
//    - setter and getter with function 


// -=-=-=-=-=-=-=-=-  Flag 

// let user = {name:'webbrain', title:'IT Center', getName(){}}

// // biz bu malumotni 

// // write (update) - yangilashimiz mumkun boshqa malumotga 
// // delete - uchirib tahlashimiz mumkun 
// // loop - ichidagi har bir malumot ustida ishlashimiz mumkun 
// // value - value sini olib uzgartirishimiz mumkun 

// // -=-=- bularni har bittasini cantrol qilishimiz mumkun ekan yane obj ni yoke obj ichidagi hohlagan elementimizda 
// // bitta amalni ishlaydigan bittasini ishlamaydigan qilishimiz mumkun ekan 

// // Avval kurgan butun boshli objga birdan tasir qiladigan usullar 


// // -=-=-=- Butun obj ga qullaniladigan usullar bularni avvalham kurgan edik 
// // Bular birdan hamma hamma usullarni ishlamaydigan qiladi 

// // -=-=-=-=- Object.freeze()
// // bu objni muzlatib quyardi biz malumotni uzgartirib qushib olib tashlab bulmaydi 

// // -=-=-=-=- Object.seal()
// // bu ham objni muzlatadi faqat bunda bor valueni uzgartirsak buladi 


// // lekn menga obj ichidagi bitta elementni faqat bitta usuli kerak bulmasa uni olish uchun flagdan foydalanamiz 

// // -=-=-=-=- Object.getOwnPropertyDescriptor(obj,'key')
// // bu bizga kerakli obj ichidagi keyda qaysi properties statuslarini kursatadi 

// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// // {
// //   value: 'webbrain',
// //   writable: true, - update qilishga
// //   enumerable: true, - loop bulganda lestga qushish qushmaslikda
// //   configurable: true - uchirish uchirmaslikda
// // } 
// // hammasi true yane yozsa, uchirsa, yangilasa buladi

// // -=-=-=-=- Object.defineProperty(obj,'key',{statuts sitting})
// // bu 3 ta parametr oladi 

// // 1 - object 
// // 2 - uzimizga kerakli key 
// // 3 - nmasi ishlash ishlamasligi writable: true/false 

// // -=-=- 3 - params writable 
// // update qilishni nazorat qiladi
// Object.defineProperty(user, 'name', {writable:false})
// // inde obj ichidagi name ni biz update qilolmaymiz
// user.name = 'IT'
// console.log(user) // { name: 'webbrain', title: 'IT Center' }
// // name webbrain bulib turibdi uzgarmagan 

// // -=-=- 3 - params configurable 
// // delete qilishni nazarot qiladi 
// Object.defineProperty(user, 'title', {configurable:false})
// delete user.title
// // delete user.name
// console.log(user) // { title: 'IT Center' }
// // title configurable false bulganligi uchun uchib ketmadi nameda u uzgartirilmagan defoult true turadi 

// // -=-=- 3 - params enumerable 
// // loop qilganimizda bizga kerakli key ni chiqish chiqmasligi uchun ishlatiladi 
// for (vl in user){
//   console.log(vl) // name, title, getName chiqyapdi
//   // bizga gitName chiqmasligi kerak  
// }

// Object.defineProperty(user, 'getName', {enumerable:false, writable:false}) 

// for (vl in user){
//   console.log(vl) // name, title chiqyapdi 
//   // biz getName ni chiqmaydigan va update qilib bulmaydigan qildik 
// }


// -=-=-=-=-=-=-=-=-= setter and getter 


const user = {
  name: 'webbrain',
  last: 'Academy',
  // biz ful name ni chiqarishimiz kerak buning uchun fnc yozamiz
  fulName(){
    console.log(this.name, this.last)
  }  
}
user.fulName(); // fullName chiqadi: webbrain Academy

// biz uzimiz yozgan qiymatlar ful namega utishi kerak bulsa 
// user.fulName = 'eshamat toshmat' // bu qiymat lar name blan last ga teng bulib ful name da qushilib chiqishi kerak
// lekn bu holatda unday qilib bulmaydi 

user.fulName() // bundaga fnc yuq deydi chunke uning qiymati stringa aylanib ketti stringni ( blan chaqirib bulmaydi)

// biz buni bu holatda qilsakham buladi 
user.name = 'Eshmat'
user.fulName() // Eshmat Academy / bu yirda 2 ta amal bulyapdi malumotni uzgartiryapdi va uni chaqiryapdi

// lekn biz buni bitta fullName ga qilmat berib birdan uzgaradigan qilmoqchimiz 
// buning uchun getter and setter dan foydalanamiz 

// setter set qiladi getter get qiladi 

const users = {
  name: 'webbrain',
  last: 'Academy',
  get fulName(){ // oldiga get qushib quysak bu getter buladi
    // getter fnc ni chaqiryotganda () qavs fulName() quyilmaydi fulName buladi 
    console.log(this.name, this.last)
    // get bulgandagina console ishlatiladi
  },  
  // set qilishim uchun shu fnc ni yana yozishimiz kerak set blan 
  set fulName(value){ // bu har doim bitta parametr olishi kerak agar ishlamaydi 
    // valuga {} holatdagi malumotlarimiz keladi eshmat toshmat 
    // usha valuelarni users ni ichidagi name va lastga tenglashtirishimiz kerak 
    this.name = value.name
    this.last = value.last 
    // console.log((this.name, this.last)) // value bulsa chiqaradi bulmasa buni chiqaradi
    // set bulganda console ishlatilmaydi hatoliklar buladi  
  }  
}
// users.fulName = 'eshmat toshmat' // biz buni name va last ga tenglashimiz kerak 
users.fulName = {name:'Eshmat', last:'Toshmat'}
users.fulName; // () quymasdan ham get bulgan fnc ni chairsak buladi