
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

// #####################

window.onload = () => {
  let roleID = localStorage.getItem('roleID')

  if(roleID === 'admin') {
    user.innerText = 'Admin'
  }else if(roleID === 'driver') {
    user.innerText = 'Driver'
  }
}
save.onclick = () => {
  if(login.value === 'John' && pw.value == 2004){
    user.innerText = 'Admin'
    localStorage.setItem('roleID', 'admin')
  } else if(login.value === 'Elshod' && pw.value == 2002){
    user.innerText = 'Driver'
    localStorage.setItem('roleID', 'driver')
  }
}

// bu holatda biz inputlarga John va psga 2004 qilsak bizga adin deb chiqaradi 
// Elshod 2002 qilsak drever deb chiqaradi bu holatda ikkala admin va driver qiymatlarni localStorage ga saqlayapdi 
// biz bu qiymatlarni localStorage dan uzgartirib quysak buladi browser ni uzidan agar 
// inspect ning application bulimidan localStorage ga kirsak va uyirda roleID veriable qiymati sifatida adim kirgan bulsa admin driver kirgan bulsa driver yozilgan buladi 
// usha qiymat admin bulsa driver qilib quyishimiz mumkun ekan bu holatda bizrdan wriverga utib ketadi 
// shuning uchun hamma ishdaham localStorage dan foydalanmaslik kerak bu holatlarda localStorageni oson buzib kirsa bularkan 


// ##################### 

// -=-=- biz shuyirgacha localStorage ga faqat string set qildik malumot obj ham bulishi mumkun 
// objlarni localStorage ga tug'ridan tug'ri set qilolmaymiz 

let server = [
  {id: 1, name:'webbrin 1'},
  {id: 2, name:'webbrin 2'},
  {id: 3, name:'webbrin 3'},
  {id: 4, name:'webbrin 4'},
  {id: 5, name:'webbrin 5'},
] // buni backend deb turamiz 

// let users = server

// const getData = () => {
//   // biz buning ichidagi har bir malumotni olib div yaratib uning ichiga yozishimiz kerak 
//   users.forEach((item) => {
//     let div = document.createElement('div')
//     div.innerHTML = `${item.name}`
//     // bizda hamma element browser da chiqyapdi 
//     // endi ularning qaysini ustiga bossak usha uchib ketishi kerak 
//     div.addEventListener('click', () => {
//       // filter qilib olamiz click bulgan elemet id siga teng bulmaganlarini bizga qaytarsin teng bulganini uchirib yuborsin deymiz 
//       let res = users.filter((v) => v.id !== item.id);// click bulgan div id siga teng bulmagan hamma divlar resga teng bulyapdi 
//       // endi list ichidan users ni eski qiymatlarini uchirib tashlashimiz kerak 
//       list.innerHTML = null // list ichida malumot qolmayapdi 
//       // endi yangi malumotni usersga tenglab quyamiz 
//       users = res; // filter bulgan yangi malumot usersga teng bulyapdi 
//       // endi yangi users qiymati blan ishlashi uchun getData ni yana yurgizib yuborishimz kerak
//       getData() // fnc qaytadan ishlaydi users ni yangi malumotini forEach qilib listga joylab chiqadi
//       // har click qilganimizda fnc qaytatdan ishlab yangi qiymatni kurib chiqadi
//     })
//     list.append(div)
//   })

// }
// getData()

// -=- Bu fnc tug'ri ishlayapdi bosgan malumotimizni uchirib yuboryapdi 
// lekn browser ni yangilasak uchgan qiymatlar yana qishilib qolyapdi biz shunday qilishimiz kerakke browserni yangilasakham 
// uchirgan qiymatlarimiz yana oldingi holatiga qaytib qushilib qolmasin / Buning uchun localStorage dan foydalanamiz 

// let users = server

// yuqorida bu holatda edi endi biz buni agar localStorage users da malumot bulsa (yane bitta element uchirilib qolganlari localStorage ga qushi;gan bulsa) usha 
// malumot blan usersga teng bulsin agar unda malumot bulmasa server malumoti usersga teng bulsin deyishimiz kerak 

let users = JSON.parse(localStorage.getItem('users')) || server;
// localStorage dagi malumotni json holatdan chiqarib olyapmiz birdan 

const getData = () => {
  users.forEach((item) => {
    let div = document.createElement('div')
    div.innerHTML = `${item.name}`
    div.addEventListener('click', () => {
      let res = users.filter((v) => v.id !== item.id);
      list.innerHTML = null 
      users = res; 
      // uchirilgan malumotni localStorage ga qushib quyamiz 
      // localStorage.setItem('users', res) // users nomi blan res qilmati qushilishi kerak 
      // lekn bu holatda hatolik buladi chunke localStorage ga OBJ larni tug'ridan tug'ri qushib bulmaydi 
      
      // biz obj malumotini localStorage ga qushmoqchi bulsak uni json qilib qushib olishimiz  kerak buladi 
      localStorage.setItem('users', JSON.stringify(res)) // biz res malumotlarini json holatda localStorage ga qushib oldik 
      // lekn bu endi localStorage dagi malumotni html ga qushmoqchi bulsak buni yana jsondan chiqarib olishimiz klerak buladi 
      getData() 
    })
    list.append(div)
  })

}
getData()


// -=-=-=-=-=-=- sissionStorage 

// bu localStorage blan bir hil faqat bitta farqi bor 
// localStorage ga saqlanganda biz browser oynasini uchirib huddi shu linkni boshqa browser da ochsakham 
// localStorage dagi malumotlar turaverar edi bunda esa faqat bitta browser oynasida saqlanib turadi 
// sissionStorage da esa shu link blan yangi browser oynasiga utganimizda hamma saqlangan malumotlar uchib yangidan birinchi holatidan boshlanadi 

// -=-=-=-=- Usege 
// ishlatilishiham method lariham localStorage blan birhil 
// faqat localStorage.setItem(key, value) emas 
// sissionStorage.setItem(key, value) qilishimiz kerak 


// -=-=-=-=-=-=- sissionStorage methode 

// -=- sessionStorage - API 
//      - setItem(key value) - veriable va unga qiymat yasab oladi 
//      - getItem(key) - ochilgan veriableni chiqaradi ishlatish uchun 
//      - removeItem(key) - aynan bitta veriabline uchiradi
//      - clear() - hamma veriable larni uchiradi 
//      - key(index) - indexsi
//      - legth  - uzunligini chiqaradi 
//      - Object.keys - obj qilib uni ustida ishalydi 

// buing method lariham localStorage blan birhil hisoblanadi faqat sessionStorage. qilib yoziladi 