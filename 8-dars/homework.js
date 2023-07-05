///////////////////object/////////////////

// No1
// // object keylarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }

// // chiqish
// // value: id,name

// // anwes
// console.log(Object.keys(obj)) // Objeck keys bizlarga obj ning keylarini chiqarib berardi 

// -=-=-=-=-=-=-

// no2
// // object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain",
//     age:18,
//     hight:1.60,
// }

// // Chiqish:
// // id,age,hight

// // Eslatma:

// // -=-=-=-=- har doim type tekshirilyotganda boshiga typeof quyishimiz kerak  

// console.log(obj.id === Number) // value: false; bizning obj.id number bulsaham false chiqyapdi
// console.log(typeof obj.id === Number) // value: false; chiqishining sababi biz data type numberga tekshirmayapmz 'number' yoziladi

// // -=-=-=-=- data type ga tenglashtirganda Number,String yozilmaydi 'ichida', 'number', bulishi kerak shundagina data type ga tekshiryotganimizni anglatadi
// console.log(typeof obj.id === 'number') // value: true; 
// // har doim shu holatda bulishi kerak type tekshirilganda:  (typeof ... === '...')

// // Yichim: har bir key ni olish uchun for loop, ichidagi shart uchun if else dan foydalanamiz

// for( let i in obj){ // har bir key ni olish uchun

//   // console.log(obj.i)// bu holatda obj ichidan i dgan key izlayapdi bizga verable i ning qiymatini izlashi kerak
//   // console.log(obj[i])

//   if(typeof obj[i] === 'number'){
//     // console.log(obj[i]) // 1,18,1.60 chiqaradi lekn shartda number bulgan keylarni chiqarsin deyilgan valuesini emas 
//     console.log(i) // id,age,hight / success
//   }

// }

// // SUCCESS

// -=-=-=-=-=-

// No3

// // object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// // chiqish:
// // {   offline:true,
// //     online:true,
// //     individual:false
// // }

// // Yichim: har bir key ni olish uchun for loop, ichidagi shart uchun if else dan foydalanamiz

// for(let i in obj){
//   // type ni tekshirishimiz kerak bulganligi uchun typeof yoziladi if da birinchi kiyin qolganlari
//   if(typeof obj[i] === 'boolean'){ 
//     // bunda bizga key ham value ham chiqishi kerak ekan 
//     console.log(`${i} : ${obj[i]}`) // success
//   }
// }

// // SUCCESS

// -=-=-=-=-=-

// No4

// // fnc ga object va string berilgan. agar object keylari ichida str ingga teng bolgan key bolsa shu key va valueni chiqazing
// // code function ichida yozilishi kerak
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }

// // chiqish
// // name:"WebBrain"

// // Yichish:
// function Search(obj,str){
//   for(let i in obj){
//     // bu faqat str (parametr) ga teng bulsa chiqsin dgan variant 
//     if( obj[i] === str){
//       console.log(`${i} : ${obj[i]}`)
//     }
//     // bu esa polne stringlarga teng bulsa chiqsin dgan variant 
//     if(typeof obj[i] === 'string'){
//       console.log(`${i} : ${obj[i]}`)
//     }
//     // ikkalasidaham bir hil javob chiqadi chunke string bitta 
//     // agar string kup bulganda 2 - variantda kuproq malumot chiqardi
//   }
// }
// Search(obj,'WebBrain')

// // SUCCESS

// -=-=-=-=-

// No5

// // object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }
// function searchValue(obj,srt) {
//   for(let i in obj){
//     if(typeof obj[i] === srt){
//       console.log(obj[i])
//     }
//   }
// }
// searchValue(obj,'string') 

// // SUCCESS

// -=-=-=-=-

// No6 
// bu mavzu hali utilmaga object 2/2 da utiladi

// // object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
// let person = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }
// function sumChil(obj){
//   let total = 0

//   for(let i in obj){
//     if(typeof obj[i] === 'object'){
//       if('age' in obj[i]){
//         // console.log(i)
//         total += obj[i].age;
//       }
//       total += sumChil(obj[i])
    
//     }
//   }
//   return total
//   // console.log(total)
// }
// console.log(sumChil(person))
// // chiqish
// // 146 

// -=-=-=- Error 
// murakkabroq misollar 

// No7
// bu mavzu hali utilmaga object 2/2 da utiladi

// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
// let user = {
//     id: 1,
//     name: 'Odil',
//     age: 78,
//     children: [
//         {
//             id: 1,
//             name: 'Umar',
//             age: 54,
//             children: [
//                 { id: 1, name: 'Asmo', age: 34 },
//                 { id: 2, name: 'Osim', age: 30 },
//                 { id: 3, name: 'Xattob', age: 25 },
//             ]
//         },
//         { id: 2, name: 'Umar', age: 54 },
//         { id: 3, name: 'Umar', age: 54 },
//     ]
// }


// -=-=-=-=-=-=


// No8
// // array ichida object berilgan. job berilgan objectlarni qaytaring
// let arr=[
//     {id:1,name:'Usmon',job:'developer'},
//     {id:2,name:'Usmon',job:'developer'},
//     {id:3,name:'Usmon'},
//     {id:4,name:'Usmon',job:'developer'},
//     {id:5,name:'Usmon'}
// ]

// for(let i in arr ){
//   // console.log(arr[i])
//   if('job' in arr[i]){
//     console.log(arr[i])
//   }
// }

// SUCCESS

// -=-=-=-=-=-


// No9
// // objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
// let obj={
//   id:1,name:'Usmon',job:'developer'
// }
// let use = structuredClone(obj)
// obj.id = 2
// console.log(obj)
// console.log(use)

// SUCCESS

// =-=-=-=-=

// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing
// add(obj,key,value)
// add(obj,'address','toshkent')

// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1
// }
// // chiqish
// // qabul qilindi
// if(obj.practice >= 1){
//   console.log('qabul qilindi')
// }else{
//   console.log('ming bor uzur.')
// }
// // sharti sal tushinarsiz buldi

// SUCCESS

// -=-=-=-=-

// No11

// // agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true
// }
// // chiqish
// // let obj = {
// //     id: 1,
// //     name: 'Usmon',
// //     job: 'developer',
// //     practice:1,
// //     talaba:true,
// //     kiridit:true
// // }

//   if('talaba' in obj && obj.talaba === true){
//     obj.kiridit = true 
//   }else{
//     obj.kiridit = 'olinmadi'
//   }
//   console.log(obj)

  // SUCCESS

  // =-=-=-=-=-=


// No12
// // object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
// // agar tugilgan yil(year) hozirgi yoshiga tug'ri kelmasa 'xato malumot kiritilgan disin'

// let obj = {
//     id: 1,
//     name: 'Usmon',
//     age:34,
//     year:1990
// }
// // chiqish
// // 'xato malumot kiritdingiz'

// if((2023 - obj.year) !== obj.age){
//   console.log('xato malumot kiritdingiz')
// }

// SUCCESS

// -=-=-=-=-=-


// No13
// // talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv 
// // ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
// arr = ['Andijon','Namangan','Qarshi','Toshkent', 'Samarqand']
// let a = 'Samrqand';


// if(arr.includes(a))
// {}else{
//   console.log(`bizning filiallarimiz vaqat shu viloyatlardda ${ar}`)
// }

// SUCCESS

// No14
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
let arr=[
    {id:3,name:'Usmon',parol:'1231'},
    {id:1,name:'Umar',parol:'1241'},
    {id:5,name:'Jasur',parol:'3452'},
    {id:2,name:'Asmo',parol:'2312'},
    {id:4,name:'Salohiddin',parol:'3421'},
]
// chiqish
// logIn('Umar','2113') => xato
// logIn('Salohiddin','3421') => hush kelibsiz

// console.log(arr)


function Info(arr,login,parol){
  for(i = 0; i <  arr.length; i++){
    // console.log(arr[i].parol)
    if(arr[i].parol === parol && arr[i].name === login){
      return 'Hush kelibsiz'
    }
    
  }
  return 'Login yoki parol xato' // else urniga returnni buyirdaham quysak buladi uzi if ishlamasa bu chiqadi ishlasa if ni uzi chiqadi

}

let nam = 'Usmon',
    parol = '1231';
console.log(Info(arr,nam,parol)) // Hush kelibsiz

let login = 'Asmo',
    password = '1299';
console.log(Info(arr,login,password)) // Login yoki parol xato


// No15
// object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring
obj={
  id:1,
  title:'the best',
  address:{street:"Farobiy",number:'34'}
}
for( let i in obj){
  if(typeof obj[i] === 'object'){
    console.log(obj[i]) 
  }
}
// chiqish
// true

// No16
// let person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
// }

// // add IELTS
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }

// 2 - shart
// // agar ielts 5.5 yoki katta bolsa consoleda qabul qilindi,aks holda qayta topshirish kk
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// // qabul qilindi
// 3 - shart
// // agar ielts 5.5 yoki katta bolsa objectga student:true qoshilsin qiymati bn birga
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }

// // qoshimcha
// 4 - shart
// // agar student true bolsa unga maxsus key berilsin(math.random+id orqali berilsin)
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// 5 - shart
// // talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar qarol bn name bazadagi
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name xato chiqsin
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// function Kirish(parol,name){}

// Kirish(101,'Umar') //=> hush kelibsiz
// Kirish(10,'Umar')  // => parol yoki name xato
// Kirish(101,'Ali')   // => parol yoki name xato

