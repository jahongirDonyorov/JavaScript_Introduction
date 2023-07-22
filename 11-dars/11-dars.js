// // -=-=-=-=-=-=-=-=- String
// // Stringlar 3 xil buladi

// let str1 = "John";
// let str2 = "John";
// let str3 = `John`;

// console.log(str1, str2, str3); // bularning uchchalasiham string hisoblanadi

// // -==- 2 talik quwtirnoq chida 1 talik 1 talik ichida 3 talik qushtirnoq yozolamiz `` ichida esa hohlagan narsamizni yozsak buladi

// let text1 = "salom 'hammaga' ";
// let text2 = 'salom "hammaga" ';
// let text3 = `'salom'
//  "dunyo"`;

// // 2 talikni ichida 2 talik 1 talikni ichida bittalik yozib bulmaydi

// // `` beksek ichiga verableham qushsak buladi ${verable nomi}
// let userName = 'John'
// console.log(`Hi!, How are you ${userName}, Welcome to Geek academy`)

// // -=-=-=-=-= Stringlarni quwiw
// let FullText = text1 + text2 +text3
// console.log(FullText)
// console.log(text1 + text2 +text3)
// // shu holatlarda qushib quysak buladi

// //-=-=-=-=-=-=- \ - ignore chars in "", ''

// // let text4 = 'salom g'anish' // g' suzida ' bulganligi uchun g' dan kiyingi narsalar stringdan chiqib qolyapdi
// // yane bu g' ning (') ni stringning oxiri deb tushinyapdi va ungacha bulgan joy stringda qolgani stringdan tashqarida bulyapdi
// // buning oldini olish uchun \ dan foydalanamiz
// let text4 = 'salom g\'anish' // bu \ uzidan bitta kiyingi narsani inkor qilib yuroradi
// // yane buni ' string uchun yuqdek kursatadi lekn valueda bu chiqadi

// // =-=-=-=-=-= \n  - New line

// // -==- oddiy quwtirnoqli stringlar ichida biz qator tashlolmaymiz lekn becsik `` da qator tashlasak buladi
// // oddiy qushtirnoqlarda qator tashlash uchun \n dan foydalanamiz
// let line1 = "salom \n dunyo1"
// let line2 = 'salom \n dunyo1'
// let line3 = ` salom
// dunyo `
// // bitta biksikli stringda tug'ridan tug'ri qator tashlasak buladi

// // =-=-=-=-=-= \t  - Tab
// // tab bosilganda qancha joy tashlansa ushancha joy ochib beradi

// let tab = 'salom \t alik'

// // \, \n, \t  ikkalasiham valueda kurinmaydi

// // ####################

// -=-=-=-=-=-=-=-=-=- Constraktor yordamida String yaratish
// oddiy usul
let str1 = "webbrain";

// constraktur blan
let str2 = new String("webbrain");

// oddiy usulni consolda kursak bizga 'webbrain' shu holda chiqyapdi
console.log(str1);
console.log(str1 === "webbrain"); // true chunke bu 'webbrain' vsluesini qaytaradi

// constraktur uslida esa string kurinishdagi string qaytardi  [String: 'webbrain']
console.log(str2);
console.log(str2 === "webbrain"); // false chunke str2 [String: 'webbrain'] bu holatda value qaytaradi

// -=-=-=-=-=-=- localeCompare()
// bu 1 ta string ichida ikkinchisi bor yuqligini tekshiradi
// 3 ta qiymat qaytaradi -1,0,1
// -1  -  bu ichida umuman bunaqa narsa yuq busa chiqadi
//  1  -  qisman bor bulsa chiqadi. qaysidir qismi tug'ri kelsa
//  0  -  bir biriga mos kelsa 1 chiqadi
let test1 = "web";
let test2 = "webbrain";
console.log(test2.localeCompare(test1)); // 1 - qisman bor
// bu hozir test2 ning ichida test1 bormi yuqmi shuni telshiryapdi

// -=-=-=-=-=-=- string ichidagi harflarni alohida chiqarsak buladi
console.log(test1[1]); // [] ichiga yozgan index dagi harfni chiqaradi bunda e ni chiqaradi
// chunke index 0 dan boshlanadi

// -=-=- charAt
// buham yuqoridagidek harflarni chiqaradi ikkalasi bir hil
console.log(test2.charAt[2]);

// bu ikkalasiga -(menus) qiymat blan yozib bulmaydi
console.log(test1[-1]);
console.log(test1.charAt[-1]);
// ikkalsidaham undefined chiqadi

// -=-=- at
// bu ham harflarni chiqaradi faqat bu - (menus qiymatham oladi)
console.log(test2.at(-1));

// hardoim index 0 dan
// element esa 1 dan boshlab chiqishni boshlaydi

// -=-=-=-=-=-=-=-=-=-=- Methods
// methods har doim . dan kiyin yoziladi .abc

// 1  - .length
// 2  - .at()
// 3  - .toUpperCase()
// 4  - .toLowerCase()
// 5  - .indexOf(str) // represent index of str -- -1 if not found
// 6  - .lastIndexOf(str) // represent index of str -- -1 if not found
// 7  - .includes(str) - returns true or false
// 8  - .endsWith(str)
// 8  - .startsWith(str)
// 9  - .padEnd(count, value) - 'hello'.padEnd(5) // 'hello'.padEnd(5, '.') // 'hello.....'
// 10 - .padStart(caunt, value) - 'hello'.padStart(5) // 'hello'.padStart(5, '.') // '.....hello'
// 11 - .slice(strat, end(not included)) - accept
// 12 - .substring(start,end(not included)) - not accept +- -- swipe greater value --
// 13 - .substr(start, length) --
// 14 -  slice vs substring vs substr - ref pic is availble
// 15 - .eval(str) - calculation
// 16 - .trim() - remove ending and starting spaces
// 17 - .trimStart()
// 18 - .trimEnd()
// 19 - .split()/split(sperator) / split(sperator, limit) - repeat(count)
// 20 - .concat(str2) - concationation
// 21 -  String.row`path` - ignore \ chars
// 22 - .search vs .indexOf - regex uses search, indexing uses indexOf
// 23 -  valueOf(new String('ss'))

// -=-=-=-=-=- Usege (ishlatilishi)

// 1. -=-=-=- .length
// uzunlikni ulchaydi yani qancha joy egallanganligi
let str = "webbrain";
console.log(str.length); // 8 chiqyapdi chunke str 8 ta harfdan iborat
str = "webbrain  ";
console.log(str.length); // 10 chiqadi chunke 2 ta bush joy qushildi

// 2. -=-=-=- .at
// strida uzimizga kerakli indexsidagi harfni olishimiz mumkun
console.log(str.at(1)); // bizga 0 - indexdagi w ni chiqarib beradi
// bu menus (-) qiymatham oladi

// 3. -=-=-=- .toUpperCase()
// String harflarini katta harf qilib beradi
console.log(str.toUpperCase()); // WEBBRAIN - shu holatda hammasini katta harf qilib beradi
// faqat stringda ishlaydi boshda data typelarda xatolik beradi
let num = 12345;
// console.log(num.toUpperCase()) // bular (12345) da unaqa function yuq deyapdi
// bundek xatoliklarni oldini olish uchun chaqirish jarayonida malumotlarni stringa aytlantirib olsak buladi
console.log(`${num}`.toUpperCase()); // 12345 chiqadi error bermaydi
// bu kelayotgan malumotni string qilib kiyin toUpperCase qilyapdi

// 4. -=-=-=- .toLowerCase()
// bu toUpperCase ning teskarisi yane harflarni kichik qilib beradi
let str3 = "JOHN";
console.log(str3.toLowerCase()); // john

// Bu ikkalasiga uxshash bulgan 2 ta mathode bor
console.log(str3.toLocaleUpperCase("en-US"));
console.log(str3.toLocaleLowerCase("en-US"));
// til  kiritsa buladi argument sifatida

// 5. -=-=-=- .indexOf(str)
// bu bizga kerakli harf stringning nechinchi indexsida borligini kursatadi

let str4 = 'webbeain academy'

console.log(str4.indexOf("bb")); // 2 chiqdi chunke bb webbeain suzida 2 - indexdan boshlanadi
// yuq malumot kiritsak menusli son chiqaadi

// bu yana bitta parametr oladi
// ikkinchi parametr nechinchi parametrdan boshlab qidirishini aytadi
console.log(str4.indexOf("b", 5)); // 5 indexdan boshlab b harfini izlaydi

// 6. -=-=-=- lastIndexOf()
// buham indexOf blan bir hil faqat bu orqadan boshlab tekshirib keradi
console.log(str4.lastIndexOf('e')) // 13 chiqadi chunke oxiridan tekshirganda birinchi academy dagi e chiqaddi bu ushani indexsini chiqaradi 

// 7. -=-=-=- .includes(str)
// string ichida shu suz bor yuqligini tekshirib beradi 
console.log(str4.includes('we'))// true chiqadi chunke we str4 da bor 

// bularni ishlatishga bitta mison tilifon kantakda nomerni boshini yozsak qolganlari automatik ravishda chiqib 
// keladi ushanda filtirlarda ishlatishimiz mumkun ekan

// Homework
// 1. check(str1, srt2)  - function yozilsin. berilgan parametrlar bir biriga mos yoki
// umumey tug'ri kelmasligi va qismon to'g'ri ekanligini isodalavchi natijani qaytarsin.
// ex: str1 = 'Jahongir Doniyarov' , str2 = 'gir' qisman ichida bulsa ichida bor deb chiqsin tuliq bir biriga mos kelsa tuliq mos keldi desin

// 2. getCount(str) - function yozilsin. functiondagi harflar sanog'ini chiqarib bersin
// ex: str = {'webbrain'}; {w:1,e:1,b:2,r:1,a:1,i:1,n:1 }

// 3. truncate(str, n) - funtion yozilsin. Berilgan stringdan 'n' ta harf ajiratib berilsin
// es: str = 'webbrain' , n=5
// res: 'webbr'

// 4. getCurrency(str) - berilgan string yoke pul birligini faqat raqamlarini ajiratib chiqarsin
// ex: '$1200' - 1200

// 5. berilgan string raqam, string va characterlarni alohida sano'gi blan chiqaring.
// ex: 'John@!n_2004', res:{letter:6, char:3, number:4}

// 6. copitalize(str) - berilgan stringdagi barcha so'zlarni faqat bosh harifini katta harfga o'zgartirib chiqish kerak
// ex: str = jahongir doniyarov // Jahongir Doniyarov
