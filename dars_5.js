console.log(1 !== '0' || (false && 'hey')) // value: true
// 1 !== '0' - bu true chiqadi chunke 1 '0' ga teng emas
// (false && 'hey) - false chiqadi chunke && bunda 1 ta false bulsa false chiqardi
// || buning 1 tarafi true 2-si false bulyapdi bunda 1 ta true bulsa javob true bulardi

console.log(1 !== '0' && (false && 'hey')) // value: ?


console.log(1 !== '0' && true && 'hey') // value: ?

console.log(!(1 !== '0' && true && 'hey')) // value: ?

// alert propt utib berishim kerak

// _#_#_#_#_#_#_#_#_#_#_#_#_
// -=-=-=-=-=-=-=-=-= ALERT PROPT CONFIRM
// bular bizga foydalanuvchidan malumot, surovnoma olish uchun ishlatiladi
// bularni termelanda kurib bulmaydi html file ga js ni ulab browserda kursak buladi 

// 1. alert()
// alert('davom etishni hohlaysizmi')
// bu foydalanuvchiga yozgan suzimizni chiqarib beradi foydalanuvchiga shu maqul bulsa ok tugmasini bosadi
// bunda faqat bitta ok tugmasi mavjud

// 2. confirm 
// confirm('sayt sizga yoqdimi') 
// bu ham huddi alert blan bir xil faqat bunda cance tugmasiham bor 

// 3. prompt()
// prompt('yoshingiz nechchida')
// bunda foydalanuvchi yozishi uchun input mavjud bu orqali userdan surovimizga javob olsak buladi

// homework
// user haqida malumotlarni oling va ularni qiymatini vareable ga tenglashtirib consolda chiqaring

// -=-=-=-=-=-=-=-=-= IF ELSE
// if - agarda berilgan shart tug'ri bulsa uzidagi qiymatni chiqar  unday bulmasa else dagi qiymatni chiqaradi

// 1   2    3
// if ( )  { }
// 1. kalit suzi
// 2. shart 
// 3.  qiymatlar
// agar 2 ichi true bulsa 3 qiymat resultatda  chiqadi 

// if har doim 2 () ichidan true yoke false qiymat kutadi true bulsa ishlaydi false bulsa paska utkazib yuboradi



// else - agarda if () ichi false bulsa else qiymati chiqadi
//   1  2
// else{ }
// 1. kalit suzi 
// 2. qiymat
// bunda shart quyish uchun () bulmaydi agar if sharti notug'ri bulsa tugridan tug'ri bu chiqadi

// Misol:
// ruyhattan utish 18+ yosh bulsa qabul qilindingiz 18 - bulsa yoshingiz yetarli emas deb chiqishi kerak 

let age = 33;

// if else da false qiymatlar
// 0, null, undefined

// if(age > 18){ // () ichi true bulsa {} ichidagi consol hiqadi false bulsa else {} dagi ichga tushadi
//   console.log('Qabul qilindingz')
// }else{
//   console.log('yoshingiz yetarli emas')
// }

// bu holat bitta shartli holat hisoblanadi biz 4 , 5 ta shartli holat qilishimiz uchun bu usuldan foydalanamiz

// if(...){
//   ... 
// } if(...){
//   ...  
// }

// bu holatda yozsak 2 - if yangi code hisoblanib ketadi bu birinchiga tegishli bulmaydi va uzi alohida amal bajaradi
// agar if if qilib ketsak birinchisi tugri bulsaham ikkinchisini tekshiradi 
// bunday hatolik bulmasligi uchun if kalit suzi oldiga else quyiladi: else if(){}
// Misol: tepadagidek bulsin faqat 30 yoshdan kattalarga sizning yoshingiz kattalik qiladi desin 

// if(age > 18 && age < 30){ // and operatordan foydalanib 2 ta shart quydik age 18 dan katta va 30 dan kichik bulsa shu qiymat chiqadi 
//   console.log('Qabul qilindingz')
// }else if(age >= 30){
//   console.log('Yoshingiz kattalik qiladi')
// }else{
//   console.log('yoshingiz yetarli emas')
// }
// 1 notug'ri bulsa 2 ni uham notug'ri bulsa 3 ni chiqaradi 1 ta tugrini kurganda ushayirda tuxtaydi qolganlarini uqibham utirmaydi
if(true){
  console.log('Qabul qilindingz')
} if(true){
  console.log('Yoshingiz kattalik qiladi')
} if(true){
  console.log('urta yosh')
}else{
  console.log('yoshingiz yetarli emas')
}
// agar bu holatda yozsak bizga uchala ifdagi qiymatniham chiqaradi
// if blan boshlangan har biri yangi code hisoblanadi 
// agar else if qilib yozsak f
if(true){
  console.log('Qabul qilindingz')
}else if(true){
  console.log('Yoshingiz kattalik qiladi')
}else if(true){
  console.log('urta yosh')
}else{
  console.log('yoshingiz yetarli emas')
}
// bu holat tug'ri holat 1-if ga qaraydi true va shuni chiqaradi qolganini uqib ham utirmaydi


// Misol: BMI (Body Mass Index) - USA da foydalaniladi BMI ga qarab semiz yoke arriq ekanligingizni kursatadi
// weight / ( height * height ) = BMI

// user vaznini va buyini brawserdan kiritadi va siz usha qiymatlarni BMI qilib hisoblaysiz va userga malumot chiqarasiz 
// agar BMI < 18,5 'underweight'; BMI 18,5 - 24,5 orasida bulsa 'normal'; 25-29,5 'overweight'; 30 - 34,9 obse; BMI > 35 'extremely obese' - chiqarsin
