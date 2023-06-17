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

