// -=-=-=-=-=-=-=-=-=-=-=-=-= Advenced 
// -=-=-=-=-=-=-= DOM-3

// -=-=- mouse event 
//    - click - when the, ouse click on an element.
//    - constextmenu - when the mouse right-click on an element.
//    - onmouseover / onmousecout - when the mouse cursore comes over / released an element.
//    - onmousedown / onmouseup - when the mouse button is pressed / released over an element.
//    - onmousemove - when the mouse is moved.

// -=-=- onclick 
//    - try inside HTML // try this as a param 
//    - try in js file with ID attr 
//    - elm.onclick() - using id selector 
//    - id attribute can be element / button.onclick = function 
//    - this inside html / try with button innerHTML and input value 
//    - event with eventlisteners / currentTarget. type 
//    - play with params / user date / select 

// -=-=- addEventListener(event, handeler options)
// -=-=- events with class 
//    - handleEvent - try with switch case / event type 
//    - onClick / onMouseup / onMousedown


// #-#-#-#-#-#-#-#-#-#-#-#-#-#


// -=-=-=-=-=-=-=-=-=-=- Mouse Event 
// event (ection) bu tugma bosilganda qandaydur harakat sodir qiladi 

// birinchi usul HTML ning uzida qilinadi 

// -=-==-=-=-=- onclick=""
// bu html da biz bosganda bror narsa sodir bulishi kerak bulgan tag ga attribute sifatida yoziladi 
// va buning ichiga "" nma sodir bulishi kerak bulsa usha narsa yoziladi 

// Masalan button bosilganda getClick functioni ishlasin desak

function getClick(e) {
  // console.log(e) // bu hamma malumotni chiqarib beradi
  console.log('salom')
}
// bu function qachon chaqirisa ushanda ishlaydi biz buni onClick yordamida html da chaqiramiz 

// -=-=- HTML qismidan misol 
{/* <button onClick="getClick()"></button> */}
// function button bosilganda ishlaydi 

// -=-=- onClick callback fnc larda ishlamaydi 

// -=-=-=-=-=- event parametrs 
// fnc ishlaganda (click bulganda) bizga hodisaning ning tuliq malumotlarini chiqarib beradi
// bu DOM ning uzinio parametiri htmlda fnc ni chaqirganimizda onClick="getClick()" // bu parametrni berib ketsak buladi 
// onClick="getClick(event)" parametr perishda tuliq nomi yozilishi kerak olyotganda nma yozilishi humuhum emas 
// fnc getClick(e){...log(e)} qilib ishlatsakham buladi 

// (event uz parentining elementi)


// -=-=-=-=-=-=- contextmenu=""

function move() {
  alert('..move')
}


// -=-=-=-=-=-=- onmouseover=""
// click qilmasakham curseve ni element ustiga oborsak ishlaydi 

function onmouseover() {
  alert('onmouseover') // element ustiga mouse curseve kelganda ishlaydi 
}

// -=-=-=-=-=-=- onmousecout=""

function mousecout() {
  alert('mousecout') // element ustiga mouse curseve kelganda ishlaydi 
}


// -=-=-=-=-=-=- onmousedown=""
// element ustida mouse ning qaysi tugmasi bosilishidan qatiy nazar bu ishlaydi 

function down() {
  alert('down') // element ustiga mouse curseve kelganda ishlaydi 
}


// -=-=-=-=-=-=- onmouseup=""
// elementni bosib quyib yuborganimizda ishlaydi 

function seup() {
  alert('seup')
}

// -=-=-=-=-=-=- onmousemove
// coursor element ustida qimillaganda har bir px uzgarganda ishlaydi

// function semove() {
//   console.log('semove')
// }

// biz mouse qimillaganda uning kordinatalarini olishimiz mumkun (qayarda turganini)
// buning uchun evenet dan foydalanishimiz kerak 

function semove(e) { // evenet buttonning elementi bulib kelyapdi
  // console.log(e) // eventda hamma malumot chiqyapdi 
  // biz evevt dan x va y uqlarini uzini gina chiqarib olsakham buladi 
  // ichidagi malumotlar obj kurinishida bulganligi uchun obj dan malumotni qanday chiqarib olsak eventdanham shunday . blan chiqaramiz 
  console.log('Y', e.y, 'X', e.x)
  // rvrnrt ichida juda kup malumotlar bor masalan target
  console.log(e.target) // event ichidagi target bizga elementni uzini chiqarib beradi 
  // value: <div class="box" onmousemove="semove(event)">onmousemove</div>
  // agar biz parametir yuboryotganimizda evnet urniga this yuborsak u param event.tagetga teng yane u ham elementni uzini chiqarib beradi 
}



// #-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-# 



// -=-=-=-=-=-=-=-=-=-=- onclick 

// -=-=- biz htmldan parametr berishni yuqorida kurdik 

// <button onclick="getClick(event)">onclick</button>
// htmlda fncni chaqirganimizda unda parametrham bersak buladi 


// -=-=- JS file da html dagi id larni veriable sifatida tug'ridan tug'ri ishlatishimiz mumkun 

// html buttonda btn degan id mavjud biz uni tug'ridan tug'ri btn deb ishlatib ketolamiz 
console.log(btn) // bizga uz elemntini qaytaradi / bizda hechqanday btn degan veriable ochilmagan bu id html dan veriable sifatida kelyapdi 
// value: <button id="btn">click me</button>
// id larni veriable sifatida hohlagancha ishlatsak buladi hechqanday js ni uzida veriablega tenglashham kerak emas 


// -=-=- elm.onclick()
// buniham yuqorida kurib chiqdik 


// -=-=- id attribute can be element /  button.onclick = function 
// bu bizga js ni uzida html dan malumotni olib click bulsa bror amal bajarilsin deyishimiz uchun 

btn.onclick = function () { // veriable(id) ni olyapmiz va onclick bulsa  = dan kiyingi fnc ishlasin deyapmiz 
  console.log(btn)
}
// btn id li elmeent click bulganda shu fnc ishlasin deyapmiz va btn (shu id li element) ni chiqarsini 


// -=-=- this inside html
// htmldan parametr sifatida this bersak bu bizga elementni uzini chiqaradi evenet.target qilgandek 
// this (param) === event.target (param)

// -=-=- event with eventlisteners
// evnet hamma malumotni chiqarib beradi (uz parentining elementi hisoblanadi)
// tepada tuliq malumot berib utgandik 


// -=-=- play with params / user date / select 
import {users} from "./dat.js"
// bizga data dan malumot kelyapdi biz u malumotnijs dan turb htmlga yozolamiz 

// birinchi value larini olvolamiz 
users.forEach((value) => {
  // new tag yaratamiz 
  let div = document.createElement('div');
  // yaratilgan yangi tag ichiga malumotlarni yozib olishimiz kerak 
  // div.innerHTML = `${value.name}` // bu holatda faqat name ni uzi keladi biz boshqa malumotlarniham chiqarishimiz mumkun 
  
  div.innerHTML = `${value.id} ${value.name} <button onclick="console.log(${value.id})" >click</button>`
  // bu holatda elemnt id si va value sini chiqaryapdi va har birining oldidan button chiqaryapdi 
  // button bosilganda console da bosilgan value id sini chiqaryapdi value id forEach aylanganda har bir elementdan id va name keladi ushlarni olyapmiz

  // endi tayyor bulgan elementimizni htmldagi container id li tag ichiga solib olamiz  append yordamida 
  // html dagi id js da veriable hisobdi ishlatib bulganligi uchun id ni birdan ishlatib ketamiz 
  container.append(div) 
})


// -=-=-=-=-=-=- addEventListener('hodisa',() => {})
// bu ham hodisa hosil qiladi (bror hodisa bulganda boshqa bir ish bajarilsin deyishda ishlatamiz) 
// onclick, onmousedown on.... larning optemal varianti desakham buladi 

// 2ta parametr oladi
// 1 - si methode (hodisa) elemntga nma bulganda ishlasin click va hokozo on siz yoziladi onclick elams click ...
// 2 - si callback 1-si hodisa ruy berganda (click,... bulganda ) 2 - chi param ishlaydi 

ad.addEventListener('click', ()=>{
  console.log(ad)
}) // ad id li buttonga hodisa qushyapmiz yane click bulganda fnc ishlab ad ni uzini chiqarsin deyapmiz 

// -=-=- Class Event 
// biz bitta buttonga bir nechta amal biriktirmoqchimiz bosilganda,bosib turilganda va quyib yuborilganda har hil malumot chiqsin demoqchimiz 

// birinchi 3ta fnc ochib olamiz 

// click bulganda (bosilganda) ishlashi uchun function  
function onclick() {
  console.log('button clicked')
}

// mousedown bulganda (bosib yurilganda) ihslashi uchun function  
function onmousedown() {
  console.log('button onmousedown')
}

// mouseup bulganda (quyib yuborilganda) ishlashi uchun function 
function onmouseup() {
  console.log('button onmouseup')
}
function onmouseover() {
  console.log('button onmouseover')
}

// endi bularni qanday hodisa bulganda ishlashini aytishimiz kerak addEventListener da 
// bizda button degan id li button bor ushanga nisbatan ishlatamiz 

// button.addEventListener('click', onclick) // click bulganda onclick fnc ishlasin deyapmiz 
// button.addEventListener('mousedown', onmousedown) // mousedown bulganda onclick fnc ishlasin deyapmiz 
// button.addEventListener('mouseup', onmouseup) // mouseup bulganda onclick fnc ishlasin deyapmiz 
// bunda tug'ri ishlaydi value quyidagi tartibda chiqadi 

// value:
// button onmousedown
// button onmouseup
// button clicked

// bosildi (mls) busaham ushlab turilib quyib yuborildi va click buldi 
// shu ketnma ketlikda chiqadi chunke mousedown boskanimizda (ushlab turilgan soniyalarda) ishlaydi mouseup olganimizda ishlaydi click esa tuliq bosib olganimizda (click qilganimizda) ishlaydi 

// bu usulniham qilsak buladi lekn buning optemal yuliham mavjud 
// biz bularning hammasini bitta class (class Event) ning uzida qilsak buladi

// -=-=-=-=-=-=-=- handleEvent(){}

// birinchi class ochib olishimiz kerak 

class Event {
  // handleEvent() {} // bu class ning uzini fnc si huddi constructor(){} dek 
  // handleEvent har doim bir hil yozilishi kerak bu function 

  handleEvent(event) { // btta parametr olyapdi 
    // console.log(event); // ishlaganda eventni console log qilyapmiz 
    // valueda bizga 3 ta event malumotlarini chiqaradi eventning type da qanday hodisada ishlaganligi chiqadi 
    // biz faqat type larni uzini chiqarsak buladi 
    // console.log(event.type) // bu holatda type larni uzi chiqadi 

    // biz endi bundan foydalanim malumotnibiror amal bajarsak buladi 
    switch (event.type){ // event.typeni olvoldik shunga qarab tekshiradi 
      case 'click':
        onclick();
        break;
      case 'mousedown':
        onmousedown();
        break;
      case 'mouseup':
        onmouseup()
        break;
      case 'mouseover':
        onmouseover()
        break
    }
    // agar event.type click bulsa onclick ishlaydi mausedown bulsa onmousedown va mouseup bulsa onmouseup, mouseover bulsa onmouseover fnclar ishlaydi 
  }
}

// class ni ishlatishimiz kerak 
const evn = new Event // evn ni new Evemt ga tennglab olyapmiz 

button.addEventListener('click', evn) 
button.addEventListener('mousedown', evn) 
button.addEventListener('mouseup', evn)
// biz bitta event ni uzida hammasini ishlatyapmiz 
// event.type qilganda 
// valueda: mousedown, mouseup, click ketmaketlikda chiqadi  

// switch ga solganimizdan kiyingi holatda
//  agar event.type click bulsa onclick ishlaydi mausedown bulsa onmousedown va mouseup bulsa onmouseup ishlaydi 
// addEventListener da (click,mousedown,mouseup) larni ishlatganimiz uchun shu javob chiqadi agar faqat bittasi ishlasa bittasi chiqadi 

// buning yxshi tomoni tepada yaratgan hamma fncni bittalab yozib chiqmaymiz nomini eslab qolisham kerak emas 
// hammasini bitta classga yozib olamiz va ishlataveramiz 
// masalan: mouseover fnc ni ishlatmoqchi bulsam 
// button.addEventListener('mouseover', fnc nomi yozishim kerak edi ) buni yozish uchun tepadan fnclarni nomini kurishim kerak qanday nom quyganligimni bilish uchun 
// lekn bu usulda har safar evn qilib ketaveramiz 
button.addEventListener('mouseover', env) // qilib quysam buldi qolgani class ni uzida qilingan event.type mouseover bulganda shu fnc ishlaydi 

// bu usulni hamma ection (hodisada) ishlatsak buladi 


// #-#-#-#-#-#-#-#-#-#-#-#-#

// endi biz shunday qilishimiz kerakke yana yuqoridagidek date dan kelyotgan malumotlarni yozib 
// btn bosilganda usha elemnt uchib ketishi kerak 

// emport bulib (backenddan) kelyotgan malumotni tug'ridan tug'ri uzgartirib bulmaydi 
// shuning uchun malumotni nusxaasini olib uni uzgartiramiz uzgargandan kiyin uni eski data(backenddan) kelyotgan malumotga tenglaymiz 

let data = users

// delete degan fnc yaratib olamiz 

// const ondelete = (e) => { // bundagi 1-paramert evnet buladi 
//   // chunke bu fnc addEventListener da chaqirildi 
//   console.log(e)
// }
// lekn bizga event emas value id si param sifatida kelishi kerak 
// buning uchun ondelete fncni addEventListener ichida callback ichida yozishimiz  va uzimiz param yuborishimiz kerak

const ondelete = (a) => { 
  // btn bosilganda ushaning id si bizga pram bulib kelyapdi biz endi usha id dagi div ni uchirib yuborishimiz kerak
  // buning uchun filterdan foydalanamiz 
  let res = data.filter((value,index) => {
    return value.id !== a 
    // users ning ichidagi id ga teng bulmagan id lar resultatga chiqsin teng bulgani chiqmasin (uchib teksin) deyapmiz 
  })
  // [] ichidagi obj larni id siga teng bulgan id dagi obj chiqib ketyapdi va qolganlari res ga teng bulyapdi 
  // console.log(res)// click bulgandan tashqari hammasi bor [{...},{...} ...] holatda

  // endi biz datasni res ga tenglab quyishimiz kerak 
  data = res
  // bu holatda eski datadagi malumotlarham qolib ketadi biz ularni uchirib yuborishimiz kerak 
  content.innerHTML = null 
  // onDelete bosilganda  realDate fnc ishlasin deymiz har bosilganda yangilanadi 
  realDate();

}

// data.forEach((value) => {
//   let div = document.createElement('div');
//   // bunda buttonniham alohida yaratib qushib quyamiz 
//   let btn = document.createElement('button')
//   // yaratilgan button va div ga malumot biriktiramiz 
//   btn.innerHTML = 'delete'
//   // btn ga hodisa qushamiz

//   // btn.addEventListener('click', ondelete) // btn click bulganda ondelete fnc ishlaydi 
//   // // addEventListener da fnc ni yozganimizda unga param bermasak outomatik ravishda birinchi param evenet bulib boradi 
//   // // biz (evenet) deb para berishimizkerak emas / hozik btn bosilganda bizga eventni chiqarib beryapdi 

//   // bizga event kerak bulmasa va biz boshqa param yubormoqchi bulsak 

//   // uzimiz boshqa param berib quysak buladi bu kurinishda 
//   // btn.addEventListener('click', ondelete(value.id)) 
//   // lekn bu kurinishda bersak fnc chaqirilganligi uchun () biz click bosmasakham ishlab ketadi 
//   // buni oldini olish uchun callback fnc dan foydalanamiz callback ichida fnc ni yozsak callback ishlaganda ichidagilar ishlaydi 
//   // callback esa click bulgandagina ishlaydi  

//   btn.addEventListener('click', () => ondelete(value.id)) // callback ichida bush qilib yozsak ham event tug'ridan tug'ri param bulib ketib qolmaydihechqanday malumot bormaydi va undefide chiqadi  
//   // bu holatda value ichidagi id param bulib boryapdi 
//   // qaysi btn ni bossak uning id si bizga chiqyapdi endi biz usha id dagi div uchirib yuborishimiz kerak 

//   div.innerHTML = `${value.id} ${value.name}`
//   // div ichiga btn ni quyamiz 
//   div.append(btn) 
//   //  content id li elemnt ichiga quyib olamiz div ni
//   content.append(div)
// })

// biz bu holatda delete bulgandan kiyingi malumotlarni chiqarolmaymiz chiqarish uchun bularni bitta fnc
// ga solishimiz kerak va har delete bosilganda yangi malumotni dataga tenglasin va datadagi eski malumotni uchirib 
// realDate fncni ishga tushirsin deymiz fnc new datanni forEach qilib ishlaydi yane uchgan malumot blan ishlaydi 

function realDate() { 
  // hmma malumot uchganda bizga no data deb chiqishi kerak 
  if(data.length === 0) content.innerHTML = 'No Data'
  // data length 0 ga teng bulsa No Data chiqadi har doim buni qilishimiz kerak bush qolganda hech qanday informatsiyasiz qolmasligi kerak 

  // bunday qilmasak delete bosilganda yangi date malumotlari blan ishlaymiz 
  data.forEach((value) => {
    let div = document.createElement('div');
    let btn = document.createElement('button')
    btn.innerHTML = 'delete'
    btn.addEventListener('click', () => ondelete(value.id)) // callback ichida bush qilib yozsak ham event tug'ridan tug'ri param bulib ketib qolmaydihechqanday malumot bormaydi va undefide chiqadi  
    div.innerHTML = `${value.id} ${value.name}`
    div.append(btn) 
    content.append(div)
  })
}
// buni birinchi bu yirda chaqirishimiz kerak unda qiymatning birinchisiham chiqmaydi
realDate()


// Bu qism tugadi bu real projectlarda kup ishlatiladi


// #-#-#-#-#-#-#-#-#-#-#-#-# 

