// -=-=-=-=-=-=-=-=- DOM 4

// -=-=- Bubbling
//    - try nested onlclicks - p > div > body
//    - evnet.stopPropogation() - skips its event but calls parents 
//    - event.stopimmediatePropagition - stops all parent events 

// -=-=- Event Delegation 
//    -try table click example / classList.add
//  =- Browser default action 
//    - a click on a link - navigiates URL 
//    - a click in from - submits to the server
//  =- Preventing browser actions - 2ta yo'li mavjud 
//    - event.preventDefault()
//    - onmousedown='return false' - try with input value 


// #-#-#-#-#-#-#-#-# 


// // -=-=-=-=-=-=-=-  Bubbling

// // const child = ()=>{
// //   alert('child')
// //   // code tug'ri ishlayapdi 
// // }
// // buning parentiga ham onclick quysak
// // const parent = () => {
// //   alert('parent')
// // }
// // ikkalasigaham onclick qushsak bu holatda hatolik buladi 
// // bitta childni bossak ikkalasiham ishlab ketyapdi 
// const grend = () => {
//   alert('grend')
// }
// // bu holatda grend ni bossak faqat uzi chiqadi 
// // parentni bossak parent va grend chiqadi 
// // child ni bossak child parend gred hammasi chiqadi 

// // bularbir birining ichida bulganligi uchun xatolik bulyapdi 

// // bu holat (qolgan parentlariham ishlab ketishi) Bubbling deyiladi 

// // -=-=-=-=-=- Bubbling oldini olish interveuw lardaham suraladi 

// // -=-=-=-=- evnet.stopPropogation()
// // bu uzidan kiyingi fnclarni ishlatadi uzini tuxtatib quyib 

// // buni oldini olish uchun v
// // birinchi eng kichigiga param sifatida event ni berib olishimiz kerak (htmldan event beriladi)

// // const child = (e)=>{ // eventni ovoldik
// //   // console.log(e) 
// //   // bunda shu element ustida bajarib buladigan va element haqidagi hamma malumotlar keladi

// //   // evnet ichida stopPropogation();
// //   e.stopPropogation() // bu uz elementini skip qiladi (utkazib yuboradi) uzidan kiyingio malumotlarni yugizadi (parent va grend)
// //   // bu holatda childni click qilsak child ishlamaydi utkazib yuboradi parent va grend lar ishlaydi 
// //   alert('child')
// // }

// // lekn biz aksincha bu bosilganda parent va grend ni tuxtatishimiz (utkazib yuborishimiz) va buni uzini ishlatishiz kerak 
// // buning uchun stopImmediatePropagation dn foydalanamiz 

// // -=-=-=-=- event.stopImmediatePropagation()
// // bu uzidan kiyingi fnc larni tuxtatadi va uzini ishlatadi Bubbling ni oldini oladi 

// const child = (e)=>{ 
//   e.stopImmediatePropagation()
//   // faqat childning uzi ishlaydi ishlab ketyotgan parent va grend ishlamaydi ularni skip (utkazib) qilib yuboradi
//   alert('child')
// }

// // ichma ich bulsa 
// // bitta elemnt bolisganda uu stopImmediatePropagation bulmasa uning parentlari daham bror hodisa (onclick,...) bulsa 
// // ular (parentlar) ham ishlab ketadi.

// // childga berdik shuning uchun u bosilganda uning parentlari ishlab ketmayapdi

// // lekn parent ga bermaganmiz u bosilganda uning parenti grend ishlab ketyapdi biz parenetgaham stopImmediatePropagation berib quyishimiz kerak 

// const parent = (e) => {
//   e.stopImmediatePropagation()
//   alert('parent')
// } // endi parentni bossakham faqat uzi ishlaydi 

// // Bubbling oldi olindi 


// // -=-=-=-=-=- stopPropogation() vs stopImmediatePropagation() farqi

// // -=-=- stopPropogation()
// //  - bu uzi berilgan elementini bror hodisa bulganda ishlashini tuxtatib  bundan kiyingi (parentlari) ni ishlatadi uzi ishlamaydi 

// // -=-=- stopImmediatePropagation()
// //  - bu esa mutloq teskarisi uzi ishlab uzidan kiyingi (parentlarini) tuxtatib quyadi va uzi ishlaydi  



// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-


// -=-=-=-=-=-=-=-=-=-=-=- Event Delegation 

// bizga table berilgan tableda katakchalar bor biz qaysi katakni bossak ushani bgc si qzil bulishi kerak 

// biz har bir katak uchun oncklick yozib chiqolmaymiz shuning uchun table ni uziga oncklick berib event yozdamida qaysi katak bosilganini bilib olsak buladi 
// event ichidagi target bulimida innerHtml bor u bizga nechinchi katak bosilganini chiqaradi 

// tablega onclick biriktirib undan eventni olamiz 

// let target; // bu bizga fnc ichidagi target malumotini scope dan tashqaridagi shu veriablega tenglashtirihs uchun kerak 

// table.onclick = function(event){ // oncklick shu holatda () siz yozilgani uchun automatik birinchi paramitr event buladi 
//   // console.log(event) // hamma malumot chiqadi 
//   // console.log(target) // event.target qilsak bizga nechinchi chindi bosilganini kursatadi 
//   // value: <td>...</td>
//   // agar target da malumot bulsa (malumot bulsa bosilgan buladi) usha targetdan highlite class ni uchirib tashlasin deymiz 
//   if(target) target.classList.remove('highlite') // bu tekshiryapdi agar targetda malumot bulsa (table bosilib malumoti targetga tenglashgan bulsa)
//   // unga highlite degan class qushilgan buladi usha class ni uchirib tashlasin deyapmiz 
  
//   // va targetga event.target dan kelyotgan yangi malumotni biriktiryapmiz 
//   // (usha yangi malumotga yana pastagi amal bajarilib class qushadi yana boshqasi bosilganda uni uchirib yana yangi qiymatni tenglashtiraveradi)
  
//   target = event.target // har doim click bulganda usha element malumoti keladi va targetga tenglashadi 
  
//   // table childlari click bulgan bulsa evnet.targetga malumot kelib targetga trenglashgan bulsa
//   // yane click bosilgan bulsa usha bosilgan katak (element) malumoti keladi  
//   target.classList.add('highlite') // kelyotgan malumotga highlite degan class qushyapdi

// }

// code sharhi 
{
// buyirda kup amal bajarilyapdi 

// birinchi qiymat da hechqanday malumot bulmaydi

// scope tashqarisida target degan veriable bor qiymati undifinedi

// click bosilganda scope ichida usha targetni tekshiradi agar uning ichida malumot bulsa 
// undifinedi ga teng bulmasa usha malumotdagi elentdan highlite degan class ni olib tashlaydi 
// undifinedi ga teng bulsa kiyingi amalga utib ketadi 

// click bulganda click bulgan element malumotlari event.targetga keladi 
// event.target scope tashqarisidagi target veriablesiga tenglashadi va kiyingi amallarga utadi 

// kiyin usha targetdagi malumot (click bosilganda event.targetdan tergetga tenglashgan malumot)  
// target (bosilgan element malumoti) ga highlite degan class qushadi 
// class da background-color red berilgan usha malumot (bosilgan katak) birdan qizil rang buladi va code tuxtaydi

// yana bir martta click boskanimizda shu amallar boshidan boshlanadi 
// birinchi amalda targetni tekshiradi targetda malumot bor (bosilgan krtak malumoti) unga yana class qushgan edik
// if ichi true bulganligi uchun if ishlaydi va usha targetdan highlite degan class ni uchirib tashlaydi 

// va yana yangi malumot targetga tenglashadi class qushilib qoldi va 2-clickdagi amallarham tugaydi 
// qushilgan class 3-click bulguncha turadi va yana click bulsa  shu amallar boshidan boshlanadi 

}



// -=-=-=-=- preventDefault()
// bu uzining default extionlarini tuxtatadi 
// bizda link bor ustiga boskanimizda homega utib ketadi lekn 

// function onbutton(e) {
  // alert('hey') // return bizga uzidan kiyingi hamma ishni tuxtatadi 
//   return true
//   alert('hey') // return bizga uzidan kiyingi hamma ishni tuxtatadi 
//   // hey alertda chiqmaydi returndan kiyin yozilgani uchun
// }

// bu holatda link bosilganda alert returndan tepada bulsa alert chiqadi kiyin home ga utib ketadi alert pasda bulsa chiqmasdan homega utib ketadi 

// biz alert chiqsin lekn elentni uzini ishi (yane berilgan manzilga utib ketishi) tuxtasin deyishimiz kerak 
// buning uchun preventDefault dan foydalanamiz 

// bu bizga elemnt ni uzini ishini tuxtatib fnc dagilarni tuxtatmaydi 

function onbutton(e) {
  e.preventDefault();
  alert('hey') 
} // bu holatda alert chiqadi lekn home ga utib ketmaydi

// event.preventDefault() ni reol projectda qanday ishlatsak buladi ?

// masalan likn berilgan uni bosganimizda linkga kirishni hohlaysizmi deydi agar ha qilsak linkga kirsin yoq desak kirmaslihi kerak
function clk(e) {
  let res =  confirm('18 yoshdan kattamisiz')
  if(res !== true)e.preventDefault()
  // confirm ga kelyotgan malumot true bulsa (ok ni bosgan bulsa) saytga kirsin false bulsa cancel ni bosgan bulsa kirmasin 
}

// homework 

// tepadagi table click fnc sini uzgartiring avval bitta katakni bir martta bossak class qushardi shu katakni yan bir martta bossa class ni olmas edi 
// siz shunday qilishingiz kerak bitta katakni 1 martta  bossa klass qushilsin yana shu katakni bossa classni olib tashlashimiz kerak



let target; // bu bizga fnc ichidagi target malumotini scope dan tashqaridagi shu veriablega tenglashtirihs uchun kerak 

table.onclick = function(event){  
 
  // if(target) target.classList.remove('highlite') 
  // bu holatda boshqa knopkani bossakham eventda malumot buladi va uchirib tashlasa biz class qusholmaymi

  // if(target !== event.target) target.classList.remove('highlite') 
  // target undifinedi bu event.targetga teng emas if ishlaydi lekn undifinedi ga classList qilib bulmaydi error buladi kode tuxtaydi 
  // bu hechqachon teng bulmaydi targetda malumot bulsaham chunke targetda malumot bulgani blan u class qushilgan malumot buladi event dan kelrotgan malot esa class siz buladi 
  // biz ikkala holatgaham tekshirishimiz kerak  

  if (target && target !== event.target) {
    // 2 martta bittasini boskanimizda target blan event.target bir biriga teng bulib qolyapdi va false bulganligi uchunutkazib yuboryapdi bu amalni
    target.classList.remove('highlite'); 
  }
 
  // buyirda agar target bulsa va targetning qiymati yangi kelyotgan event.targetga teng bulmasa eski targetdan class ni olib tashla deyapmiz  
  
  target = event.target 
  target.classList.toggle('highlite')
  // toggle class qushilsa htmldagi togglega kelgan td ga class qushiladi
  // event.target qilganimizda class qushilgan holatda chiqadi (agar shu tugmani qayta bossak)
}
