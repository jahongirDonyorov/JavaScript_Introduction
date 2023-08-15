// -=-=-=- Cache -=- DDOS attack TYpes -=-
// Muntarija
//    - transparent cache 
//    - DDOS attack'ning saddo kurinishi 
//    - this qaysi holatda undefined bulib qoladi 


// error 500 DDOS attack bulganda chiqib qoladi kupincha

// html ga ulab ishlatiladigan functionlar errow function bulsa ishlamaydi 

// -=-=-=-=-=-=- DDOS
// uzi DDOS attack qanday buladi ?
// hozirgi kodimizda user click me tugmasini bosganida serverga bir hil request (surov) boradi  
// usha narsa tuxtovsiz boraversa server uqiyolmay qoladi va error beradi 

function getData() { 
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
   res.json() // biz fetch yordamida backend dan malumot olyapmiz 
   // va uni then blan obj ga aylantirib olyapmiz 
  })
}
// user click me tugmasini har bosganda bu function ishlaydi va serverga surov yuboriladi 
// usha surov takroriy yuborilaversa DDOS attack bulgan buladi 

// Tuxtavsiz suriv yuborishga msol 

function getData() { 
//  setInterval(()=>{
//   return fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
//     res.json() // biz fetch yordamida backend dan malumot olyapmiz 
//     // va uni then blan obj ga aylantirib olyapmiz 
//    })
//  },0)
}
// bu holatda click tugmasini bir martta bossak serverga tuxtovsiz surov yuboriladi va error beradi server
// DDOS shu holatda request nint tuctovsiz serverga borishi blan buladi 

// biz buni oldini olishimiz uchun bitta request faqat bir martta keladigan qilishimiz mumkun 
// ushanda bitta request ni takroriy ravishda beravermaydi. 

// bu holatda malumot bir martta kelganda cached ga saqlab quyamiz va kiyin chalik takroriy surov kelsa
// biz backend ga yubormasdan malumotni cached olib beramiz.

// -=-=-=-=-=- cached 
// cached malumotlarni bazaga saqlab request kelganda bor bulsa shuni uzini olib beradi yuq bulsa
// serverdan izlab yangi malumot olib beradi.

function getFullname() { 
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
   res.json() // biz fetch yordamida backend dan malumot olyapmiz 
   // va uni then blan obj ga aylantirib olyapmiz 
  })
} // bular oddiy holatda cached bulmaydi 

// bu har bir function uchun allohida yozilmaydi bir martta yozib quyiladi hamma fnc da ishlayveradi

// -=-=-=-=-  cashed qilish 

function getCached(func) { // func parametiri getFullname ga teng bulyapdi va uni cashed qilib qaytaramiz 
  let cache = new Map(); // bunga undefined null qiymatlari kelsaham chiqaradi
  // return qilib funtion qaytarishimiz kerak 
  return function(a){
    // endi biz cache inchida malumot bor yuqligini  tekshirishimiz kerak 
    // va malumot bulsa uzini chiqar deymiz (yane shu surov oldim yuborilgan bulsa ushani malumoti chiqasin deymiz)
    // agar new request (yangi surov) bulsa serverdan izlab shu malumotni chiqar deyishimiz kerak 
    if(cache.has(a)){ // bu cash ichida a bor yuqligini ketshiryapdi 
      console.log(cache.get(a)) // bu bizga malumot qaytyotganini kurish uchun
      return cache.get(a)
    }
    // agar bizda u malumot bulmasa getFullname dan kelyotgan malumotni chiqarsin deymiz 
    let res  = func() // func (getFullname) dan kelyotgan malumot res ga teng bulsin deyapmiz 
    return cache.set(a, res) // bu holatda res a ning valuesi bub tenglashyapdi 
  }
}

// biz bunga fnc malumotini cached qilib olishimiz kerak
getFullname = getCached(getFullname) // getFullname = bulsin deyapmiz getFullname ning cached bulgan variantiga
// fnc ichidag return bulgan fnc ni chaqirish uchun getCached(getFullname)() qilsakham buladi lekn 
// getFullname() // bunday qilib quyganimiz yaxshiroq
// bu hozir getCached ni ichida return bulgan fnc ga teng 


// endi request kelganda bir martta serverdan malumot olyapdi va usha request ni uzida saqlab qolyapdi
// yana usha request kelsa servergaham bormasdan malumotni uzimizdan chiqaradi agar new request kelsa serverdan izlaydi


// biz backEnd ga request ni deynamic usulda junatsak buladi 
let usr = {
  name : 'users',
  getFullname(){
    // cache bulgandan kiyin 
    console.log(this) // undefined chiqadi cache qilinganda this uz hususiyatini yuqotyapdi 
    fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then((res) => {
    // cashe bulmagan holat
    // this usr ichidagi name qiymatini chiqaradi ('user')

    // cache bulgandan kiyin
    // this yuqolib qolyapdi (undefined) ga teng bulib qolyapdi this.name ishlamay bizga .com gacha chiqaradi


    // nima uchun bunday buldi 
    // return bulganda qiymat teng buladi lekn qiymat NoPrimative bulsa referensi uzgaradi 
    // referencs uzgarsa this uz qiymatini yuqotadi 

    res.json() 
  })
  }
}
// bizga me click ni har bosganimizda users ni chiqaryapdi 
// qancha me click ni bossak request shuncha kelaverayapdi biz buni cached qilsak malumot kelgansa saqlab qoladi va 
// yana usha surov kelsa serverga surov yubormasdan uzimizdagi malumotni chiqaradi 

function getCached(func) { 
  let cache = new Map(); 
  return function(a){
    if(cache.has(a)){ 
      console.log(cache.get(a)) 
      return cache.get(a)
    }
    // let res  = func() // bu holatda this qiymati yuqolib qoladi 
    // biz this yuqolganda fnc chaqirilgan joyda unga this berib quyishimiz kerak
    let res = func.call(this) // bu holatda yaxshi ishlaydi 
    return cache.set(a, res) 
  }
}

usr.getFullname = getCached(usr.getFullname)
// ichki fnc getFullname ni cache qilganimizda this yuqolib qoladi (undefined ga teng buladi)
// biz lekn tepad

// oddiy fnc larga bu narsa ishlagan bulsa obj ga ishlamaydi 

// nima uchun bunday buladi 
// getFullname NoPrimative bulganligi uchun bu yira tenglashyotganda referensi uzgarib ketyapdi 
// let res = func() ni uzgartiramiz  unga thi beramiz

// page ni yangilab restart qilsak cache dagi hamma malumot uchub ketadi 


// -=- cache ni ham hamma code da ishlatolmaymiz 

// Masalan: Login da
// biz saytga kirganda hardoim harhil login berish kerak bulsa biz buni cache qilsak faqat bitta 
// login keladi