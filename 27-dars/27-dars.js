// Error handling | Callback | Promise | Async await 

// Muntarija 
//    - try catch 
//    - optional catch 
//    - Throwing errors 
//    - Finally 
//    - Callbacks 
//    - Callback hell
//    - Built-in Callbacks 
//    - fecebook login exapmle 
//    - Promise: .then, .catch, .finaly 
//    - promise chaining 
//    - promise all 
//    - async await 


// // -=-=-=-=-=-=-=- Error handling 
// // error kelib qolanda usha errorni vahtincha block qilib turadi 

// // console.log(number) // number is not defined - chiqadi chunke number deganm veruable yuq 
// // bunday hotolik bulganda tug'ridan tug'ri kodimizni tuxtatib quyadi qolgan kodlarham ishlamaydi 
// // console.log(3 + 2) // tepadagi error tufayli bu ishlamay turadi 

// // Bizga xato bulsa hatoligini aytishi kerak lekn qolgan kodlar ishlayverishi kerak 
// // bu uchun error handling (try, catch) dan foydalanamiz 

// // -=-=-=-=- try catch 
// // try ichidagi malumot error bulganda catch ishlab bizga xatolikni aytadi lekn kode tuxtab qolmaydi 
// try{
//   console.log(number) // number is nor defined
// }catch{
//   console.log('smth wrong')
// } // bizga smth wrong degan javob chiqadi bundan kiyingi kodlarham ishlay veradi 

// console.log(2 + 3) // 5

// // buyirda catch ga yozgan narsamiz error bulganda chiqyapdi biz als error qandayligini bilishimiz uchun catch() dan foydalanamiz 
// // yane qanaqa error qaytarsa shuni bizga chiqarishi kerak lekn qolgan kodlar ishlashiga tasir qilmasdan 

// // catch() faqat SytaxError(msg), ReferenceError(msg), theow new Error (uzimiz yozgan error) larni parametr qilib oladi 
// // qolgan errrorlarni ololmaydi 

// try{
//   console.log(number)
// }catch(error){ // parametr beriladi bu parametr try ni ichida qanaqa error bulsa ushanga teng buladi 
//   // console.log(error) // ReferenceError: number is not defined - chiqyapdi lekn pasdagi kodlarham ishlayapdi 
//   // lekn bu holatda error ni tuliq chiqarib beradi bizga faqat type pi yoke messige kerak bulsa bularni uziniham olishimiz mumkun ekan 
//   // buning uchun bir nechta keylar mavjud

//   // -=-=-=- .message 
//   // bu bizga kelyotgan errayning massege ni chiqarib beradi 
//   console.log(error.message) // number is not defined - ni uzi chiqadi 

//   // -=-=-=- .name 
//   // error ning type (nomi) ni kursatib beradi 
//   console.log(error.name) // ReferenceError
// }

// console.log(2 + 2)

// // -=-=-=-=- new Error / throw
// // bu biga yuqorida kyrsatkanimdek uzimizga kerakli suz blan error ysash uchun  kerak
// // Biz uzimiz error yasshimiz mumkun ekan
// try{
//   // new Error('smth went wrong') // bu holatda hechqanday hatoliklar yuq 
//   // xatolik bulmasa cathc ga bormaydi va hatolik chiqmaydi bu catch ga borishi uchun throw dan foydalanamiz 
//   // -=-=-=-=-=- throw - bu malumotni catch ga utkazadi 
//   throw Error('smth went wrong')
// }catch(error){
//   console.log(error.message) // smth went wrong shuni chiqaradi xatolik bulganda
// }
// // biz error turini try ga qulda yozib catch da parametr sifatida olyapmiz 
// // lekn ruchnoy yozyotganimiz uchun bunda hechqanday (params) larsiz cathc ni ichiga birdan yozib quyishimiz mumkun ekan 
// try{
//   // buni ichi xato bulsa catch ishlaydi 
//   console.log(age)
// }catch{
//   console.log('smth went wrong')
// }
// // bu usul ancha oson buladi agar qulda uzimiz xhiqishi kerak bulgan xatoni yozadigan bulsak 


//#########################


// // -=-=-=-=-=-=-=- Callback
// // Asosan asinxron bulgan queue ga utib eng ohirida chiqadigan malumotlar malum bir sinxron malumotdan olding chiqishi kerak bulsa 
// // CallBack dan foydalaniladi 

// // Misol:
// // console.log(1)
// //   setTimeout(()=> {
// //     console.log(2)
// //   }, 1000)
// // console.log(3)

// // value: 1,3,2 chiqadi chunke setTimeout asinxron hammasidan kiyin ishlaydi 
// // backEnd dan malumot olganimizdaham shunday buladi fetch ham asinxron  bizga javob 1,2,3 chiqish kerak (yane backEnd malumotlari ohirida emas 3 dan oldin chiqish kerak deyaylik)
// // buning uchun callback dan foydalanamiz 

// console.log(1)

// function two (call) {
//   setTimeout(()=> {
//     console.log(2)
//     call() // qachonke setTimeout ishlab bulgandan kiyin callback fnc ishlasin deyapmiz
//   }, 1000)
// }
// // callback ochib olamiz chunke callbackni chaqirmasak ishlamaydi uni setTimeout islagandan kiyin chaqiradigan qilyapmiz
// let callbackFnc = () => {
//   console.log(3) // bu qachon parent fnc si chaqirirlsa ishlaydi 
// }

// two(callbackFnc) // fnc agrument sifatida two fnc ga yuborildi 
// // value: 1,2,3

// // masalan bizda start, data dan kelyotgan malumot, fenished bor 
// // bular qanday ketmaketlikda chiqadi 1-start chiqadi 2-ga keladi va bu fetch da bulganligi va malumot topguncha kutish kerakligi uchun 
// // buni kutishga queue ga utkazib yuboradi  (Evenet loop sodir buladi) va 2- bulib fenished chiqadi undan kiyin oxiri bulib data dan kelyotgan malumotlar chiqadi 
// // lekn bizga bunday bulmasligi kerak hammasi uz urnida chiqishi kerak bu holda callback bizga yordan beradi


// #########################


// Faceboock dan royhatdan utishga misol keltirsak 

// kichik ishlatib turish uchun data baza yasab tiramiz 
let database = {
  John: {
    login: 'John',
    passawrd: 2004,
    fullName: 'Jahongir Doniyarov',
    age:19
  },
  Elshod: {
    login: 'Elshod',
    passawrd: 2998,
    fullName: 'Elshod Eshmatov',
    age:16
  }
}

// // Login qilishimiz kerak agar user kiritgan login va passawrd database dagiga tug'ri kelsa bizga usha malumotning fullName ni chiqarishi kerak buladi 
// console.log('started...')

// const login = (lg, pw, call) => {
//   // agar code haqiqiy backEnd dan malumot olganida html da kurganingizdek kutish jarayoni bular edi 
//   // biz buni suniy ravishda qilishimiz mumkun setTimeout orqali 
//   setTimeout(() => {
//     if(database.John.login === lg && database.John.passawrd === pw){
//       // call (logindagi callback) nibu yirda SetTimeut ishlab bulgandan kiyin chaqiramiz if ishlasa bu chiqadi
//       return call(`${database.John.fullName}, Welcome to Facebook`,

//       // Callback hell - callback ichidagi callback ga aytiladi
//       // biz uzimiz hohlagan userda age ni olishimiz kerak lekn hammasida age chiqmasligi kerak bulsa yana bitta callback dan foydalanamiz
//       // kiyin biz hohlagan odamimizning callback fnc sining ichida buni chaqirsak age chiqadi chaqirmasak chiqmaydi 

//       ()=>{
//         // callback ga parametr sifatida yana bitta callback boryapdi bu fnc da age buladi biz ageni qachon hohlasak ushanda chaqirib chiqaramiz 
//         return `${database.John.age}`
//       }) // bularning hammasi fnc ga argument sifatida ketyapdi

//     }else{ // biz elsadaham chaqirishimiz kerak agar else ishlasa call parametiriga bu qiymat boradi
//       return call(`passawrd da xatolik bor`)
//     }
//   }, 1000) // 1 secund kutsin

// }

// // const user = login('John', 2004) // -code
// // login qachonke setTimeout ishlab bulgandan kiyin qiymatga ega buladi u esa 1 secund dan kiyin ishlaydi hozir login undefined ga teng 
// // lekn user sinxron bulganligi uchun birdan ishlaydi va loginning hozirgi qiymatini oladi (undefined) ni

// // console.log(user) // undefined // -code
// // console.log('...fenished') // -code

// // bu tug'ri ishlashi uchun setTimeout ishlab bulgandan dan kiyin (login qiymatga ego bulganda) bu kodimiz ishlashi kerak 
// // buning uchun Callback dan foydalanamiz 

// // biz 3- params callback qushamiz va pastdagi consollarni uni ichiga yozamiz bu loginga params sifatida boradi 
// // (callback ni chaqirmasak ishlamaydi) biz aytamizke usha params callback qachonke setInterval ishlab bulgandan sung chaqirilsin deb 
// login('John', 2004,(usr)=>{ // params ga qiymat bu chaqirilganda return dagi qiymat bulyapdi
//   console.log(usr)
//   console.log('...fenished')
// } ) 
// // value: 
// // started...
// // Jahongir Doniyarov, Welcome to Facebook
// // ...fenished

// // hammasi tug'ri ihslayapdi

// // Code tahlili 
// {
//   // biz login degan fnc ochyapmiz va unga 3 ta parametr kelyapdi 
//   // 1 - si userning logini
//   // 2 - si userning passawrdi
//   // 3 - si Callback function 
//   // va login ichida setTimeout 1 secuntdan kiyin ishlayapdi bu ishlagandan kiyingina if else ishlaydi va ture sining qiymati return bulib login ga teng buladi 
//   // lekn biz if else ishlaganda return bulgan malumot callback bulsin va uning parametiri sifatida chiqishi kerak bulgan malumot berilyapdi 
//   // biz tashqarida callback fnc ichiga bu chaqirilganda console da buning parametiri va ...fenished chiqsin deyapmiz 
//   // bu calback qachonke setTimeout ishlab bulgandan sung if else da malumot rekshirilib bulgandan kiyin chaqirilganda ishlaydi 

//   // agar callback dan foydalanmaganimizda setTimeout ohiri ishlas edi hammasidan kiyin
// }

// //-=-=-=-=-=- Callback hell 
// // callback ichidagi callback ga callback hell deb aytiladi 

// // bu callvack ni biz tashqarida yozib paramertga berib olsakham buladi 
// const callback = (usr, getAge) => { //  getAge parametri ichki callback fnc ga teng callback hell 
//   console.log(usr)
//   // agar bizga age ham kerak bub qolsa bunga kelgan ikkinchi param callback fnc ni cahqirishimiz kerak buladi 
//   console.log(getAge()) // callback ichidagi callback ni chaqiryapmiz
//   console.log('...finished')
// } // mana uzimizga kerakli userning age niham olamiz faqat uzimiz hoholasak hohlamasak fnc ni chaqirmaymiz

// login('John',2004, callback) // shu holatda yoziladi callback() qilib quysak fnc ishlab ketadi shuning uchun nomini uzi yoziladi 
// // hozir callback degan veriable izlayapdi va uning qiymati fnc ni parametr qilib loginga beryapdi 
// // -=-=-  Callback bizga kutish jarayonini qilib berdi



// #########################



// // -=-=-=-=-=-=- new Promise()
// // bu bizga callback urniga chiqarilgan 

// // new Promise((resolve, reject)=>{}) - bu uc ichiga callback fnc oladi 
// // va callback 2 ta parametr oladi 
// // 1 - si doim malumot true bulganda ishlaydi 
// // 2 - si doim malumot false bulganda ishlaydi 

// console.log('started...')

//  let user = new Promise((resolve, reject) => {
//   if(database.John.login === 'John' && database.John.passawrd === 2004){
//     return resolve(`${database.John.fullName}, Welcome to Facebook`,) 
//   }else{ 
//     return reject(`passawrd da xatolik bor`)
//   }
  
//   // 3 va 4 - usullarda setTimeout ichida bulsaham ishlaydi

//   // setTimeout(() => {
//   //   if(database.John.login === 'John' && database.John.passawrd === 204){
//   //     return resolve(`${database.John.fullName}, Welcome to Facebook`,) 
//   //   }else{ 
//   //     return reject(`passawrd da xatolik bor`)
//   //   }
//   // }, 1000);
//  })

//  // Promise kutish ihslarini qilib berolmaydi bu faqat resolve reject qiladi 

//  //-=-==-=- then
//  // bundan faqat kelyotgan resolve malumotni tutush uchun then dan foydalanamiz 
//  // then qanday ketma ketlikda yozilsa usha holatda chiqaradi 

// // 1 - usul
// // user.then(res => console.log(res)) // kelyotgan malumot callback parametiri (res) ga teng buladi   
// // shart tug'ri bulib resolve qaytaganligi uchun malumot chiqadi

// // agar login yoke password xato bulib else ishlasa va reject qaytganda bizga malumot chiqarmas edi chunke reject dan kelyotgan malumotni the tutib olmaydi 
// // reject ning malumotini catch tutib oladi 
 
// // -=-=- catch

// // 2 - usul
// //  user
// //  .then(res => console.log(res))
// //  .catch(err => console.log(err)) // bunda try catch dagidek xatolikni boshqa kodlar ishlashiga xalaqit bermagan holda chiqaradi 


// // console.log('...fenished') bu holatda yozganimiz shu value bunday chiqyapdi 
// // value:
// {
//   // started...
//   // ...fenished
//   // Jahongir Doniyarov, Welcome to Facebook
//   // bu holatda Promise kutmayotgan bulsaham ohirida chiqyapdi 
// }

// // 3 - usul
// // biz finished Promise dan kiyin chiqishi uchun finished ni ohirgi thenga yozishimiz kerak ohirgi then har doim ohiri chiqadi 
// // user
// // .then(res => console.log(res))
// // .then(() => console.log('...fenished'))
// // .catch(err => console.log(err))

// // value:
// {
//   // started...
//   // Jahongir Doniyarov, Welcome to Facebook
//   // ...fenished
// }

// // lekn bu holatda else ishlab reject kelsa fenished chiqmaydi chunke reject keladi va .catch ishlab ketadi 
// // value:
// {
//   // started...
//   // passawrd da xatolik bor
// }

// // biz buni resolve kelsaham reject kelsaham fenished ohirida chiqsin demoqchi bulsak .finally methodidan foydalanamiz 

// // -=-=-=-=- .finally
// // bu bizga hamma then catch methodelari ishlab bulgandan kiyin ishlaydi 

// // 4 - usul 
// user
// .then(res => console.log(res))
// .catch(err => console.log(err))
// .finally(() => console.log('...fenished')) // Promes ichidagi malumot setTimeout ning ichida bulsaham bu setTimeout kutib 
// // turadi va kiyin ishlaydi thenham shunday faqat unda reject kelsa ishlamaydi

// //  else ishlab reject kelsaham finally eng ohirida chiqadi 
// // value: 
// {
//   // started...
//   // passawrd da xatolik bor
//   // ...fenished
// }


// // -=-=-=-=-=-=-=-=- Promise.all 
// // Birdan bir nechta Promise malumotlarini oladi 
// // bu array qabul qiladi va bundan qaytyotgan malumotlarham array kurinishida buladi 

// let all = Promise.all([ // ichidagi hamma promise ishlab bulishini kutadi 
// new Promise((resolve, reject) => {
//   if(database.John.login === 'John' && database.John.passawrd === 2004){
//     return resolve(`${database.John.fullName}, Welcome to Facebook`,) 
//   }else{ 
//     return reject(`passawrd da xatolik bor`)
//   }
//  }),
//  new Promise((resolve, reject) => {
//   if(database.John.login === 'John' && database.John.passawrd === 2004){
//     return resolve(`${database.John.fullName}, Welcome to Facebook`,) 
//   }else{ 
//     return reject(`passawrd da xatolik bor`)
//   }
//  })
// ])
// // bundan kelyotgan malumotni olsak then blan 
// all.then(res => console.log(res)).catch(err => console.log(err))

// // value:
// {
// // started...
// // Jahongir Doniyarov, Welcome to Facebook

// // [
// //   'Jahongir Doniyarov, Welcome to Facebook',
// //   'Jahongir Doniyarov, Welcome to Facebook'
// // ] 
// // bu value promise.all dan kelyotgan value  array holatda kelyapdi 2 ta chunke promise.all ning 2 ta promesi bor 
// // 1 - value 1 - promesi niki 
// // 2 - value 2 - promesi niki 

// // ...fenished - bu bundan oldingi kodning .finally si bulganligi uchun bundanham kiyin chiqyapdi 

// }


// #########################


// =-=-=-=-=-=-=-=-=- async await
// async (malumotni asinxron qilib beradi) await(malumot kelishini kutadi)

// functionlarni asinxron qilish 
// buning uchun async await dan foydalanamiz 

// function get(){} // bu oddiy fnc biz buni asinxron qilishimiz uchun buning oldiga async qushib quyishimiz kerak buladi 
// async function get(){} // bu asinxron fnc buldi 

// callback bulganda boshqacha quyiladi 
// let getAs = () => {} // oddiy callback fnc asinxron qilish uchun = dan kiyin () dan oldin async quyiladi 
// let getAs = async () => {} // asinxron callback fnc buldi 


// bu promesi blan ishlaydi 

console.log('started')

let user = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(database.John.login === 'John' && database.John.passawrd === 2004){
        return resolve(`${database.John.fullName}, Welcome to Facebook`,) 
      }else{ 
        return reject(`passawrd da xatolik bor`)
      }
    }, 1000);
  })

// user.then((res) => console.log(res)) // biz shu malumot ishlashini kutishimiz kerak bu ishlagandan kiyingina finished chiqsin 
// birinchi asinxron fnc ochib olamiz 

let get = async () => {
  let res = await user // await bizga userdan malumot kelishini kutadi va kelgandan sung ishga tushadi
  // bu faqat promesi ni kutadi 

  // agar await ni yozmasdan user qilib ketsak bu promesi qaytaradi
  // let res = user // Promise { <pending> }

  console.log(res) // bu chiqqandan kiyin finish chiqsin deymiz
  console.log('finished')
}

get() // get fnc ni chaqiryapmiz

// console.log('finished')

// async await Promise ning sntacsis shugasi (yani ishlatilishi oson varianti) deyiladi

// Callback, Promise, Async Await hammasini maqsadi bitta codeni kelishini kutib turish va undan kiyin boshqa bir ishni bajarish 