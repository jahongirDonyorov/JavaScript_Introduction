// -=-=-=-=-=-=- Prototype | __proto__

// Muntarija
//    - Proto nma ?
//    - Prototype nma ?
//    - Prototype vs proto farqi ?

// -=-=-=-=-=- __proto__  

let user1 = {name:'webbrain'}

let user2 = {title:'Academy'}

// assign blan bularni qushib olsak
// Object.assign(user1, user2);

// console.log(user1) // { name: 'webbrain', title: 'webbrain' }

// masalan: shrigingiz uz kodidagi obj ni tekshirish uchun sizning objngizga uzinikini assign blan qushsa 
// kiyin uzi qushganlarni ajratib olmoqchi bulsa qilolmaydi for blan qilishi mumkun 

// lekn buni protoda qilsak buladi 

user1.__proto__= user2;
// bundaham hozir objlar birlashdi 
console.log(user1) // { name: 'webbrain' } buni uzi chiqadi 
// lekn biz user 2 ni keyini chaqirsak bularkan bu yirdaham 
console.log(user1.tistle) // Academy chiqyapdi / user1 da title key bulmasaham bu u kryni user2 dan izlaydi bulsa chiqaradi uyirdaham bulmasa undifened chiqaradi 



// -=-=-=-=-=-= prototype 
// bu faqat NoPrimative data type lar da buladi 

let users = {wi:'kk',name:'Jahon', last:'Doniyarov'}
// buni fullName ni chiqarishni getter vs setter blan kurgan edik 
// biz buni prototype blanham qilishimiz mumkun 
// Masalan:
Object.values(users) // bizga valuelarni chiqarib beradi 
// biz fullName ni prototype orqali Objectga property qilib qushsak buladi 
// biz uzimiz hohlagan obj fulName mini olmoqchi bulsak objName.fullName() qilsak  chiqaradigan qilishimiz mumkun 

// Har doim prototyp fnc yaratishda  = dan kiyin function (){} qilib yaratish ()=>{} bunday qisangiz hatolik buladi
// chunke callback da this ishlamaydi
Object.prototype.fullName = function(){// prototype yordamida functionni eng katta obj (Object) ga yozyapmiz endi bu fnc hamma objlarda ishlaydi 
 // prototype dan kiyin yozilyotgan suz fnc name buladi uyirga hohlagan suzimizni yozishimiz mumkun faqat avval bulgan suzdan tashqari 
  console.log(this.name, this.last)
}
users.fullName();// Jahon Doniyarov
// users ichida fullName degan fnc yuq bulsaham biz uni chaqirolamiz chunke bu prototype orqale Object ga fnc buldi 
// buni hohlagan fncga ishlatishimiz mumkun 

let us = {name:'Elshod', last:'Dilshod',name:'Elshod'}
us.fullName(); // Elshod Dilshod

// Arrayga nisbatan ham ishlatsak buladi 

let ar = [1,2,3,4,5,6,7];
// men shu arraydan 4 ni chiqarib  tashlamoqchi bulsam 
// a.remove(4) // bu chiqarib tashlolmaydi chunke bunday fnc yuq buni qilish uchun filter qilishimizga tug'ri keladi 
// 4 5 ta arrayni qilish kerak bulsa 4 5 filter yozishimiz kerak lekn buni biz Eng katta arrayga prototype yozdamida fnc yozib
// hohlagan arrayda ishlatishimiz mumkun ekan 

// lekn biz buni uzimiz yozishimiz mumkun 

Array.prototype.remove = function(n){// parametr bersakham buladi fnc ni ishga tushiryotganda qiymatini beramiz
  let res = this.filter((value) => value !== n) // n valuega teng bulmaganlarini chiqaradi 
  console.log(res)
}
// remove(4) bular n parametirining qiymatiga aylanadi
ar.remove(4) // [ 1, 2, 3, 5, 6, 7 ] 4 ni olib tashlayapdi 
ar.remove(1) // 1 ni olib tashlaydi 

// Msalan: Array ichidagi valuelar harflar buyicha sartirofka qiladigan AlphabeteFilter() degan function yaratishimiz mumkun 
let arr = ['Hurmo','Olma','Anor','ananas','behi', 'olcha']
Array.prototype.AlphabeteFilter = function(){
  let res = this.sort((a,b) => {
    return a.localeCompare(b)
  })
  console.log(res)
}
arr.AlphabeteFilter()// [ 'ananas', 'Anor', 'behi', 'Hurmo', 'olcha', 'Olma' ]
// bizga chiqarib  beryapdi biz buni hohlagan arr da ishlatishimiz mumkun



// Homework 

// Obj uchun deleteKey degan fnc yarating obj ichidagi uzimiz hohlagan keyni uchirsin
// obj.deleteKey('name') name degan key ni uchirishi kerak 

let obj = {
  name:'hi',
  age:17
}
Object.prototype.deleteKey = function(key){
  let res =  delete this[key]
  return res
}
console.log(obj) // { name: 'hi', age: 17 }
obj.deleteKey('name') // biz yozgan name keyini uchirib tashlaydi 
console.log(obj) // { age: 17 }

// SUCCES

// obj.set('name','writable','false,) // obj ichidagi name ni writable ni false qilsin
// setter getter yozrdamida qiling  

Object.prototype.set = function(key,status,sitting){
  let res = Object.defineProperties(this,key,{[status]:sitting})
}
obj.set('age','writable',false)

// ERROR 