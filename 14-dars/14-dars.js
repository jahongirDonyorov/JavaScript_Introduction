// -=-=-=-=-=-=-=-=-=-=- Basics  JavaScript 13

// -=-=-=-=-=-=- CRUD - exaplation
// - C - Create 
//      - use sprea(...), distructure
// - R - Read
//      - filter, sort, includes,find 
// - U - Update
//       - filter, find 
// - D - Delete
//       - filter, splice

let student = [
  { id: 1, year: 2001, name: "Elshod" },
  { id: 2, year: 2003, name: "Begzod" },
  { id: 3, year: 2004, name: "john" },
  { id: 4, year: 2004, name: "Boymirod" },
  { id: 5, year: 2002, name: "Xusayin" },
  { id: 6, year: 2003, name: "Saddam" },
  { id: 7, year: 2002, name: "Belladen" },
  { id: 8, year: 2003, name: "Jorj" },
  { id: 9, year: 2002, name: "Jurabek" },
];
// -=-=-=-=-=- Create

// bu bizga yangi narsa qushib beradi 

const addUser = (user)=> {
  // hozir biz qushmoqchi bulgan malumot userga teng bub turibdi 
  // student.push(user)
  // biz malumotni push blan qushsakham buladi lekn real projectlarda push ishlatilmaydi

  // split operator blan qushib quyganimiz yaxshiroq 
  student = [...student, {id: student.length + 1, ...user}] // user dan oldin id : studend.length qilib quyamiz hozircha lekn bu data bazadan kelishi kerak aslida
  // studend ni uzinligiga 1 ni qushib bunga id sifatida beradi 
  // splitdan oldin kiyin yozilishiham katta ahamiyatga ega birinchi split kelish kerak edi
  // bu holatda student = [...student, { ...user, id: student.length + 1}] lekn id ni bu holatdaham yozib quysak bulaveradi 
}
// parametrga qushmoqchi bulgan malumotimizni obj holatida berib olamiz 
addUser({year:2004 , name:'John'}) // biz bu yirda id bermaymiz id biz tomondan emas backend tomonidan beriladigan narsa
console.log(student)


// -=-=-=-=-=- Read

// // Malumotlarni  uqish
// // malumotlarni chiqarish ularni filter, sort, includes,find yordamida malumotni sartirofka qilganlarimizgaham Read deb aytiladi 

// const sortByYear = () => {
//   let res = student.sort((a,b) => b.year - a.year) 
//   student = res // student qiymati sortdan qaytgan qiymatga teng buldi

//   // buholatda qilsakham buladi 
//   // return qilib fnc ni consolda chaqirishimiz kerak buladi 
//   // return res
// }
// sortByYear()

// // 1- usul studend = res buni chaqirish
// console.log(student)

// // 2 - usul returndagi qiymat
// // console.log(sortByYear())

// const sortbyAlphabet = () => {
//   let res = student.sort((a,b) => b.name.localeCompare(a.name))
//   student = res
// }
// sortbyAlphabet()
// console.log(student)

// // Elastma: Buyirda sort bitta objga teng bulmaydi sort hamma obj ga bitdan teng hisoblanadi 
// // biz bitta objni uzini sort bilan uzgartirolmaymiz

// Masalan user proptga isim yozsin agar usha ism studend da bulsa chiqarsin 
// let key = prompt() // bu proptdan malumot oladi 
// let key = 'Jorj'
// // filterdan foydalanamiz chunke bizga keraklisini olib qolganini chiqarib yuqorish kerak 
// let res = student.filter((value) => value.name.includes(key)) // agar user kiritgan key studend valuelarini name ga tug'ri kelsa chiqar deyapmiz 
// // includes bizga  tekshirib beradi value.name ichida biz yozgan keyga tug'ri keladigani bormi yuqmi shuni
// console.log(res) // bizga Jorjni chiqarib beradi

// // Lekn katta kichik harflardaham faqat qiladi biz keyga kichik harfda yozsak jorj deb hechqanday malumot chiqmaydi
// key = 'jorj'
// // buni oldini olish uchun ikkalasiniham tekshiryotganda birhil shirifda qilib olishimiz kerak
// let rest = student.filter((value) => value.name.toLowerCase().includes(key.toLowerCase()))
// // bu holatda kelyotgan hamma harfni kichik qilib tekshiradi 
// console.log(rest) // bundaham jorjni chiqarib beradi 

// // function da yozilgan holati bu holat kuproq ishlatiladi 
// // bu holatda harflarning bittasi katta bittasi kichik bulsaham chiqaraveradi
// const getFilterName = (key) => {
//   let res = student.filter((value) => value.name.toLowerCase().includes(key.toLowerCase()))
//   student = res
// }
// getFilterName('BoYmIRoD')// bu holtda bulsaham ishlayveradi 


// // -=-=- id ga qarab chiqaradigan qilishimiz mumkun ekan
// // bu holarda fnc ni ichida yozib ketganimiz yaxshi tepadagilardan kura 
// const getFilterByID =(key) => {
//   let res = student.filter((value) => value.id === key)
//   student = res
// }
// getFilterByID(5)// beshinchi id dagini chiqarib beradi 

// -=-=-=-=- biz id va name functionlarni bitta qilib yozishimiz ham mumkun 
const getFilter = ({key, value}) => { // key va value destrakche bulib objdan chiqarib olinyapdi
  let res = student.filter((usr) => 
    // value[key].toLowerCase().includes([value].toLowerCase()) // bu holatda hatolik beradi chunke toLowerCase lar stringda ishlaydi bizga numberham
    // kelyapdi biz hammasini string qilishimiz uchun `` ga olamiz 
     `${usr[key]}`.toLowerCase().includes(`${value}`.toLowerCase())
  );
  student = res
}

// getFilter({value:3, key:'id'}) // id si 3 bulgani chiqadi 
getFilter({value:'begzod', key:'name'})// name mi begzod tengini chiqradi
console.log(student)

// bitta function 2 ta ishni bajarayapdi ham id ga qarab izlyapdi ham name ga qarab

// -=-=-=-=-=- Update
// Malumotni uzgartiradi 

// const updateUser = (data) => {
//   // bu holatda map dan foydalanamiz chunke bu hamma malumotni chiqaradi true niham false niham
//   let res = student.map((value) => value.id === data.id ?{ ...value, [data.type]: data.value }:value)
//   // map hamma valueni olyapdi va valueni id si data ni id si blan bir hil bulsa 
//   // ? if  ...value kelsin va [data.type] deynamic holatda data type keladi : va valuesi data.value ga teng bulsin deyapdi
//   // : else id tug'ri kelmasa value ni uzini chiqar deyapdi 

//   // data.type [] ichidada yozilganini sababi deynamec buladi tashqarida shunaqa verable bulsa ushaningvalusini key qilib beradi 
//   // yane bizarda argument sifatida kelgan keyni valuesi 'name' ni key qilib beryapdi

//   student = res
// }
// // parametrga uzgartirmoqchi bulgan id va qaysi key uzgarishi va nimaga uzgarishini yozishimiz kerak 
// updateUser({id:2, type:'name', value:'Mirshakar'}) // 2 - id dagi objning name mi begzodga uzgarsin deyapmiz 
// // yiliniham uzgartirmoqchi bulsak 
// updateUser({id:2, type:'year', value:1999}) // 2 - id dagi objning year 1999 ga uzgarsin deyapmiz 

// console.log(student)



// // -=-=-=-=-=- Delete

// // Malumotlarni uchiradi
// // student ni 
// const deletUser = (id) => {
//   let res = student.filter((value) => value.id !== id) // value id bizning id ga mos kelmasatrue buladi va qoladi mos kelgani false bulib chiqib ketadi 
//   student = res
// }
// // bu holatda Map dan foydalanmaganimizning sababi Map da qiymatni uchirib tashlasakham undan true false qiymati valueda qaytadi

// deletUser(4) // buyirda id ga 4 qiymat berilyapdi id 4 dagi chiqib ketadi 
// console.log(student) // id 4 chiqib ketgan 


// -=-=-=-=-=-=-=- Homework 
{
// 1 Berilgan Stringda nechta katta harf va nechta kichk harf borligini 
let str = 'Webbeain Academy';

}

// 2
{
  let str = 'WebBr@in Academy'
  // Berilgan stringdagi @ ni a harfiga o'zgartiring
  // replaceAll va /g dan foydalanilmasin. 
}

//3
{
  let str = 'webbbraiiin accademmy';
  // Duplicate bo'lgan harlarni o'chiring 
}

// 4
{
  let str = 'We66ra1n Acad4my'
  // String ichidagi raqamlarni toping 
}

// 5
{
  let str = 'Webbeain'
  // string berilgan stringning har bir
  // belgisini 2 martta takrorlab qiymat qaytaring 
  // res: 'WWeebbbbrraaiinn'
}

// 6
{
  // Berilgan suz palindrom yoki palindrom emasligini tekshiring 
  // non, kichik, kiyik, ikki, kuchuk
}

// 7
{
  let str1 = 'web'; let str2 = 'ewb'
  // berilgan string harflari soni bir biriga teng yoke teng emasligini aniqlang 
  // tratibi muhum emas 
}

// 8
{
  let str = 'webbrain academy';
  // stringda qatnashgan belgilar sanog'ini toping 
  // res: {w:1,e:2,b:2,r:1,a:3,i:1,n:1,c:1,d:1,y:1}
}

// 9 
{
  let str = 'webbraaiiin'
  // String ziplash
  // res: 'web2ra2i3n
}



// -=-=-=-=-=- Object

// 1
{
  let obj = {title: 'Webbrain', age:2}
  // Object keylarini toping.
}

// 2
{
  let obj = {
    tetle: 'Webbrain',
    age:2,
    child: {
      age: 4,
      name: 'Webbraing',
      child: {
        age: 3,
      }
    }
  }
  // object ichidagi age lar yig'indisini toping 
}

// 3
{
  let obj = {
    id:1,
    name:'WebBrain',
    offline:true,
    onlaine: true,
    individual: false,
  }
  // object valuelarning boolean tipidagi
  // malumotlarini qaytaring key lari bilan birga 
}


// -=-=-=-=-=-=-

// 1
{
  let num = [1,2,3,4,5,6,]
  // remove duplicates
  // new Set dan foydalanilmasin $ 
}

// 2
{
  let num1 = [1,2,3];
  let num2 = [ 1,2,3];
  // arraylarni bir biriga taqqoslang.
}

// 3
{
  let arr = [1,64,8,27,64,125];
  // arraydagi ikki honali sonlarni chiqaring
}

// 4
{
  let ar = [1,2,4,5]
  // 2 dan kiyin 3 qushibn ketish kerak 
}