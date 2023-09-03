// -=-=-=-=-=-=-=-=- DOM 5 

// -=-=-=-=- Mouse Event
//    - onclick - when the mouse clicks on an element.
//    - oncontextmenu - when the mouse right-clicks on an element.
//    - onmouseover / mouseout - when the mouuse cursor  comes over / leaves an element. 
//    - onmousedown / mouseup - when the mouse button is pressed / released over an element.
//    - onkeypress - onchange. 
//    - onmousemove -when the mouse is moved.
//    - ondblclick - duoble click. 
//    - oncopy - ctr + c 
//    - onpaste - crt + v 
//  - Keyboard - event.key returns true / false 
//    - shiftKey: shift
//    - altKey: alt (or Opt for Mac)
//    - ctrKey: ctrl 
//    - metaKey: Cmd for Mac 
//  - Keyboard actions
//    - event.key 
//    - event.code 
//    - event.type 
//    - event.keys - can't be triggered by default.
//  - Scroll event
//    - show / hide 
//    - load more data - page Yoffset is current scroll




// -=-=-=-=-=-=-=-=-=- oncontextmenu()

// bu htmlda bror element (text) larning ustiga mouse ning ung tomonini boskanimizda ishlaydi 

let title = document.querySelector('#title')

// title.addEventListener('contextmenu', (event) => {
//   event.preventDefault()
//   alert('Hi cintext')
// })

// bu holatda mouse ung tomoni bosilganda fnc ishlaydi va alert chiqadi fnc ishlab bulgandan sung 
// ung tomon bosilganda chiqadigan menue chiqib qoladi biz buni chiqarmaslik uchun event.preventDefault()
// bu bizga elementning default hodisasini tuxtatadi 

title.addEventListener('copy', (event) => {
  event.preventDefault() 
  alert('Hi cintext')
}) // endi ung tomonni bossak alertni uzigina chiqadi 



// -=-=-=-=-=-=-=-=-=-=-=- oncopy()
// bu bizga elemntni copy qilish mumkun mumkun emasligini belgilab beradi
// ichida return false bulsa copy qilib bulmaydi

copy.oncopy = () => { // elementni copy qilganimizda ishlaydi 
  alert('Elementdan nusxa olindi') 
} // bu holatda elementni copy qilsak buladi 

// lekn ichiga return false quysak elementni copy qilib bulmaydi 

copy.oncopy = () => { // elementni copy qilganimizda ishlaydi 
  alert('Elementdan nusxa olib bulmaydi') 
  return false 
}
// bu holatda elementdan nusxa ololmaydi user va copy qigan vahtida alertham chiqadi 

// -=-=-=-=-=-=-=-=-

// bixda input bor biz inputga yozgan hamma malumot htmldagi value: yozuvi yonidan chiqsin 
// buning uchun biz  onchange, onkeypress va oninput lardan foydalanamiz 

// -=-=-=-=-=-=-=-=-=-=- onchange 
// bu inputlar blan ishlaydi inputga malumot yozib entr bosilganda ishga tushadi 
// eventida inputning hamma malumotlari buladi 

function change(e) {
  // console.log(e) // entr bosilganda bizga inputning hamma malumotlarini chiqarib beradi 
  // eventning target bulimi ichida value bor unga biz yozgan valuelar boradi ushani olvolishimiz kerak 
  // console.log(e.target.value) // bu bizga yoxgan malumotlarimizni entr bosilganda chiqarib beradi 
  changeValue.textContent = e.target.value // sapnga inputdagi malumotlarni yozyapdi 
  // bitta yozib bulgandan kiyin ikkinchisini yozsak birinchi qiymat uchib ketadi 
  
}
// bu holatda hatoliklar bulishi mumkun masalan a ni yozib bulganimizdan kiyin a ni uchirib b ni yozsak a yonida kelib qoladi b  uzi chiqishi uchun birnchi input bushaganda intr bosib kiyib b ni yozish kerak
// bu bizni ishimizni kupaytiradi 

// va yana bu usulda yozganimiz birdan chiqmayapdi intr bosilsagina chiqyapdi bizga yozganimiz intr bosilmasaham birdan nma yozsak kurinib turishi kerak 
// buning uchun onkeypress dan foydalanamiz 

// -=-=-=-=-=-=-=-=-=-=- onkeypress
// bu ham input blan ishlaydi inputga malumot yozganimizdan ishga tushadi intr bosish kerak emas 
// lekn malumot uchirsak ishlamaydi

function press(e) {
  pressValue.textContent = e.target.value 
}
// bunda yozganimiz bitdan chiqaveradi intr bosishimiz kerak emas
// lekn malumotni textni bitta bitta uchirib kelsak bizga uchirilyotgan value chiqmaydi faqat yozsak chiqadi  
// qachonke inputga malumot yozsakgina malumot chiqadi uchirsak chiqmaydi 


// -=-=-=-=-=-=-=-=-=-=- oninput
// biz input ichida nma qilsakham ishlayveradi uchirsakham yozsakham 

function inp(e){
  inpValue.textContent = e.target.value 
} 
// bu holatda inputda bajargan amallarimiz birdan shu zahotiyoq value bulib chiqyapdi uchirsakham yozsakham hammasi valuega keladi 


// -=-=-=-=-=-=-=- onchange, onkeypress, oninput farqlari
// hammasi input blan ishlaydi 

// -=-=- onchange
// inputga malumot yozilgandan sung intr bosilganda ishlaydi va valueni chiqaradi 

// -=-=- onkeypress
// input ga malumot yozilganda ishlaydi intr bosilmasaham inputga narsa yozsak ishlayveradi va usha valueni// chiqaraveradi yozilgani yozilgandek 
// lekn malumotni uchirib borsak ishlamaydi uchirilyotgan malumotlar kurinmaydi uchirb kiyin yozganimizda yozilgan value chiqadi 

// -=-=- oninput
// inputga qanday amal bajarsak huddi uzidek chiqaradi yozsak ham uchirsakham
// yozsak yozganimizni yozgandek chiqaraveradi usha malumotdan bitta bitta uchirib kelsak uchirilganni uchirilgandek chiqaradi 




// -=-=-=-=-=-=-=-=- onmouseove
// bu mouse element icida qimillaganda ishlaydi 

let box = document.querySelector('.box')

// box.addEventListener('mousemove', (event) => {
//   // console.log(event) // hamma malumotni chiqaradi ichida x va y malumotlar bor bunda mouse qayarda joylashgani kursatilingan
//   // console.log(event.x, event.y) // bundan sonlar keladi 

//   // mouse element ichida yurganda elementning rangi uzgaraverishi kerak  
  
//   // event.x va y dan bizga sonlar kelyapdi shularni rgb ga berib quysakham buladi 
//   box.style.backgroundColor = `rgb(${event.y}, ${0}, ${event.x})`
//   // rgb ga event x va y dan kelyotgan sonlarni quyib quydik usha sonlarga qarab rang chiqaradi 
//   // mouse yurganda yangi sonlar kelaveradi va rag uzgaradi 
// })


// -=-=-=-=-=-=-=-=-=- ondblclick
// ustiga 2 martta bosganda ishlaydi


// #-#-#-#-#-#-#-#-#-#


// -=-=-=-=-=-=-=-=-=- Keyboard
// bunda ishlatilgan narsalar event ichida  keladi hodisa ishga tushganda shu knopkalar bosilgan 
// bosilmaganligini true false blan ifodalaydi bular tepadagilarga qushimcha buladi  

// -=-=-=-=-=-=- shiftKey: shift
// bror hodisa sodir bulganda uning eventi blan keladi agar keybortda shu knopka bosilgan bulsa true
// bosilmagan bulsa false qiymatga ega buladi  

// biz aytishimiz mumkun tepadagi box da mouse shunchake yursa rangi uzgarmasin
// shift bosilganda mmouse box da yursa rangi uzgarsin desak buladi 

// box.addEventListener('mousemove', (event) => {
//   // shiftKey event ichida buladi mousemove bulgand event ichida shiftKey buladi agar shift bosilgan bulsa true 
//   // bosilmagan bulsa false buladi 

//   if(event.shiftKey){ // biz aytyapmizke
//     box.style.backgroundColor = `rgb(${event.y}, ${0}, ${event.x})`
//   }
// })

//    - altKey: alt (or Opt for Mac)
//    - ctrlKey: ctrl
//    - metaKey: Cmd(windows) for Mac 

// qolganlariham huddi shiftdek ishlatiladi 

box.addEventListener('mousemove', (event) => {  
  // biz 2 ta amalda tekshiramiz 2  ta knopka bosilgan bulishi kerak 
console.log(event)
  if(event.altKey && event.ctrlKey){ 
    // buyirda onmousemove ishlaganda slt va ctrl bosilgan bulsagina ishlasin deyapmiz 
    box.style.backgroundColor = `rgb(${event.y}, ${0}, ${event.x})`
  }
})


// #-#-#-#-#-#-#-#-#-#


// -=-=-=-=-=-=-=-=-=- Keyboard actions 
// bularham hodisa ishlaganda event ichida keladi 
//    - event.key 
//    - event.code 
//    - event.type 

// hodisa ishlaganda shu malumotlarni chiqarib beradi 
// yaxshi tushinish uchun inputda ishlatib kuramiz (qolganlaridaham ishlayveradi)


function keyboard(e) {
  // console.log(e.key, e.code, e.type) // s KeyS keypress chiqyapdi 
  // s - qaysi knopka bosilganligi 
  // keyS - code ni chiqaryapdi katta bulsa katta kichik bulsa kichik holatda 
  // keypress - type 

  //biz bunga tepadagi altKey,ctrKey,shiftKey,metaKey larniham yozsak buladi true false qaytaradi 
  // bosilgan bosilmaganligini bilish uchun 
  console.log(e.shiftKey, e.key, e.code, e.type)// true '£' 'Digit3' 'keypress'
  // true shift bosilgan 
  // £ shift blan bosilganligi uchun shu chiqqan 
  // Digit3 shift blan 3 bosilgan 
  // keypress type 
}
// shu vazifalarni bajaradi 


// -#-#-#-#-#-#-#-#-#-#-#-#-#-

// -=-=-=-=-=-=-=-=-=- Event Scroll  

// bizda scroll bulsa va u juda katta bulsa
// oddiy holatda scroll dagi hamma malumot birdan yuklanadi bu saytning asata ishlashiga olib keladi 
// malumot kupligidan yuklashga qiynalib qoladi 

// biz Scroll Event yordamida buni oldini olishimiz mumkun ekan 
// scrollga birdan hamma malumot kelmaydi faqat ekranga siqadigani keladi qolganlari yuklanmay turadi 
// scroll yurganda scroll ga qaram yangilanib qushilib boradi bu bizga sytda katta malumotli scrol mavjud bulganda tezroq ishlashini taminlaydi

// -=-=-=-=-=-=-=- load more data 

let scroll = document.querySelector('.scroll')

scroll.addEventListener('scroll', (e) => {
  // console.log(e.target.scrollTop) // bu scroll qilganimizda eng yuqiri 0 dan qancha pasayganini kusatadi 
  // value: 1122 - scroll eng ohiriga tushgandagi qiymati
  // console.log(e.target.scrollHeight) // bu scroll ning jami uzunligini chiqaradi 
  // value: 1316  - scroll ning jami qiymati 

  // buyirda scroll ohirigacha tushgan bulsaham 1122 chiqyapdi lekn scroll ning height 1316 chunke bu element buyiniham blan hisoblagan 
  // tuliq scrollni uzunligini chiqmayapdi orada elementning height necha px bulsa shuncha farq bulyapdi 

  // biz buni tug'irlash uchun scrollTop ga element height ni qushishimiz kerak 
  // console.log(e.target.scrollTop + e.target.clientHeight) // clientHeight elementning Buyi
  // value: 1316
  // console.log(e.target.scrollHeight) 
  // value: 1316 
  // ikkalasidaham birhil value chiqyapdi 

  // endi biz ohiriga 50px qolganda scrollning qolgan malumotlarini qushsin desak buladi 
  // lekn birinchi 50px qolganligini bildirishimiz kerak qandaydur usulda 
  
  // scrollTop + clientHeight ga 50px qushayapmiz 1366 bu scrollHeight 1316 dan 50px katta (scroll kupaymaydi son ortadi holos)
  // bu ohiriga 50px qolganda scrollHeight 1316 ga teng buladi 

  // biz aytayapmizke scrollTop + clientHeight + 50 (1366) kattami scrollHeight 1316 dan deyapmiz 
  // bu eng yuroi 0 dan boshlanadi 0, 1316 dan katta emas false buladi 1316 gacha (eng ohiriga 50px qolguncha)
  // biz 50px qushganligimiz uchun bizda yana 50px scroll qilishga joy mavjud px pasga scroll qilsakham scrollHeight 1316 dan katta bulib ketadi va true ga aylanadi

  // endi biz aytishimiz kerak agar bu true bulsa (yane scrollHeight dan scrollTop katta bulsa ) eng ohiriga 50px qolsa 
  // scrolda kelmagan backend dagi qolgan scrollHeight ga teng scroll malumotlarini qushsin desak buladi 
  // lekn bizda backend bulmaganligi uchun yana shu malumotlarni uzining ustidan qushib quysin desak buladi 

  if( e.target.scrollTop + e.target.clientHeight + 50 >
      e.target.scrollHeight){
      scroll.textContent += scroll.textContent
    }
})
// bu holatda scroll eng ohiriga 50px qolganda yana shuncha malumot qushib beraveradi tugamaydi bu holatda lekn backenddan kelsa tugaydi  
// Shu narsaga infinite Scroll deyiladi 


// Homework 

// 1
// https://infinite-scroll.com/ shu saytdagi scrollarni qilish kerak 

// 2
// Navbar yasash kerak window scroll bulganda navbarga soya qushish kerak 


// 3 Reklaman saytidagi animationni qulda qilish 