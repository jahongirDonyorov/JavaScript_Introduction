// =-=-=-=-=-=-=-=-= Array 2/3
// -=-=-=-=- Advanced Array Methods
// 1 - .find(callback(item,index,array)) - find item
// 2 - .findIndex(callback(item,index,array)) - return index from end
// 3 - .findlastIndex(callback(item,index,array)) - return index for end
// 4 - .reduce(reducer(sum, current),initilVal) - see ref below
//          - reducer always returns
// 5 - .sort(callback()) - joylashish urnini uzgartiradi
// 6 - .filter(callback(item,index,array)) - returns all posibilties
// 7 - .forEach(item,index,array) - has not return
// 8 - .map(item,index,array)  -has return // trasform
// 9 - .every(callback) - check every item and return true / false
// 10 - .some(callback) - check some of item and return true / false
// 11 - .fill(value, stratIndex, endindex) - filling
// 12 - .copyWithin(targetPos, strat, end) - [0,1,2,3,4,5]
//        -copyWithin(0,3,4) // 3,1,2,3,4,5 - .copyWithin(1,2,3) // 0,3,2,3,4,5
// 13 - .flat(layer)  - [1,2,3,[[[4]]],5]  // defaul 1
//        - .flat(1) // [1,2,3,[[4]],5]
//        - .flat(2) // [1,2,3, [4],5]
//        - .flat(3) // [1,2,3,4,5]
//        - .flat(infinity) // [1,2,3,4,5]
// 14 - .flatMap(callback) - [1,2,[3,4],[5]].flatMap(v=v) // [1,2,3,4,5]
// 15 - .Array.from(any, callback) - new array yasab beradi
//         - Array.from('webbrain') // ['w','e','b','b','r','a','i','n']
//         - Array.from([1,2,3], (x)=>x+x) // [2,4,6]
//         - range - Array.from({length: (stop - start) / step * 1}, (_,i) => strat + i * step)
// 16 - .new Set(arr) - removes deplicate ex: new Set([1,2,3,4,4,5,6,6]) // [1,2,3,4,5,6]
// 17 - .new Map() - let mapper = new Map([[1,'a'],[2,'b'],[3,'c']])
// 18 - .
// 19 - .
// 20 - .
// 21 - .
// 22 - .
// 23 - .
// 24 - .
// 25 - .
// 26 - .
// 27 - .
// 28 - .
// 29 - .
// 30 - .

// // -=-=-=-=-=-=- Filter
// // bizga malumotlaarni filterlab beradi

// // fil.filter(()=>{})
// // filter har doim calback function oladi functionning 3 ta parametiri bor

// //               1     2     3
// // fil.filter((value,index,array)=>{})

// // 1 - parametr array ichidagi valueni chiqarib beradi
// // 2 - parametr arran ichidagi indexlarni chiqarib beradi
// // 3 - parametr array ni uzini nazarda tutadi bu kup ishlatilmaydi

// // bu huddi for loop dek ayalanadi har aylangada parametrlar array ichidagi value va indexlarga bitta bitta teng bub boradi
// let a = [1,2,'salom',6,{a:12}]

// a.filter((value,index) => { // calback fnc hardoim return blan qaytishi kerak
//   // console.log(value) // value:  1 2 salom 6 { a:12 }
//   // console.log(index) // value: 0 1 2 3 4
// })

// let b = [1,32,3,4,55,64,0]
// let res = b.filter((value, index) => {

//   // return qilganimizda true bulgan elementlar rest (array) ga qushiladi false bulsa qishilmaydi
//   // return false
//   // return true

//   // true false ni 0 va 1 blan ham ifodalasak buladi
//   // return 1 // bu holatda kup chilik 1 chiqadi deydi lekn 1 true bulgamligi uchun buni true deb hisoblaydi va trueda chiqqan malumot 1 daham chiadi
//   // 0 qilsakham huddi shunday false da chiqaan hamma narsa bundaham chiqadi

//   // valueni uzini return qilsak ham buladi
//   return value // valueni uzini chaqirsak bu bizga 0 larni ignor qilib yuboradi
//   // [ 1, 32, 3, 4, 55, 64 ] - 0 lar yuq uchirilib qashlangan

// })

// // true qaytgan holati res
// console.log(res) // [1,32,3,4,55,64] - resga malumotlar qushilyapdi

// // false qaytgan holati res
// console.log(res) // [] - chunke false bulganda hechnarsa qaytmaydi

// // -=-=-=- filtirdan foydalanib kuramiz
// // bizga faqat 10 dan kichik sonlarni qaytarishi kerak

// let rest = b.filter((value,index) => {
//   return value < 10 // true bulgan sonlar restga qushilib boradi false lar esa qushilmaydi
// })
// console.log(rest) // [ 1, 3, 4, 0 ] - faqat 10 dan kichiklarni chiqaryapdi

// // Biz bu narsani string ga nisbatanham ishlatishimiz mumkun ekan

// let c = ['orange','apple','banana','kiwi']
// // harifi 5 tadan kup bulgan malumotlarni chiqarib tashlasin desak

// rest = c.filter((value,index) => {
//   return value.length <= 5
// })
// console.log(rest) // [ 'apple', 'kiwi' ]

// // masalan bizda array ichidagi obj da talabalar ruyhati bor ulardan ismi, yoshi, id, lari mavjud
// // yoshi 2002 bulgan talabalarni bizga chiqarsin

// let student = [
//   { id: 1, year: 2001, name: 'Elshod'},
//   { id: 2, year: 2003, name: 'Begzod'},
//   { id: 3, year: 2004, name: 'John'},
//   { id: 4, year: 2004, name: 'Boymirod'},
//   { id: 5, year: 2002, name: 'Xusayin'},
//   { id: 6, year: 2003, name: 'Saddam'},
//   { id: 7, year: 2002, name: 'Belladen'},
//   { id: 8, year: 2003, name: 'Jorj'},
//   { id: 9, year: 2002, name: 'Jurabek'}
// ]

// let ar = student.filter((a,b)=>{
//   return a.year === 2002
// })
// console.log(ar) // bizga yoshi 2002 bulganlarnigina chiqaryapdi Xusayin, Belladen, Jurabek
// // masalan talabaning baholari bulsa biz bahosi GPA ga qarab chiqar deyishimiz ham mumkun

// ####################

// // -=-=-=-=-= sort()
// // buham filter qilib beradi
// // array malumotlarini aske kode buyicha ketma ketlikda joylashtiradi

// let a = [2,5,1,5,3,7,5]
// let b = [1,3,83,65,33,73,25,77]

// console.log(a.sort()) // [1,2,3,5,5,5,7] - ketma ketlikda joylashtiryapdi aske kode buyicha
// console.log(b.sort()) // [1,25,3,33,65,73,77,83] - 2 xonali sonlarda sonning birinchi raqamiga qaram joylashtiradi 255 hulsaham 3 dan oldin kuradi chunke 2 3 dan oldin keladi
// // Bu holatda tugri ishlamaydi bizga tug'ri ishlashi uchun calback fnc klerak buladi

// let res = b.sort((a,b) => {
//   return a - b // bu holatda js uzining algaretimidan foydalanadi  value:  1,  3, 25, 33,65, 73, 77, 83
//   // har bitta sonni olib uzidan kiyingilariga solishtirib chiqadi kichigindan kattasiga qarab filterlaydi
//   // return b - a // bu teskarisi jkattasidan kichigiga qarab taqqoslaydi  value: 83, 77, 73, 65,33, 25,  3,  1
// })
// console.log(res)

// // buniham stringa nisbatan ishlatsak buladi
// // aske kod ketma ketligida joylashtiradi
//  let str = ['orange','apple','banana','kiwi']

//  console.log(str.sort()) // [ 'apple', 'banana', 'kiwi', 'orange' ] aske kode buyicha chiqaradi

//   str = ['orange','apple','Banana','Kiwi']
//  // aske kode da katta harflar birinchi keladi

//  console.log(str.sort()) // value: [ 'Banana', 'Kiwi', 'apple', 'orange' ]
//  // buni tig'rlash uchun localeCompare dan foydalanamiz
//  // localeCompare bizga katta harflarni ignor qilib beradi endi alifboga qarab filtir qiladi
//  console.log(str.sort((a,b) => a.localeCompare(b))) // [ 'apple', 'Banana', 'Kiwi', 'orange' ]

//  // yuqoridagi studentlar misolida kursak

//  let student = [
//   { id: 1, year: 2001, name: 'Elshod'},
//   { id: 2, year: 2003, name: 'Begzod'},
//   { id: 3, year: 2004, name: 'John'},
//   { id: 4, year: 2004, name: 'Boymirod'},
//   { id: 5, year: 2002, name: 'Xusayin'},
//   { id: 6, year: 2003, name: 'Saddam'},
//   { id: 7, year: 2002, name: 'Belladen'},
//   { id: 8, year: 2003, name: 'Jorj'},
//   { id: 9, year: 2002, name: 'Jurabek'}
// ]

// let rest = student.sort((a,b) => {
//   return a.year - b.year // bu yil buyicha ketmaketlikda ketishi uchun ishlatiladi
//   // yili eng kattasidan kichigiga qarab filterlanadi
//   // agar biz ismlarga nisbtan filter qilmoqchi bulsak
//   return a.name.localeCompare(b)  // harfga nisbatan harflarning ketrma ketligi buyicha filter qilib beradi
// })
// console.log(rest)

// search va filter farqi
// search malumotni joylashish urnini uzgartiradi
// filter uzimizga kerakligi qolib qolgani chiqib keratadi

//####################

// // -=-=-=-=-=- find
// // find filter blan birhil buham filter qilib beradi va bungaham callback yozilishi kerak
// let num = [1, 2, 34, 3, 25, 44, 0];
// // bu true false da ishlaydi true bulsa code tuctaydi
// console.log(
//   num.find((value) => {
//     return value === 34; // valusi 34 ga teng bulganini chiqar degani
//   })
// );

// let student = [
//   { id: 1, year: 2001, name: "Elshod" },
//   { id: 2, year: 2003, name: "Begzod" },
//   { id: 3, year: 2004, name: "John" },
//   { id: 4, year: 2004, name: "Boymirod" },
//   { id: 5, year: 2002, name: "Xusayin" },
//   { id: 6, year: 2003, name: "Saddam" },
//   { id: 7, year: 2002, name: "Belladen" },
//   { id: 8, year: 2003, name: "Jorj" },
//   { id: 9, year: 2002, name: "Jurabek" },
// ];
// // id 5 ga teng bulgan studentni name ni chiqar desak
// let res = student.find((value) => {
//   return value.id === 5;
// });
// console.log(res.name); // Xusayin chiqayapdi chunke uning id si 5 ga teng

// // filter vs find farqi 

// // filter uziga kerakli narsani izlayotganda masalan id:3 ni [] ichidan 3 ni topgandan kiyinham array ni tuliq kutib chiqadi 
// // bizga 3 kerak birinchi 1 ni kuradi kiyin 2 ni va 3 topildi lekn filter 4,5,6,7,8,9 larniham kurib chiqadi 

// // find esa 3 ni topgandan kiyin tuxtaydi qolganlarini kurmaydi shuning uchun filterdan tezroq ishlaydi 

// // ikkalasiham bitta ishni qiloladi lekn uz urnida ishlatganimiz yaxshi 
// // filterni uz nomi blan filter bror narsani sartirofka qilish kerak bulganida ishlatsak buladi
// // find ni uz nomi blan find bror narsani topadi buldi 

// // -=-=-=-=-=- findIndex
// // bu indexsini qaytaradi uni ichidagiu malumotni uqib bulmaydi 
// // bu bizga usha id 5 bulgan talaba nechinchi indexdaligini bilib berish uchun kerak 

//  res = student.findIndex((value) => {
//   return value.id === 5;
// });
// console.log(res.name); // undeffined qaytaradi - chunke bu index qaytarganligi uchun uning malumotini olib bulmaydi 
// console.log(res) // 4 - id 5 bulgan studend 4 indexda ekan 

// // -=-=-=-=-=- findlastIndex
// // findIndex blan bir xil faqat bu oxiridan qidiradi 


// ####################


// // -=-=-=-=- forEach
// // array ichini aylanib malumotlarini oladi bu for loop dek 
// // ichida callback fnc buladi va 2 ta parametr ketadi value va index 
// let num = [1, 2, 34, 3, 25, 44, 0];

// let resEach = num.forEach((value,index) => {
//   console.log(value) // valuni chiqardai value: 1, 2, 34, 3, 25, 44, 0
//   console.log(value + 2) // kelyotgan valuega 2 ni qushib chiqaradi value: 3,4,36,5,27,46,2

//   // forEach da return qilib malumotni tashqarida qayta ishlatolmaymiz 
//   return value + 2 // undefined qaytaradi chunke return forEach da ishlamaydi 
//  })
//  console.log(resEach)// undefined chiqadi chunke forEach da return ishlamaydi 
// // forEach uzi qanday amal bajarayotgan busa buldi faqat shuni bajaradi uni ustida boshqa amal bajarib bulmaydi 


// // -=-=-=-=- map
// // map ham array ni aylanadi faqat bunda return ishlaydi 
// // bundaham callback fnc yoziladi va 2 ta parametr oladi 1-si value 2-si index buladi 

// let resMap = num.map((value,index) => {
//   console.log(value) // value: 1, 2, 34, 3, 25, 44, 0
//   // bunga returndan bror narsa qaytib turishi kerak agar return qilmasak resMap chaqirilganda  [undefined, undefined] shu holatda vajob chiqadi
//   return value + 2
// })
// console.log(resMap) // [3,4,36,5,27,46,2]
// // agar map ichida return bulmasa [inchida undefineds qaytadi har bir element uchun bittadan undefined ]
// // [
// //   undefined,
// //   undefined,
// //   undefined,
// //   undefined,
// //   undefined,
// //   undefined,
// //   undefined
// // ]
// // map har safar aylanganida nmagadur return qiladi biz hech narsaga return qilmadikmi unda undefined buladi 


// // -=-=-=- forEach vs Map

// // faqat bror narsani hisoblamoqchi bulsak forEach forEach dan foydalansak buladi 

// // bror narsani brawserga chiqarmoqchi bulsak forEach dan foydalanolmaymiz faqat map dan foydalanishimiz mumkun 

// // masalan siz bajarilgan amalni alert yordamida ekranga chiqarmoqchisiz 
// let res = num.forEach((a,b) => {
//   return a + 2;
// })
// console.log(res) // undefined 
// // alert yordamida ekranga chiqarmoqchi bulsakham shu holat buladi 
// // alert(res) // userga alert ichida undefined chiqadi 

// let res1 = num.map((a,b) => {
//   return a + 2;
// })
// console.log(res1) // [ 3, 4, 36, 5, 27, 46, 2]
// // alert yordamida ekranga chiqarmoqchi bulsakham shu holat buladi 
// // alert(res1) // userga alert ichida yechgan javoblari  chiqadi 


// let student = [
//   { id: 1, year: 2001, name: "Elshod" },
//   { id: 2, year: 2003, name: "Begzod" },
//   { id: 3, year: 2004, name: "John" },
//   { id: 4, year: 2004, name: "Boymirod" },
//   { id: 5, year: 2002, name: "Xusayin" },
//   { id: 6, year: 2003, name: "Saddam" },
//   { id: 7, year: 2002, name: "Belladen" },
//   { id: 8, year: 2003, name: "Jorj" },
//   { id: 9, year: 2002, name: "Jurabek" },
// ];

// // bizga faqat studend dagi name lar  kerak bulsa hammasini bitta array da chiqarishimiz mumkun ekan 
// let rest = student.map((a,b) => {
//   return a.name 
//   // htmlda bu name larni bittalab yozmasdan birdaniga yozishimiz mumkun ekan 
//   return <h1>{a.name}</h1>
// })
// console.log(rest)


// ####################

// // -=-=-=-=-=-=-=- every()
// // every ning vazifasi array ichidagi hamma malumot biz qilgan shartga mos kelish kelmasligini tekshiradi true va false qiymat qaytaradi 

// let num = [1, 2, 34, 3, 25, 44, 0];

// // arrayni ichidagi malumotlar number emasligini bilish uchun isNaN dan foydalanardik 
// console.log(num.every((value) => isNaN(value))) // false chiqadi bular number 
// // biz array ichidagi malumot numbermi demoqchi bulsak isNaN oldiga ! quyardik 
// console.log(num.every((value) => !isNaN(value))) // true chiqadi - chunke bu holatda biz array ichidagi valuelar numbermi deb surayapmiz 

// let str = [1, 2, 34, 3, '25', '44', 0];
// console.log(num.every((value) => !isNaN(value))) // ichidagi bir ikta element string bulgan bulsaham bu true chiqaradi / bu hammasini tekshirmayapdi  
// // bu holatda isNaN blan tug'ri vajobni ololmas ekanmiz 
// // biz hammasi numbermi deyishimiz uchun bu usuldan foydalanamiz 
// console.log(str.every((value) => {
//   return typeof value === "number"
// })) // every array ichidagi hamma malumot return dagi shartga tug'ri keladimi yuqmi shuni tekshiradi
// // valularning hammasi numberga teng bulmaganligi uchun false chiqadi 


// ####################

// // -=-=-=-=-=-=- some
// // bu every ning teskarisi hisoblanadi yane every array ichidagi hamma malumot tuliq shartga tug'ri kelsa shundagina true chiqrardi
// // sam esa array ichida bitta malumot shartimizga tug'ri kelsaham true chiqaradi 
// // let str = [1, 2, 34, 3, '25', '44', 0];

// let str1 = [1, 2, 34, 3, '25', '44', 0];

// console.log(str1.some((value) => {
//   return typeof value === "number" // true chiqadi 
// }))
// // bi shu narsani value stringga tengmi deb tekshirsakham true chiqadi yane biz tekshiryotgan narsadan bitta bulsaham arrayda true chidagi


// // -=-=-=-=-=-=- fill manosi tuldirmoq 

// // buning vazifasi array valuelarini azgartirish 
// // bu 3 ta paramert oladi 3-si hohishiy 
// // 1-parametr valuelar nmaga uzgarishi
// // 2-parametr valuelar nichinchi indexdan boshlab uzgarishi 
// // 3-parametr valular nichinchi indexgacha uzgarishini bildiradi 
// // 3-parametr ni quymasak valular 2-parametr dan boshlab ohirigacha uzgaradi

// let str2 = [1, 2, 34, 3, '25', '44', 0];
// console.log(str2.fill('John', 2)) // 2 - indexdan boshlam hamma malumot John ga aylandi 
// console.log(str2.fill(0, 2, 4)) // 2 - indexdan 3 gacha bulgan hamma malumot 0 ga aylandi 


// // -=-=-=-=-=-=-=-=- copyWithin
// // array ichida bizga kerak bulgan malumotni copy qilib oladi va biz hohlagan boshqasini urniga quyadi 
// // bu faqat arran value urniga qushadi avvalgisi urniga copy qilingani quyiladi bish joyga copyni quyib quymaydi 

// // 3 ta parametr oladi
// // 1 - si nechinchi indexdan boshlab quyishni bildiradi 
// // 2 - si nechinchi indexdan boshlab copy qilib olishni bildiradi 
// // 3 - si nechinchi indexgacha copy qilishni bildiradi 
// // 2 va 3 orasida copy qilgan narsani 1 ning urniga quyadi 

// let arr = [0,0,0,1,2,3,4,5,6]

// console.log(arr.copyWithin(0,3,6)) // 0 indexga 3 blan 6 - index oralig'idagi malumotni quyadi 
// // hoz bu 3 ta malumotni copy qilib olyapdi lekn biz faqat 0-indexga quysin deyapmz
// // yane bitta joyga 3 ta ,alumotni quysin deyapmiz bu holatda nechta malumot quymoqchi bulsak ushancha elementni 0-indexdan olib urniga quyadi 
// // 3 ta 0 ning urniga 1 2 3 ni quyadi 
// // value: [1, 2, 3, 1, 2, 3, 4, 5, 6]

// // agar biz malumotni oxidan qushsak va qushilyotgan narsa siqmay qolsa qolganini kesb tashlaydi 

// console.log(arr.copyWithin(7,0,6)) // 7-index(5) ga qushadi 0-index(1) dan 6-index(4) gacha valueni 
// // qushilishi kerak 1,2,3,1,2,3,4 bulardan faqat 1,2 qushiladi chunke qolganiga joy yrtmay qoldi  
// // 5 ni urniga 1, 6 ni urniga 2 qushiladi va qolganiga joy qolmaydi 


// ####################

// // -=-=-=-=-=-= reduce -=-=-=-=-=-=-
// // bu 2 ta parametr oladi birinchisi callback fnc 2-si boshlang'ich qiymat 
// // reduce(callback, initialvalue)

// let num = [1,2,3,4,5,6,7]

// //                            1        2
// // console.log(num.reduce((value)=>value, 0)) // value: 0 chiqadi chunke boshlang'ich qiymat 0 ga teng 
// // 1 - callback fnc 
// // 2 - 0 bu boshlang'ich qiymat hisoblanadi 
// // bu holatda a ham calback ham 0 ga teng buladi 

// // calback ham uziga 3 ta paramert oladi a.reduce((sum,current,index) => {},0)


// console.log(num.reduce((sum,current) => {
//   console.log(sum) // 0 chunke boshlang'ich qiymat 0 ga teng 
//   console.log(current) // 1,2,3,4,5,6,7 gacha qiymatlarni chiqarib beradi 
//   return 1 // bu holatda sum 1 ga teng
// }, 0)) // 0 chiqadi chunke boshlang'ich qiymat 0

// // 1 - parametr (sum) callback nmaga return qilsa ushanga teng hisoblanadi 
// // 2 - parametr (current) ayni vahdagi qiymat hisoblanadi / for loopdek aylanib malumotlarni chiqarib beradi 
// // 3 - parametr (index) bu bizga index qaytaradi 

// let res = num.reduce((sum,current) => {
//   console.log(sum) // birinchi qiymat 0 bulganligi uchun 1-aylanganda qiymat 0 chiqadi va riyin returnni qiymatini oladi 4 qolganlari 4 chiqadi 0,4,4,4,4,4,4,4 
//   return 3 + 1
// },0)
// // calback return qilgan qiyman sum blan res ga teng hisoblanadi 
// console.log(res) // 4 ga teng buladi 

// // reduce bu halatdaham ishlatiladi 

// // aslida reduse array ichidagi sonlarni bir biriga qushibham beradi 

// let rest = num.reduce((sum,current) => {
//   console.log(sum)
//   return sum += current // birinchi aylanganda sum (0) ga current (1) ni qusahdi kiyin chiqqan javobga
// },0)
// console.log(rest)



// ####################


