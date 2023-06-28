// // Savollar
// // 1. switch vs if else farqi
// // 2. for loop parametrs ?
// // 3. for parametrs tushib qolganda qanday holat buladi (...;....;...;)

// // JavaScript 6 -> Basics 1/3 fineshed 

// // =-=-=-=-=-=-=- While, Do While  -=-=-=-=-=-=-=

// // ------ While (){}
// // bu ham huddin for dek vazifani bajaradi lekn strukturasi fordan ancha farq qiladi
// // bunda uzgaruvchi tashqarida yoziladi va () ichiga faqat bitta shartni uzi yoziladi 

// //   1        2        3    4   
// // while (condition) {code,step}

// // 1. while - kalit suzi
// // 2. () - condition faqat bitta shart yziladi true bulsa code ishlaydi false bulsa ishlamaydi 
// // 4. {} - code yoziladi 2 (true) bulsa 3 {code} resultatga chiqadi 
// // 3. step(i++,i--) - nechtadan yurishi



// // example - one
// let i = 1
// while(i <= 10){
//   console.log(i)// value: 1,2,...,10  - gacha qiymatni bitta consolda chiqarib berdi 
//   i++
// }

// // example - twoo
// let c = 3;
// while(c == 0){
//   console.log(c) // value: 3,2,1,0 - i-- bulganligi uchun orqaga sanayapdi
//   // alert(i) // value: ?
//   c--; 
// }

// // =============

// // -=-=-=-=-=-=-=- Do{} While()
// // bu While bilan bir hil faqat bu birinchi codeni uqib kiyin shartni uqiydi
// // shart false bulsaham code bir martta chiqadi bunda

// //  1   2    3    4       5
// // do{code,step}while(condition)

// // 1. do - kalit suz
// // 2. {} - code yoziladi 
// // 3. step(i++,i--) - nechtadan yurishi
// // 4. while - ikkinchi kalit suz 
// // 5. () - shart - agarda 4 () tug'ri bulsa 2 {} code ishlaydi 

// let a = 0
// do{
//   console.log(a)
//   a--;
// }while(false)
// // bu sal boshqacharoq 1-do ichida code yoziladi va 2-while ichida shart yoziladi
// // while ichidagi true bulsa do ishlaydi 

// // do birinchi ishlab kiyin while ichidagi shartni tekshiradi true bulsa davom etadi false bulsa tuxtaydi
// // lekn birinchi qiymat bir martta chiqadi


// #_#_#_#_#_#_#_#_#_#_#_#

