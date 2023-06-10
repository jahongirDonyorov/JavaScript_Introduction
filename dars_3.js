// -#-#-#-#-#-#-#-#- Kirish

// -=-=-=-=-=-=- belgilar -=-=-=-=-=-=-=-

// -#-#-# - eng asosiy narsalar
// -=-=-= - mavzu nomi
// --=--=-- - qushimcha malumotlar
// !_!_ - Eslatma ( yodlash qilish shart bulgan narsalar )
// #_#_#_#_# - darsning (mavzuning) oxiri (tugashi)

// #_#_#_#_#_#_#

// -=-=-=-=-=-=-=- JavaScript kirish

// -=-=-=- JS File yaratish
// js file ham qolgan file lardik yaratiladi Boshida mavzuga oid suz va oxiri . js blan tugashi shart
// misol: index.js, style.js, main.js va hokozo .....

// JS File ni HTML ga ulash
// Js fileni ulashni 2 ta eng samarali yuli mavjud
// 1. Bu usul js kodimiz kamroq bulsa kam kod yozilsa qullasak buladi / HTML file ning uzida JS yoziladi
//  HTML kodning pastidan (bodyning ichida) <script> ... </script> shu tag yoziladi va shuning ichiga JS code yozib boriladi

// 2. Bu usul kode kub bulganda ishlatiladi / addelne JS file ni HTML ga ulash / bu usul boshqalariga qaraganda kuproq ishlatiladi
// Js file ulash uchun HTML kodning eng pastki qismidan <script src='fili manzini'></script>  yozilgan holda ulanadi

// -=-=-=-=-=-= JS code natijalarini kurish
// Js da yozilgan code larni HTML CSS ni kurgandek brawserda yaqqol kurib bulmaydi
/* Uni kurish yullari kup 
  1. Brawserning inspect bulimidagi consolda kurishimiz mumkun  
  2. Code Runner extension urnatib usha orqali kurish 
  3. Agar Node JS urnatilgan bulsa Termenalning uzida  node file name  ni yozib resultatni kurish mumkun - bu usul keng ishlatiladi   */
//  Bu usullarham JS da yozgan hamma kodimizni chiqaravermaydi ayrim kod rezultatlarini brawserni uzida kurish kerak (print va shunga uxshahslarini)

// !_!_!_!_! Node JS urnatilgan yoke urnatilmaganligini bilish uchun (node -v) kamandasini yozib tekshirsak buladi !_!_!_!_!_!_!
// https://nodejs.org/en - shu lenk orqali node js ni urnatsak buladi

// !_!_!_!_!_!  ___ ; ___ bu bizga code tugaganligini bildiradi. ___ , ___ bu esa hali codening davomi borligini bildiradi

// -=-=-=-=-=-=- Veriables (uzgaruvchilar) -=-=-=-=-=-=-=-
// Malumot saqlash ucun ishlatiladi. Malumotlarni Veriablelarda saqlashni yaxshi tomonlari
//  - Agar malumotingiz katta bo'ladigan bulsa ularni hardoim qayta yozib utirmaysiz, istalgan vaqt veriable nomi blan chaqirishimiz mumkun
//  - Veraiblelar ustida qo'shimcha amallar bajarish imkoni osonlashadi
//  - O'qish uchun oson. Clean code qoidasiga asoslangan.

// -=-=-=-=-=-=- Variable decloration - Variabllarni bir nechta usullar orqali ifodalashimiz mumkun
// let va var orqali Variables yaratiladi bu ikkalasining farqi let - local, var - global verable hisoblanadi

// !_!_!_!_! Hozirgi kunda 90% let ishlatiladi let varga nisbatan ancha yaxshiroq va yangi var eski versia bulganligi uchun kam ishlatiladi !_!_!_!_!_!

// 1   2         3
let name = "Jahongir";
var ag = "18";

// 1 - variable yaratish uchun kalit suz
// 2 - variable nomi
// 3 - variable qiyumati

// biz har doim variable nomi (2) ni chaqirish orqali qiymati (3) ni olivolamiz
// kurib turganingizdek ikkala verable kalit suzlari bir hil ishlaydi --- Likn let ishlatganimiz yaxshiroq varda ayrim baglar sodir bulishi mumkun ---

// !_!_!_!_!_!_!_!_!_!_! variable yaratishda nomi (2) ni Js kalit suzlari (if,els,function ...), Boshqa variable nomi blan birhil qilib bulmaydi

// -=-=-=-=-=-=- variable yaratish turlari

// 1. bir qatorda faqat bitta / bitta variable ga bitta qiymat
let a = "John"; // bu holatda ; kodning tugaganligini bildiradi

// 2. bir qatorda bir nechta / bitta variableda bir nechta qiymat va nom

let FirstName = "John",
age = 18,
Married = "false";
// bu holatda , blan yozilyapdi , code hali davom etyotganini bildiradi. Shu holatda biz , blan bitta kalit suzga hohlagancha verable yaratishimiz mumkun ekan
// bittalab har biriga let yozmasdan bitta let yozib , blan hohlagancha verable nomini yozib yaratib ketishimiz mumkun oxiriga ; quyilishi kerak
let g = 2, f = 1, r = 4; // , blan ajratib bitta qatorda yozsakham buladi bir birining pasidan yozsakham buladi 

// 3. kali suzini ishlatmasdan verable yaratish 
// bu usul juda eski avval Variable shu holatda yaratilgan bu holat hozirda ishlatilmaydi
w = 'hello'
// bu holatda ochilgan verable automatik var buladi lekn bu holat umuman ishlatish tafsiya berilmaydi kuplab buug lar sodir bulishu mumkun

// !_!_!_!_! Hozir yozgan barcha verale larning rezultatini tug'ridan tug'ri kurib bulmaydi / termelanda node .... qilsakham hechnarsa chiqmaydi !_!_!_!_!

// -=-=-=-=-=-=-=- Rezultatlarni kurish -=-=-=-=-=-=-=
// console.log() - bu bizga nafaqat verale balke boshqa narsalarningham rezultatini chiqarishda foydalanamiz
// bu faqat rezultatni termenal yoke Brawser consolida chiqaradi
// () ichiga yozilgan narsani termenalda chiqarib beradi 

let lastName = 'Doniyarov'
// buni kurish uchun consolga verale nomi yoziladi
console.log(lastName) // verale nomi yozilsa nomni uzini emas uning qiymatini chiqaradi

// bunga verable nomi emas bror matimatik amal yozsak javobini chiqaradi 

console.log(1 + 2) // termilanda rezultatni kursak 3 chiqadi
console.log('salom') // salom chiqari 
console.log(145) // 145 chiqadi nma yozsak ushani termenalda chiqaradi