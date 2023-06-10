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

// _!_!_!_!_!_!_!_ huddi biz brozni ismi blan chaqirgandek variable ni ham nomi blan chaqirishimiz kerak

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
let g = 2,
  f = 1,
  r = 4; // , blan ajratib bitta qatorda yozsakham buladi bir birining pasidan yozsakham buladi

// 3. kali suzini ishlatmasdan verable yaratish
// bu usul juda eski avval Variable shu holatda yaratilgan bu holat hozirda ishlatilmaydi
w = "hello";
// bu holatda ochilgan verable automatik var buladi lekn bu holat umuman ishlatish tafsiya berilmaydi kuplab buug lar sodir bulishu mumkun

// !_!_!_!_! Hozir yozgan barcha verale larning rezultatini tug'ridan tug'ri kurib bulmaydi / termelanda node .... qilsakham hechnarsa chiqmaydi !_!_!_!_!

// -=-=-=-=-=-=-=- Rezultatlarni kurish -=-=-=-=-=-=-=
// console.log() - bu bizga nafaqat verale balke boshqa narsalarningham rezultatini chiqarishda foydalanamiz
// bu faqat rezultatni termenal yoke Brawser consolida chiqaradi
// () ichiga yozilgan narsani termenalda chiqarib beradi

let lastName = "Doniyarov";
// buni kurish uchun consolga verale nomi yoziladi
console.log(lastName); // verale nomi yozilsa nomni uzini emas uning qiymatini chiqaradi

// bunga verable nomi emas bror matimatik amal yozsak javobini chiqaradi

console.log(1 + 2); // termilanda rezultatni kursak 3 chiqadi
console.log("salom"); // salom chiqari
console.log(145); // 145 chiqadi nma yozsak ushani termenalda chiqaradi

// -=-=-=-=-=-= variable ishlatishga misollar
/* masalan bizda 100 qatorlik gap bor uu prayektimizda 3 4  martta takrorlangan uni 3 4 marttta takror yozsak juda kup narsa bulib ketadi
shuning uchun  uni bitta variable ga quyib olsak usha variable chaqirish orqali 3 4 martta usha suzni chiqarsak buladi */
let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit dolor quisquam expedita eveniet sequi natus,
 laboriosam amet placeat tempora, tempore deserunt explicabo ex totam, itaque ratione doloribus nemo ut quos voluptatibus error delectus. 
 Aspernatur soluta, facilis accusantium impedit veniam pariatur unde eos eligendi maiores magnam velit tempora culpa odit nostrum nesciunt quas officiis sed rem 
 beatae corrupti delectus. Reprehenderit doloremque amet itaque repellendus nisi voluptas. Consequuntur nihil modi cumque tempore dignissimos, animi incidunt facilis aliquam. 
 Facere fugiat iste esse vel corporis, impedit soluta est. Expedita consequuntur ipsam dolorum repellat fugit iste repudiandae sed ex perferendis maiores voluptates, obcaecati earum.
`;
// 1
console.log(text, 1);
// 2
console.log(text, 2);
// 3
console.log(text, 3);
// 4
console.log(text, 4);
// bu holatda biz textni bir marttta yozib uni 4 martta ishlatdik
// bu bizga variable ni yana bir yaxshi tomoni
// variable ni bir kontainer desak ham buladi bror bir narsani saqlab turadi kerak vahti variable nami blan chaqirirb olamiz

// #_#_#_#_#_#_#_#_#_#_#_#_#

// -=-=-=-=-=-=- sangle srit vs mount srit  -=-=-=-=-=-=-
// sangle strit - bir vahni ichida faqat bitta ishni bajaradi
// Masalan JavaScript tepadan pastga bitta bitta uqib keladi hammasini birdan uqimaydi
// misol:
console.log("salom 1");
console.log("salom 2");
// value :
// 1 - salom 1
// 2 - salom 2
// 1 - salom bir tepadagi 2 - salom 2 pasdagi javob chiqayapdi JS kodni yuqoridan pastga birin ketin bitta bitta uqiyapdi

// ========

// moun srit - bir vahning ichida bir nechta amalni bajaroladi
// ayrim tillar borke bir vahning ichida birdan  2 3 ta amalni bajaradi bular mount sirit hisoblanadi

// misol:
console.log("salom 1");
console.log("salom 2");
// value :
// 1 - salom 1
// 1 - salom 2
// ikkalasiham bir vahda chiqqan bulardi mount srit da ishlaydigan tlda kod yozilganda

// _!_!_!_!_!_ JS sangle srit turiga kiradi  _!_!_!_!_!_!_!_

// #_#_#_#_#_#_#_#_#_#_#_#_#

// -=-=-=-=-=-=-=- JavaScript da nechta DATA TYPE mavjud -=-=-=-=-=-=-=-=-

// _!_!_!_!_ JS da data types 8 ta  _!_!_!_!_!
// _!_!_!_!_ There are 8 data types in JS  _!_!_!_!_!

// data types 2 ga bulinadi PRIMITIVE va NO PRIMITIVE
// PRIMITIVE bizga value qaytaradi
// NO PRIMITIVE link qaytaradi value alohida joyda joylashga buladi

// PRIMITIVE data types

// =-=-=-= Data type 1

// 1. Number - raqamlar, in range of +9007199254740992

// Biz ishlatadigan sonlar, matimatik amallarning hammasi data type numberga kiradi
// misol:
console.log(176); // data type number
console.log(1.09); // data type number
console.log(1 + 2); // data type number

// data type number termenalda sariq bulib chiqadi

// 9007199254740992 - numberga tegishli bulgan eng katta
console.log(9007199254740992); // value: 9007199254740992
// eng katta raqam bulganligi uchun bunga yana son qushsakham bu uzgarmaydi
console.log(9007199254740992 + 1); // value: 9007199254740992 - 1 quwsakham uzgarmadi oxiri 3 bulish kerak edi lekn avvalgidek 2 bulib qoldi
// - menuslikdaham eng katta raqam shu

// =-=-=-= Data type 2

// 2. Bigint 9007199254740992n 'n' is bigint

// bu data type numberda eng katta son (9007199254740992) dan ham kattaroq sonni chiqarish uchun kerak
// boya eng katta songa 1 ni qushganda uzgartirolmagan edik
// eng katta son blan arifmetk amal bajarish uchun bigint data type dan foydalanamz
// --- sonning oxiriga n quyilib arifmetk amal bajariladi ---

console.log(9007199254740992n + 2n); // value: 9007199254740994n - quwiw amali ishladi

// !_!_!_! Number alohida Bigint alohida DATA TYPE hisoblanadi !_!_!_!_!
// Numberda son oddiy yozilsa (1,2,3)
// Bigint da son ohiriga n qushiladi (1n, 2n, 3n)

// =-=-=-= Data type 3

// 3. String data type '...',"...",`...` - larning ichiga xoxlagan narsamizni yozsak u sitring buladi
// string oddiy text hisoblanadi, string yozishni 3 xil yuli mavjud

// 1. '...' - bittalik qushtirnoq ichiga yozish
console.log("salom"); // type string
console.log("123"); // type string
// stringning bu turiham keng qullaniladi lekn menus (-) tomonlariham mavjud
// '' ning menus tomonlari
/* O'zbek tili boy til hisoblanib unda o',g',tutuq belgisi (') mazjud bularning qoshchsi
 blan string '' bir hil bulib qoladi chunke ikkalasidaham 1 talik qushtirnoqlar va xatoliklar yuz beradi */
// misol:
//  console.log('bog\'') // bunda o' harfining qoshini string oxiri db uyladi va stringni shu yerda tugatdi
// buni tug'rilash uchun o' ning qowidan oldin \ quyishimiz kerak shu holada bizga suzimiz tuliq bo'ri bulib chiqadi
console.log("bo'ri"); // value: bo'ri

// bunda lekn qushtirnoqda yozolamiz
console.log('salom "bolalar"'); // value: salom "bolalar"

// 2. "..." - ikkitalik quwtirnoq ichiga yozish
/* bu usulham huddi tepadagi blan bir hil faqat bunda o',g',' larda xatolik bulmaydi chunke bularning qoshi blan string ikkixil
 stringda " 2 talik quwtirnoq bulsa bularda (o') bittalik shuning uchun adashib ketmaydi */
console.log("bog'");
// buning menus (-) tomoni buni ichida qushtirnoqqa olib bulmaydi
// misol:
//  console.log("salom "bolalar"") // bu usul xato buladi
// bundaham \ bu blan tug'rilasak buladi
console.log('salom "dunyo"'); // value: salom "dunyo"

// 1 talik quwtirnoq ichida 2 talik 2 talik quwtirnoqdan ichida 1 talikdan  foydalanolamiz

// bularning ikkalasidaham yani qatorga tushib bulmaydi yangi qatorga tushish uchun \n dan foydalanamiz
console.log("salom \n dunyo");

// 3. `...` - baksek bunda hohlagan narsamizni yozsak buladi ' "" larniham kiyin bunda joy tashlash uchun \n kerak emas shunday joy tashlab ketsak ham bulladi

console.log(`bo'ri "bog'lar" 
              Hillo teacher`);
// hohlagan narsamizni yazsak buladi

// -=-=-=-=-=-=-  stringa variable quwib suz yasash

let n = "Hello";
let m = "How are you";
// oddiy string
console.log(n + " John " + m); // value: Hello John How are you
// baksekda
console.log(`${n} John ${m} `); // value: Hello John How are you
// bunda hechqanday + joy tashkash kerak emas quwmoqchi bulgan variableni ${} ni ichiga yozsak bulgani

// _!_!_!_!_!_!

let num = 123;
//  yangi variables ning taypini bilish uchun tupeof() dan foydalanamiz
console.log(typeof `${n} John ${m}`); // string
console.log(typeof num); // number
console.log(typeof 1); // number
console.log(typeof salom); // undefined
console.log(typeof 1n); // bigint

// _!_!_!_!_!_!

// DATA TYPE 4

// 4. Boolean dta type - 2 ta qiymati bor ( true, false ) tug'ri yoke notug'ri
// bror narsa tug'ri bulsa yoke bajarilgan bulsa true
// notug'ri bulsa yoke bajarilmagan bulsa false
console.log(true);
console.log(false);
// bu kuproq savolli misollarda ishlatiladi 3 3 ga tengmi bu bunga tengmi degan savollarda teng bulsa true teng bulmasa false javoblari chiqadi
// misol:
console.log(2 === 2); // 2 tengmi 2 ga value: true
console.log(2 === 3); // 2 tengmi 3 ga value: false

// DATA TYPE 5

// 5. null - null qiymatiham data tpe ga kradi
// null da  qiymat mavjud lekn qiymatda hechnarsa yuq
let nul = null;
console.log(typeof nul); // uzi data type bulgani blan type tekshirilganda object type ga tegishli hisoblanadi.

// DATA TYPE 6

// 6. undefined - bu ham data type ga kiradi
// undefined da qiymatham mazjud emas
let unde = undefined;
console.log(typeof unde); // undefined chiqaradi

// -=-=-=-=- null vs undefined  farqi
//  null da qiymat mavjud lekn qiymatni ichida hechnarsa yuq
// msalan: Pepsi bor ichida hechnarsa yuq bizda faqat idishi mavjud

// undefined da qiymatham yuq
// msalan: umuman Pepsiham idishiham yuq bizda

console.log(null == undefined); // bu holatda ichida narsa bor yuqliginitekshiradi. value: true chunke ikkalsidaham ichida narsa yuq
console.log(null === undefined); // bu holatda qiymat bor yuqligini tekshiraadi. value: false  chunke null da qiymat bor undefined qiymatham yuq
let nu = null;
let un = undefined;
console.log(nu + 1); // bunda 1 chiqadi chunke bunda qiymat (0) mavjud
console.log(un + 1); // bu NaN chiqadi chunke bunda qiymatham mavjud emas
// variable ga null berishni yaxshi tamoni kiyinchalik boshqa data type lar blan arifmetik amal bajarib ketishimiz mumkun ekan

// DATA TYPE 7

// Symbols - bu bizga yunik id yasab beradi
// hohlagancha birhil variable yozsakham ular bir biriga  teng bulmaydi hammasini id si har hil

let t = Symbol("text");
let v = Symbol("text");

console.log(t, v); // value: Symbol(text) Symbol(text)

console.log(t === v); // value: false
console.log(t == v); // value: false
// 2 ta bir hil narsani tenglashtirdsakham 2 xil javob chiqyapdi huddi NO PRIMITIVE dek lekn bu NO PRIMITIVE emas
// BU PRIMITIVE ga kiradi

// NO PRIMITIVE data types

// DATA TYPE 8
// 8. Objects NO PRIMITIVE turi ga kiradigan data type
// object uz ichiga - array, obj, function larni oladi hammasining data type pi object
// uzi JavaScript Object ustiga qurilgan JS dagi hamma narsa pashte objeck

// array
// index      0     1     2             3
let arr = ["John", 18, [1, 2, 3], function name() {}]; // array indexga qarab chaqiriladi
// arr ichiga hohlagan data type ni yozishimiz mumkun
console.log(arr); // value: [ 'John', 18, [ 1, 2, 3 ], [Function: name] ]
// biz ichidan faqat bitta uzimizga keraklisini olmoqchi bulsak indexsiga qarab chaqirishimiz kerak index 0 dan boshlanadi
// index array nomi[index] yoziladi
console.log(arr[0]);

// obj
let obj = { name: "John", age: 18, Merriad: false }; // obj keyga qarab chaqiriladi
// bu yozilishidaham birinchi key: value , yoziladi
console.log(obj); // value: { name: 'John', age: 18, Merriad: false }
// uzimizga keraklisini olish uchun key nomi . blan yoziladi
console.log(obj.name); // value: John

// Function
function func() {
  // buyirga yozilgan hamma narsa functionga tegishli hisoblanadi buyirdagi narsalar function chaqirilmasa  ishlamaydi
  console.log(arr[2]);
  console.log(obj.age);
  // bu consollar function chaqirilmasa ishlamaydi
}
// function ishlashi uchun uni chaqirishimiz kerak chaqirishda function nomi() blan chaqiriladi
func(); // functionnni chaqirish / ishlatish

// -=-=-=-=-=- PRIMITIVE va NO PRIMITIVE farqi
// PRIMITIVE
// console.log(a === a); // true chunke ikkalasi birhil narsa
// // NO PRIMITIVE
// console.log({ a } === { a }); // false chunke ikkalasi birhil bulsaham linki harhil

// 1 ta narsani uziga uzini === qilib tekshirganimizda true chiqqan narsalar PRIMITIVE hisoblanadi

// #_#_#_#_#_#_#_#_#_#_#_#_#

// Homework

// 1 - Sitring

let c = "John";

console.log(`Hello ${1}`); // ?

console.log(`hello ${"c"}`); // ?

console.log(`hello ${c}}`); // ?

// 2 - DATA TYPE ?

console.log(1, 2, 3); // type ?

console.log("1n,2n,3n"); // type ?

console.log(9007199254740992n); // type ?

console.log("1,2,3"); // type ?

console.log(1n, 2n, 3n); // type ?

// 3 - number

console.log(9007199254740992 + 1); // ?

console.log(9007199254740992n + 3n); // ?

//  4 - null vs undefined

//  ikkalasining farqi nmada ?

//  5 - null vs undefined

console.log(null == undefined); // ?
console.log(null === undefined); // ?

console.log(null + 1); // ?
console.log(undefined + 1); // ?

// 6 - data type

console.log({}); // type ?

console.log(undefined); // type ?

console.log([]); // type ?

console.log(null); // type ?

console.log(function name() {}); // type ?
