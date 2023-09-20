// -=-=-=-=-=-=-=-=-=-=-=-=-=-

// -=- indexeDB || window.indexeDB - Database
//    - much more powerful than localStorage
//    - built-in mechanism from schema versioning
//    - data stored visitors home directory along with browser settings \
//    - it is client-side not server side db

// -=- indexedDB Events - let request = indexeDB.open(name, verision)
//    - .onupgradeneeded
//    - .onerror
//    - onsuccess

// -=- Object Store - let db =  request.result || event .target.result
//    - .createObjectStore - db.createObjecStore(store, option)
//    - .deleteObjectStore - db.createObjecStore(store)

// -=- DB -
//    - .objectStoreNames
//    - .version - check old version and new version by event

// -=- Transactions - let trans = db.transaction(store, type)
//    - .oncamplete() / onerror()
//    - type - readonly / readwrite

// -=-=-=-=-=-=-=-=-=-=- indexeDB
// Buham malumotlarni browserda saqlaydi / localStorage dan ancha kuchli hisoblanadi
// indexedDB ni barcha narsasi promes hisoblanadi

// indexedDB ni 2 xil yul blan yaratsak buladi

// 1 - indexedDB ni uzini yozib
// let request = indexedDB

// 2 - window dan indexedDB ni olb
// let request = window.indexedDB

// bu browserdan uzida malumotlarni saqlash uchun malumotlar bazasini ochib oladi
// indexedDB dan malumotlar bazasini open methodi blan ochib olamiz

// -=-=-=- .open(param, param)
// bu 2 ta param oladi
// 1-si  malumotlar bazasi nomi
// 2-si veriasi

let request = window.indexedDB.open("webbrain", 3);
// Application bulimida indexedDB ni kursak bizga webbrain degan indexedDB ochib bergan / uyirda buning malumotlarini kursak buladi
// biz buni success, fail, version shu 3ta holatda tekshirsak buladi

var db = null; // global veriable qilganimizning sababi hamma joyda ishlatishimiz mumkun

// -=-=-=-=-=- .onsuccess
// indexedDB open bulganda bu ishga tushadi
request.onsuccess = (event) => {
  console.log("successfully created", event);
  // bulardagi eventlarni kuradigan bulsak biz ishlatgan oddiy DOM eventlari emas bular indexedDB ning eventi. / oddiy eventdan farq qiladi
  // db ga qiymat bersak buladi bu qiymatni faqat shu fnc ichida ishlatamiz

  // db = event.target.result // bu biz ochgan data bazamiz (webbrain) ga malumot qushish, uchirish, yangilash, husisiyatini qaytaruvchi IDBDatabase malumoti bor
  // yokeda buni request.result db olsakham buladi
  db = request.result; // onsuccess yoke onupgradeneeded ikkalasidan birida bulishi shart
  drowData()
};

// -=-=-=-=-=- .onerror
// bu oldin data bazasi bor ushaning ustidan yana data baza ochiladigan bulsa onerror ishlaydi
request.onerror = (event) => {
  console.log("failed", event);
};

// get data 
const drowData = () => { // bu fnc birinchi request onsuccess bulganda ishlasind deyishimiz kerak 
  // bunda listni ichini null qilib boshqattan element creat qilish kerak pastagi creat qilindan  variadntda bir birini ustidan qushyotgan endi
  // yane 1 va 2 bulsa 3 ni shusak yana boshidan 12 123 bub qolyotgan edi
  list.innerHTML = null;
  let tr = db.transaction('frontend', 'readwrite')
  let users = tr.objectStore('frontend')

  // -=-=-=-=-=-=- IDBKeyRange.lowerBound
  // ramge ochib olamiz buham 
  // bu bilan kelyotgan malumotni age uzimiz hohlagandan tepa yoke past bulsa chiqmasin deyishimiz mumkun 
  let range = IDBKeyRange.lowerBound(10, false) // 10 false qildik bu 10 dan kattava 10 teng malumotlarni chiqaradi 
  // true qilsak 10 ni uzini chiqarmaydi 10 dan kattalarini chiqaradi faqat 
  // qaysini shu holatdan sartirofka qilishini aytish uchun range ni ushaning getAll() iga yazamiz 
  // let grade = users.index('indexGrade').getAll(range)

  // -=-=-=- .only 
  // bu faqat bitta malumotni uzini chiqaradi 
  let test  = IDBKeyRange.only(10) // 10 ni uzini chiqaradi

  // -=-=-=-=-=-=- IDBKeyRange.bound
  // bu 4 ta param qabul qiladi boshlanishi tugachi true / false 2 pram uchun alohida alohida
  // let rangeName = IDBKeyRange.bound(1, 4)
  let rangeName = IDBKeyRange.bound(1, 4, false, true) // false1 uchun true 4 uchun bulyapdi 

  // bularni faqat number emas stringdaham qullasak buladi 
  let str = IDBKeyRange.bound('A', 'B', false, false) // acke code buyicha A dan B gacha bulgan harflarni chiqaradi faqat

  let data = users.getAll()
  let ix = users.index('indexName').getAll(str); // hamma name larni olvolyapdi 
  // age larniham olvoldik ularniham getAll qilamiz 
  let grade = users.index('indexGrade').getAll(range)

  ix.onsuccess = () => {
    // bu bizga automatik ravishda kelyotgan malumotni sort qilib beradi 
    // indexedName qilib nam ni olganligimiz uchun name buyicha sartiforka qilib beradi bizga 
    console.log(ix.result, 'ix')// biz faqat name emasage buyichaham sartirofka  qilsak buladi malumotlarni
  }
  grade.onsuccess = () => {
    console.log(grade.result, 'grade')// age buyicha sort qilyapdi
  }
  data.onsuccess = () => {
    console.log(data.result, 'data')
    data.result.forEach((element) => {
      let div = document.createElement("div");
      div.innerHTML = `<h1>${element.id} - ${element.name} <button onclick="del(${element.id})">Delete</button> </h1>`;
      list.append(div);
    })
  }
}

// -=-=-=-=-=- .onupgradeneeded
// versia uzgarganida ishga tushadi / birinchi kirganimizdaham bu chiqadi browser yangilangandan kiyin faqatgina versia uzgarsa chiqadi
// asosan har safar saytni yangilaganimizda qaytadan yuklanishi kerak bulmagan malumotlar buni ichiga yoziladi

request.onupgradeneeded = (event) => {
  // bundaham result malumotini olvolishimiz kerak chunke versia uzgarganda onsuccess dan bu oldin ishlaydi
  // bizga yangi versiadagi result qilmati krak bulsa onsuccess dan olomay qolamiz chunke bu undan oldin ichlaydi shuning uchun buyirdaham ochib olishimiz kerak
  console.log("upgaraded");
  db = request.result; // bu bizga qushimcha amaly (qushish, uchirish, yangilash) uchun kerak buladi

  // bizda hozir webbrain degan indexedDB malumot bazasi (ombor hona) ochgan desakham buladi bu malumot emas
  // malumot solish uchun omborhona desak buladi

  // menga malumot solish uchun buning ichidanham malumotlarga qaram xonalar ochishimiz kerak frontend, backend
  // desing lar uchun alohida alohi kiyin ushlaring ichiga uziga tegishli malumotlarni solishimiz mumkun buladi / bu createObjectStore blan yasaladi

  // -=-=-=-=-=-=- .createObjectStore
  // buham 2 ta param oladi birinchisi bulim nomi ikkinchisi {keyPath:..} buladi    / bu bizga malumotni chaqirib olish uchun kerak buladi
  // bu indexedDB ning ichidan malumot solish uchun bulimlar ochishda ishlatiladi
  // let store = db.createObjectStore('frontend', {keyPath:'id'});// biz store nomi blan indexedDB ning ichidan frontend degan bulim ochib oldik
  // id ni kiyinchalik uzgartirishimizham mumkun bu ishlashi uchun versia uzgarishi kerak

  // versiani yangilab ishlatganimizda error beradi yangi store ga set qilyotgan vahda oldin ishlatilgan name dan foydalanilgan deb
  // mommo frontend degan store oldin ochilgan yana qushimcha huddi shunga uxshagan frontend nomli storte ochilyapdi deyapdi

  // buni tugirlash uchun biz frontend degan store ochishdan oldin data base da u bormi yuqmi shuni tekshirib olishimiz kerak

  // bizga db.objectStoreNames dan webbrain IndexDB ni ichida ochilgan barcha stor namelari keladi biz shu blan tekshirsak buladi buni
  if (!db.objectStoreNames.contains("frontend")) {
    // agar db ichida frontend degan store bumasa bu ishlasind eyapmiz
    let store = db.createObjectStore("frontend", { keyPath: "id" });

    // // agar store tug'ri ochilgan bulsa store.onsuccess ishlaydi
    // store.onsuccess = () => {
    //   console.log('store created ')
    // }

    // // agar storeda nmadur bulib ochilmaydigan bulsa store.onerror ishlaydi
    // store.onerror = () => {
    //   console.log('store error')
    // }

    // -=-=-=-=- nechinchi versiaddaligini kurish uchun request.version / event.oldversion / event.newVersion

    store.createIndex('indexName', 'name', {unique: false}) // bu blan kelyotgan malumotlarni name mini kelishidan oldin sort qilsak buladi
    // indexName dgan bulim ochib olyapmiz u name qabul qiladi unique false takrorlangan narsalarni qabul qilmaydi 
    store.createIndex('indexGrade', 'grade', {unique: false}) // age ni olvoldik bu blan ishlaymiz endi 
    
  }
  // qachonke webbrain indexedDB ichida frontend store bulmasa bular ishlasin deyapmiz
  // endi versiani uzgartirsakham error bermayapdi

  // else{ // else deleteObjectStore methodini kurish uchun qushildi
  //   // endi agar db ichida frontend bulsa uni uchirsin deymiz  uchirish uchun deleteObjectStore dan foydalanamiz

  //   // -=-=-=-=-=-=- deleteObjectStore
  //   // buz bizga storeni uchirib beradi
  //   db.deleteObjectStore('frontend')
  // }
};
// create bosilganda inputdagi hamma malumotlarni olib frontendga qushishimiz kerak

// 1 - malumotlarni olvolamiz
var i = 0; // bu automatik id berish uchun
create.onclick = () => {
  i++; // har ishlaganda 1 qushilib ketaveradi
  let user = {
    // id =1, // bu holatda malumot faqat bir martta qushadi
    // chunke id uzgarmaydi id uzgarmasa birhil id li malumotni qushmaydi

    id: i, // har safat id uzgarib boradi
    name: firstname.value,
    surname: surname.value,
    grade: Number(age.value),
    // update:updateID.value,
  };

  // malumot qushish uchun bizga transaction kerak buladi

  // -=-=-=-=-=-=-=- Transactions
  // bu bizga malumot ustida delete update put qilish uchun kerak buladi

  // let tarns = db.transaction(store, type)
  // 2 ta parametr oladi

  // 1 - si malumot ustida ishlamoqchi bulgan store nomi / bizning store frontend
  // 2 - si type / yane nma qilmoqchimiz store ustida

  // type 2xil buladi
  // 1 - readonly - malumotni faqat uqish uchun
  // 2 - readwrite - malumot ni uqib ham uzgartirish uchun ishlatiladi

  let trans = db.transaction("frontend", "readwrite");

  // biz frontend ichidan yana bitta xonacha ysab olamiz / aynan qaysi store ga malumot qushishni aytib olishimiz kerak
  let users = trans.objectStore("frontend"); // bu bulishi shart
  // fron chidagi user yacheka blan transaction qilamiz

  // bulsa uzgartirish uchun methodelar mavjud
  // user.add() - qushadi
  // user.delete(key) - uchiradi
  // user.put() - yangilaydi
  // user.get() - malumot qaytaradi 1 ta
  // user.getAll() - malumotlarni qaytaradi array holatda

  // -=-=- add

  let addEvent = users.add(user)
  // hozirgi holatda inputga malumotlarni kiritib add user tugmasini bossak webbrain IndexDB ichidagi fronent bulimiga malumotqushiladi

  // agar tug'ri ishlayotgan bulsa / har safar creat bulganda input ichidagi malumotlarni uchirsin
  addEvent.onsuccess = () => {
    console.log('user created')
    // buyirdaham onsuccess bulganda drowData qaytadan ishlasin deymiz 
    drowData()
    firstname.value = ''
    surname.value = ''
    age.value = ''
    // updateID.value = ''
  }

  // // -=-=- getAll()
  // // buz kuproq malumotlarni array kurinishida qaytaradi
  // let res = users.getAll();
  // // bu bizga malumotlarni qaytaryapdi
  // res.onsuccess = () => {
  //   // qachonke res tug'ri ishlasa bu ishga tuhsadi
  //   // console.log(res) // buyirda kup malumotlar bor result bulimini kursak bizar kiritgan malumotlar bor
  //   // console.log(res.result) // array ichida obj holatdagi kiritgan malumotlarimizni chiqaryapdi

  //   // endi usha kelyotgan array ichidagi elementlarni birma bir olib htmlga qushib quyishimiz kerak
  //   res.result.forEach((element) => {
  //     let div = document.createElement("div");
  //     div.innerHTML = `<h1>${element.id} - ${element.name} <button onclick="del(${element.id})">Delete</button> </h1>`;
  //     list.append(div);
  //   });
  // };

  // bu holatda bir birni ustidan malumot qushib yuboryapdi1 va 2 indexda malumot bulsa va biz yana qushsak 
  // 1 2 qoladi va ustidan yana 1 2 3 indexdagi malumot qushadi value 1 2 1 2 3 bub qoladi 

};

// biz endi malumotni uchirmoqchi bulsak delete dan foydalanamiz

function del(id) {
  // bosilgan element id si kelyapdi param sifatida

  // -=-=-=-=-=-=- delete
  // bu bitta param oladi id usha id dagi malumotni uchirib tashlaydi

  // uchirish uchun db da transaction yasab olismiz kerak
  let tr = db.transaction("frontend", "readwrite"); // frontend bulimi uzgartirish uchun qilindi
  // endi yuqoridagidek frontend ni tr dan olvolamiz
  let user = tr.objectStore("frontend");

  // endi userni delete qilsak buladi
  let dl = user.delete(id); // shu id dagi uzer malumotini uchiradi
  dl.onsuccess = () => {
    console.log("user deleted");
    // uchirilgandaham malumotni qaytadan yozsin 
    drowData() // ni chaqirishimiz kerak buning uchun
  };
}


// -=-=-=-= biz bitta update qilmadik 
// update qilish uchun update methodidan foydalanamiz 

update.onclick = () => {
  let tr = db.transaction('frontend', 'readwrite')
  let user = tr.objectStore('frontend')
  let id = updateID.valu
  let up = user.put({
    id:3,
    name: firstname.value
  })

  // up onsuccess bulganda drowData yana qaytadan struktura tuzib bersin ishlasin 
  up.onsuccess =()=>{
    drowData()
    firstname.value = ''
  }
}