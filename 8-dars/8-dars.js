// 1. functionlarni nechi hil usulda yaratda buladi
// 2. shadow verable nma ?
// 3. return blan va retun siz yozilgan function ni farqi
// 4. for loop, while, do while farqlari nmada#

// -#-#-#-#-#-#-#-#-#-#- JavaScript 8 -> Basics 2/3 started

// -=-=-=-=-= Object 1/2
// https://www.w3schools.com/js/js_objects.asp
// bu link orqali obj haqida qushimcha malumot olishingiz mumkun

// // =--=--= obj key va valuedan tashkil topgan malumotga aytiladi
// // obj har doim {} ichiga yoziladi qavs ichida {:} buladi : bundan oldingi qiymat 'key' kiyingisi 'value' hisoblanadi
// // bunga hohlagancha malumot yozishimiz mumkun

// // masalan bizga userning tuliq malumotlari kerak va biz uni bitta qilib olishimiz kerak

// // buni verable yordamida qilak bitta verable ga bir nichta qiymatni biriktirib bulmaydi
// // bitta verablega faqat bitta qiymat biriktirsak buladi

// // let user = 'Jahongir','Doniyarov', 18

// // lekn verablega obj biriktirib qilsak hohlaguncha malumot qushishimiz mumkun
// //              key       value
// let user = {FirstName:'Jahongir', LastName:'Doniyarov', age:18, Merriad:false, hight: 1.80, weight:60}
// // bunga hohlaganimizcha malumot kirgizishimiz mumkun ekan va bitta uzini chaqirgan holata hamma malumotni olsak bularkan
// console.log(user) // bizga user ning hamma malumotini chiqarib beryapdi

// /* !!!

//   Biz Object ni tug'ridan tugri Terminalda chiqarishimiz mumkun lekn chrome (resultatda) chiqarolmaymiz
//   Misol: alert('helo') // chromeda alert chiqqanda hello suzi blan chiqadi
//   lekn alert(user) db obj ni chaqirsak bizga [object Object] dgan value chiqadi
//   // faqat gina biz buni ichidagi bitta qiymatni uzini olsak  chiqadi
//   alert(user.age)

// !!! */

// // obj ichidagi qiymatni olish

// // 1 - usul  (obj.key)
// // obj ichidagi qiymatni olish uchun obj  name.key yozib olsak buladi
// console.log(user.age)

// // 2 - usul (obj['key']) -  bu usul dynamic usul deyiladi
// // bu [] blan chaqiriladi obj['key'] yoziladi
// console.log(user['age'])
// // buning asosiy farqi keyni 'string' holatdaham chaqirishimiz mumkun '.' blan bunday qilib chaqirib bulmaydi

// // -=-=-=-= obj.key vs obj['key'] FARQLARI

// // -=-=-=- 1 -  farqi


// // console.log(user.'age') // . talini bu holatda hech qachon chaqirib bulmaydi

// // string holatda chaqarishning yaxshi tamoni 2 buginli key larni chaqirsak buladi

// // Misol:
// let accaunt = {'ful name': 'Jahongir Doniyarov'}
// // 'ful name' bu bizga  2 buginli key hisoblanadi
// // OBJ da shunaqa keylarham mazjud bularni faqat [] blan chaqirishimiz mumkun

// // 1. console.log(accaunt.ful name)
// // 2. console.log(accaunt.'ful name')

// // bu usullar blan 2 talik key ni chaqirib bulmaydi

// // 2 talik keylarni faqat [] blan chaqirsak buladi

// console.log(accaunt['ful name']) // value: Jahongir Doniyarov
// // bu holatda xatolik bulmaydi

// // -=-=-=- 2 - farqi
// // obj da number blanham key bersak buladi
// let test = { 2:'hello'} // buyirda 2 key, hello value bulyapdi
// // biz bu keyni . blan chaqirolmaymiz

// // console.log(test.0) // error beryapdi

// // buni chaqirishni yagona yuli bu [] usuldan foydalanishimiz kerak

// console.log(test['2']) // bu holatda bizga value ni chiqarib beradi
// console.log(test[2]) // number keylarni chaqirishda '' ga olmasakham buladi

// let info = {
//   name: 'Geek Academy',
//   major: 'JavaScript',
//   founded:2022,
// }

// let key  = 'major';
// // bizga key dgan uzgaruvchi bor va uzni qiymati majorga teng

// console.log(info.key) // bu holatda bizga undefined beradi chunke info ichida bunday key yuq
// console.log(info['key']) // value: undefined

// /* 2 ta holatdaham info ichidagi keylarni izlaydi lekn biz [] holatda yozganda 'string' ga olmasak
//    bu verable qiymatini infodan izlaydi */
// console.log(info[key]) // info[key] === info['major'] becouse biz chaqirgan key qiymati majorga teng
// // bu bizga info ichidan key qiymatini 'major' ni izlaydi

// let Hi = 'founded'
// console.log(info[Hi])
// // bu bizga info ni ichidan Hi ning qiymatini 'founded' ni izlaydi

// /* info[Hi] === info['founded']  verable yozganimiz uning valuesini yozganimiz
// bilan bir xil hech qachon verable nomini obj ichidan izlamaydi faqat verable value sini izlaydi */

// // Real projectda user tomonidan kiritilgan narsani chiqarishda ishlatsak buladi
// // Misol: user proptga malumot kiritsin va shu malumot obj ichida bulsa chiqarsin bbulmasa chiqarmasin

// // let use = prompt() // prompt ga kiritgan malumotimiz use ning valuesi buladi

// // console.log(info[use]) // desak use valusini obj ichidan izlaydi bulsa chiqaradi
// // brawserga kirib kurishimiz mumkun hammasi tug'ri ishlayapdi lekn yuq malumotni kiritsak undefined chiqyapdi

// // ClassWork
// // user agar objda yuq malumotni kiritsa undefined emas bunday malumot yuq disin

// ##############

// // -=-=-=-=-=- obj valuesini uzgartirish

// console.log(info.name) // value Geek Akademy
// info.name = 'Geek IT Academy'
// // valueni uzgartirish shundan iborat
// console.log(info.name) // Geek IT Akademy

// // usha key bulsa value sini yangilaydi bulmasa yangi key sifatida qushadi
// info.age = 2020
// // bizga age dagan key yuq edi shuning uchun yangi age key va uning valuesini obj ga qushyapdi

// // -=-=- obj ichida 2 ta birhil key bulsa har doim eng oxiri (pastdagi) ni hisoblaydi

// const obj = {
//   name:'Jamshid',
//   age:19,
//   name: 'Barno',
// }
// // bu holatda 2 ta bir hil key name mavjud 2 ta bir hil key bulsa pastagisini qiymati hisobga olinadi
// console.log(obj.name)// value: Barno

// obj.age = 20
// console.log(obj.age) // value : 20
// // obj NoPrimative bulganligi uchun constda yozilgan bulsaham uni ichidagi key valuelarini uzgartirsak buladi
// // chunke obj bizga link qaytarardi biz linkni uzini uzgartirmasak buldi uni ichidagilarni uzgartirishimiz mumkun
// // obj = 'salom'  qilsakgina error buladi chunke biz umuman linkniham uzgartirib yuboryapmiz

// // =-=-=-=-= obj dan key delete qilish

// delete obj.age
// console.log(obj) // { name: 'Barno' } chiqadi chunke biz age ni uchirdik

// // -=-=-=-=-
// let ac1 = {
//   name:'John',
//   age:18
// }
// let ac2 = {
//   name:'John',
//   age:18
// }

// console.log(ac1 == ac2) // false
// console.log(ac1 === ac2) // false
// // chunke obj NoPrimative data turiga kirgaligi uchun ikkalasi 2 xil link qaytaradi linki har hilligi uchun false

// let ac3 = ac1; // biz ac1 ni linkiga ac3 ni birlasshtiryapmiz endi ikkalasini linki bitta hisoblanadi

// console.log(ac1 == ac3) // true
// console.log(ac1 === ac3) // true
// // chunke ikkalasaini linki birhil hisoblanadi 1 tasini uzgartirsak 2 koviham uzgarib keradi

// ac3.founded = 2020; // ac3 ga founded qushyapmiz
// // ac1 blan ac3 ning linki bir hil bulganligi uchun 1 tasni uzgartirsak 2 koviham uzgardi
// console.log(ac1)
// console.log(ac3)
// // ikkalasigaham founded qushildi

// // -=-=-=-=-=- structuredClone(...) bu node 17 version dan katta bulsagina ishlaydi
// // bu bizga bitta obj ni copy si kerak bulsa lekn linki har hil bulishi kerak bulsa shundan foydalanamiz
// // obj ni clone lashtirib beradi
// let code = {
//   code:1729,
//   userNumber:6623,
// }
// // buni copy qilish uchun
// let copy = structuredClone(code)//(ichiga nmani clon qilish kerak bulsa yozamiz)

// console.log(copy)// code ning hamma qiymati bungaham utadi
// code.code = 9889
// console.log(code)// buni uzida qiymat uzgaradi
// console.log(copy) // lekn bunda qiymat uzgarmaydi
// // chunki ikkalasi alohida alohida obj ga aylangan faqat copy qilgan vahtimizda code dagi qiymat blan bunga alohida link quyib yasab beradi
// console.log(copy === code) // false

// #############

// // -#--#--#--#--#- OBJ Methode

// // -=-=-=-=-=- Object.keys(...) Methode
// // bu methode bizga obj ichidagi keylarni chiqarish uchun kerak

// let a = Object.keys(info)
// console.log(a)// value: [ 'name', 'major', 'founded' ]
// // dynamic qiyilishidan maqsad code yurib turgan vahda biz nma nom kiritsak ushani automatik chiqarishi kerak

// // -=-=-=-=-=-=- Object.freeze(...) Methode
// // bu obj ni muzlatadi unga  qiymat qushib ayirib uzgartirib ham bulmaydi
// Object.freeze(obj)
// // blok qilingandan kiyin uni qaytadan chiqarib bulmayhdi

// // -=-=-=-=-=-=- Object.seal(...) Methode
// // bu ham huddi freeze dek faqat bunda bor keyni value sini yangilasa buladi
// Object.seal(obj)

// //-=-=-=-=-=-= Object.assign(... , ...)
// // bu 1ta obj ni ikkinchisini qiymatin=ga tenglashtiradi

// let a1 = {
//   age:11,
//   test:77,
// }
// let a2 = {}

// Object.assign(a2, a1) // a2 a1 ning qiymatini olyapdi 
// // 1 dagi 2 ning qiymatini oladi 


// #############


// let name = 'IT Park';
// let major = 'Geek IT Akademy';
// // biz bu ikkalasidan kelyotgan qiymatlarini obj ichiga quysak buladi

// // bular userdan kelyotgan value bulishiham mumkun 

// // let name = prompt();
// // let major = prompt();

// const abs = {
//   name:name,
//   major:major,
//     //-==- bu holatda key va briktirilyotgan verable nomi bir hil bulganligi uchun bittasini yoozib quysakham buladi
//   name,
//   major,
//     // har doim keyga verable biriktirilsa va verable nomi key blan bir hil bulsa bittasini yozib quysak buladi 
//   usa:'USA',
// }

// // -=-=-=- ... in ...
// // obj ichida biz hohlagan key bormi yuqmi shuni aniqlab beradi
// // in dan oldingi qiymat in dan kiyingi qiymat ichida bormi yuqmi shuni anitlab beradi 
// console.log('name' in abs) // true chunke name degan key abs ichida bor 
// console.log('new' in abs) // false chunke new abs ichida yuq

// // bunga verable yozsakham buladi 
// let usa = 9090
// console.log(usa in abs) // false chiqadi / verable yozganimizda uning uzini emas balki qiymatini (9090) obj keylar ichidan izlar edi
// // chunke bu hozir usa abs ni ichida bor deb izlamayapdi, usa ning qiymati 9090 abs ichida bormi deb qidiryapdi


// ##############


// // -=-=-=-=-=-=- for loop with in // prints key
// // bizning obj ichida juda kup key bulsa ularning hammasini chiqarmoqchi bulsak for dan foydalansak buladi 

// let user = {FirstName:'Jahongir', LastName:'Doniyarov', age:18, Merriad:false, hight: 1.80, weight:60}
// // buni ichidagi qiymatlarni hammasini chiqarmoqchi bulsa hammasini bittalab yozib chiqishimiz kerak buladi 
// console.log(user.FirstName)
// console.log(user.LastName) // va qolganlariniham shunday yozishga tug'ri keladi 

// // Lekn for blan buni bitta console da chiqarish mumkun 
// for( let i in user){ // bu user ichidagi key larni for har ishlaganda i ga biriktiradi
//   console.log(i) // i endi user ning keylariga biriktirildi har aylangada bitta keyni chiqaradi

//   // i ni uzini chaqirsak bizga keylarni qaytaryapdi siz value qaytaradigan qilishingiz kerak 

// }

// // =-=-=- bush obj yaratishni 2 ta yuli mavjud
// // 1.
// let newObj1 = {};
// // 2.
// let newObj2 = new Object();

// // ikkalasidaham birhil bush obj yaratildi