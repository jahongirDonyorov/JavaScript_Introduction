// -=-=-=-=-=-=-=-=- Advanced 
// -=-=-=-=-=- Proxy

//   - Proxy - let     = new Proxy 
//        - what is proxy ?
//        - target -is an obj to wrap 
//        - handler - proxy configuration 



// new Proxy() - NoPrivmatives ga nisbatan ioshlatiladi
// bu export levle dagi malumot hisoblanadi hammayam tug'ridan tug'ri buni ishlatavermaydi

let user = {}
let proxy = new Proxy(user, {}) 
// Proxy() 2ta parametr oladi 
// 1 - si nimaga nisbatan ishlatayotganimiz 
// 2 - si canfeguratsia (yane {} buladi uni ichiga biz 1-param ustida qandaydur amal bajarm,oqchi bulsak ushani yozamiz)

console.log(user) // {}
console.log(proxy) // {}
// ikkalasidaham bir hil malumot chiqadi boshida
 let user2 = {
  name: 'webbrian',
  _stir: 12345,
 }
 
 let proxy2 = new Proxy(user2,{ // bunga nisbatan biror amalni shuni ichida bajaramiz 

  // proxy ning uzini functionlari mavjud 
  // 1 - get(), 2 - set(), 3 - ownKeys()

  // -=-=-=-=-=-=-=-=-=-=-=-  get(target,property,receiver){}
  
  // get uziga 3 ta parametr oladi

  // 1 - target -  butun boshli bizga kelyotgan obj 
  // 2 - property -  uning ichidagi qiymatlar 
  // 3 - receiver -

  get(target,property,receiver){}
 })

 console.log(user2.name) // webbrian
 // proxy ichiga fnc qushishimizdan oldin oldin
 console.log(proxy2.name) // webbrian
// malumotlar bir xil chiqadi 

// proxy ga uzning fncsini yozganimizdan keyin
console.log(user2) // { name: 'webbrian', _stir: 12345 }
console.log(proxy2) // { name: 'webbrian', _stir: 12345 }
// ikkalasidaham malumot chiqyapdi lekn ichidagi bitta keyni valuesini olishda xatolik buladi 

// get fnc ni uzi yozilgan holat hechqanday return qaytmagan
console.log(user2.name) // webbrian bunda tug'ri ishlayveradi 
console.log(proxy2.name) // undefined chiqadi {} ichiga uzgartirish kiritishimiz blan buning malumotlari yuqolib qoladi 

// buni tug'irlash uchun  proxy {} ichida get fnc ochib unda property larni return qilishimiz kerak 

let proxy3 = new Proxy(user2,{ // bunga nisbatan biror amalni shuni ichida bajaramiz 
  get(target,property,receiver){

    // return qilgan malumotimiz proxy2.name  yoke lubboy bror narsa yozganimizda chiqadi 

    // return 'Hi name' // hozir biz proxy2.nma yozsakham shu suz chiqadi 
    // bi user2 ni malumotlari chiqarish uchun target (obj) ichidagi valuelar prooperty ni qaytarishimiz kerak target[prooperty]; [] bu keyni deynamic holatda olish uchun 
    // return target[property] // kelyotgan .dan kiyingi malumot [] ichiga kelyapdi / target._stir qilgan bilan birhil 
    
    // biz _ blan boshlangan keylar prived bulsin tashqarida ishlamasin deyishimiz mumkun 
    if(property.startsWith('_')){ // property bizga string holatda keladi shuning uchun unda stringning methodelarini ishlatsak buladi
      return `access for ${property} is dineid` // agar malumot boshida _ bulsa shu chiqsin deyapmiz 
      // bu hafsizlik uchunham qilinadi brawserdan malumotlarni olishni oldini oladi
    }else{
      return target[property]
    }
    
  },  

 })
// return Hi name bulganda 
//  console.log(proxy3.name) // Hi name chiqyapdi

// return target[prooperty] bulganda 
console.log(proxy3.name) // webbrian chiqyapdi

console.log(proxy3._stir) // access for _stir is dineid - bizga bu malumotga kirish mumkun emas deb chiqadi 
// proxy shu uchun bizga kerak buladi yane qaysidir malumotni exes qilishimizdan oldin u malumotni uzimizni qoidalarimizga moslash 

proxy3.title = 'It Center';

console.log(proxy3) // { name: 'webbrian', _stir: 12345, title: 'It Center' }
// obj ishlatgandek ishlatib ketaveramzi

// oddiy objni uzi bulsa biz muhum malumotlarni uzgartirib quyishimiz mumkun masalan user ning passwordini uzgartirishimiz yoke yangi name qushishimiz mumkun 
// biz buni oldini proxy blan olsak buladi 
// buning uchun set dan foydalanamiz 

let user3 = {
  name:'John',
  _Mirread:false,
  password: 12345,
}
console.log(user3.password) // 12345
user3.password = 2004 // password ni uzgartiryapmiz  
console.log(user3.password) // 2004

// bu holatda uzgarib ketyapdi biz password ni uzgartirib bulmaydigan qilishimiz mumkun 

// -=-=-=-=-=-=-=-=-=- set(target,property,receiver){}
// buham huddi get kabi 3 ta parametr oladi 

let proxy4 = new Proxy(user3,{
  set(target,property,receiver){
    if(property === 'password'){
      return false // agar property password ga teng bulsa u return bulmaydi / return bulmasa tashqarida uni ishlatolmaymiz uzgartiribham bulmaydi bu holatda 
    }else{ // else ishlasa return true bulib yangi malumot qushiladigan bulsin deymiz
      target[property] = receiver // obj valuelari yangi kelyotgan valuega teng bulsin deyapmiz 
      // yangi malumot qushadi
      return true // password bulmaganlar return buladi 
       // return da qaytgan qiymat proxy.aaa qilganimizda chiqar edi 
    }
  },  
 })
 proxy4.password = 1999
 console.log(proxy4) // { name: 'John', _Mirread: false, password: 2004 }
 // bunda qiymat uzgarmayapdi 

 
 // lekn boshqa qiymatni uzgartirsak yoke yangi qiymat qushsak 
 proxy4.name = 'Jahongir'
 console.log(proxy4) // { name: 'Jahongir', _Mirread: false, password: 2004 } = buniham uzgarmaydigan qilishimiz mumkun ekan
 
//  shularga proxy deyiladi 