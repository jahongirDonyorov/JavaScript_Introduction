
// -=-=-=-=- Cookies || Local Storage || Session Storage 

//   _________________________________________________________________________________________________
//  |                      |      Cookies            |     local Storage      |     Session Storage   |  
//  | _____________________|_________________________|________________________|_______________________|
//  | Capacity             |        4kb              |          10mb          |           5mb         | 
//  | Browsers             |    HTML4 / HTML5        |         HTML5          |          HTML5        |
//  | Accessible from      |     Any window          |       Any window       |         Same tab      |
//  | Expires              |    Manually set         |         Never          |        On tab close   |
//  | Storage Location     |   Browser and server    |       Browser only     |        Browser only   |
//  | Sent with requests   |         Yes             |           No           |            No         |
//  |______________________|_________________________|________________________|_______________________|



// -=-=-=-=-=-=-=-=-=-=- Local Storage 
// bu browserda malumotlarni saqlash uchun ishlatiladi 

// Misollar:
{
// User bir saytga kirsa va uziga kerakli tilni tanlasa va saytni yangilasaham uzi tanlagan tilda qoladi yana avvalgi tilga qaytib qolmaydi.

// Yoke users entirnet dukonidan bir mahsulotni qancha olishini tanlasa va saytni yangilasa yoke ertasi kun saytga qaytib kirgandaham uzi belgilagan son uchib ketmagan buladi 
// chunke bu malumotlarning hammasi Local Storage da saqlanib qolgan buladi.

// Yana bir real misol masalan user bir saytga ruyhatdan utganda kirtgan email va codeni eslab qolishni bossa va saytdan chiqib ketib yana qanchadur vahtdan kiyin
// kirishga harakat qilganda inputlarda email va code uzi chiqadi user kiritmasaham chunke u kode Local Storage (Browsers) ga saqlanib qolgan buladi
// yana takror kirganimizda Local Storage (Browsers) dan usha malumotni olib quyib beradi 
}

// -=-=-=-=-=- Local Storage Method 

// -=- localStorage - API 
//      - setItem(key value) - veriable va unga qiymat yasab oladi 
//      - getItem(key) - ochilgan veriableni chiqaradi ishlatish uchun 
//      - removeItem(key) - aynan bitta veriabline uchiradi
//      - clear() - hamma veriable larni uchiradi 
//      - key(index) - indexsi
//      - legth  - uzunligini chiqaradi 
//      - Object.keys - obj qilib uni ustida ishalydi 

// -=-=-=-=-=-=-=-=- Usege 

// const plus = () => {
//   count.innerText = eval(`${count.innerText} + 1`)
// }
// const menus = () => {
//   count.innerText = eval(`${count.innerText} - 1`)
// }

// biz hozir plusni bossak Count qiymati oshib boryapdi menusni bossak esa kamayib 
// biz countni 10 gacha ochirsak va saytni yangilab yuborsak u 0 ga tushib qoladi  bizga bunday bulmasligi kerak
// biz saytni yangilasakham biz yozgan qiymat uzgarmasligi kerak buning uchun Local Storage dan foydalanamiz 
// bunda saqlangan malumotlarni Browser da inspectning aplication bulimidan kursak buladi  

// biz bu qiymatlarni Local Storage ga saqalab quyishimiz kerak 

const plus = () => {
  count.innerText = eval(`${count.innerText} + 1`)
  // Local Storage ga qushishimiz uchun setItem Methodidan foydalanamiz 
  
  // -=-=-=- localStorage.setItem(key, value) - localStorage dagi qiymat hechqachon uchmaydi  uzimiz uchirmasak 

  // bu 2 ta param oladi birinchisi key ikkinchisi value
  localStorage.setItem('count', count.innerText) // countning innertextini localStorage ga count veriable valuesi sifatida birikyapdi 
  // + bosganimizda son nechchi bulsa localStorage gaham shu son count nomi blan birikyapdi
  // biz hozir browserni yangilasak browserdagi qiymat uchib ketyapdi lekn application ga kirib localStorage ni rusak usha qiymay count nomi blan turibdi / shu linkni olib boshqa Browsers da ochsakham localStorage dagi count qiymati uzgarmaydi 

  // endi biz aytishimiz kerakke Browsers yangilanganda localStorage count da qiymat bulsa usha qiymatni 
  // html count.innerTexti ga qushib quyishimiz kerak bu yuqorida getItem yordamida bajariladi 

}
const menus = () => {
  count.innerText = eval(`${count.innerText} - 1`)
  localStorage.setItem('count', count.innerText) // countning innertextini localStorage ga count veriable valuesi sifatida birikyapdi 
}


// localStorage countiga biriktirilgan html count.innerText qiymatini Browser yangilandanda html.innerText qiymati uchib ketadi lekn localStorage count qiymati qoladi 
// usha qolgan qiymatni yana html count innerText ga tenglashtiramiz  
window.onload = () => {
  // -=-=-=-=-=- getItem(key)
  // bu bizga localStorage dagi bizga kerakli key ni chiqarib beradi 
  count.innerText = localStorage.getItem('count') || 1 // html count ga localStorage ichidagi count qiymatini chiqarib tenglashtiryapdi 
  title.innerText = localStorage.getItem('title') || ''
  // || qilib ketganimiz agarda qiymat bulmasa bittasida bir bulsin bittasida string bulib tursin deyapmiz bu real caseda errorlarni oldini oladi 

  // biz hozir yangilanganda localStorage title da qiymat bulsa html title ga usha qiymat chiqsin deyapmiz 
  // link input ichida yozilgan qiymat uchib ketyapdi biz input ichidaham usha qiymat qolsin deyoshimiz mumkun ekan 
  
  inTitle.value = localStorage.getItem('title') || ''
}

// manashu narsaga localStorage deyiladi 



// -=-=-=- endi biz inputga yozgan malumotimiz title id li spanda chiqsin va localStorage ga saqlasin 
const onChangeTitle = (event) => {
  const {target:{value}} = event; // event ichidagi target valueni chiqarib olyapmiz 
  // htlm endi valueni title ga tenglashtirishimiz kerak
  title.innerText = value
  // shu value ni localStorage gaham qushib olamiz 
  localStorage.setItem('title', value) // title nomli veriable ochib unga value ni value qilib berib localStorage ga qushyapmiz 
  // endi localStorage title keyli malumotham paydo buldi title valuelari localStorage da saq;anib qolaveradi 

  // bundaham yuqoridagidek holat input qiymati browser yangilanganda uchib ketadi lekn localStorage dagi qiymat qoladi 
  // buniham onload ga qushib quyishi miz kerak yane browser yangilanganda localStorage title sidda qiymat bulsa usha qiymatni html title ga qushib quyisb deb

}

// -=-=-=-=- removeItem(key) - bitta parametr oladi qaysi key uchishi
// bu biz hohlagan localStorage key (veriale) ni uchirib tashlaydi 
// masalan delete bosilganda count localStorage dan uchib ketsin 

del.onclick = () => {
  localStorage.removeItem('count')
  // delete bosilganda localStorage dan count uchib ketadi 
}


// -=-=-=-=- clear() - parametr olmaydi hammasini uchiradi 
// bu localStorage ni ichidagi barcha narsani uchirib yuboradi 
cl.onclick = () => {
  localStorage.clear()
}
// clear:  bosilganda localStorage dagi barcha qiymatlar uchib ketadi 
// buni bosib saytni yangilasak browser dagi malumotlarham uchib ketadi localStorage da qiymat bulmaganligi uchun


// -=-=-=-=-=-=- object.keys 
// bu blan keylarni olib uni for yozrdamida aylantirsak bularkan

for (let k of Object.keys(localStorage)) {
  console.log(k) // keylarni chiqarib beradi 
}


// -=-=-=-=-=-=- object.value 
// bu blan valuelarni olib uni for yozrdamida aylantirsak bularkan

for (let k of Object.values(localStorage)) {
  console.log(k) // valuelarni chiqarib beradi 
}


// shularga localStorage deyiladi buni hamma joydaham ishlataverish kerak emas
// masalan ruyhatdan utishda adim bubkirish mumkun va users bulib kirish mumkun deyaylik 
// userning malumoti users key bub saqlansa adminniki admen bulib saqlanadi va ularning valuelari mavjud deyaylik admin va users degan 
// admin kirganda admin users kirganda users bub kuradi biz buni aplication dan uzgartirib quysak buladi shuning uchun bu holatlarda localStorage dan foydalanmaslik kerak 
