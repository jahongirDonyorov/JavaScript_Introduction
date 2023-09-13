
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

fetch(`https://jsonplaceholder.typicode.com/users`) // bu holatda bizga malumot JSOn formatda keladi 

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