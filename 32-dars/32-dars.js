// -=-=-=-=-==- DOM  1 - Kirish 

//    - Hierarchy - DOM / BOM / JavaScript 
//    - window / document / location 
//    - parent / child / sibling
//    - Elememts - perentElement, children, firstElementChild, lastElementChlid, nextElementSibling, previousElementSibling
//    - Nodes - parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling 
//    - Selectors - getElementById, getElementByClassName, getElementTagName
//    - Query slectors - querySlector, querySlectorAll
//    - innerHTML, innerText, textContent


// - Hierarchy // See ref pics 
// - window - alert properties
//      - window - global object 
//      - window.innerHeight / innerWidth
//      - window.title / href / location
// - DOM - Document Object Model
//      - access all by using document 
// - CSSOM - CSS Object Model
//      - for css rules and stylesheets
// - BOM - Browser Object Model 
//      - host enviroment 
//      - ex: location.href / pathname, host... // see router in project 
// - javScript - Object, Array, Funtion ...


// -=-=-=-=-=-=-=-=- Hierarchy

// -=-=-=- window 
// 3 ta katta qisimga bulinadi 

// -=-=-=-=- 1 - DOM (Document Object Model)
//    - Document
//    - Bu html dagi hamma malumotni JS ga olib JS da qandaydur malekulatsiya qilishiga aytiladi 
//    - document kalit suzidan htmldagi hamma malumot kelib chiqadi 

// -=-=-=-=- 2 - BOM (Brawsers Object Module)
//    - navigition, screen, location, frames, history, XMLHttpRequest 
//    - BOM da ishlatiladigan hamma narsa ReactJS ning uzining DOM ida utiladi
//    - buni tushinishimiz ReactJS ning advenced qismini tushinishimiz blan teng 

// -=-=-=-=- 3 - JavaScript
//    - Object, Array, Function 



// -=-=-=-=-=-=-=-=- window
// alert('Hi window')
// window.alert('Hi window')
// ikkalsidaham alertda Hi window chiqadi bu window ni ichida hamma malumot bor degani / window eng kattasi

// maslan biz yana qushimchasiga windowning buyini enini olishimiz mumkun ekan 
// alert((window.innerHeight)) // bu bizga window brawser ekranning buyini chiqarib beradi 
// alert((window.innerWidth)) // bu esa enini qancha ekanligini chiqarib beradi



// -=-=-=-=-=-=-=-=- BOM 
// Bworser malumotlarini olishimiz mumkun ekan 

// alert(location.href);  // bu bizga browser da qaysi manzilda turganimizni kursatadi 
// http://127.0.0.1:5500/32-dars/index.html

// alert(location.pathname) // / dan kiyingi manzil qaysi file da turganimizni chiqarib beradi 
// /32-dars/index.html

// qisqacha BOM niham tushinib oldik hali BOM ga qaytamiz


// -=-=-=-=-=-=-=-=-=-=-=- DOM 
// buni yaxshi tushinishimiz uchun ozroq css yozib olamiz
// DOM deganda birinchi urinda relishin shep ni (yane malumotlar orasidagi bog'liqlikni tushinishimiz kerak)
// masalan body (parent) uning ichida bitta levn da yotuvchi malumotlar body ga (child) uzaro esa sibling hisoblanadi va shu tariqa davom etib ketaveradi

let ul = document.getElementsByTagName('ul')[0] // hozircha buni ul ni olib kelyapdi deb tushinib turing 
// kiyinchalik tuliq utamiz 

// bizga html dan ul tagi kelyapdi 

// Nodes, Elements ikkalsi ikki hil narsa  kalit suzlari uxshash

// Nodes
//    - parentNode, 
//    - childNodes, firstChild, lastChild,
//    - Siblings vs Parent vs Childs 
//    - nextSibling, previousSibling 

// Elements
//    - parentElement
//    - children, firstElementChild, lastElementChlid
//    - nextElementSibling, previousElementSibling

console.log(ul) // bizga ul ni ichidagi taglari blan chiqaryapdi 


// -=-=-=-=-=-=-=-=-=- Child 

// -=-=-= Elements
// - children - faqat uning ichidagi childlarini olib beradi 

console.log(ul.children) // HTMLCollection(4) [li, li, li, li]
// bizga ul ichidagi taglarni har birini chiqarib beryapdi 


// -=-=-= Nodes 
// - childNodes bu esa uning ichidagi childlari va bush joylarniham olib beradi 

console.log(ul.childNodes) // NodeList(11) [text, comment, text, li, text, li, text, li, text, li, text]
// bundaham ul ichidagi har bir tagni chiqaryapdi li dan oldingi text lar bush joylarni bildiradi 
// <ul><li>1</li><li>2</li></ul> // biz li larni bu tartibda joy qoldirmasdfan yozib ketsak text lar yuqoladi 

// Kurgan bulsangiz children da (4) ta malumot childNodes da esa 11 ta malumot chiqaryapdi 
// chunke children faqat elementlarni uznini chiqaradi childNodes esa bush joylarniham qushib chiqardi


// -=-=-=-=-=-=-=-=-=- Parent 

// -=-=-= Element 
// - parentElement - parentini chiqarib beradi 
console.log(ul.parentElement) // <dev class='parent'>...</dev> - ul ning parenti shu bulganligi uchun shuni chiqarib beryapdi 

// -=-=-= Nodes 
// - parentNode - parentini chiqarib beradi 
console.log(ul.parentNode) // <dev class='parent'>...</dev> - ul ning parenti shu bulganligi uchun shuni chiqarib beryapdi 


// ikkalsidaham parenti chiqadi bu holatda ikkalasining hech qanday farqi yuq 


// -=-=-=-=-=-=-=-=-=- firstElementChild (Element) vs firstChild (Nodes)

// -=-=-= Element
// - firstElementChild - birinchi elementni chiqarib beradi 
console.log(ul.firstElementChild) // <li> ::marker, '1' </h1> - bu har doim elementni uzini chiqarib beradi 


// -=-=-= Nodes 
// - firstChild - birinchi elementni chiqaradi 
console.log(ul.firstChild) // #text  - Node bush joyniham olganligi uchun bunda birinchi element bush joy #text bulyapdi 


// -=-=-=-=-=-=-=-=-=- lastElementChild (Element) vs lastChild (Nodes)

// -=-=-= Element
// - lastElementChild - oxirgi elementni chiqarib beradi 
console.log(ul.lastElementChild) // <li> ::marker, '4' </h1>

// -=-=-=-=-=- previousElementSibling
// bitta oldingi malumotni chiqarib beradi (Element ga kiradi faqat elementlarni chiqaradi) 
console.log(ul.lastElementChild.previousElementSibling) // <li> ::marker, '3' </h1> 

// bundanham oldingi elementni chiqarmoqchi bulsak previousElementSibling yana qushamiz 
console.log(ul.lastElementChild.previousElementSibling.previousElementSibling) // <li> ::marker, '2' </h1> 

// -=-=-=-=- nextElementSibling - bu bitta kiyingi malumotni chiqarib beradi 
console.log(ul.firstElementChild.nextElementSibling);

// -=-=-= Nodes 
// - lastChild - oxirgi elementni chiqaradi 
console.log(ul.lastChild) // #text

// -=-=-=-=-=- previousSibling (Nodes ga kiradi bush joylarniham chiqaradi)
// bitta oldingi malumotni chiqarib beradi 
console.log(ul.lastChild.previousSibling) // <li> ::marker, '4' </h1>  - bu bizga bitta oldingi malumotni chiqarib beryapdi (oxiri #tecxt bush joy edi undan oldingisi esa li element)

// bundanham oldingi elementni chiqarmoqchi bulsak previousElementSibling yana qushamiz 
console.log(ul.lastChild.previousSibling.previousSibling) // <li> ::marker, '2' </h1> 


// -=-=-=-=- nextSibling - bu bitta kiyingi malumotni chiqarib beradi 
console.log(ul.firstChild.nextSibling)


// -=-=-=-=-=-=-=-  Nidelar blan Element larni yaxshi tushinib olishimiz kerak 


// -=-=-=-=-=-=-=-=-=- Selectors 
// bular document (html) dan malumotlarni olish uchun ishlatiladi


// -=-=-=-=-=-=-=-=-=-=- getElementsByTagName()
// bu bizga document (html) dagi malumotlarni tag nomi ga qarab chaqiradi 

// masalan bady ni chaqirmoqchiman 
let by = document.getElementsByTagName('body')[0] // [0] qilganimiz bizga 1-sini olib kel degani 

// [...] qilmasak console 
// console.log(by); // HTMLCollection(1) // biz chaqiryotgan tag kup bulishi mumkun bulganligi uchun bu har doim array qaytaradi 

// [...] qilsak
console.log(by) // elemntni html kurinishini chiqarib beradi 

// Malumotni olghanimizdan kiyin uning ustida hohlagancha amal bajarsak buladi 
// msalan js dan turib body ni tuliq rangini uzgartiramiz 
console.log(by.style.background = 'red') // html bodyning rangini qizil qilib berdi 
// JS ni uzida biz hohlagan elementimizga hohlagan style ni berishimiz mumkun 



// -=-=-=-=-=-=-=-=-=-=- getElementByClassName()
// bu htmldan elementlarni class larga qarab ob keladi 

let cls = document.getElementsByClassName('parent')// bizga parent class li elementni chiqaradi 
// lekn bizda parent class li 2 ta id bor shuning uchun bizga HTMLCollection(2) [div.parent, div.parent] 2 ta tug'ri keladigan malumot bor deb chiqadi 
// biz uzimizga keraklisini olish uchun console da  chqiryotganimizda [] dan foydalanamiz 1-si kerak bulsa 0 2-si bulsa 1

console.log(cls[0].style.background = '#fff'); // birinchi parent class li elementni chiqarib beradi unga style berishimizham mumkun


// -=-=-=-=-=-=-=-=-=-=- getElementById - bunda Element Elements emas chunke bu faqat bitta id ni oladi (1-kurganini)
// bu html elemtni id siga qarab chaqiradi 

let id = document.getElementById('ul')
// bizda 2 ta birhil id li id mavjud bu holatda javob
console.log(id.style.background = 'blue') // chaqirilgan id chiqarib uni ustida amal bajarsak buladi
// id dagi malumotni orqa fondini kuk qilib beryapdi 

// -=-=-=-=-=-=- biz id ni verable sifatidaham htmlda ishlatishimiz mumkun 
// ul.style.color = 'red'  biz id ni chaqirmasdanham tug'ridan tug'ri veriable sifatida ishlatsak buladi 

// malumot olishning alternative (ishlatishga oson bulgan) varianti mavjud

// -=-=-=-=-=-=- querySlector and querySlectorAll
// bu ikkalasi bizga malumotlarni olish uchun ishlatiladi bularda id class tag lar uchun alohida alohida fnc yozishimiz kerak emas 
// ikkalasi orqali html dagi hohlagan elementimizni chaqirishimiz mumkun 

// -=-=-=-=-=-= querySlector
// bu blan biz faqat bitta malumotni chaqirishimiz mumkun 

// bunda elementlarni chaqirishda htmlda qanday yozilgan bulsa shu holatda chaqiriladi yane id #name, class .name, tag tagName
// holatda chaqiramiz 

// masalan bizga parent classli elementni chiqarishi kerak 
let quer = document.querySelector('.parent')
console.log(quer) // bizga birinchi chiqqan paret tagini chiqarib beryapdi 
// tag chaqirsakham shu holatda buladi faqat . tasiz 
let li = document.querySelector('li'); // birinchi chiqqan li tagini chiqarib beryapdi 
// id chaqirsak # blan chaqiramiz 

// -=-=-=-=-=-= querySlectorAll
// buham huddi querySelector dek faqat bu birdan kup malumot oladi 

console.log(document.querySelectorAll('li')) // NodeList(4) [li, li, li, li]
// bizga barcha li taglarini chiqarib beradi htmldagi archasini 


// -=-=-=-=-=- innerHTML 
// bu bizga html tag qushib beradi 
li.innerHTML = '<h1>Hey</h1>'

// -=-=-=-=-=- innerTEXT
// bu text qushib beradi
li.innerText = '<h1>Hey</h1>' // bu tag emas text holadida chiqyapdi 
// yane li urniga <h1>Hey</h1> shu holatda shuni chiqarib quyadi 

// -=-=-=-=-=- textContent
// innetText blan birlih buham text qushib beradi
li.textContent = '<h1>Hey</h1>' // bu tag emas text holadida chiqyapdi 

// bu yana id dagi malumotni chiqarib beradi 
let ulId = document.querySelector('#ul')
console.log(ulId.textContent) // ul id li elementni valularini (ichidagi malumotlar) ni chiqarib beradi
// bu koddagi bush joylari blan qanday yozilgan bulsa shu holatda chiqarib beradi
// innerText esa bush joylarsiz chiqaradi 

//-=-=-=-=-=- hidden 
// bu true false blan ishlaydi true bulsa malumot kurinmaydi hidden buladi false bulsa kurinadi

// ulId.hidden = true // true qilsak yuqolib qoladi 
ulId.hidden = false // false bulsa yuqolmaydi