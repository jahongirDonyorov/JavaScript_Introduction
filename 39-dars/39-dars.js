// -=-=-=-=-=- Lifecycle of HTML Page

// agar biz bush p ga text qushsak va js htmlning eng pastgi qismida chaqirilgan bulsa bu holatda bush 
// p ga qiymat qushiladi lekn js htmlning yuqorisida chaqirilsa code yuqoridan psaga qarab uqilganligi uchun
// 1 - js ni uqiydi va kiyi qolganlarga utadi bu holatda bu p tagi pasta bulganligi uchun js hechnarsa qushilmaydi chunke js tepada ishlab bulgan 

// test.innerText = 'lorem'

// biz buni tug'rilashimiz mumkun 

// -=-=-=-=-=-=-=- DOMContentLoaded 
// only html - bu faqat htmlni yuklab bulgandan kiyin js ni ishga tushiradi 
// bu hodisa hisoblanadi addeventListener ga yoziladi 
// bu bizga html file tuliq yurib bulgandan sung js file ni ishlatadi

// document.addEventListener('DOMContentLoaded', () => {
//   test.innerText = 'lorem2'
// })
// bu holatda js tepada chaqirilgan bulsaham lorem2 qushilyapdi chunke birinchi html ishlab bulgandan sung js ishlayapdi 

// buning alternative variantiham bor  


// -=-=-=-=-=-=-=-=- load 
// html / style / image  - bu hammasini html, style va image larni yuklab bulgandan sung js ni ishga tushiradi 
// bu ham birinchi html ni ishlatib kiyin jsni ishga tushiradi 
// lekn bu addEventListener  da qilib bulmaydi 

// window.onload = () => { // bu har doim window ga birikishi kerak 
//   test.innerText = 'lorem3'
// }

// DOMContentLoaded load ga qaraganda tezroq ishlaydi chunke u faqat htmlni uzi yurgandan kiyin oshga tishadi load esa hamma narsa ishlab bulishini kutadi 


// -=-=-=-=-=-=-=- biz bularni ishlatmasdanham htmlning uzida buni chiqadigan qilishimiz mumkun 
// buning uchun biz js ulanyotganda unga async defer atrebute larini berib uni async yoke defer qilishimiz mumkun 

// -=-=-=- async - DOMContentLoaded  blan birhil ishlaydi 

// -=-=-=- defer - load blan bir hil ishlaydi 



// -=-=-=-=-=- onbeforeunload
// bu link orqali boshqa page ga utishda ishlaydi 

// window.onbeforeunload = () => {
//   return true
// }
// addEventListener blan ishlamaydi shu holatda windowga nisbatan ishlaydi 



// -=-=-=-=-=-=-=- Mutation Observer
// bu bizga htmlda bror tag uzgarishini tekshiradi 

// -=-=-=-=-=- observer
// bu tagga uzgartirihs kiritilganda ishga tushadi 

let observer = new MutationObserver(() => {
  console.log('working')
}) // bu bizga kerakli tag uzgarganda ishga tishadi
// btn bosilganda test ga hi qushilyapdi usha paytda bu ishga tushadi

observer.observe(test,{ // bu tekshiradi shu tagga uzgarish kiritildimi yuqmi ushani
  childList:true, // bu har doim bulishi kerak 
  characterData: true, 
  // -=-=-=- subtree 
  // bu div conatainer taglarga beriladi bu true bulsa usha tag ichidagi hohlagan bror tag uzgarsaham ishga tushadi 
  subtree: true,
  // -=-=-=- attributes
  // bunitrue qilib quysak tag ga attributes qushilsaham ishga tuhsadi 
  attributes:true,
}) // btn bosilganda testga Hi qushilyapdi 


btn.onclick = () => {
  test.innerText = 'Hi '
}