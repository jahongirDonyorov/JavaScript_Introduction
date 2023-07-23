// -=-=-=-=-=-=-=- Arrays  1/3
// buni katta kantenr deb olsak buladi ichiga harhil malumot solishimiz mumkun va usha arrayni chaqirish blan ichidagi hamma malumotlarni olish imkoniyati buladi 
// ichidagi malumotlarni keraklisini olmoqchi bulsak index buyicha [] ichida chaqoroladi 

// array [] qavslar yordamida yasaladi va obj dek verablega biriktiriladi 
// buning ichida hohlagan malumotimizni yozishimiz mumkun 

//  -=-=-=-=-=- har doim index 0 dan element 1 dan boshlanadi  -=-=-=-=-=-=-=-

// element 1    2      3      4          5     6       7        8        9
// index   0    1      2      3          4     5       6        7        8
let arr = [1,'salom',true,function(){},{l:1},null, undefined,Symbol(),[1234]]
// index 0 dan boshlanganligi uchun har doim elementdan bitta kam buladi yane 9 ta element 8 index mavjud

// buni chaqirish orqali array ichidagi hamma malumotlarni olishimiz mumkun 
console.log(arr) // [1,'salom',true,function(){},{l:1},null, undefined,Symbol(),[1234]]

// bu malumotlarni faqat uzimizga keraklisini olsakham buladi
// array nomi va [] ichiga olmoqchi bulgan narsamizning indexsi yoziladi arr[1]
console.log(arr[1]) // salomni chiqrib berdi 


// -=-=-=-=- array methode - length
// bu array ning uzunligini (ichida nechta element borligini ) chiqaradi
console.log(arr.length) // 9  chiqadi chunke bizga elementni 1 dan sanaydi 

// bu orqali eng oxirgi malumotni chiqarishimiz mumkun 
console.log(arr[arr.length]) // arr[arr.length] === arr[9] - bu holatda hechnarsa chiqmaydi chunke arr da 9 ta index yuq value:undefined
// bu holatda oxirgi malumotni chiqarmoqchi bulsak arr.length dan 1 ni ayirishimiz kerak chunke bizda 9 - index yuq hechnarsa chiqmaydi 
console.log(arr[arr.length - 1]) // arr[8] yozgan bilan bir hil bizda 8 - index bulganligi uchun buni chiqarib beradi value:[1234]

// aytishlarin mumkun shuncha ish qilmasdan arr[8] qilib quysam buladiku deb 
// tug'ri shunday qilsaham buladi lekn array ichida 100 ga yaqin malumot bulsa uni bittalab sanab chiqishimiz kerak buladi 
// yokeda arrayga malumot qushilib borsa hardoim arrayning eng oxirgi eng oxirgi (new) malumotini olmoqchi bulsak har yangi malumot qushilganda 
// uni sanab arr[99] ar[100] qilib bittadan yozishimiz kerak buladi 

// -=-=-= oxiridan bitta oldingini chiqarmoqchi bulsak -2 qilamiz 
console.log(arr[arr.length -2]) // Symbol() chiqadi 


// -=-=-=--=-
// tug'ridan tug'ri [] ichida - lik qiymat yozolmaymiz 
console.log(arr[-2]) // bu holatda undefined chiqadi 
// chunke -2 digan index mavjud emas 
// biz - lik qiymat kiritishimiz uchun at methode dan foydalanamiz
console.log(arr.at(-2)) // Symbol chiqadi - qiymat orqadan sanab keladi


// =-=-=-=-=-=-=-= new Array

let ar = new Array()
let ar1 = []
// ikkalasini chaqirsakham birhil malumot chiqadi 
console.log(ar) // []
console.log(ar1) // []
// bularning uzunligiham bir hil bulyapdi 


// oddiy arraydan new Array ning  farqlari

// agar biz oddiy array ichiga 5 yozsak 5 oddiy array ichdagi elementga aylanadi 
ar1 = [5]
console.log(ar1) // value: [ 5 ] chiqadi 

// lekn new Array ichiga 5 kiritsak bu array ichida hech qanaqa malumoti bulmagan 5 ta item yasab beradi
ar = new Array(5)
console.log(ar) // value: [ <5 empty items> ] - yane 5 ta element bor deyapdi

// bularni uzunligini kursak 
console.log(ar.length) // new Array da value:5 chiqdi 
console.log(ar1.length) // oddiy arrayda esa value:1 chiqdi

// new Array bizga parametrdan array yasab berish uchun ishlatilarkan 
// lekn bunga parametr string yokeda 1,2,3 holatida kiritilsa bu erray element yasab beradi
 ar = new Array('7')
 console.log(ar) // ['7'] chiqadi uzunligi 1 buladi 
 ar = new Array(3,5)
 console.log(ar) // [ 3, 5,] chiqaradi uzunligi 2 buladi



 // -=-=-=-=-=-= qiymatni uzgartirish

let ar2 = []
// biz buning malumotini uzgartirishimiz mumkun 
ar2[0] = 20
// arrayning 0 - indexsiga 20 mani birlashtiryapdi 
console.log(ar2) // [20]
ar2[3] = 30
// 3-indexsiga 30 ni tenglashtirdi lekn bizda 0,1,2 indexlar bulmaganligi uchun ularga bush item biriktirib ketadi 
console.log(ar2) // [ <3 empty items>, 30 ] - bulish kerak lekn biz 0 - indexga malumot biriktirganligimiz uchun 20 2ta bush item 30 chiqaradi
// value: [ 20, <2 empty items>, 30 ]
ar2[3] = 'salom'
// biz 3 indexsda turgan 30 qiymatni 'salom'ga uzgartirdik
console.log(ar2) // value: [ 20, <2 empty items>, 'salom' ]


// -=-=-=-=-= toString - Methode 

// bu arrayni string qilib beradi 
console.log(ar2.toString()) // 20,,,salom
console.log(typeof ar2) // object - chiqadi chunke arrayning data type object edi 
console.log(typeof ar2.toString()) // string

// -=-=-=-=-= join - Methode 
// buham arrayni string qilib beradi 
console.log(typeof ar2.join()) // string 
// buni toStringdan farqi parametr kiritsak buladi 
console.log( ar2.join(',')) // bu holatda har bir element orasiga , quyib chiqadi value:20,,,salom
console.log( ar2.join('')) // bu holatda vergulsiz chiqqaradi value: 20salom
console.log( ar2.join('/')) // bu holatda har bir element orasiga / quyib beradi 20///salom


// -=-=-=-=-=- Arraylarni qushish

let a = [1,2,3,4]
let b = [5,6,7,8]
console.log(a+b) // bu holatda qushsak bizga array sifatida emas string sfatida qushib beradi 
// value: 1,2,3,45,6,7,8 / bu string holatda bulyapdi 4 blan 5 addelne element bulishi kerak edi lekn string 
// holatda qushilganligi uchun a ni oldiga b ni quyib quyyapdi shunga ikkalsini orasida ',' yuq 

// -=-=- .concat() - Methode
// bu bizga arraylarni qushish uchun ishlatiladi 
console.log(a.concat(b)) // a ga b ni array sifatida qushib beradi 
// value: [1,2,3,4,5,6,7,8]
// concat() ga istaganimizcha parametr yozishimiz mumkun ekan 
console.log(a.concat(b,'salom',['english'],{salom:'hello'})) // a ga hammasini qushib beradi ketma ketlikda 
// value: [ 1, 2, 3, 4, 5, 6, 7, 8, 'salom', 'english', { salom: 'hello' } ]


// No Primative data type larni hammasini type object bulganligi uchun ularni typedan ajratib olih qiyin 

// -=-=-=-=-=- array type ni kurish
// biz array taypeni tug'ridan tug'ri kurolmaymiz typeof blan kurganimizda object chiqadi
// chunke array NO Primative data type Object ga kirar edi 
console.log(typeof {}) // object
console.log(typeof []) // object 
// ikkalasidaham obj chiqadi chunke ikkalasiham object data type ga kiradi


// -=-=-=-=-=-= Array.isArray(...)
// Aynan array ekanligini bilish uchun Array.inArray(...) - Methode dan foydalanamiz 

console.log(Array.isArray([])) // true chiqadi chunke bu array
console.log(Array.isArray({})) // false chiqadi chunke bu array emas 