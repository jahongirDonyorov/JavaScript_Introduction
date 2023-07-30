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

// // -=-=-=-=-=-=-=-=-=- Constraktor yordamida String yaratish
// // oddiy usul
// let str1 = "webbrain";

// // constraktur blan
// let str2 = new String("webbrain");

// // oddiy usulni consolda kursak bizga 'webbrain' shu holda chiqyapdi
// console.log(str1);
// console.log(str1 === "webbrain"); // true chunke bu 'webbrain' vsluesini qaytaradi

// // constraktur uslida esa string kurinishdagi string qaytardi  [String: 'webbrain']
// console.log(str2);
// console.log(str2 === "webbrain"); // false chunke str2 [String: 'webbrain'] bu holatda value qaytaradi

// // -=-=-=-=-=-=- localeCompare()
// // bu 1 ta string ichida ikkinchisi bor yuqligini tekshiradi
// // 3 ta qiymat qaytaradi -1,0,1
// // -1  -  bu ichida umuman bunaqa narsa yuq busa chiqadi
// //  1  -  qisman bor bulsa chiqadi. qaysidir qismi tug'ri kelsa
// //  0  -  bir biriga mos kelsa 1 chiqadi
// let test1 = "web";
// let test2 = "webbrain";
// console.log(test2.localeCompare(test1)); // 1 - qisman bor
// // bu hozir test2 ning ichida test1 bormi yuqmi shuni telshiryapdi

// // -=-=-=-=-=-=- string ichidagi harflarni alohida chiqarsak buladi
// console.log(test1[1]); // [] ichiga yozgan index dagi harfni chiqaradi bunda e ni chiqaradi
// // chunke index 0 dan boshlanadi

// // -=-=- charAt
// // buham yuqoridagidek harflarni chiqaradi ikkalasi bir hil
// console.log(test2.charAt[2]);

// // bu ikkalasiga -(menus) qiymat blan yozib bulmaydi
// console.log(test1[-1]);
// console.log(test1.charAt[-1]);
// // ikkalsidaham undefined chiqadi

// // -=-=- at
// // bu ham harflarni chiqaradi faqat bu - (menus qiymatham oladi)
// console.log(test2.at(-1));

// // hardoim index 0 dan
// // element esa 1 dan boshlab chiqishni boshlaydi

// // -=-=-=-=-=-=-=-=-=-=- Methods
// // methods har doim . dan kiyin yoziladi .abc

// // 1  - .length
// // 2  - .at()
// // 3  - .toUpperCase()
// // 4  - .toLowerCase()
// // 5  - .indexOf(str) // represent index of str -- -1 if not found
// // 6  - .lastIndexOf(str) // represent index of str -- -1 if not found
// // 7  - .includes(str) - returns true or false
// // 8  - .startsWith(str)
// // 9  - .endsWith(str)
// // 10  - .padEnd(count, value) - 'hello'.padEnd(5) // 'hello'.padEnd(5, '.') // 'hello.....'
// // 11 - .padStart(caunt, value) - 'hello'.padStart(5) // 'hello'.padStart(5, '.') // '.....hello'
// // 12 - .slice(strat, end(not included)) - accept
// // 13 - .substring(start,end(not included)) - not accept +- -- swipe greater value --
// // 14 - .substr(start, length) --
// // 15 -  slice vs substring vs substr - ref pic is availble
// // 16 - .eval(str) - calculation
// // 17 - .trim() - remove ending and starting spaces
// // 18 - .trimStart()
// // 19 - .trimEnd()
// // 20 - .split()/split(sperator) / split(sperator, limit) - repeat(count)
// // 21 - .concat(str2) - concationation
// // 22 -  String.row`path` - ignore \ chars
// // 23 - .search vs .indexOf - regex uses search, indexing uses indexOf
// // 24 -  valueOf(new String('ss'))

// // -=-=-=-=-=- Usege (ishlatilishi)

// // 1. -=-=-=- .length
// // uzunlikni ulchaydi yani qancha joy egallanganligi
// let str = "webbrain";
// console.log(str.length); // 8 chiqyapdi chunke str 8 ta harfdan iborat
// str = "webbrain  ";
// console.log(str.length); // 10 chiqadi chunke 2 ta bush joy qushildi

// // 2. -=-=-=- .at
// // strida uzimizga kerakli indexsidagi harfni olishimiz mumkun
// console.log(str.at(1)); // bizga 0 - indexdagi w ni chiqarib beradi
// // bu menus (-) qiymatham oladi

// // 3. -=-=-=- .toUpperCase()
// // String harflarini katta harf qilib beradi
// console.log(str.toUpperCase()); // WEBBRAIN - shu holatda hammasini katta harf qilib beradi
// // faqat stringda ishlaydi boshda data typelarda xatolik beradi
// let num = 12345;
// // console.log(num.toUpperCase()) // bular (12345) da unaqa function yuq deyapdi
// // bundek xatoliklarni oldini olish uchun chaqirish jarayonida malumotlarni stringa aytlantirib olsak buladi
// console.log(`${num}`.toUpperCase()); // 12345 chiqadi error bermaydi
// // bu kelayotgan malumotni string qilib kiyin toUpperCase qilyapdi

// // 4. -=-=-=- .toLowerCase()
// // bu toUpperCase ning teskarisi yane harflarni kichik qilib beradi
// let str3 = "JOHN";
// console.log(str3.toLowerCase()); // john

// // Bu ikkalasiga uxshash bulgan 2 ta mathode bor
// console.log(str3.toLocaleUpperCase("en-US"));
// console.log(str3.toLocaleLowerCase("en-US"));
// // til  kiritsa buladi argument sifatida

// // 5. -=-=-=- .indexOf(str)
// // bu bizga kerakli harf stringning nechinchi indexsida borligini kursatadi

// let str4 = 'webbeain academy'

// console.log(str4.indexOf("bb")); // 2 chiqdi chunke bb webbeain suzida 2 - indexdan boshlanadi
// // yuq malumot kiritsak menusli son chiqaadi

// // bu yana bitta parametr oladi
// // ikkinchi parametr nechinchi parametrdan boshlab qidirishini aytadi
// console.log(str4.indexOf("b", 5)); // 5 indexdan boshlab b harfini izlaydi

// // 6. -=-=-=- lastIndexOf()
// // buham indexOf blan bir hil faqat bu orqadan boshlab tekshirib keradi
// console.log(str4.lastIndexOf('e')) // 13 chiqadi chunke oxiridan tekshirganda birinchi academy dagi e chiqaddi bu ushani indexsini chiqaradi 

// // 7. -=-=-=- .includes(str)
// // string ichida shu suz bor yuqligini tekshirib beradi 
// console.log(str4.includes('we'))// true chiqadi chunke we str4 da bor 

// // bularni ishlatishga bitta mison tilifon kantakda nomerni boshini yozsak qolganlari automatik ravishda chiqib 
// // keladi ushanda filtirlarda ishlatishimiz mumkun ekan


// // 8. -=-=-=- .startsWith(str)
// // stringni boshida biz hohlagan suz bor yuqligini tekshiradi 
// console.log(str4.startsWith('web')) // true chiqadi chunke str4 ning boshi web blan boshlanadi 
// console.log(str4.endsWith('as'))// false chiqadi chunke str4 ning boshi as blan boshlanmaydi
// // ishlatishga misol maslan kurs uchun faqat usb fuqorolari ruyhattan utaolishlari kerak bunda nomerning boshini tekshirishimiz mumkun +998 blan bulsa ruyhatdan utsin desak buladi 


// // 9. -=-=-=- .endsWith(str)
// // bu esa string oxirini tekshiradi 
// console.log(str4.endsWith('emy'))// true chiqadi chunke str4 ning oxiri emy blan tugaydi
// console.log(str4.endsWith('as'))// false chiqadi chunke str4 ning oxiri as blan tugamaydi

// // 10. -=-=-=- .padEnd(count, value)
// // gapning oxiriga uzimizga kerakli narsani qushib beradi 
// console.log(str4.padEnd(22,'.')) // webbeain academy......
// // 2ta parametr olyapdi binchisi 22 ta joyni egallasin ikkinchisi '.' stringimiz 22 tadan kichik bulsa qolganiga ... quysin 

// // 11. -=-=-=- .padStart
// // bu huddi shunday faqat boshidan quyadi 
// console.log(str4.padStart(22,'.')) // ......webbeain academy

// // 12. -=-=-=- .slice(strat, end(not included))
// // bu bizga stringni kesib beradi
// //  2 ta parametr oladi 1-si boshlanishi 2-si tugashi yani 1 dan 2 gacha bulgan indexni kesib oladi 
// console.log(str4.slice(0,5)) // webbe 
// // yane 0-indexdan 5 indexgacha kesb oladi 5 ni uzini olmaydi 
// // bu - qiymatham qabul qiladi menus orqadan sanab keladi 
// console.log(str4.slice(0,-2)) // webbeain acade
// // orqadan 2 ta sanaydi my ni olib tashladi 

// // 13. -=-=-=- .substring(start,end(not included))
// // buham kesadi faqat bu '-' lik qiymat olmaydi va kattasidan kichigiga qarab tug'irlab oladi 
// console.log(str4.substring(2,0)) // we
// // bu mantiqiy notug'ri 2 dan 0 gacha bulmaydi lekn substring buni automatik tug'irlab oladi 0dan 2 gacha qilib
// // qolganlarida bu ishlamaydi
// console.log(str4.slice(2, 0)) // vallue chiqmaydi

// // 14. -=-=-=- .substr(start, length) --
// // buham kesadi faqat buning boshlaqalardan faqartlari mavjud 
// console.log(str4.substr(2,2)) // bb
// // 1-qiymati nechinchi indexdan 2- sisi nechta kesishini bildiradi 
// // bu holatda 2 indexdan kiyin 2ta chiqar degani qolganlarida bu yuq

// // 15. -=-=-=- slice vs substring vs substr - ref pic is availble farqlarini kurdik

// // 16. -=-=-=- .eval()
// // string ichidagi malumotlarni xisoblab beradi 
// console.log('2+2') // 2+2 - chiqadi
// console.log(eval('2+2')) // 4 - chiqarib beradi


// // 17. -=-=-=- .trim 
// // stringdagi boshidagi va oxiridagi bush joylarni olib tashlaydi 
// // urtada bish joy bulsa olmaydi 
// let str5 = '      John    p      '
// console.log(str5.trim()) // John    p

// // 18. -=-=-=- .trimStart 
// // boshidagi bush joylarni uchiradi 
// console.log(str5.trimStart())// John    p

// // 19. -=-=-=- .trimEnd
// // oxiridagi bush joylarni chiqarib tashlaydi 
// console.log(str5.trimEnd()) //       John    p

// // 20. -=-=-=- .split()/split(sperator) / split(sperator, limit) - repeat(count)
// // bu malumotni arrayga uzgartiradi 
// console.log(str4.split()) // [ 'webbeain academy' ] 
// // bu holatda hammasini array qilib beradi 
// console.log(str4.split('')) // ['w','e','b','b', 'r']
// // array qiladi va ishidagi har bir harfni 'stringa olib chiqadi'
// console.log(str4.split(' ')) // string orasida bitta bush joy tashlasak har joy tashlanganlarni array ichida addelne stringa oladi 
// // value: [ 'webbeain', 'academy' ]
// console.log(str4.split('a')) // bu a bulgan joylarda bitta element yasab beradi a ni uzini chiqarmaydi 
// // value: [ 'webbe', 'in ', 'c', 'demy' ]

// // bunga 2-parametr quysak ham buladi u nechta element chiqarishini bildiradi
// // 21. -=-=-=- concat()
// // bu sitrinning oxiridan suz qushib beradi 
// console.log(str4.concat(' Jahon', ' ...', ' Doniyarov')) // webbeain academy Jahon ... Doniyarov

// // 22. -=-=-=- search indexOf blan bir hil 

// // 24. -=-=-=- valueOf()
// // biz new stringni console da kurganimizda [String: '...'] chiqaradi bizga faqatgina valuesi kerak bulsa shundan fydalanamiz 
// console.log(new String('Jahon')) // [String: 'Jahon']
// console.log(new String('Jahon').valueOf()) // Jahon


// // 23. -=-=-=- .replace 
// // stringni kerakli joyini uzgartirish uchun ishlatiladi 
// // 2 ta parametr oladi 1-siga qaysi suzni uzgartirmoqchi bulsak usha yoziladi 2-si nmaga uzgarishi 
// console.log(str4.replace('web', "WEB")) // web WEB ga uzgarsin deyapdi javob: WEBbrain buladi
// // bunda birinchi parametrning harflariham stringdagi blan bir hil bulishi kerak 
// console.log(str4.replace('Web', 'Join')) // bu ishlamaydi chunke str4 ning boshi Web blan emas web blan boshlangan yane kichik harf blan 
// // buni tug'irlash mumkun yani harflarga qaramaydi suz tug'ri kelsa buldi 
// console.log(str4.replace(/WEB/i, 'Join')) // / buni ichida bu '' yozilmaydi /i ignor degani ignor qiladi katta kichikligiga qaramaydi suz tugri kelsa buldi 
// // agar web dan 2 ta bulsa bu birinchi kelganini uzgartirib beradi 
// console.log(str4.replace(/WEB/ig, 'Join')) // / /ig qilsak bu str4 ichidagi hamma web larni uzgartiradi nechta bulishidan qate nazar


// // -=-=-=-=- Loop
// // obj da for lop orqali keylarni olganimizdek bunda har bitta harfni olsak buladi faqat bunda in urniga of ishlatiladi 
// for(i of str4){
//   console.log(i)// har bitta harfni bittadan aylantirib chiqarib beradi 
// }


// ####################

// Homework
// 1. check(str1, srt2)  - function yozilsin. berilgan parametrlar bir biriga mos yoki
// umumey tug'ri kelmasligi va qismon to'g'ri ekanligini ifodalavchi natijani qaytarsin.
// ex: str1 = 'Jahongir Doniyarov' , str2 = 'gir' qisman ichida bulsa ichida bor deb chiqsin tuliq bir biriga mos kelsa tuliq mos keldi desin

// let str1 = 'Jahongir Doniyarov';
// let str2 = 'gir';
// function check(str1, str2){
// if(str1.localeCompare(str2) === 0){
//   console.log('To\'liq mos keldi')
// }else if(str1.localeCompare(str2) === 1){
//   console.log('qisman bor')
// }else{
//   console.log('mos kelmadi')
// }
// }

// check(str1,str2)

// SUCCES

// 2. getCount(str) - function yozilsin. functiondagi harflar sanog'ini chiqarib bersin
// ex: str = {'webbrain'}; {w:1,e:1,b:2,r:1,a:1,i:1,n:1 }
let str = 'Jahongir'
function getCount(str){
  let char = {}
  for(i of str){
    if(char[i]){
      char[i]++
    }else{
      char[i] = 1
    }
  }
  return char
}
console.log(getCount(str))


// 3. truncate(str, n) - funtion yozilsin. Berilgan stringdan 'n' ta harf ajiratib berilsin
// es: str = 'webbrain' , n=5
// res: 'webbr'
let n = 2
function del(str,n){
  return str.slice(0,n)
}
console.log(del(str,n))

// -=-=-=- SUCCES


// 4. getCurrency(str) - berilgan string yoke pul birligini faqat raqamlarini ajiratib chiqarsin
// ex: '$1200' - 1200
let str1 = '$120'
function getCount(str1){
  let count = str1.replace('$', '')
 return count
}
console.log(getCount(str1))

// 5. berilgan string raqam, string va characterlarni alohida sano'gi blan chiqaring.
// ex: 'John@!n_2004', res:{letter:5, char:3, number:4}
// let a = 'John@!n_2004'
// function add (str) {
//   let ar = []
// for(i of str){
//   if(i.included('d')){
//     console.log(i)
//   }
// }
// } 
// add(a)

// 6. copitalize(str) - berilgan stringdagi barcha so'zlarni faqat bosh harifini katta harfga o'zgartirib chiqish kerak
// ex: str = jahongir doniyarov // Jahongir Doniyarov
// let str2 = 'jahongir doniyarov'

// function copitalize(str){
//   let ar = str.split(' ')
//   for(i of ar){
//     let a = ar[i];
//     console.log(a)
//     // console.log(i[0].toUpperCase() + )
//   }
// }
// copitalize(str2)

function capitalize(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 0) {
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
  }

  return words.join(' ');
}

const inputString = 'jahongir doniyarov';
const result = capitalize(inputString);
console.log(result);

