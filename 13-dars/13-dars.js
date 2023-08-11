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
//   // return b - a // bu teskarisi kattasidan kichigiga qarab taqqoslaydi  value: 83, 77, 73, 65,33, 25,  3,  1
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

// // filter uziga kerakli narsani izlayotganda masalan id:3 ni [] ichidan 3 ni topgandan kiyinham array ni tuliq kurib chiqadi 
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

// -=-=- biz map orqali bror qart bajarsak shartga tug'ri keladiganlarini chiqaradi shartga tug'ri kelmasa
// undefined null true false qiymat bulsa ularniham chiqaraveradi 

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
//   // return sum = sum + current // buni qisqatrmasini yozganimiz yaxshi 

//   return sum += current;
//   // sum (0) ga birinchi qiymat (1) ni qushadi sum valuega (1) ga teng buladi 
//   // sum (1) ga ikkinchi qiymat (2) ni qushadi sum valuega (3) ga teng bulad va shu tariqa davom etib ketaveradi 
//   // sum bizga valularni saqlab turadi va current dagi malumotlarga qushadi 

//   // value: birinchi 0 chiqadi chunke boshlang'ich qiymat 0
//   // [1,2,3,4,5,6,7] = 1 ga 2 ni chiqqan javobga 3 ni undan chiqqan javobga kiyingi sonlarni qushib chiqadi 
//   // 0,1,3,6,10,15,21,28 = jami 28 chiqadi oddiy qushishdaham lekn bu har bir amalni kursatib utyapdi 

// },0)
// console.log(rest)


// let rest1 = num.reduce((sum,current,index) => {
//   console.log(sum, '-', index, '=', sum - index) // bu holatda sum dan index ayirilgandagi valueni chiqarib beradi 
//   // value:
//   //  0 - 0 = 0
//   //  0 - 1 = -1
//   // -1 - 2 = -3
//   // -3 - 3 = -6
//   // -6 - 4 = -10
//   // -10 - 5 = -15
//   // -15 - 6 = -21
//   // chiqqan qiymat sum ga teng buladi va undan index ayriladi 
   

//   // console.log(index, '-', sum, '=', index - sum) // bu holatda index dan sum ayirilgandagi valueni chiqarib beradi 
//   // value:
//   // 0 - 0 = 0
//   // 1 - 0 = 1
//   // 2 - -1 = 3
//   // 3 - -3 = 6
//   // 4 - -6 = 10
//   // 5 - -10 = 15
//   // 6 - -15 = 21

//   return sum - index 
// },0)
// console.log(rest1)

// ChatGPT 3.5 vertion ning reduse haqidagi malumotlari 
{
  // // reduce() JavaScript'da massivlar (array) uchun ishlatiladigan bir metoddir. Bu metod orqali massivdagi elementlarni birlashtirib, yangi bir qiymatni hisoblash, ma'lumotni olish yoki tahrirlash mumkin.

  // // reduce() metodi kvadrat qavs orqali massivdagi elementlarni birlashtiradi. Ushbu kvadrat qavs orqali elementlar bir-biriga bog'liq bo'lib o'tadi va birorta qiymatga jamlanadi. Agar sizning massivingiz [a, b, c, d] bo'lsa, reduce() metodi quyidagi tartibda ishlaydi:

  // // Birinchi marta: accumulator = a, currentValue = b
  // // Ikkinchi marta: accumulator = (a+b), currentValue = c
  // // Uchinchi marta: accumulator = ((a+b)+c), currentValue = d
  // // Metodning sintaksisi:

  // array.reduce(function(accumulator, currentValue, currentIndex, array) {
  //   // Your logic here
  // }, initialValue);

  // // - accumulator: Qiymatni jamlash uchun ishlatiladigan o'zgaruvchi.
  // // - currentValue: Joriy massiv elementi.
  // // - currentIndex: Joriy massiv elementining indeksi.
  // // - array: Asosiy massiv.
  // // - initialValue: Boshlang'ich qiymat (optional), agar berilsa, accumulatorning boshlang'ich qiymati bo'ladi, aks holda birinchi element accumulatorga tushadi.
  // // Quyidagi misolni ko'rib chiqamiz:

  // var array = [1, 2, 3, 4, 5];
  // var sum = array.reduce(function(accumulator, currentValue) {
  //   return accumulator + currentValue;
  // }, 0); // Boshlang'ich qiymat: 0
  // console.log(sum); // Natija: 15

  // // Ushbu misolda reduce() metodi orqali massivdagi barcha elementlarni yig'indisini 
  // // hisobladik. Siz esa funksiyada kerakli hisoblash logikasini yozib, kerakli natijani qaytarishingiz mumkin.

}

// ####################


// // =-=-=-=-=-=-= Array ichidagi array 
// let a = [1,[2,3,4], 5,6,7,8]

// console.log(a[1]) // qilsak bizga array ichidagi array [2,3,4] ni chiqaradi 
// // bu holatda biz 2 ni uzini chiqarolmaymiz bu array holatida chiqadi 
// // biz array ichidagi arrayning malumotlarini olishimiz uchun num[1][chiqqan array ichidagi olmoqchi bulgan element indexsi ]

// console.log(a[1][0]) // bu holatda 2 ni uzi chiqadi   
// // 1-arraydan qaytayotgan malumot [2,3,4] ni ichigs kiryapdi

// // array ichidagi arraylar bundanham kup bulishi mumkun 
// let b = [1,[2,[3,4,[5,6,7]]]]
// // biz 5 ni chiqarib olishimiz kerak 
// console.log(b[4]) // qilsak bizga undefined chiqaradi chunke 4 - indexda hechqanaqa malumot yuq 
// console.log(b[1]) // value: [ 2, [ 3, 4, [ 5 ] ] ]
// console.log(b[1][1]) // value: [ 3, 4, [ 5 ] ]
// console.log(b[1][1][2]) // value: [5, 6, 7]
// console.log(b[1][1][2][0]) // value: 5

// // array ichidagi arraylarni shu holatda olsak bular ekan 

// // endi biz buni ichidagi sonlarning yig'indisini chiqarmoqchi bulsak bu holatda qusholmaymiz 
// // chunke bunda ichgi arraylar bor ichgi arraylarni yuq qilish uchun  flat dan foydalanamiz 

// // -=-=-=-=-=-=- flat

// let c = [1,[2,[3,[4]]], [5]]

// console.log(c) // bu holatda bizga arrayuni tuliq shu holatida chiqarib beradi 
// // [1,[2,[3,4]], [5]]

// console.log(c.flat()) // flat esa bizga automatik ravishda birinchi child(bola) arrayni olib tashlaydi 
// // value: [ 1, 2, [ 3, [4] ], 5 ] - array ichida tug'ridan tug'ri turgan birinchi bolar arraylarni olib tashlayapdi 
// // faqat arrayga nevara bolasining ichidagi arraylar qolyapdi 

// // flat() === flat(1) yane flatni ichiga hechgnarsa yozmasakham ichiga 1 yozilgan bilan bir hil buladi 
// // flat(1) qilsak bu array ichida tug'ridan tug'ri yozilgan arraylarni uchiradi / bolasini / 1 ta avlotni uchiradi
// // flat(2) qilsak bu array ichidagi array va uning ichidagi arrayniham uchiradi / nevarasi / 2 ta avlotni uchiradi
// // flat(3) qilsak bu array ichidagi array va uning ichidagi array va uningham ichidagi arrayni uchiradi / chevarasi / 3 ta avlotni uchiradi 
// // va shu tariqqancha ichki arraylar kup bulsa son oshib boraveradi  

// console.log(c.flat(2)) // bu holatda bola array va uning ichida (nevara) array bulsa ularniham oladi 
// // [ 1, 2, 3, [4], 5 ] - shu holatda javob chiqadi bizga 
// // bizda yana bitta qoldi (chevarasi) uni yuq qilishimiz uchun 3 yozishimiz kerak 

// console.log(c.flat(3))
// // [ 1, 2, 3, 4, 5 ] - bizda shu javob chiqadi hechqanday arraylarsiz
// // yane ichgi (nestet) arraylarni olib tashladik endi buning ichidagi malumotlarni yig'indisini chiqarsak buladi

// // endi ichki arraylar cheksiz yoke sanogini bilmasak bu holatda hammasini birdan uchirish uchun Infinity yozamiz 
// console.log(b.flat(Infinity))// bu bizga nechta ichki (nestet) array bulishidan qatrey naar hammasini uchirib beradi 
// // [1,2,3,4,5,6,7]
// // endi arrayni yigindisini chiqarishimiz mumkun yigindini reduce blan hisoblas edik 
// console.log(b.flat(Infinity).reduce((s,c) => s + c ,0)) // yane s 0 ga c (array) dagi malumotni qushadi 
// // s 0 + c 1 = s1 
// // s 1 + c 2 = s3 
// // s 3 + c 3 = s6 
// // s 6 + c 4 = s10
// // s 10 + c 5 = s15
// // s 15 + c 6 = s21
// // s 21 + c 7 = s28 

// // yigindi 28 ga teng buladi 


// // arrayda 2 ta birhil sonlarni chiqarib faqat bittadan qoldirish kerak 
// // buni oddiy usulda 
// let ar = [1,2,2,3,2,45,5,3]
// let res = ar.filter((value,index,array) => {
//   // console.log(array.indexOf(value)) // 0,1,1,3,1,5,6,3
//   console.log(index)// 0,1,2,3,4,5,6,7
//   return array.indexOf(value) === index; // indexOf faqat birinchisini oladi 2ta birhil bulsa birinchisini oladi qolganini uqimaydi 
//   // array ichidagi value indexsini  chiqaryapdi va index ga teng bulsa chiqsin deyilyapdi 
//   // har birini nittadan tekshiradi index 0 array.index(value) danham 0 linchi indexdagi malumotni chiqaradi 
//   // index 1 undanham 1 ni izlaydi 1 3 ta bulsaham filter faqat birinchisini uqiydi shuning uchun birinchisini chiqaradi 
//   // 
  
// })
// console.log(res) // [ 1, 2, 3, 45, 5 ] - takroriy sonlarni olib tashlaydi va bittadan qoldiradi 

// // -=-=-=-=-=-=-=- new Set 
// // bu bizga arrayda 2 ta birhil sonlarni chiqarib tashlaydi 

// // 2 ta birhil sonlarni chiqarib tashlash kerak 
// console.log(new Set(ar)) // Set(5) { 1, 2, 3, 45, 5 } holatda chiqarib beradi 


// // -=-=-=-=- Biz objni bu holatda array qilolardik 
// let obj = {name:'John', status: 'IT Center'}
// console.log(Object.entries(obj)) // bu bizga obj bitta katta array qilib uning ichidan har bir element uchun yana bittadan array qilib beradi 
// // value: [ [ 'name', 'John' ], [ 'status', 'IT Center' ] ] - ichki birinchi array ichida birinchi kelgan name key ikkinchisin value edi 

// // -=-=-=- endi biz arrayni obj aylantirishni kkuramiz buning uchun new Map dan foydalanishimiz kerak 


// // -=-=-=-=-=-=-=- new Map 
// // bu arrayni obj qilib beradi 
// console.log(
//   new Map([
//     ['a',1],
//     ['b',2],
//   ])
// )
// // value: Map(2) { 'a' => 1, 'b' => 2 } - new Map bizga shu holatda chiqarib beradi
// // buyirda a ning qiymati 1 ga teng degani yane a key 1 value sifatida 
// // buni qushimcha methodelariham bor new Map(). keys yoke value qilib value va keylarni olsak buladi 

// console.log(
//   new Map([
//     ['a',1],
//     ['b',2],
//   ]).keys() // [Map Iterator] { 'a', 'b' }
//   // .values // [Map Iterator] { 1, 2 }
// )

// console.log(
//   new Map([
//     [null,1],
//     [undefined,2],
//   ])
// ) // value: Map(2) { null => 1, undefined => 2 } - bularniham key blan value qilib beradi 

// console.log(
//   new Map([
//     [null,1],
//     [undefined,2],
//   ]).entries() // [Map Entries] { [ null, 1 ], [ undefined, 2 ] } - bu holatda chiqarib beradi obj ichida aholida alohida array 
// ) 
// // entries bu key va valuega uzgartirirb beradi  yuqoridagidek

// // biz buni verablega biriktirib verableni chaqirish jarayonida yana amal bajarsak buladi 
// let obj2 = new Map([
//   ['a',1],
//   ['b',2],
// ]).entries();
// // obj2 ustida amal bajarsak buladi 
// console.log(obj2.next()) // { value: [ 'a', 1 ], done: false } - birinchi value va done bu agar chiqqan valuedan kiyin yana value bulsa false bulmasa true buladi 
// // next(). value qilishimiz ham mumkun buni faqat entries da qilsak buladi 
// console.log(obj2.next().value) // ['b',2] - bunda faqat value ni chiqarib beradi

// // -=-=-= biz bu orqali array tugagan tugamaganligini tekshirishimiz mumkun ekan  .done qilib 
// console.log(obj2.next().done) // true bulsa tugagan buladi false bulsa tugamagan
// // bunda hozir true chiqadi chunke hara bir next qilganimizda bittasi yurib ikkinchisiga utadi biz tepada 2 martta 
// // next() qildik shuning uchun boshqa element qolmadi 

// // -=-=-=-=-=-=-=-=- Array.from 
// // bu bizga array yasab berish uchun ishlatiladi 

// // buni ichida array yozib quysak uzini chiqarib beradi 
// console.log(Array.from([1,2,3,4])) // value: [1,2,3,4]

// // ichiga bror element yozsak uni array qilib beradi 
// console.log(Array.from('webbrain')) // bu holatda array ichida har bir harfni bitta elemet qilib beradi 
// // value: ['w','e','b','b','r','a','i','n']


// /// -=-=-=--=-=-=- Bu ikkinchi parametr ham oladi 
// // ikkinchi parametr calback buladi va shunga tegishli buladi 
// console.log(Array.from('webbrain', () => 1)) // bu holatda harflar urniga 1 bulib qoladi 
// // value: ['1','1','1','1','1',]

// // calback ham uziga parametr oladi 
// // 1-parametr har bittasiga bitta bitta kirgani hisoblanadi for loop dek 
// // bu bilan biz kelyotgan value ustida ishlolemiz 
// console.log(Array.from('webbrain', (v)=> v.toLocaleUpperCase())) // v value har bir kelyotga malumot uni ustida ishlasak buladi bu holatda hamma harflar katta bulib keladi 
// // value: ['W', 'E', 'B','B', 'R', 'A','I', 'N']


// // console.log(Array.from(1,2,3)) // biz buholatda malumot yozolmaymiz chunke ikkinchi qiymat uzi calback bulishi  kerak 
// // bunda bizga 2 is not function deydi yane uzi 2-parametrga function kutyapdi shuning uchun 2 fnc emas deyapdi 

// console.log(Array.from(1))// sonni uzini yozib quysak ignor qilib yuboradi uqimaydi value: [] chiqadi 
// console.log(Array.from('1')) // string holatda yozsak array qilib beradi value: ['1']

// // biz bularni uzunligini ulchasak 
// console.log(Array.from(1).length)// 0 
// console.log(Array.from('1').length) // 1 

// // new Array ham shunga uxshaydi lekn bu boshqacha 
// // masalan new Array ga 1 yozsak 
// console.log(new Array(1)) // [ <1 empty item> ]
// console.log(new Array('1')) // [ '1']
// // bunda 1 yozsak 1 ni uzini chiqarmasaham bitta element bor deb chiqaradi va uning uzunligi buladi 
// console.log(new Array(1).length) // 1
// // Array fromda esa 0
// console.log(Array.from(1).length)// 0 

// // va new Arrayga kup malumot quyolamiz 
// console.log(new Array(1,2,3,4)) // [1,2,3,4]

// -=-=-=-=-=-=-=-=- flatMap
// flatMap metod JavaScript massivlarda ishlatiladigan bir metod hisoblanadi, bu metod 
// .map va .flat metodlarining bir birlig'ida ishlatishini ta'minlaydi.

// .map metodi massivdagi har bir elementga berilgan funksiyani qo'llab-quvvatlaydi va
//  o'zgarishsiz yangi massivni qaytaradi. 
// .flat metodi esa massivning ichida bo'lgan ichki massivlarni birlashtirib yangi massivni qaytaradi.

// flatMap metodida ishlatilgan funksiya massiv elementlarini o'zgartirib, undan keyin 
// .flat metodini ishlatib ichki massivlarni birlashtiradi va o'zgarishsiz yangi massivni qaytaradi.

// const arr = [1, 2, 3];
const flatMappedArr = arr.flatMap(element => [element, element * 2]);
console.log(flatMappedArr); // [1, 2, 2, 4, 3, 6]


// Bu misolda, flatMap metodi massiv [1, 2, 3]ni oladi. 
// Berilgan funksiya har bir elementni o'zgartirib [element, element * 2] massivini qaytaradi. Natijada, 
// .flat metodi ichki massivlarni birlashtiradi va yangi massiv [1, 2, 2, 4, 3, 6] ni qaytaradi.


// ####################


// Homework 

// // 1. Array ichidagi sonlar yig'indisini toping
// let arr = [1,4,23,5,34,44] // value: 111 - hisoblashdaham shu javob chiqishi kerak 

// let rest  = arr.reduce((a,b)=>{
//   return a + b
//   // a 0 aga array ichidagi malumotlarni birma bir qushib chiqadi 
//   // har qushgandagi javob a da saqlanib qoladi va qolgan sonlar usha bundan oldingining javobiga qushiladi 
// },0)
// console.log(rest) // value: 111

// // SUCCES 

// // ####################


// // 2. ['webbeain', 'academy'] - array ichidagi char sanogini topish kerak 

// const words = ['webbeain', 'academy']

// function countChar(arr) {
//   let totalChar = 0;
//   for(i of arr){
//     totalChar += i.length
//   }
//   return totalChar
// }
// console.log(countChar(words))

// // SUCCES

// // 3. arrayni bir biriga taqqoslang

// let ar1 = [1,2,4,34,7]
// let ar2 = [75,34,2,7,4]
// // bu ikkalasini taqqoslab tug'ri kelgan malumotlarni chiqarsin 
// // value: [2,4,34,7] chiqish kerak chunke bu solar ikkalasidaham bor 

// let rest2 = ar1.filter((value) => ar2.includes(value))
// // bunda ar1 ning ichidagi valuelar ar2 ga tug'ri kelsa ularni restga yuboryapdi 

// // -=-=-=- buni reduce blan qilinadigan usuliham mavjud 

// let rest3 = ar1.reduce((sum,current) => {
//   if(ar2.includes(current)){
//     sum.push(current)
//   }
//   return sum
// },[])
// // sum buyirda bush massiv bulyapd va agar ar1 valuelari teng bulsa ar2 ga teng bulganlari sum ga push bulyapdi
// console.log(rest3)
// console.log(rest2)

// // SUCCES 


// // ####################



// // 4. o'zgartirish
// //    1 camelize('background-color') == 'backroundColor'
// //    2 camelize('list-style-image') == 'listStyleImage'
// //    3 camelize('-webkit-transition') == 'WebkitTransition'


// function camelize (str) {
//   return str.replace(/[-_](.)/g, function(match, char){
//     return char.toUpperCase()
//     // console.log(match)
//   })
// }
// console.log(camelize('background-color'))
// console.log(camelize('list-style-image'))
// console.log(camelize('-webkit-transition'))

// // SUCCES

// // 5. let ar
// let users = [
//   {id: 1, year: 1998, engine: 1, name:'Tico'},
//   {id: 1, year: 2005, engine: 1.2, name:'Matiz'},
//   {id: 1, year: 2010, engine: 1.6, name:'Gentra'},
//   {id: 1, year: 2010, engine: 1.5, name:'Cobalt'},
//   {id: 1, year: 2012, engine: 2, name:'Malibu'},
//   {id: 1, year: 2000, engine: 1.2, name:'Damas'},
//   {id: 1, year: 2018, engine: 1.4, name:'Tracker'},
// ]
// // 2000 - yildan oldingi mashinalar ruyhatini chiqaing 
// console.log(users.filter((a,b)=>a.year<=2000))
// // 2010 - yildan kiyingi chiqqan mashinalar ruyhatini chiqaring 
// console.log(users.filter((a,b)=>a.year>=2010)) // bu holatda shunga tug'ri kelganlarni obj holatda chiqaradi 
// // engine kuchiga qarab malumotlarni sartirofka qiling 
// console.log(users.sort((a,b) => b.engine - a.engine))
// // chiqarilgan yiliga qarab malumotlarni sartirofka qiling 
// console.log(users.sort((a,b) => a.year - b.year))
// // ismlarini alifbo tarzida sartirofka qiling 
// console.log(users.sort((a,b) => a.name.localeCompare(b.name)))
// // 2000 yildan oldin chiqgan mashinalarga status: eski malumot qushing
// for(a of users){
//   if(a.year <= 2000){
//     a.status = 'eski '
//     // console.log(a)
//   }
// }
// // 2000~2010 yilda chiqqan mashinalarga status: o'rta malumot qushing 
// for(a of users){
//   if(a.year > 2000 && a.year <= 2010){
//     a.status = "o'rta "
//     // console.log(a)
//   }
// }
// // 2010~2022 yldan oldin chiqqan mashinalarga status: yangi malumot qushing 
// for(a of users){
//   if(a.year > 2010 && a.year <= 2023){
//     a.status = "yangi"
//     // console.log(a)
//   }
// }

// console.log(users)

// SUCCES 
// Array 2/3 math finished