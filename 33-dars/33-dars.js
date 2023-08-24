// -=-=-=- browser ishga tushganda bitta dom ochib oladi 

// -=-=-=-=-=-=-=-=- Atribute manipultion 
//    - .hasAttribute(name) - true/false 
//    - .getAttribute(name) - returns value if exist
//    - .setAttribute(name,value) - set Attr 
//    - .removeAttribute(name) - deletes the attr

let elm = document.querySelector('.parent')

//    1 - elm.hasAttribute(name) - true/false 

// bu biz chaqirgan tagda biz yozgan attribute (class,id,type,src,...)bor yuqligini tekshiradi true / false qaytaradi

console.log(elm.hasAttribute('class')); // true chunke bu tagda class degan atribute bor
console.log(elm.hasAttribute('type')); // false chunke bu tagda type degan atribute yuq


//    2 - elm.getAttribute(name) - returns value if exist

// biz yozgan atrebut bor yuqligini tekshiradi bulsa usha atribut malumotini chiqarib beradi 

console.log(elm.getAttribute('class')); // parent chiqarib beryapdi chunke class ga parent yozilgan 


//    3 - elm.setAttribute(attr, name)  - set attr

// Attribute qushib beradi 

// msalan css da item degan id ga style berilgan background-color blue deb biz u id ni parent ga berishimiz kerak 

elm.setAttribute('id', 'item')
// birinchisi qanaqa argument beryotganimiz ikkinchisi usha argument nomi 
// item degan id qushilyapdi va item ga berilgan styllar bungaham ishlayapdi 


//    4 - elm.removeAttribute(name) 
// bu attributni uchirib beradi 
elm.removeAttribute('id', 'item')
// yuqorida qushgan id attributimizni  uchirib tashladik 



// -=-=-=-=-=-=-=-=- Creating element 
// htmlga elementlar qushish uchun ishlatiladi
// buning sintaksi shugasi (aptemallashtirilgan varianti ) JSX

let parent = document.querySelector('.parent')

let dv = document.createElement('div') // div qushyapmiz 
// bu qevni ichiga malumot qushish uchun malumotni yozib olamiz 
let txt = document.createTextNode('Hey DOM') // Hiy DOM text qushib beryapdi 
// endi ikkalasini birlashtirishimiz kerak (yane div ichiga text ni quishimiz kerak)
// buning uchun append va prepend dan foydalanamiz 

// 1 - append - element ichiga element qushadi / qushilyotga element ichida boshqa bir elemenetlar bulsa hammasida yuqoriga qushadi 
// 2 - prepend - buham element qushadi faqat ichida element bulganda hammasidan pastda qushadi 
// bizda hozir dv ichida boshqa elemenet bulmaganligi uchun bu ikkalasining farqi bulmaydi 

dv.append(txt) // div ichiga txt ni quyib oldik

// endi tayyor malumot (div) ni html ga  quyib olishimiz kerak 
// biz htmlga malut joylash uchun 4 case (joy) mavjud buladi haar doim 

// 1 - .elm.before() 
// quymotchi bulgan tag (elm) ning tashqarisi tepa tomondan 
{/* 

// shu yirga joylashsadi 
< > ... </>

<div class="parent" > // elm parentni olgan 
    <div class="child">
      <h1 style="color:red;">DOM 2</h1>
    </div>
  </div>
*/}

// 2 - elm.prepend()
// quymoqchi bulgan tag (elm) ning ichki qismining eng yuqorisidan 
{/* 
<div class="parent" > // elm parentni olgan

    // shu yirga joylashsadi 
    < > ... </> 

    <div class="child">
      <h1 style="color:red;">DOM 2</h1>
    </div>
  </div>
*/
}

// 3 - elm.append()
// quymoqchi bulgan tag (elm) ning ichki qismining eng pastidan  
{/* 
<div class="parent" > // elm parentni olgan
    <div class="child">
      <h1 style="color:red;">DOM 2</h1>
    </div>

    // shu yirga joylashsadi 
    < > ... </> 

  </div>
*/}

// 4 - elm.after()
// quymoqchi bulgan tag (elm) ning tashqarisi pastki tomondan
{/* 
<div class="parent" > // elm parentni olgan
    <div class="child">
      <h1 style="color:red;">DOM 2</h1>
    </div>
</div>

// shu yirga joylashsadi 
< > ... </> 

*/}
// 1 - usul 

parent.before(dv) // parent ga kelyotgan tag ('.param') ning tepa tomon tashqarisidan dv tagini qushyapmiz

// -=-=- remove()
// remove qiladigan bulsak malumot uchub keradi 
// dv.remove() // malumotni uchirib yuboryapdi 


// -=-=-=-=-=-=-=-=- coleNode

// bir element malumotini ikkinchisiga clone qilib beradi 
let clss = document.querySelector('.child')

// clss = parent.cloneNode(false) // true bulsa malumotni utkazadi false bulsa utkazmaydi
// console.log(clss) // .parent ning hamma malumoti child gaham utadi 


// -=-=-=-=-=-=- Style  - elm 
// htmlga JS dan turib stley berish uchun ishlatiladi 

//    - elm.style.top / left
//    - .className - represents name of class 
//    - elem.classList.add / remove('class') - adds/removes the 
//    - elem.classList.toggle('class') - adds 
//    - elem.classList.contains('class') - 


// clss.style. brmocqchi bulgan style nomi yoziladi bunda stylelar 2 ta sudan tashkil topgan bulsa - blan emas kamel case formatda yoziladi 
// background-color bu holatda yozolmaymiz backgroundColor qilishimiz kerak 

parent.style.backgroundColor = 'red'; // parentni orqa fondini qizil qilib beryapdi 
clss.style.padding = '20px'; // clss ga padding 20px qushayapdi 

// -=-=- Agar kuproq css berish kerak bulsa bu holatda bitta bitta berib chiqish qiyib bulib ketadi 
// biz bidan kup style yozishimiz  uchun style.cssText = `` buni ichiga hohlagancha css yozishimiz mumkun 



// -=-=-=-=-=-=-=-=-=- cssText - style dan kiyin . blan yoziladi style kalit suzlari urniga 

// kuproq style berishda ishimizni osonlashtirib beradi 
// bunda becsec ichida css da style bergandek beraveramiz camilCase qilish shart emas 

parent.style.cssText = `
  color:red;
  background-color:blue;
`
// bu holatda bacsec ichiga css da style bergandek berib ketaversak buladi 

// -=-=-=-=-=- Misol:
// bizga list clas li div berilgan va uning ichida ul joylashgan ul ning uchida li lar bor 1,2,3,4 
// biz usha li larni ketmaketlikda aralashtirib kuk qizil kuk qizil qilib chiqishimiz kerak.

// 1 - list class li div ni olishimiz kerak ul ni uzini birdan olsakham buladi lekn ul lar kup bulishi umkun bizga aynan list ni ichidagi ul kerak 
let list  = document.querySelector('.list')

// 2 - list ichidagi li larni olishimiz kerak 
let child = list.children[0].children // list ni ichidagi children[0] (birinchi bolasi ul) olyapdi va uning ham ichidagi children (bolalari) li larni olyapdi 
// bu holatda bolalarini element children blan oldik Nodes childNodes blan emas chunke Nodes bush joylarniham #text qilib chiqarar edi 

console.log(child) // buni kureadigan bulsak 4 ta li elementylarini olivoldik 

// endi bularni har birini kurib bittasiga kuk bittasiga qizil berib chiqishimiz kerak 

// buning uchun for dan foydalanamiz forEach danham foydalansak buladi lekn bu obj holatda kelyotganligi uchun birinchi malumotni arra qilishimizga tug'ri keladi 

for(let i = 0; i < child.length; i++){
  if(i % 2 == 0){
    child[i].style.color = 'red'
  }else{
    child[i].style.color = 'blue'
  }
}

// -=-=-=-=-=-=-=-=-=-=-=- .classList.add/remove('class)
// class qushib beradi agar biz setAttribute blan class qushadigan bulsak bor class ni uchirb yangi qilib beradi bu esa bor class ni yozidan qushadi 

parent.classList.add('add') // add degan class ni qushib beryapdi 


// -=-=-=-=-=-=-=-=-=-=-=- .classList.remove('class)
// classni olib tashlaydi (uchiradi)

parent.classList.remove('add') // add degan class ni uchirib beryapdi 


// -=-=-=-=-=-=-=-=-=-=-=- elem.classList.toggle('class')
// biz yozgan class bulsa uchirib tashlaydi bulmasa qushadi 
parent.classList.toggle('red') // add degan class ni qushib beryapdi 

// bu orqali tugmani bosganda bitta class qushilin yana bir martta bosgada yuqolsin deyishimiz mumkun 


// -=-=-=-=-=-=-=-=-=-=-=- elem.classList.contains('class')
// bu biz yozgan class bormi yuqmi shuni tekshiradi bulsa true bulmasa false qaytaradi 
console.log(parent.classList.contains('red'))
// buni biz class qushmoqchi bulsak qushyotgan class bormi yuqmi tekshirib bor bulsa boshqa class qushamiz yuq bulsa shuni uzini qushaveramiz



console.log(parent)

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=- Geometry - see ref pic 
//    - offsetParent - </body>
//    - offsetLeft / Top - left va top oralig'idagi masofa 
//    - offsetWidth / Height - 
//    - clienLeft - left border width 
//    - clienTop - top border width 
//    - clienWidth / Height - calculate width height inside border 


// -=-=-=-=-=-=-=-=-=-=- offsetTop/Left/Width/Height 

// -=-=-=-=-=-=- offsetTop 
// yuqoridagi element blan orasidagi bush joyni chiqaradi 

console.log(parent.offsetTop) // 46 chiqyapdi tepasidagi element Hi DOM blan buning orasida 48px bush joy mavjud ekan 

// -=-=-=-=-=-=- offsetLeft
// ung tomonidagi element blan buning orasidagi bush joyni chiqaradi 

console.log(parent.offsetLeft) // 28 ung tomonida 28px bush joy bor ekan chunke biz 20px margin berganmiz va browser automatik ut-8 da 8px joy tashlab beradi 


// -=-=-=-=-=-=- offsetWidth 
// uzunligini chiqaradi padding border hammasi qushilgandagi

console.log(parent.offsetWidth) // 341 jami uzunligi 341px ekan 
// elemtni uziga width 300px beragnmiz padding 2 tomondan 20 20 = 40 px buladi boreder 0.5 dan 2 ta 1px buladi jami 341 bulyapdi tug'ri 


// -=-=-=-=-=-=- offsetHeight
// buyini chiqaradi padding border hammasi qushilgandagi

console.log(parent.offsetHeight) // 191 jami buyi 191px ekan 
// element height 150px berilgan + 20 20 padding = 40px  + 0.5 0.5 border = 1px jami 191px tug'ri 


// -=-=-=-=-=-=-=-=-=-=- clientTop/Left/Width/Height 

// -=-=-=-=-=-=- clientTop
// bu yuqorida nechi px border borligini chiqaradi 
console.log(parent.clientTop); // 1 yuqorida 1px border bor 


// -=-=-=-=-=-=- clientLift
// bu ung tomonda qancha border borligini kursatadi
console.log(parent.clientLeft); // 1 ung tomonda 1px border bor 


// -=-=-=-=-=-=- cleintWidth
// bu element uzunligini chiqaradi faqat borderlarni hisobga olmaydi 
console.log(parent.clientWidth) // 340 borderlarbi hisoblamayapdi 


// -=-=-=-=-=-=- cleintHeight 
// bu element buyini chiqaradi bordersiz 
console.log(parent.clientHeight) // 190 borderlarbi hisoblamayapdi 

// bizda .scroll classli element bor uning buyi va eni 150 px dan lekn uni ichidagi textlar scroll buladi 
// biz offsetHeight vs cleintHeightblan tekshirsak 150/1px chiqaradi lekn bizga scrol buladiagn uzunligini chiqarishi kerak bulsa
// scrollHeight dan foydalanamiz 

// -=-=-=-=-=-=-=-=-=-=-= Scroll

let scroll = document.querySelector('.scroll')
console.log(scroll.clientHeight) // 150px chiqyapdi bu karopkaning uzunligi bizga uning ichi scroll bulgandagi uzunligi qanchaligi kerak 

// -=-=-=-=-=-=-=- scrollHeight
// buz bizga element scrol uzunligini chiqarib beradi 
console.log(scroll.scrollHeight); // 768 bu element scrol bulgandagi buyi 768px ekan karopkasining buyi 150px edi 

// -=-=-=-=-=-=-=- scrollWidth 
// bu ham eniga scroll bulsa ushaning uzunligini chiqaradi 
console.log(scroll.scrollWidth); // 150px chunke eniga scroll bulmagan bu element  


// Misol:
// Show more tugmasini bosganimizda scroll yuqolib hamma text kurinishi va show more tugmasi show less ga aylanishi kerak 
// yana bir martta bossak yana scroll paydo bulishi va tugma uz holiga qaytishi kerak 

let btn = document.querySelector('button') // buttonni olvoldik bu bosganimizda text ti uzgarishi uchun 

function expand() {
  if(scroll.clientHeight === scroll.scrollHeight){
    scroll.style.height = '150px'
    btn.innerHTML = 'Show More'
  }else if(scroll.clientHeight === scroll.clientHeight){
    scroll.style.height = `${scroll.scrollHeight}px` // scroll.scrollHeight qilganimizda value px siz kelganligi uchun px quydik 
    btn.innerHTML = 'Show Less'
  }
}



// -=-=-=-=-=-=-=-=-=-=-=-=-=-= scroll(x,y)

// bu 2 ta parametr oladi 
// 1 - x uq buyicha joylashishi 
// 2 - y uq buyicha joylashishi 

// scroll.scroll(0,100) // scroll eniga 0 px bub turadi buyiga 100px  pastan boshlanadi 

// scroll button knopkasini boskanimizda scroll eng pastiga tushishi kerak 
function clickScroll(){
  scroll.scroll(0,scroll.scrollHeight)
  // scroll.scroll(0,12) qilib quysak bir bosganimizda bir 
  // martta 12px pasga tushadi lekn biz har bosganda 12 dan tushsin desak scrollBy dan foydalanamiz 
}



// -=-=-=-=-=-=-=-=-=-=-=-=-=-= scrollBy(x,y)
// bunda har bosilganda qanchaqandur scrol bulsin desak bulad


function clickScroll(){
  scroll.scrollBy(0,12) // har knopkani boskanimizda 12px dal tushib boradi 
  // scroll.scrollBy(0,-12) // har knopkani boskanimizda 12px dal kutarib boradi pasta turgan bulsa
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-= scrollTo (x,y)
// Bu fixed qotirib beradi psata bulsakham tepada bulsakham knopkani boskanimizda birinchi belgilagan joyimizga kelib qoladi

function clickScroll(){
  scroll.scrollTo(0,40) // har knopkani boskanimizda 40px birinchi joyidan paska kladi scroll qayardaligidan qatiy nazar 

}


// -=-=-=-=-=-=-=-=-=- Window Height and Width - see ref pic 
//    - window.innerHeight / innerWidth - includes scrollbar 
//    - window.pageYOffset / .pageXOffset - current scroll / deprecated 
//    - window.scrollX / .scrollY same as offset 

// window saytimiz browserda kurinib turadigan qismi (bodyning browser qismi) 

// -=-=-=-=-=-=- window.innerHeight / innerWidth
console.log(window.innerHeight) // windowning buyini chiqaradi / 780
console.log(window.innerWidth) // windowning enini chiqaradi / bu uzgarib turadi inspectni ochkanimizda window uzunligi kamayadi 


// -=-=-=-=-=-=- window.pageYOffset / .pageXOffset
// bu ikkalasi hozirdas ishlatilmaydi bularning urniga alternative hisobita window.scrollX / .scrollY bular chiqqan 


// -=-=-=-=-=-=- window.scrollX / scrollY 
// bular window ning x va y uq buyicha scrollarini kursatadi  
console.log(window.scrollX) // 0
console.log(window.scrollY) // 0
// ikkalasiham 0 bub turibdi chunke hali windowning scroli yuq



// -=-=-=-=-=-=-=-=-=-=- Coordinate 

// -=-=-=-=-=-=-=-=-=-=-=-=-.getBoundingClientRect()
// bu bizga elementning hamma malumotlarini chiqarib beradi 

console.log(parent.getBoundingClientRect())

// value:
{
// DOMRect {x: 28.000001907348633, y: 46.28571701049805, width: 341.14288330078125, height: 191.1428680419922, top: 46.28571701049805, …}
// bottom
// : 
// 237.42858505249023
// height
// : 
// 191.1428680419922
// left
// : 
// 28.000001907348633
// right
// : 
// 369.1428852081299
// top
// : 
// 46.28571701049805
// width
// : 
// 341.14288330078125
// x
// : 
// 28.000001907348633
// y
// : 
// 46.28571701049805
// [[Prototype]]
// : 
// DOMRect
}