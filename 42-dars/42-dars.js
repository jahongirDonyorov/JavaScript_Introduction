
// -=-=-=-=-=-=-=-=-=-=- Fetch 

// -=-=-=- fetch(url, [options]) - return promise 
//    - fetch nima ?
//    - method - post / get / pul / delete 
//    - status code - 200, 201...
//    - response type 
//        - .text()
//        - .json()
//        - .formData()
//        - .blob()
//        - .arrayBuffer()
//    - fetch with try  catch
//    - headers - Authentication / Content-Type /
//    - body - JSON / stringify / parse 
//    - sending image 
//        - let data = new FormData()
//        - data.appand(fle, input.file[0])


// -=-=-=-=-=-=- fetch 
// fetch bizga backend blan alo qilishda kerak buladi (yane backend dan malumot olib kelib beradi)
// fetch bizga backenddan malumot urlini olib keladi va usha malumot blan ishlaydi 

// -=-=- urlning harhilcha nomlari mavjud 
// url, link, silka, endpoint - hammasi bitta manoni anglatadi / urlni bildiradi (malumot manzilini)


// -=-=-=- Fetch Method -> GET, PUT / PATCH, DELETE, POST 

// GET - backenddan malumot olib kelish uchun ishlatiladi. 
// PUT / PATCH - backenddagi malumotni yangilash uchun ishlatiladi. 
// DELETE - backenddagi malumotni uchirish uchun. 
// POST - backendga malumot joylash uchun ishlatiladi.


// -=-=-=- fetch bizga doim promise qaytaradi

// biz fetchni quyidagi yullar bilan ishlatsak buladi 
// -=- then, promise, async await, try catch

// -=-=-=-=- Formula

// fetch(url, config) - 2 ta parametr qabul qiladi 
// 1 - si url (malumot manzili)
// 2 - si config / bu 1-paramdagi url dan kelyotgan malumot blan ishlash uchun kerak (Method blan ishlaymiz)

// 1 - si url bu bizga kup hollarda backend tayyor holatda beeriladi 
// 2 - si  bu hamma vahtham quyilishi shart emas birhil hollarda quyilishi shart buladi usha holatda quymasak error beradi 


// -=-=-=-=- Usage
// bizda backend bulmaganligi uchun biz tayyor tist uchun API dan foydalanamiz (jsonplaceholder.typicode.com) bunda tayyor API lar mavjud 

// https://jsonplaceholder.typicode.com - url shu holatda buladi lekn bunda hozir malumot yuq 
// com dan kiyin / blan kerakli bulim nomini yozamiz saytda kursatilganlaridan birini 

// Masalan: /users - bunda 10 ta malumot bor ekan kamligi uchun shuni yozib olsak buladi url ga 

fetch(`https://jsonplaceholder.typicode.com/users`) // bu holatda bizga malumot JSON formatda keladi 

// biz backend blan aloqa qilganimizda console ham ishlaydi lekn Network bulimini ishlatganimiz yaxshi (browserda)
// Network bulimida hamma malumotni tutib ishlatsak buladi 

// url ning ohirdi nomi nma bulsa (users) usha nom blan Network da chiqadi ushani ustiga bosib u haqida kuproq malumot olib ishlasak buladi 

// backend dan malumot JSON holatda kelyapdi biz buni array qilib olishimiz kerak ishlatishimiz uchun 
// buning uchun then dan foydalanamiz 
// .then(callback) - shu holatda yoziladi va ichidagi callback ning birinchi parametiri url dan kelyotgan malumotga teng buladi 
// .then ni hohlagancha ishlatsak buladi .then(...).then(...) qilib ketaveramiz 
fetch(`https://jsonplaceholder.typicode.com/users`)
.then((res) => res.json()) // res kelyotgan malumotga teng
// bunda return bulgan qiymat (res.json()) bundan kiyingi then ning callbackgini parametr qiymati buladi 
.then((res) => { // bu res ning qiymati bundan oldingi then da return bulgan qiymatga teng 
  console.log(res) // JSON malumoti arrayga uzgargan shakli kelyapdi 
})
.then((res) => {
  console.log(res) // undefined chiqadi chunke res hechqanday qiymatga ega emas 
  // bundan oldingi thenda return bulmaganligi uchun buning parametiri qiymatda ega bulmaydi 
})
// qandaydur error buladigan bulsa biz buni catch blan tutsak buladi / qanday error ekanligini chiqaradi codeni tuxtatmasdan 
.catch(err => {
  console.log(err)
})
// ReactJS da fetch urniga axios ishlatilishining sababi catch errorlarni tutib olishi qiyin axiosda esa bu oson buladi 


// malumotni tutib olishni ikkinchi yuli
// -=-=-=- promise - fetch har doim promise ga qaytadi degan edik shuni kurib chiqamiz 
let response = fetch(`https://jsonplaceholder.typicode.com/users`)
// console.log(response) // promes chiqyapdi biz bu b;an bemalol ishlasak buladi
response.then((res)=>res.json()).then((res) => console.log(res));


// malumot tutib olishni uchunchi yuli 
// malumotni async function blan tutib olish
//  const getData = async() => {
//   let res = await fetch(`https://jsonplaceholder.typicode.com/users`) // await malumot kelshini promise ni kutadi 
//   let data = await res.json() // data res ni jsondan chiqarib olgan qiymatimizga teng bulyapdi await esa malumot kelishini kutadi kiyin ishlaydi 
//  }


// biz shunday qilishimiz kerak button bosilganda malumotlar browserga chiqsin
// bunda malumotni then blan tutib olishni ishlatamiz shu usul yaxshiroq 
const getData = () => {
  // click bulganda malumot kelguncha dataList da Loading... chiqsin 
  dataList.innerText = 'Loading...' // bosilganda Loading chiqadi
  fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((res) => res.json())
  .then((res) => {
    // bizda click bulganda loading chiqyotgan edi endi malumot chiqqandan sung Loading uzgarsin null ga
    dataList.innerHTML = `<h1>All Data</h1>` 
    // endi biz backend dan kelyotgan malumotni browserda chiqarishimiz kerak 
    
    // // birinchi div yaratib olamiz 
    // let div = document.createElement('div')
    // // ochilgan div ichiga res (array) cihidagi malumotlarni yozsak buladi 
    // div.innerHTML = res[0]?.name // res ichidagi [0] indexdagi malumot ? bulsa chiqsin deyapmiz 
    // // endi tayyor bulgan divni body ichiga yozib olishimiz kerak 
    // dataList.append(div)
    
    // lekn biz hamma malumotni chiqarmoqchi bulsak har birini bittadan indexsini yozib chiqolmaymiz 
    // buning uchun forEach dan foydalanamiz 
    res.forEach((element) => {
       let div = document.createElement('div')
       div.style.display = 'flex'
       div.innerHTML = `<b>${element.id}</b> - <span>${element.name}</span> <button onclick='onSelect(${element.id})' >Selected</button>` // element id sini onSelect ga param qilib beryapmiz 
       dataList.append(div)
       // endi buning Selected buttonni bosilganda usha malumot Selected bulimiga utishi kerak 
       // click bulganda pasdagi onSelect fnc ishga tushadi 

    })

  })
}

function onSelect(id){ // id ga qiymat onSelect chaqirilgan joyda berilyapdi qiymat element ning id si bulyapdi 
  console.log(id) // bizga bosilgan element id sini chiqarib beryapdi endi biz 
  // usha id ga asoslangan malumotni tutib olishimiz kerak url dan 
  // url oxirida users/1,2,3 nechchi qilsak usersdagi usha malumotni chiqarib beradi 
  // fetch(`https://jsonplaceholder.typicode.com/users/1`) // bizga users dagi 1-malumotni chiqarib beryapdi 
  // endi biz buni qaysini bossak ushani chiqarsin deyishimiz uchun id ni yozib quyamiz 
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // qaysi knopka bosilganda ushaning soni id urniga keladi 
  // endi biz 1-2- malumotni chiqarish uchun frontendda felter sort qilishimiz kerak emas bu ishlarni backend uzi qilib beryapdi 
  // endi kelyotgan malumotni jsondan chiqarib Selected bulimiga yozishimiz kerak 
  .then((res) => res.json())
  .then((res) => {
    console.log(res)
    single.innerHTML = `<h1>Selected</h1> <b>${res.name}</b> - <span>${res.phone}</span> `
    // <h1>Slected</h1> db qushib quyishimizning sababi bu qushilganda avvalgi h1 uchib ketadi 
    // click bulgan elementni Slected da tuliq malumotlarini chiqarib beryapdi
  })
}

// -=-=-=-=- Shun joygacha Faqat fetchni 1-parametirini kurdik url ni
// fetch(url, config) - hali configni kurganimiz yuq 

// -=-=-=-=-=-=-= 2 - parametr config 
// ikkinchi parametr object kurinishida yoziladi 

fetch(`https://jsonplaceholder.typicode.com/users`, {
  // bunda 3 ta muhum parametrlar bor 
  // 1 - method:
  // 2 - headers: 
  // 3 - body:
  
  // -=-=- 1 - method
  // bunga qilyotgan ishimizga qarab methodelar ( GET, PUT, DELETE, POST) yoziladi
  // agar biz malumotni olib kelmoqchi bulsak GET yozamiz 
  // method:'GET', // endi bu GET buldi 
  // Biz hechqanday method yozmasakham automatik ravishda bu GET buladi 
  // Network da users (shu malumot) ustiga bossak bulimlar chiqadi ushalar ichida Headers bor ushanda buning methodeni kursak buldi 
  
  // biz buni PUT qilib quysakham buladi  malumotni yangilash uchun ishlatiladi
  // method: 'PUT' // Bu holatda error 404 bulyapti Request methode PUT bulib qolganligi uchun 
  // backend blan ishlayotganingizda uzi yozilgan buladi qaysi url GET qaysisi PUT DELETE POST bulishi

  // POST qilsak bu backend ga makumot yuboradi
  method:'POST',
  // POST malumot yuboradi biz qanday malumot yuboryptganimizni aytishimiz uchun headers dan foydalanamiz 

  // -=-=- 2 - headers
  // bu obj kurinishida buladi 
  headers:{
    // 'Content-Type' bu bizga qanday type dagi malumotni backend ga yuboryotganimizni bildiradi 
    'Content-Type': 'application/json', // json kurinishida malumot yuboryapmiz dedik 

    // 'Authorization': 'Bearer' backend shu malumotg asoslanib ruyhattan utgan utmaganligimizni tekshiradi 
    'Authorization': 'Bearer'
    // bu malumolar method GET qilsak Network da shu malumot ustiga bosilgandagi Headers bulimida kursak buladi 
    // malumot shu holatda chiqadi 'Authorization': 'Bearer' nma yozsa: dan kiyin usha chiqadi Bearer esa ruyhatdan utganimizni bildiradi
  },

  // Shu holatda method ni DELETE qilsak backend dan malumotlar uchib ketadi biz buni tepada click bulganda malumot 
  // Selected ga utyotgandi ushani uchiradigan qilsak buladi method headers blan 
  // lekn biz snov uchun backend jsonplaceholder dan foydalanyotganimiz uchun DELETE ishlamaydi chunke jsonplaceholder ni kuplab odamlar ishlatadi 
  // biz malumotni uchirib yuborsak hammadan uchib ketadi 


  // Misol uchun biz ruyhattan utishda amail code larni inputga yozib yuboramiz usha malumotlarni backend ga yuborish uchun 
  // body dan foydalanamiz 

  // -=-=- 3 - body 
  // body doim JSON.stringify({}) kurinishida backendga malumot yuboradi 
  body: JSON.stringify({
    // yuborilyotgan malumotlar (email va password)
    email:'John',
    password: 12345,
  })
  // backend yuborilyotgan malumotlar Network ning paylout bulimida chiqadi 
  // Paylout bulimi faqat biz malumot yuborganimizda qushiladi 

})

// -=-=-=-= endi biz shunday qilishimiz kerak inpitga email va password kiritib login ni bosganimizda
// usha malumotlarni backend ruyhatdan utkazsin kiyin yana kirganimizda shu malumot tug'ri bulsa kirsin 

// buninguchun biz API kerak buldi bizda hozircha u yuq shuning uchun fqat strukturasini qilamiz 

const login = () => {
  fetch('https://jsonplaceholder.typicode.com/users', {
    // malumot yuborishimiz uchun methode POST qilamiz 
    method:'POST',
    // malumotni qanday type da yuboryotganimizni yozishimiz kerak 
    headers:{
      'Content-Type': 'application/json',
    },
    // malumotni backend ga body yordamida yuboramiz 
    body: JSON.stringify({
      email: email.value, // email ga html input email valuesi teng bulsin deyapomiz
      password: password.value ,  
    }),
    // biz kiritgan malumot shu url ga boryapdi va uyirda saqlanib turadi 
    // malumot authenticationToken shu holatda boradi bu malumotni biz saxranet qib quyishimiz kerak yana shi email code ni kititganimizda authenticationToken bulsa ruyhatdan utganimizni bildiradi 
    
    // endi qaytyotgan malumotni olishimiz kerak 
  })
  // qaytyotgan malumotni then orqale olamiz bu malumot bizga json holatda buladi buni array qilib olishimiz kerak
  .then((res) => res.json())
  .then((res) => {
    // agar malumotlar tug'ri (avval ruyhattan utgan ) bulsa authenticationToken keladi biz aytamizke agar u kelsa Welcom to fecabook db chiqsin 
    if(res?.authenticationToken) log.innerText = 'Welcome to Facebook'
  })
}