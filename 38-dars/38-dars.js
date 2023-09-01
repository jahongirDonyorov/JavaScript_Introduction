// -=-=-=-=-=-=-=-=-=- DOM 7 (DOM Methods)

// -=-=-=-=- Range methods - select / remove / deselect / wrap 
//   -=- let renge = new range(); - belgilanishi kerak bulgan textni save qilib turish uchun 
//      - range.setStart(node, offset) - qayerdan boshlash  
//      - range.setEnd(node, offset) - qayargacha bulgan joyni tanlash 
//      - window.getSelection().addRange(range) - tanlangan joyni highlite qilish kk  
//      - EX: - range with paragtaph / nested p with nth count 

//      - range.setEndBefore() / setEndAfter() - right before and after 

// -=-=-=-=- Range edit methods 
//      - range.deleteContents() - remove range content from document 
//      - range.extractContents() - kesib olish, like splice / return new node 
//      - range.cloneContents() - copy of node / returns new node 
//      - range.insertNode(newNode) - insert node in the range 
//      - range.surroundContents(newNode) - range'ni node bn o'rash

// -=-=-=-=- Range Properties 
//      - range.startContainer() / endContainer() - ra 
//      - range.startOffset() / endOffset() 
//      - range.collapsed - boolean 


// -=-=-=-=- Select attrabutes 
//      - window.getSelection() - returns selected properties info 
//      - let {anchorNode, anchorOffset, focusNode, focusOffset} = selection;
//      - anchorNode() - selection starts
//      - focusNode() - selection ends 
//      - isCollapsed() - boolean, if selection is empty returns true 
//      - rangeCount() - count of ranges 


// -=-=-=-=- Selection Events 
//    - originally range is inside the selection /
//    - document.onselectionchange = function() {} - onchange when selects the text
//    - try - onchange select 


// #-#-#-#-#-#-#-#-#-#-#-#-# 


// -=-=-=-=-=-=-=-=-=- Range 
// bu methodlar yordamida biz textning uzimizga keraklicha joyini select qilib olsak buladi defauld holatda buladi biz belgilamasakham automatiske belgilangan buladi 


// -=-=-=-=- new Range 
// belgilanishi kerak bulgan textni save qilib turish uchun ishlatiladi 
let range = new Range()

// -=-=-=-=- Range Methods 

// -=-=-=-=-=-=-=- setStart(text,number)
// qayardan boshlab select bulishini bildiradi 

// 2 ta parametr oladi 
// 1 - qaysi element select bulishi 
// 2 - qayerdan boshlab select bulishi 
// range.setStart(data, 0) // data elementini 0 indexdan boshlab select qiladi

// -=-=-=-=-=-=-=- setEnd(text,number)
// qayargacha select bulishi

// 2 ta parametr oladi 
// 1 - qaysi element select bulishi 
// 2 - qayergacha select bulishi 
// range.setEnd(data, 5) // data elementini 5 - indexgacha select qiladi

// Bular bu uzidan uzi ishga tushmaydi bularni uzimiz ishlatishimiz kerak 

// -=-=-=-=-=-=-=- window.getSelection().addRange(range)
// bu bizga uzimizga kerakli rangeni ishga tushiradi 

// window.getSelection().addRange(range)
// buning strukturasi shunday ohirida addRange(...) ichiga ishga tushirmoqchi bulgan rangni yozamiz 

// -=- lekn bu ikkala holatdaham hatoliklar mavjud (ishlamaydi)


// 1 - biz data id li tag blan ishlayapmiz tag ichida faqat text emas kublab elementlar bulishi mumkun 
// yoke huddi shu id li kuplab taglar bulishi mumkun shuning uchun 
// aynan qaysi ustida amal bajarboqchiligimizni aytishimiz kerak 
// Masalan: data ichidagi firstChlid (birinchi element) ga nisbatan ishlasak buladi 

// range.setStart(data.firstChild, 0)
// range.setEnd(data.firstChild, 5)
// // firstChild qilganimiz uchun datalar kup bulsaham ularning ichidagi elementlar ustida amal bakarilyapdi 
// window.getSelection().addRange(range)
// bu holatda tug'ri ishlayapdi 


// lekn data ni uzini ishlatsak bu data id li taglar buyicha select qiladi 
// data id li taglar kupligi uchun aynan qaysi ekanligini belgilab olishimiz kerak 

// range.setStart(data[0], 0) 
// range.setEnd(data[0], 1)
// 0 data ni 0 elementidan boshlab 1 data ni 1 - elementigacha select qilsin deyapmiz 
// bu holatda harflarni dan olmayapdi firstChild qilmaganligimiz uchun birdan ichidagi elementlarni hisoblaydi


// window.getSelection().addRange(range)


// -=-=-=-=-=-=-=-=-=- Range edit methods 

// -=-=-=-=- deleteContemts()
// bu bizga select qilingan malumotlarni uchirib yuboradi 

// range.deleteContents() // range da select bulgan malumotlar saqlanadi biz rangni ichidagi hamma malumotni uchirib yuboryapmiz 
// horiz select bulgan malumotlar tug'ridan tug'ri uchib ketayapdi biz buni button bosilganda yozi boshqa bir amal bulganda uchibkrtsin diyishimiz mumkun 

// -=-=-=-=- range.extractContents() 
// select bulgan malumotni ajratib oladi (kesb oladi)

// let extract = range.extractContents() // select bulgan malumotni ajratib olib selected veriablesiga tenglasjtiryapmiz 
// extractId.innerHTML += extract.textContent // va uni htmldagi extractId li tag ga yozib quyyapmiz 

// -=-=-=-=- range.cloneContents() 
// usha malumotni tilig'ligicha kuchirib oladi 

// let clone = range.cloneContents() 
// cloneId.innerHTML += clone.textContent  

// -=-=-=-=- range.insertNode(newNode) 
// select bulgan joyga biz qushimcha yangi ode qushib beradi 
// let span = document.createElement('span')
// span.innerText = 'New Value '

// range.insertNode(span)
// select bulgan joyga span creat qilgan elementimizni qushyapmiz 

// -=-=-=-=- range.surroundContents(newNode) 
// bu select bulgan joyni uzimiz hohlagan tag blan urab beradi 

// let italic = document.createElement('i')
// italic.style.color = 'red'

// range.surroundContents(italic) // select bulgan elementni italic va rangini qizil qildik 
// bu faqat bitta elementni ichidagini uzgartiradi biz yuqorida 1-elementdan 2-elentgacha deganmiz
// birinchi elementni uzini qilsak bu ishlaydi 


// -=-==-=-=- 

// endi biz shunday qilishimiz kerakke inputga yozgan malumotlarimiz soni qancha bulsa 
// buyirdagi tada txetining shunchasi select bulib ketsin inputga bitta narsa yozsak txtning 1-malumoti select bulsin 

let div = document.createElement('em')
div.style.color = 'red'

// inp.oninput = (event) => {
//   // data[0].innerHTML = text 
//   // select qilib olamiz 
//   range.setStart(data[0].firstChild,0); 
//   range.setEnd(data[0].firstChild, event.target.value.length)
//   // 1 - data ning 1 - elementini 0 indexsidan event.target.value.length (inputga yozilgan elemnt uzunligi) cha select qilsin deyapmiz 
//   range.surroundContents(div)
// }

// bu holatda faqat 1-harf select bulib uzgaradi qolgani uzgarmaydi chunke inputga malumot yozganimizda 
// data dagi 1 elementni select qilib i tagi ichiga quyadi bu holatda data ichida i degan tagham mavjud bulib qoldi 
// biz dataning birinchi bolsiga nisbatan ishlasin degan edik i tagi biz select qilyotgan textdan oldin chiqadi va data ning birnchi bolasi i bub qoladi 
// qolgan ish  i ga nisbatan bulishi uchunham unda yetarlecha malumot yuq shuning uchun error buladi 

// biz buni har ishlaganda eski qiymatiga tenglab quyishimiz kerak 

let txt = data[0].innerText
// txt ga data ning innerText lini tenglab oldik 

inp.oninput = (event) => {
  // txt ni har bu kod ishlaganda data[0] indexsini innerText tiga tenglaymiz
  data[0].innerText = txt 
  range.setStart(data[0].firstChild,0); 
  range.setEnd(data[0].firstChild, event.target.value.length)
  range.surroundContents(div)
}
// Homewrok 
// inputga yozilgan malumot data ning malumotidan bitta hato ketsa (harflari) tuxtasin boshqa inputga yozib bulmasin 
// tug'ri bulsa davom etaversin va input ichiga maxsimal data ning uzunligicha malumot yozilsin 



// #-#-#-#-#-#-#-#-#-#-#-#-#-# 


// -=-=-=-=-=-=-=-=- Select attrabutes 
// biz bular yordamida browserda bulgan selectlarni olishimiz mumkun 

// -=-=-=-=-=-=-=- getSelection

const selection = getSelection() // buham qiymatlarni uzida saqlab turadi 
console.log(selection)

document.onselectionchange = (e) => { // documentda select bulsa bu ishlaydi
  console.log(selection.getRangeAt(0).cloneContents())
  // getRangeAt(0) - bu biz bir vahni ichida faqat bitta malumotni select qilolamiz shuning uchun 0 quyishimiz kerak
  // bu select malumotlarni oladi 
  
  // cloneContents() - bu esa select bulgan malumotlarni chiqarib beradi 
}

// browserdagi hohlagan malumotimizni select qilganimizda usha malumotni bizga chiqarib beryapdi 
// biz usha malumot ustida amallar bajarsak buladi 
