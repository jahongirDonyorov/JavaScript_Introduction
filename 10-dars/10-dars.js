//  -=-=-=-=-=-=- Numbers

// -=-=-=- Number type
//         1.Intijer
//         2. Float

// -=-=-=-=-=-=- 1. Intijer
// bunga oddiy raqamlar kiradii
console.log(123342);

// -=-=-=-=- Andiskode
// bu namberni uqishimizga oson bulishi uchun _ blan yoziladi
console.log(100_000_000);
// Javobi oddiy numberdek chiqaveredi hechqanday chiziqlarsiz (_)
// bundaham hamma arifmitik amallar tug'ri ishladi
console.log(100_000_000 + 9);

// Bu narsa stringda ishlamaydi 
console.log(+'100_000_000' + 8) // NaN chiqadi chunke bu stringqan chiqarib arifmetik amal bajarayotganda _ buni number emas oddiy belgi deb uylaydi 

// -=-=-=-=-=- 2. Float  number
// bunga kasr sonlar kiradi
console.log(23.4223);

// sonimizda 0 lar kupayib ketsa biz uni e blan ifodalashimiz mumkun
// -=-=-=-=- e
// e 0 ni ifodalaydi e dan kiyin hardoim son keladi u son e (0) ning qancha bulishini aniqlaydi
console.log(2e3); // 2 dan kiyin 3 ta 0 bulsin degani value: 2000
console.log(3e9); // value: 3000000000 - 3dan kiyin 9 ta 0 quyayapdi
// bu bilanham arifmitik amal bajarishimiz mumkun
console.log(2e2 + 9); // value: 209

// Agar biz e dan kiyingi sonni - lik qilsak bu sonimiz float (kasr) bulib ketadi
console.log(2e-4 + 3); // value: 3.0002

// buning ham uz lemitlari mavjud agar undan oshib ketsa boshqacha valular chiqadi
console.log(1e50); // value: 1e+50
console.log(1e500); // value: Infinity - 500 dan kiyin Infinity bulib ketadi

// bu yul blan arifmitik amal bajarsa buladi xatoliklar bulib qolishi mumkun shuning uchun arifmitik amanda bu yuldan kam foydalanishimiz kerak

// -=-=-=- Kasr sonlarda arifmikit amallar
console.log(0.1 + 0.2 === 0.3); // false
// chunke 1 uchga bulinganda 0.33 9 ta davomiy kast ketaveradi 33333 bulib oxirgisi bittaga kupayadi 33334 buladi va kasr tuxtaydi
// shu 4 bulganligi samab 0.1 + 0.2 === 0.3 bulmadi chunke ikkalasining qushulishi 0.3 dan katta bub ketyapdi
console.log(0.1 + 0.2); // 0.30000000000000004 === 0.3 false buladi
// davomiy kasrlarni tuxtatish uchun automakit ravshda ohirgi sonni 1 ta kupaytitib quyadi
// 1.33333333334
// js tuliq hamma qiymatni tekshiradi juda kichik uzgarishniham inobatga oladi

console.log(0.1000000000000000 === 0.1); // true chunke birinchisida 0.1000 faqat 0 bor
console.log(0.1000000000000001 === 0.1); // false oxiri 1 bulib qolganligi cuhun JS ohirigacha tekshiradi


// --=-=-==-=-=-=-=-- toFixed()
let a = 0.1 + 0.2
console.log(a)
// toFixed ni a.toFixed() qilib ishlatamiz () ichiga nechchi yozsak . dan keyin shuncha sonni chiqarib beradi 
console.log(a.toFixed(2)) // 0.30
// console.log(0.1+0.2.toFixed(2)) // biz bu holatda tugridan tugri yozolmaymiz () yoke verablega birikkan bulishi kerak 
console.log((0.1 + 0.2).toFixed(4)) // 0.3000

// toFixed ishlatganimizda sonimiz stringga aylanadi buni yana numberga aylantirsak buladi 
// 1 - usul Number() blan 
console.log(Number(a.toFixed(4)))
// 2 - usul + yodamida 
console.log(+a.toFixed(15)) // 0.3 chiqadi 15 ta chiqarmaydi chunke 3 dan kiyin 15 ta 0 bor 0 lar hisoblanmaydi 
// bularni string holatda numberga utkazganimizda . dan kiyin 2 qolgani nu bulsa 0 larni chiqarmaydi 0 dan boshqa sonlar bulsa chiqaradi 

// -=-=-=-=- parseInt()
// bu bizga sonlarni yaxlidlab beradi 
console.log(parseInt(6.233221)) // value: 6
// bular aslida Number. qilib ishlatilgan hozir bunday qilsakham qilmasakham ishlayveradi 
console.log(Number.parseInt(6.233221)) // value: 6

// -=-=-=-=- parseFloat()
// bu bizga sonni shu holida chiqarib beradi 
console.log(parseFloat(6.233221)) // value: 6.233221
// bular aslida Number. qilib ishlatilgan hozir bunday qilsakham qilmasakham ishlayveradi
console.log(Number.parseFloat(6.233221)) // value: 6.233221


// bu ikkalasida stringni kursak 
let b = '0.56 + 2'

// parseInt bizga birinchi sonni uzini oladi 
console.log(parseInt(b)) 
// parseFloat esa bizga birinchi kombinatsa tuliq sonni oladi 
console.log(parseFloat(b))


// -=-=-=-=-=-=- Eval 
// bu bizga stringdagi arifmetik amallarni bajarish uchun kerak hisoblanadi 
console.log(eval('2 + 9')) // value 11

console.log(Number(b))// NaN chiqadi chunke + number emas shuning uchun NaN chiqdi 
console.log(eval(b)) // value:3; qilsak eval birinchi string holatda arifmetik amalni bajaradi va javobni numberga aylatiradi


// =-=-=-=-=-= toString()
// bu bizga raqamni turini uzgartirib beradi 
 let c = 5;
 console.log(c.toString(2)) // bu holatda (2) bulganligi uchun c ni 2 lik sanoq sestimasiga uzgartirib beradi value: 101 
//  toSitring(2) blan biynari (2 lik sanoq) ga utkazgan bulsak 
// buni parseInt blan Decimely (oddiy son) ga utkazishimiz mumkun ekan 
console.log(parseInt('101', 2)) // value: 5 


// -=-=-=-=- isNaN
// bu bizga NaN mi NaN emasmi shuni tekshiradi 

console.log(isNaN(+'Hi')) // true chiqadi chunke bu NaN emas 
console.log(isNaN(+'9092')) // false chunke bu NaN emas

// -=-=-=-=-= object.is()
// ichidagi 2 ta elementni farqi bormi yuqmi aniqlab beradi 
let res = Object.is('web', 'web') // true chiqadi chunke bir xil 
console.log(res)

// -=-=-=-=- toPrecision()
// ichiga nechchi yozsak shuncha sonni chiqarib beradi agar son boshida 0 bulsa ularni egnor qilib yuboradi
// yane 3 yozsak boshida 3 ta nul bulsayu undan kiyin son bulsa 3 ta nuldan kiyingi 3 ta sonni uzini chiqaradi 0 lar blan qushib
// 0 dan boshda hamma sonni sanaydi 

let num = 5.12231;
console.log(num.toPrecision(3)) // value: 5.12
let num1 = 0.00231;
console.log(num1.toPrecision(3)) // value: 0.00231 - bu holatda 0 lardan kiyingi sonlardan sanab boshlaydi 
// agar aniq sondan kiyin 0 bulsa uniham sanab ketadi faqat boshidagi 0 larni sanamaydi 
let num2 = 0.02004
console.log(num2.toPrecision(4)) // value: 0.02004 - 4 ta sonni hisoblashni 2 dan boshladi 


console.log(9_999_999_999_999_999) // bundan kiyingi son uziga 1 ni qushib oladi 
// buning valuesi: 10000000000000000 chiqadi uziga 1 ni quwib olganligi uchun 


// -=-=-=-=-=-=-=-=- Math -=-=-=-=-=-=-=-
// bu javaScriptning uzida bulgan Beuld in kutub honasi hisoblanadi js ning uzida bulganligi uchun yuklab olish kerak emas 
// bundagi hamma methode Math blan boshlanadi 

// -=-=-=-=-=- Math.PI 
/* 
  JavaScriptda Math.PI o'zgaruvchi PI ni qiymatini saqlaydi,
  bu esa 3.141592653589793 ga teng bo'lgan matematik konstanta 
  hisoblanadi.
 */

console.log(Math.PI) // 3.141592653589793 - PI qiymati

// -=-=-=-=-=- Math.abs()

// absalute value siz nechci son kiritishingizdan qadey nazar sizga sonning musbat qismini chiqarib beradi 
console.log(Math.abs(-9)) // 9
console.log(Math.abs(+9)) // 9


// -=-=-=-=-=- Math.round()

// bu bizga yaxlitlab beradi . kiyin kasr qismi 5 ga teng yoke katta bulsa kiyingi sonni 5 dan kiyik bulsa usha sonni uzini chiqaradi 
console.log(Math.round(2.4)) // 2 chiqadi chunke kasr qismi 5 dan kichik 
console.log(Math.round(2.5)) // 3 chiqadi chunke kasr qismi 5 ga teng yoke katta bulsaham chiqaradi 


// -=-=-=-=-=- Math.floor()

// floor (pol) - bu har doim paska qarab yaxlitlaydi
// bu faqat uzagini uzini chiqarib yaxlitlab beradi kasr qismi nechchi bulishidan qatey nazar 
console.log(Math.floor(4.999999)) // bulsaham uzagi 4 bulganligi uchun 4 ni chiqaradi 
// huddi taxiga utirgan kilintdek 4.500 bulsa 4 meng berib quyay degan dek

// -=-=-=-=-=- Math.ceil()

// ceil (patalog) - bu har doim yuqoriga qarab yaxlitlaydi 
// bu kars qismi nechchi bulishidan qadiy nazar (1.000001) bulsaham kiyingi son (2) ni chiqarib beradi 
console.log(Math.ceil(2.000001)) // 3 chiqadi 
// huddi taxi chiladek 5.300 sum bulsaham 6 ming surashadi maydam yuq deb 


// -=-=-=-=-=- Math.trunc()

// . dan kiyingi sonlarni uchirib yuboradi bu yaxlidlashga kirmaydi 
console.log(Math.trunc(2.902)) // 2
// bu floor ga uxshaydi lekn floor yaxlitlaydi bu shunchake . dan kiyingilarni uchirib yuboradi 
// bularning farqini faqat - lik sonlarda kurishimiz mumkun 

// -5,-4,-3,-2,-1, 0, 1, 2, 3, 4, 5
// - lik sonlar yaxlitlanganda kichigi chiqish kerak bulsa unga qarab yuradi kattasi kerak bulsa chapga 
// yane -2 dan kichik son -3 hisoblanadi 

console.log(Math.floor(-2.999)) // floor kichigini chiqarar edi -2.999 yaxlitlansa kichigi -3 buladi
console.log(Math.trunc(-2.999)) // trunc kasr qismini shunchake ob tashlaganligi uchun 2 ni uzi chiqadi 



// -=-=-=-=-=- Math.random()

// bu biz hohlagan raqamlar orasidan taxminiy raqamni chiqarib beradi ('Geviveylardan random dan foydalanishadi')
// har ishlaganda harhilcha raqam chiqarib beradi 

console.log(Math.random()) // value: 0.1636326281371201,
// shu holatda yozilganda 0 blan 1 ning orasidagi ixtiyooriy raqamlarni chiqaradi 
// har shlatganimizda bizga 0 va 1 urtasidagi ixtiyoriy raqamlarni chiqarib beryapi 

// sanoq sestilamari 
// 1 - 0 blan 1 ning orasi 
// 10 - 1 blan 10 ning orasi 
// 100 - 1 blan 100 ning orasi dagi sonlar 
// va hakazo  ketaveradi 

// biz buni uzimizga kerakli sanoq sestimasigacha chiqarsin deyishimiz mumkun 
// buning uchun random() ni uzimizga kerakli songa kupaytiramiz 

console.log(Math.random() * 10) // 9.467587577486595
// 10 gacha bulgan sonlardan ixtiyoriy bittasini chiqaradi 
// har doim kasr holatda chiqaradi buni yaxlitlashimiz yokeda .dan keyingisini olib tashlashimiz mumkun 

console.log(Math.round(Math.random() * 100)) // yaxlitlangam holatda 10 gacha bulgan sonlarni chiqaradi


// -=-=-=-=-=- Math.min() vs Math.max()

// -=-=-=- min yozilgan raqamlar ichidan eng kichigini topib beradi 
console.log(Math.min(1,2,3,44,5,45,64,33,2,145,6)) // 1

// -=-=-=- max ing kattasini topib beradi 
console.log(Math.max(1,2,3,44,5,45,64,33,2,145,6)) // 145 

// array ichidagini bilmoqchi bulsak splet holatda arrayni yozishimiz kerak 
let arr = [2,34,56,2,54,2,67,7,4,2345,654,2]

console.log(Math.max(...arr)) // 2345


// -=-=-=-=-=- Math.pow()

// darajani chiqaradi 
console.log(Math.pow(2,4)) // 2 ning 4 darajasini chiqarib beradi value: 16
// pow() ichida 1 da turgan sonning 2 ta turgan darajasini chiqaradi 

// -=-=-=-=-=- Math.sqrt()
//  sonning kvadrad (2-daraja) ga nisbatan ildizini chiradi
console.log(Math.sqrt(4)) // 2 chiqadi - chunke 2 ning kvadrati 4 ga teng
console.log(2**2) // 4 - 2 ning kvadrati

// -=-=-=-=-=- Math.cbrt()
// sonning kub (3-daraja) ga nisbatan ildizini chiqaradi
console.log(Math.cbrt(27))// 3 chiqadi - chunke 3 ning kubi 27 ga teng
console.log(3**3) // 27 - 3 ning kubi


// -=-=-=-= Math - extra info 
// - sin(),cos(),tan()
// - asin(), acos(), atan()
// - hypot()

// mularni matematikaga chuqur kirmoqchi bulsangiz kurib chiqsangiz buladi 
// sinus,cosenus,tangenus katangenus lar qiladigan ishlarni bajaradi


// -=-=-=-=-=- Math.sign()
// bu 1,0,-1 qiymatlarni qaytaradi sonimiz - lik bulsa -1, + lik bulsa +1, 0 bulsa 0 ni chiqaradi 
console.log(Math.sign(129e3)) // 1
console.log(Math.sign(0)) // 0
console.log(Math.sign(-21)) // -1
console.log(Math.sign('-99')) // -1
// JavaScriptda -0 ham mavjud bu son matimatikada mavjud emas 
console.log(Math.sign(-0)) // -0 - bu -0 bulgsnligi uchun -0 chiqardi


// -=-=-=-=-=-=-=- Optional Chaining

// masalan biz obj.age qilganmiz age ga undefined yokeda null degan qiymat kelib qoldi deyaylik bu holatda bizga error beradi 
let obj = {name:'John', child:null}
console.log(obj.child.age) 
// child ga {gae:..} emas null degan qiymat kelib qoldi shuning uchun error beradi 
// biz buni agar qiymat kelsa chiqar kelmasa undefined qaytar deyishimiz mumkun
console.log(obj.child?.age) // ? ning ishi child ichida xaqqatdan age bulsa uuqigin bulmasa undefined qaytaradi  

// Homework Number 
// 1. istalgan sonni binary ko'rinishiga o'tkazib nechta 0 va nechta 1 qatnashganligini aniqlang 
// example: 5 === 101
// res: 2 ta bir, 1 ta nol qatnashgan 

// 2. Berilgan sonni ichidagi eng katta va eng kichik sonlar ayirmasini toping. Musbat son chiqmasligi kerak.
// (1 ,2, 3, 44, 5, 45, 64, 33, 2, 145, 6)

// 3. Math ning trunc vs floor vs ceil larini paresInt  bilan farqini tushintirib bering.

// 4. randomIntiger(min, max) function yozilsin. min dan max gacha bulgan qiymatni random qaytarsin 


// -=-=-=-=-=-=-=- String 