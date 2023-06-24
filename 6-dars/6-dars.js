// // =-=-=-=-=-=-=-=-=-=-= Switch statement

// // Same as if - if nma vazifa bajarsa Switch ham huddi shunday
// // bu faqat har doim qatiy bitta narsani tekshiradi

// // Switch -> ===
// // if -> ==, ===, =>, <=, <, > ==!, =!

// // uziga bitta verable qabul qiladi va ushani qiymatini kutadi

// // if(condition){code}else{}

// //    1       2       3        4       5    6      7
// // switch (verable) {case condition: code break default : code}

// // 1. kalit suzi
// // 2. verable. - tekshirmoqchi bulgan verable faqat bitta vireable yoziladi
// // 3. condition uchun kalit suz. - case kiyingi qiymat 4 verable ga tengligini tekshiradi
// // 4. qiymat. - 4 dagi qiymat 2 verable ga === teng bulsa
// // 5. code. - 2 blan 4 teng bulsa 5 ishlaydi
// // 6. break code ni yuxtatadi
// /*
//  break bu shart (case) oxirini bildiradi bu har doim bulishi kerak bu bulmasa codimiz olgan case larniham javobini chiqaradi 
//  huddi else if emas if if qilib ketgandek buladi 
// */
// // 7. default - garda yuqoridagilarning brortasiham tug'ri bulmasa default chiqadi huddi else dek

// let a = 119;

// if (a === 13) {
//   console.log("a === 13");
// } else if (a === 14) {
//   console.log("a === 14");
// } else {
//   console.log("default");
// }

// // switch dagi holati

// switch (
//   a // a verableni olib olamiz
// ) {
//   case 13: // bu usha olgan 'verablemizga' (a) 'qiymat' (13) tengmi tengmasmi tekshiradi
//     console.log("a === 13"); // a ga case dan kiyingi qiymat teng bulsa bu ishlaydi
//     break; // shartni tugatadi
//   case 14: // 2 - shart a 14 ga teng tengmasligini tekshiradi
//     console.log("a === 14"); // agar : dan oldingi case (shart) tug'ri bulsa bu ishlaydi
//     break; // har bir case (shart) oxirida break bulishi kerak
//   default:
//     console.log("default");
// }
// // value : default chiqadi agar default larni olib tashlasak hammasini javobi valuega chiqadi

// // switch da case => 9 qilib bulmaydi buning uzi har doim === blan tekshiradi

// let b = 1;
// switch (b) {
//   case "1":
//     console.log("teng");
//   default:
//     console.log("teng emas");
// }
// // value : teng emas chiqadi chunke switch === blan tekshiradi

// // !_!_! break ni olib tashlab yozsak xatolik kursatmaydi lekn hamma case larni uqib hammasini javobini chiqaradi

// _#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#


// // =-=-=-=-=-=-=-=-=-=-= For Loops Basics

// // for lops uziga 3 ta porametr oladi
// // for(boshlanish; manzil; yurish){}

// // 1   2    3     4   5
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // 1. kalit suz
// // 2. uzgaruvchi yaratib qiymat berib olamz. boshlanish nuqtasi hisoblanadi
// // 3. shart. qayargacha borishini kursatsak buladi
// // 4. qanday borishi i++ bitta bitta quwib borsin degani
// // 5. code

// // 3. shart har doim true yoke false qiymatni kutadi true bulsa ishlaydi false bulsa tuxltaydi

// // 2 uzgaruvchini tashqarida yozib chaqirib quysakham buladi
// let c = 1;
// for (c; i <= 10; i++) {
//   console.log(c);
//   console.log("hello word"); // buham 10 martta chiqadi
// }

// // kode tuliq ishlab bulgandan kiyingina qiymat birga oshadi bu shu holda takrorlanadi

// // bu holatda  i kichik bulsa 10 dan i ga birni qushib bor deyilyapdi
// // i=1, 10 dan kichik bulganligi uchun code birmartta ishlab 1 ni quwadi 1 + 1 = 2
// // i=2, 10 dan kichik code yana bir tuliq ishlab i ga 1 ni quwaadi 2 + 1 = 3
// // 10 ga teng bulguncha code ishlayveradi qachonke 10 ga teng bulganida ishlashdan tuxtaydid

// // mislo:
// // masalan biz 1 dan 10 gacha bulgan sonlarni console da chiqarmoqchimiz
// // console.log(1)
// // console.log(2)
// // console.log(3)
// // console.log(4)
// // console.log(5)
// // console.log(6)
// // console.log(7)
// // console.log(8)
// // console.log(9)
// // console.log(10)

// // lekn biz buni for orqali bitta consolda chiqarishimiz mumkun

// //   1     2     3
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// // bu holatda ancha vahniham tejab qolamz

// // 1. boshlanish nuqtasi nechhcidan boshlanishini shu yirda yozishimiz mumkun
// // 2. manzil nichchi gacha bulishini shuyerda yozamiz
// // 3. qanday borishi i++ bitta bitta quwib boradi buni uzimiz uzgartirishimiz mumkun i = i + 2,3,3..

// for (i = 1; i <= 10; i = i + 2) {
//   console.log(i);
// }
// // bu bizga 2 tadan quwib valueni chiqarib beradi

// for(; i < 12; i++){
//   console.log(i)
// }
// // bu holatda birinchi qiymatni olib quysakham ishlayveradi 
// // lekn i++ ni olsak shart hechqachon false qiymatga utmaydi va davomiy cheksiz ishlayveradi 

// for(i=1 ;i < 12; ){
//   console.log(i)
// }

// // i++ ni { ichiga yozib quysak ham buladi }

// for(i=1 ;i < 12; ){
//   console.log(i)
//   i++
// }


// -=-=-=-=-=-=- var vs let
// shu yirda var blan let ni farqini yaxshiroq tushinib olsak buladi

for(let i = 1; i <= 12; i++){
  console.log(i) // value chiqadi
}
console.log(i)// i is not defide chiqadi yani i degan uzgaruvchi yuq deydi 
// chunke let local uzgaruvchi edi u faqat for ichida ishlaydi fordan tashqarida ishlamaydi 

// ==============

for(var i=1; i <= 12; i++){
  // console.log(i)
}
console.log(i)// bu yirda i ni valuesini chiqaradi 
// chunke var global uzgaruvchi edi u uzi turgan functiondaham ishlay veradi