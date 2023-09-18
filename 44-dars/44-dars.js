// -=-=-=-=-=-=-=-=-=-  Websocket | Backend ExpressJs 

//    - new Websocket
//    - open / message / error / close 
//    - ws:// and wss:// 
//    - Search Params 
//    - Websocket Protocol 
//    - Data transfer 
//    - chatting application 
//    - Backend with expressJs 




// -=-=-=-=-=- Bugungi darslikda 

// -=- const socket = new WebSocket() - convenient creating and parsing url 
//      - web socket nma? - online game / trading / chatting
//      - socket methods - .open / .message / .error / .close / .send 
//      - ws:// vs wss://
//      - request headers

// -=- socket.oi - kutub honasi WebSocket ning soddalshgan varianti hisoblanadi

// -=- SearchPrams
//      - Origin 
//      - connection 
//      - upgrade 
//      - sec-websocket-key 
//      - sec-websocket-version 

// -=- Websocket Protocol 
//      - soap --
//      - wamp --

// -=- Data Transfer
// -=- Rate Limiting 
// -=- Connection close 
// -=- Connection state 
// -=- Chat 


// -=-=-=-=-=-=-=-=-=-  Websocket
// WebSocket user va server orasida 2 tomonlama aloqa  qila oladigan texnalogiya hisoblanadi 
// 2 tomonlama degani bu bir vahtning uzida user va server malumot olishi va junatishi mumkun degani


// bizda http bor edi bu 1 tomonlama ishlaydi bunda user servergha surov yuboradi va server unga javob qaytaradi 
// bunda aloqa bir tomonlama buladi WebSocket da esa aloqa 2 tomonlama buladi yane bir vahni uzida serverham userham malumot almashishi mumkun bundagi aloqa real time da buladi 

// yana oddiy holatda biz qachonke request yuborganimizda backend ni tekshiradi 
// WebSocket esa har doim ekshirib turadi backend yangi malumot kelgan kelmaganligini 

// bunda https emas balke ws va wss ar urlda ishlatiladi ws, https blan birhil wss esa httpss blan birhil

// Websocket protakoli https protakoliga nisbatan bir necha barobar tezroq ishlaydi 

// WebSocket dan shu holatlarda foydalangan maqqul 

// 1 - ijtimoiy tarmoqlar tasmasi 
// 2 - 'multiplayer' o'yinlari 
// 3 - Hamkorlikda hujjat ustida ishlash 
// 4 - Birja/moliyaviy tikerlar 
// 5 - Sport yangiliklari Multimediya chatlar 
// 6 - Onlayn talim...

// Misol: gruhlarda yozishganingizda siz yozgan malumot boshqa user largaham kurindagi boshqal;ar yozagi sizga kuringanidek usha holatlarda WebSocket dan foydalangan eng maqul yul hisoblanadi 
// user yozgan malumot backend ga tushadi va WebSocket backend ni har doim tekshirib turadi yangi malumot kelgan bulsa uni bizga chiqarib beradi 

// oddiy holatda boshqa user yozgan malumot backend ga tushsaham biz uni request yuborgan vahtimiz tekshirishimiz mumkun 
// biz har doim tekshirib turishimiz uchun har daqiqada request yuborib turishimiz kerak bu holatda malumot kupayib ketadi va backend kutarolmaydi 

// WebSocket ishlagan vahtda backend ham WebSocket da bulishi kerak bu bitta frontendga bog'liq emas 
// frontend va backend ning WebSocket lari bir hil / buni server.js file ga kirib kurishingiz mumkun 

// -=-=-=-=-=-=-=-=- socket methods
// socketning methods mavjuda bularga quyidagilar kiradi 
// 1 - .open 
// 2 - .message
// 3 - .error
// 4 - .colse 
// 5 - .send 

// -=-=-=-=-=-=-=-=- ws:// vs wss://
// bular http:// va https:// blan bir hil faqat bular WebSocket varianti desakham buladi 


// -=-=-=-=-=-=-=-=- Socket.oi 
// bu kutubhona hisoblanadi bu WebSocket ning soddalashgan kurinishi bu blan WebSocket da ishlash ancha oson buladi lekn 
// WebSocket ning uziham qiyin emas (alohida gruhlar sekrete chatlar qilganimizda WebSocket murakkablashib ketadi ushanda Socket.oi buni soddalashtirib beradi)

// Usege 

// Websocket ochib olamiz 
// bu new WebSocket() holatda yaratiladi va () ichiga link yoziladi masalan html browserda ochilgandagi linki 
// faqat bu Websocket bulganligi uchun https:// emas ws:// qilishimiz kerak buladi 

let socket = new WebSocket('ws://127.0.0.1:5501/44-dars/index.html') // WebSocket ochib oldik urni https qismini ws ga uzgartirdi 
// shu url dagi malumotdan doimiy malumot kutadi 

// endi buni ishlayotganligini tekshirish uchun socket methodelaridan foydalanamiz 

// -=-=-=- .onopen
socket.onopen = () => { // bu ulangan vahtida ishlaydi 
  console.log('socket connected') // code ishlasa console chiqadi
}
// bu WebSocket ishlayotganini tekshiradi (backend ni kuzatayotganini) agar ishlayotgan bulsa bu fnc ishga tushadi va console ni chiqaradi 

// -=-=-=- .onmessage
// backend dan message kelganda ishlaydi 

socket.onmessage = (event) => {
  let div = document.createElement('div')
  div.innerText = event?.data;// event ichida data bulsa ushani div ning innerText tiga tenglasin deyapdi
  // yane message kelgan bulsa 

  // va tayyor bulgan div ni msg ichiga joylaymiz
  msg.append(div)
  console.log(event)
}


// -=-=-=- onerror 
// bu error bulganda ishga tushadi 
socket.onerror = () => {
  console.log('error')
}


// -=-=-=- close 
// bu bir seerverdan uzulganda ishga tushadi 
socket.close = () => {
  console.log('close')
}

// endi aytishimiz kerakke send click bulganda input valuesi qolgan userlargaham (socket ga) junatilishi kerak 
send.onclick = () => {
  // input value ni socket ga qushib olamiz / socket dagi malumot qolgan userlardaham chiqadi 
  socket.send(value.value)
  value.value = ''; // send bulgandan kiyin input bushasin deyapmiz
}


// bizda tayyor bulgi hozir biz 3 ta bbriwserda htmlni ochib olsak va bittasining intutiga txt yozsak 
// bu malumoit qolganlaridaham kurinadi / yane gruhda yozishganimizda bitta user yozgani qolgan userlargaham kuringanidek 

// shunga WebSocket userlkr yozgan malumotlar backendga boryapdi WebSocket har doim backendni kuzatib turibdi yangi habar kelgandan ishga tushyapdi 
