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
let str1 = 'webbrain';

// constraktur blan 
let str2 = new String('webbrain')

// oddiy usulni consolda kursak bizga 'webbrain' shu holda chiqyapdi
console.log(str1)
console.log(str1 === 'webbrain') // true chunke bu 'webbrain' vsluesini qaytaradi 

// constraktur uslida esa string kurinishdagi string qaytardi  [String: 'webbrain']
console.log(str2) 
console.log(str2 === 'webbrain') // false chunke str2 [String: 'webbrain'] bu holatda value qaytaradi

// -=-=-=-=-=-=- localeCompare()
// bu 1 ta string ichida ikkinchisi bor yuqligini tekshiradi 
// 3 ta qiymat qaytaradi -1,0,1 
// -1  -  bu ichida umuman bunaqa narsa yuq busa chiqadi
//  1  -  qisman bor bulsa chiqadi. qaysidir qismi tug'ri kelsa
//  0  -  bir biriga mos kelsa 1 chiqadi
let test1 = 'web'
let test2 = 'webbrain'
console.log(test2.localeCompare(test1)) // 1 - qisman bor 
// bu hozir test2 ning ichida test1 bormi yuqmi shuni telshiryapdi 

// -=-=-=-=-=-=- string ichidagi harflarni alohida chiqarsak buladi 
console.log(test1[1]) // [] ichiga yozgan index dagi harfni chiqaradi bunda e ni chiqaradi
// chunke index 0 dan boshlanadi 

// -=-=- charAt 
// buham yuqoridagidek harflarni chiqaradi ikkalasi bir hil 
console.log(test2.charAt[2])

// bu ikkalasiga -(menus) qiymat blan yozib bulmaydi 
console.log(test1[-1])
console.log(test1.charAt[-1])
// ikkalsidaham undefined chiqadi 


// -=-=- at 
// bu ham harflarni chiqaradi faqat bu - (menus qiymatham oladi)
console.log(test2.charAt(-1))


// hardoim index 0 dan
// element esa 1 dan boshlab chiqishni boshlaydi 

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
