// //              true  ||     false       =   true
// console.log(1 !== '0' || (false && 'hey')) // value: true
// // 1 !== '0' - bu true chiqadi chunke 1 '0' ga teng emas
// // (false && 'hey) - false chiqadi chunke && bunda 1 ta false bulsa false chiqardi
// // || buning 1 tarafi true 2-si false bulyapdi bunda 1 ta true bulsa javob true bulardi

// //            true    &&    false         = false
// console.log(1 !== '0' && (false && 'hey')) // value: false

// //            true    && true && 'hey' =  hey
// console.log(1 !== '0' && true && 'hey') // value: hey
// // buyirda false qiymat bulmaganligi uchun oxirgi qiymatni chiqardi

// console.log(!(1 !== '0' && true && 'hey')) // value: false

// _#_#_#_#_#_#_#_#_#_#_#_#_

// // -=-=-=-=-=-=-=-=-= ALERT CONFIRM PROMPT
// // bular bizga foydalanuvchidan malumot, surovnoma olish uchun ishlatiladi
// // bularni termelanda kurib bulmaydi html file ga js ni ulab browserda kursak buladi

// // 1. alert()
// alert('Restart Brawser' )
// // Bu user ga biz hohlagan malumotni chiqaradi
// // bunda faqat bitta ok tugmasi mavjud

// // 2. confirm
// confirm('sayt sizga yoqdimi')
// // bu ham huddi alert blan bir xil faqat bunda cancel tugmasiham bor

// // 3. prompt()
// let a = prompt('yoshingiz nechchida')
// // bunda foydalanuvchi yozishi uchun input mavjud bu orqali userdan surovimizga javob olsak buladi

// console.log(`age ${a}`)

// // homework
// // user haqida malumotlarni oling va ularni qiymatini vareable ga tenglashtirib consolda chiqaring

// let Name = prompt('Name'),
//     FrName = prompt('FrName'),
//     age = prompt('age')
//     Married = confirm('Married');

// console.log(`Name: ${Name}, FrName: ${FrName}, age: ${age}, Married: ${Married}`)

// -=-=-=-=-=-=-=-=-= IF ELSE
// if - agarda berilgan shart tug'ri bulsa uzidagi qiymatni chiqar  unday bulmasa else dagi qiymatni chiqaradi

// 1   2    3
// if ( )  { }
// 1. kalit suzi
// 2. shart
// 3.  qiymatlar
// agar 2 () ichi true bulsa 3 qiymati resultatda  chiqadi

// if har doim 2 () ichidan true yoke false qiymat kutadi true bulsa ishlaydi false bulsa paska utkazib yuboradi

// else - agarda if () ichi false bulsa else qiymati chiqadi
//   1  2
// else{ }
// 1. kalit suzi
// 2. qiymat
// bunda shart quyish uchun () bulmaydi agar if sharti notug'ri bulsa tugridan tug'ri bu chiqadi

// Misol:
// ruyhattan ut    ish 18+ yosh bulsa qabul qilindingiz 18 - bulsa yoshingiz yetarli emas deb chiqishi kerak

let age = 33;

// // if else da false qiymatlar:false === false, 0, null, undefined

// if(age > 18){ // () ichi true bulsa {} ichidagi consol chiqadi false bulsa 'else {}' dagi ishga tushadi
//   console.log('Qabul qilindingz')
// }else{
//   console.log('yoshingiz yetarli emas')
// }

// bu holat bitta shartli holat hisoblanadi biz 4 , 5 ta shartli holat qilishimiz uchun bu usuldan foydalanamiz

// if(2 === 2){
//   console.log('salom')
// } if(2 === 2){
//   console.log(2)
// }

// bu holatda yozsak 2 - if yangi code hisoblanib ketadi bu birinchiga tegishli bulmaydi va uzi alohida amal bajaradi
// agar if if qilib ketsak birinchisi tug'ri bulsaham ikkinchisini tekshiradi
// bunday hatolik bulmasligi uchun if kalit suzi oldiga else quyiladi: else if(){}
// Misol: tepadagi misoldek bulsin faqat 30 yoshdan kattalarga sizning yoshingiz kattalik qiladi desin

// if(age > 18 && age < 30){ // and && operatordan foydalanganligimiz sababi bu 2 tomondagi shartham tug'ri bulsa true qaytaradi yani if ishlaydi
//   console.log('Qabul qilindingz')
// }else if(age >= 30){
//   console.log('Yoshingiz kattalik qiladi')
// }else{
//   console.log('yoshingiz yetarli emas')
// }

// bu tekshirish mount sritga kiradi
// chunke bu bir vahtning ichida 2 ta shartni tekshiradi.

// if(true){
//   console.log('Qabul qilindingz')
// } if(true){
//   console.log('Yoshingiz kattalik qiladi')
// } if(true){
//   console.log('urta yosh')
// }else{
//   console.log('yoshingiz yetarli emas')
// }

// agar bu holatda yozsak bizga uchala if dagi qiymatniham chiqaradi
// if ni uzi kelsa yangi gruh bub ketadi else if kelsa ushaning davomi
// agar else if qilib yozsak

// if(true){
//   console.log('Qabul qilindingz')
// }else if(true){
//   console.log('Yoshingiz kattalik qiladi')
// }else if(true){
//   console.log('urta yosh')
// }else{
//   console.log('yoshingiz yetarli emas')
// }

// bu holat tug'ri holat 1-if ga qaraydi true va shuni chiqaradi qolganini uqib ham utirmaydi

// Misol: BMI (Body Mass Index) - USA da foydalaniladi BMI ga qarab semiz yoke arriq ekanligingizni kursatadi
// weight / ( height * height ) = BMI

// user vaznini va buyini brawserdan kiritadi va siz usha qiymatlarni BMI qilib hisoblaysiz va userga malumot chiqarasiz
// agar BMI < 18,5 'underweight'; BMI 18,5 - 24,5 orasida bulsa 'normal'; 25-30 'overweight'; 30 - 35 obse; BMI > 35 'extremely obese' - chiqarsin

// let a = prompt('Buy'),
//     b = prompt('vazn');

// let BMI = b/(a*a);

// if(BMI < 19){
//   console.log('underweight')
// }else if(BMI >= 19 && BMI < 25){
//   console.log('normal')
// }else if(BMI >= 15 && BMI < 30 ){
//   console.log('overweight')
// }else if(BMI >= 30 && BMI < 35){
//   console.log('obse')
// }else if(BMI >= 35){
//   console.log('extremely obese')
// }else{
//   console.log('error')
// }

// -=-=-=-=- if larning joyashishiham juda katta rul uynaydi
// havo gradusiga qarab maslahat bersin

let temp = 7; // temp > 0 && temp < 10, temp > 10 && temp < 15, temp > 15, temp > 15 && temp < 25
if (temp < 0) {
  console.log("Havo juda sovuq");
} else if (temp < 10) {
  console.log("havo sovuq");
} else if (temp < 15) {
  console.log("havo isiiq");
} else if (temp < 25) {
  console.log("havo juda issiq");
}

// bu tig'ri yozilgan holati agar biz buni kelsh joylarini uzgartirib quysak 25 15 10 qilsak

if (temp < 0) {
  console.log("Havo juda sovuq");
} else if (temp < 25) {
  console.log("havo juda issiq");
} else if (temp < 15) {
  console.log("havo isiiq");
} else if (temp < 10) {
  console.log("havo sovuq");
}
// bu holatda birinchi temp 25 dan kichkinami shuni tekshiryapdi true bulganligi uchun usha yerda qolyapdi qolganini tekshirmayapdiham
// 7 25dan kichik tug'ri lekn bizda 10 va 15 danham kichik 25 birinchi kelganligi uchun uni tekshirib qolganini tekshirmayapdi
// 0 dan 25 gacha kiritgan hamma sonimizda faqat shu javob chiqadi

// _!_!_!_!_!_!_! har doim bitta shart quyilgan oddiy if else larda sonlarning ketma ketligini kichigidan quytib ketish kerak _!_!_!_!_!_!_!_!_

// qisqartirilgan birdan 2 ta shart berib ketsak bunday hatoliklar bulmaydi BMI ni hisoblashda yozgan usulimizdek

// misol:

if (temp < 0) {
  console.log("Havo juda sovuq");
} else if (temp <= 25 && temp > 15) {
  console.log("havo juda issiq");
} else if (temp <= 15 && temp > 10) {
  console.log("havo isiiq");
} else if (temp <= 10 && temp > 0) {
  console.log("havo sovuq");
} else {
  console.log("not found");
}
// value: havo sovuq
// bu holatda yuqoridagidek xatoliklar bulmaydi

// -=-=-=-=-=-=-=- sentacsis

if ("condition") {
  ("code");
} else if ("condition") {
  ("code");
} else {
  ("code");
}

// agar code shu holatdagidek bitta qaroga siqsa qavussiz {} ham yozishimiz mumkun

if ("condition") "code";
else if ("condition") console.log("code");
else "code";

// bu hlotha tug'ri hisoblanadi agar code bir necha qator bulib ketsa qavus bulishi shart

// faqat bitta holatda bir qator bulsaham qavis {} quyishimiz kerak obj yozganimizda chunke objdaham  qavis {} bor

// if (1) 'obj';
// obj yozmoqchi bulsak bittalik qavusda
// if (1) {temp;} // bulib qoladi obj qavisini uzini if uziniki deb hisoblaydi
// buni tug;ri yozish
// if (1) {
//   return { temp };
// }

// _#_#_#_#_#_#_#_#_#_#_#_#_

// -=-=-=-=- Conditional operator | question mark operator | Ternary operator ? :

// 3 ta holatdaham aytiladi kuproq Ternary operator deyiladi

// bu if else da 2 ta holatni tekshirishni soddalashtirilgani

// ?,: ikkalasi bizga if else ni ifodalab beradi
// ? - if
// : - else
// bunda else : yozilishi majburiy else : qolib ketsa error beradi

// condition ? code : code === if (condition){code}else{code}
let code = 2;
if (code < 0) {
  console.log("havo jida sovuq");
} else {
  console.log("not found");
}

// ternary operator da bu holatda buladi.
//     1   2            3                   4             5
code < 0 ? console.log("havo juda sovuq") : console.log("not fount");

// 1 - condition
// 2 - if
// 3 - code. 1 condition true bulsa 3 code ishlaydi
// 4 - else.
// 5 - else code. 1 condition false bulsa 5 code ishlaydi

// faqat shu holatda 1 ta if else ni tekshirish maslahat beriladi.
// 2 ta 3 ta if bulsa uzi dashib ketamz

//  else if qilganimiz bunda bu :? holatda bulmaydi : dan kiyin birdan shart yozib ketiladi

// if else
// if(condition){code} else if(condition){code} else{code}

// ternary
// condition ? code : condition ? code : code

// misol:

// if else
if (temp < 0) {
  console.log("Havo juda sovuq");
} else if (temp < 10) {
  console.log("havo sovuq");
} else if (temp < 15) {
  console.log("havo issiq");
} else {
  console.log("havo juda issiq");
}

// ternaryda bu holatda buladi
temp < 0
  ? console.log("havo juda sovuq")
  : temp < 10
  ? console.log("havo sovuq")
  : temp < 15
  ? console.log("havo issiq")
  : console.log("havo juda issiq");

// ? dan oldingisi true bulsa ? dan kiyingisi ishlaydi
// sal chalkashib ketishimiz mumkun ternaryni bu holatda yozsak

// qisqartirilgan varianti mount srit
temp <= 10 && temp > 0 // bunday tekshirish moun sritga kirishining sababi bi vahtning ichida 2 ta shartni tekshiradi
  ? console.log("havo juda sovuq")
  : console.log("not found");

// _#_#_#_#_#_#_#_#_#_#_#_#_

// -=-=-=-=-=-=- Nullish ?? -> null, undefined

// OR || -> false === null, undefined, 0, false, NaN
// Nullish ?? -> false === null, undefined

// huqqi or || dek ishlaydi faqat bunda 2 ta false qiymat mavjud -> null, undefined

// bu faqat null va undefined ni false db oladi qolgan hamma qiymatni true hisoblaydi xatto false ni uziham
// false === undefined, null

// faqat shu ikkalasini notug'ri qiymat db oladi va or kabi 1 ta true bulsa ushani chiqaradi

//            0      1
console.log(false || 1); // 1 - chunke 1 true

//            1      1
console.log(false ?? 'Hi'); // false -  chunke bu false niham true qiymat db hisoblayapdi ?? ni 2 tomonidaham true bulganligi uchun 1-trueni(false) chiqaradi
// huddi or || kabi ikkala qiymatham false bulsagina false qaytaradi

//           1     1
console.log(NaN || 1) // 1 
//           1     1
console.log(NaN ?? 1) // NaN
console.log(1 ?? NaN) // 1
// 2 tomonidaham true bulib qolsa ?? dan chap tomondagini chiqaradi (1-true ni)

//          0    1
console.log(0 || 1) // 1
//          1    1
console.log(0 ?? 1) // 0

//           0      1
console.log(null || 1); // 1
//           0      1
console.log(null ?? 1);// 1

//              0           1 
console.log(undefined || 'salom'); // salom
//              0        1
console.log(undefined ?? 3); // 3
//              0             0
console.log(undefined ?? undefined); // undefined

/* ishlashimizda bizga bir qiymat kelyotgan bulsa usha qiymat faqatgina null va undefined bulsa 2-qiymatni 
chiqarsin agar unday bulmasa usha kelyotgan qiymatni uzini chiqarsh da ishlatsak buladi */
/* misol: bizga title degan qiymat kelyapdi u qiymat faqatgina null yoke undefined bulsa bizga b qiymatni chiqarsin 
ulardan boshqa hamma qiymat kelsa ularni true hisoblab chiqaraversin */