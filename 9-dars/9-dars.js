// -#-#-#-#-#-#-#-#-#-#- JavaScript 9 

// -=-=-=-=-= Object 2/2

// -=-=-=-=-=- this 
// this  === window = true 
// bu ikkalasi bir biriga teng va JS dagi eng katta obj lardan (js dagi hamma narsa obj)

// this Object ga nisbatan ishlatiladi 
// this uzi turgan obj ichidagi malumotlarni qaytaradi 

let user = {
  name: 'Jahon',
  sayHi(){ // functionni bu holatdaham yozishimiz mumkun 
    // console.log(this) // bu holatda this uzi turgan obj (user) ni hamma malumotlarini qaytaradi 
    
    // console.log(`Hi ${name}`) // bu holarda 'name is not defined' bunday uzgaruvchi yuq deydi 
    console.log(`Hi ${this.name}`) // bu holatda this user hisoblanib aynan user ni ichidan chaqirganimizdek buladi 
    // console.log(`Hi ${user.name}`) // ikkalasiham bitta malumotni chiqaradi 

    // console.log(this.name === user.name) // true 
    
    // ikkalasi bir hil narsa
    // Lekn this ni ishlatish maslahat beriladi chunke obj (user) nomini uzgartirishimiz mumkun 
    // agar bizar user nomini uzgartirib quysam hamma user.name larni uzgartirib chiqishim kerak buladi thisda unaqa emas 
    // obj name uzgarsaham this ona obj si hisobida ishlayveradi 

  },
  // -=-=-=- errow functionda thi yuq 
  getName: () => {
    console.log(`Hi, ${this.name}`) // undefined chiqadi
  },
  // buni faqat oddiy functionni wrapper qilish orqali thi ishlaydigan qilishimiz mumkun
  // constraktor fnc
  getAge: function () {
    return () => { // fnc ichida return blan arraw fn ochib olamiz shundagina ishlaydi 
      console.log(`Hi, ${this.name}`)  // bunda javob tug'ri chiqadi
    }
  }
}
// user.sayHi(); // user ichidagi functionni ishga ushirdik

// doim this blan ishlash 

// masalan biz obj user ni a blan tenglashtirsak user qiymatni null qilsak 
let a = user;
user = null; // bizda user uchib ketyapdi va endi user.name da xatolik buladi
// this esa user ning copy si a ga nisbatanham ishlayveradi
a.sayHi();
a.getName();
a.getAge()(); // bu constraktor fnc ni chaqirish

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