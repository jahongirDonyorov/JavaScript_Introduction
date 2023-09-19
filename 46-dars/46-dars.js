
// -=-=-=-=-=-=-=-= Cookies

// -=- Cookies - part of profocol
//      - what is Cookies? - cookies user uchunmi yoke owner uchun hizmat qiladimi ?
//      - cookies malumotlarni tuplash uchun kerak buladimi ?
//      - set by web-server - 

// -=- Cookies Methods
//      - document.cookie - red / write cookies from browser 
//      - expires - expires in second from now on 
//      - session cookies - browser yopilishi bilan o'chib ketadigan cookies 
//      - deleteCookies - new Date / date.toUTCString()

// -=- Cookie Flag 
//      - secure - transfer data only https protocol 
//      - samesite - security flag 
//        - samesite=strict - same as samesite itself 
//        - samesite=lax - has two cases 
//          - method is get not post 
//          - top level navigation 
//      - XSRF attack nima? - Ceoss-Site Request Forgery 
 


// -=-=-=-=-=- Cookies

// Buham huddi LocalStorage va sissionStorage kabi malumotlarni browserni uzida saqlab turish uchun ishlatiladi 
// lekn buning ulardan farqi kuproq 

// bunda malumot doimiy turmaydi biz bunga malumotni qancha vaht turishini yozishimiz kerak  uzimiz yozgan vahtgacha alumot browserni Cookies da saqlanib turadi

// bundan users haqida malumot tuplab user nmalaga qiziqadi nmalarni kurpoq kuradi usham tuplangan malumotlar asosida 
// user ga kerakli malumotlarni chiqarish uchunham Cookies dan foydalansak bulladi 

//-=-=-=- Usege 

// -=-=-=- Cookies yaratib malumot biriktiramiz 
document.cookie = 'name=John' // = dan oldingi name key, = dan kiyingi John value / lekn biz LocalStorage dagidek cookies.getitem('name') qilib malumotni chiqarib olomaymiz 
// buni key sifatida obkelish qiyin buni biz har ; bor joyidan array qilib olib ichidagi malumotni = dan oldingisikey =dan kiyingisi value bulsindeb kiyin olsak buladi 

// bunga 2-parametr sifatida method lar beramiz 
// 1 - expires
// 2 - max-age 
// 3 - session cookies 
// 4 - deleteCookies

// -=-=-=- expires
// qanchadan kiyin uchishini yozamiz bu orqale 
// uchishi kerak bulgan vahni yozib olamiz 
let date = new Date(2023,9,22);
// cookies bu faqrmatni qabul qilmaganligi uchun buni toUTCString() qilib olishimiz kerak 
date = date.toDateString();

// va endi cookies ga 2- param sifatida malumotni quyib olamiz 
document.cookie = `name=Javlon; expires=${date}`

// -=-=-=- max-age
// bu cookies malumoti nechi secunddan kiyin uchishini bildiradi / max-gae=2 - 2 secuntdan kiyin cookies malumoti uchib ketadi 

document.cookie = `name=Jahon; max-age=2`// 2 secound dan kiyin cookies malumoti uchib ketadi 

// -=-=-=- session cookies
// bu browser yopilishi blan uchib ketadigan cookies hisoblanadi 
// qachonke 2-qiymat (expires, max-age) quyilmasa bu qiymatlar uchib ketadi 

// -=-=-=- deleteCookies
// new Dateqilib date.UTCString() qilsak cookies uchib ketadi  

// -=-=-=- bularni kurish uchun 
console.log(document.cookie) // qilishimiz kerak hsunda hamma cookies larni inspect dankursak buladi 

// buniham inspectning Application  bulimida kursak buladi LocalStorage ning pasida turadi 
// LocalStorage da key va value ni kursatsa bunda kuproq malumotlarni kursatadi (name, value, Domin, Path, Size, Secure, ...)


// -=-=-=-=-=-=-=-=- cookies himoyalashga misol
// users bankga login qilganda usersga 'uid' yasab beradi va uni cookies ga saqlaydi 
// 2-martta kirganimiz shu malumotga qarab demak bu uswers ruyhattan utgan ekan deb pul utkazmoqchi bulsak pulni utkazib beradi kirgan users nomidan 
// hacerlar usersning 'uid' sini ug'orlab boshqa bir saytdan bankga users nomidan surov yuborishiu mumkun buladi

// biz bularni oldini olish uchun Cookies flag lardan foydalanishimiz kertak 

// -=-=-=-=- Cookies Flag 

// -=-=-=- secure
// agar biz secure qilsak bizning uid mizni ugirlasaham boshqa saytdan uni bankga yuborolmaydi bank buni qabul qilmaydi 

document.cookie = 'age=19; secure' // bu  cookies backendga bormaydi 

// endi Application cookies ning secure bulimini kursak aynan age nomli cookie ptechka bulib qolgan bu malumot secure bulganini bildiradi

// -=-=-=- samesite 
// buning uziniham 2 ta methodi bor

// 1-si samesite=lax 
// buni qushib quysak qushgan boshqa joydan malumot obkelsa buladi lekn cookie veribili blan backend bitta GET ni ishlatoladi PUT DELETE larni ishlatolmaydi
document.cookie = 'age=19; secure; samesite=lax' // 3-parametr qushilaypdi har birini orasi ; blan ajratilgan 

// 2-si samesite=strict bu samesite ni uzini yozib quyganimiz bilan birhil 
document.cookie = 'age=19; secure; samesite=strict' // uzidan boshqa joydan malumot ob kelishni tuxtatadi 

// endi Application cookies ning samesite bulimini kursak aynan age nomli cookies lax bulsa lax strict bulsa strict yozilgan buladi 



// ############################## new mavzu 

//      - decodeURIComponent 
//      - decodeURI - % # + & ! @ nod decode 
//      - encodeURIComponent - encodeURI
//      - new URL - autonatically enode and decode 



// URL yasoyotganimizda doim new URL() blan yasaganimiz yaxshi
// bu bizga automatik encode decode qilib beradi