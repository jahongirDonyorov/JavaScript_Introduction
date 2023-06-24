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
