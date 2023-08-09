// -=-=-=-=-=-=-=-=-=-=- Advanced 

// Recursion - explain in depth


// -=-=-=-=-=-=- Recursion function 

// n ga berilgan sonning uzigacha bulgan qiymatlar yig'indisini chiqaring 
// M: n=4; 1+2+3+4 = 10 bulishi kerak 

// -=-=-=- for blan qilingan varianti 

// const getSum = (n) => {
//   let sum = 0;
//   for(let i = 1; i <= n; i++){ // i 4 bulguncha aylanadi 
//     sum = sum + i
//     // 1-aylanganda 0 = 0 + 1 = sum 1
//     // 2-aylanganda 1 = 1 + 2 = sum 3
//     // 3-aylanganda 3 = 3 + 3 = sum 6
//     // 4-aylanganda 6 = 6 + 4 = sum 10 
//   }
//   console.log(sum) // 10 chiqadi / 
// }
// getSum(4)


// Bu kod Aptemal yul emas bundaham javob tug'ri ishlaydi lekn forda astaroq ishlaydi 
// Biz buni Recursion function orqali qilishimiz mumkun 
// bu uusul ancha tez ishlaydi Aptemal yul desakham buladi 

// -=-=-=- Recursion function blan qilingan varianti 

let res = 0
const sum = (n) => {
  // Biz aytishimiz kerakke agar n ning qiymati 1 ga teng bulguncha n dan -1 ni ayirib kel 
  // shu holda for dek n gacha bulgan hamma qiymatni olishimiz mumkun 4,3,2,1 va 1 ga teng bulganda tuxta deymiz 

  // if(n===1) return 1 // agar bu 1 ga teng bulsa return ishlaydi / teng bulmasa else usha sondan 
  // // 1 ni ayiradi va ayirilgan sonni if yana tekshiradi toke 1 ga teng bulguncha shu davom etadi.
  // else return sum(n-1) 

  // console.log(n) // 4,3,2,1 - Javob Shu holatda chiqyapdi - kurish uchun console ni return dan tepada yozing 

  // endi biz kelyotgan valularni qushishimiz kerak / bularni hammasini resga tenglashtiramiz 

  if(n === 1) return res += 1; // n1 bulgandan kiyin kod tuxtaydi oxirgi n1 ni res ga qushmaydi javob 9 chiqadi
  // tug'ri javob chiqishi uchun biz res + 1 qilishimiz kerak 
  else { // n 1 ga teng bulmasa 
    
    res += n // bu esa n ning har bir qiymatini res ga qushim javobni resga tenglashtiryapdi 

    // n ning qiymati 4,3,2,1

    // n4 - res0 = res0 + n4 = res4
    // n3 - res4 = res4 + n3 = res7
    // n2 - res7 = res7 + n2 = res9
    // n1 - res9 = res9 + n1 = res10 - shu yirda cod tuxtaydi chunke n 1ga teng buldi

    return sum(n - 1) // bu fnc ga berilgan parametr (n) ni har ishlaganda kamaytirib boradi (1 ni ayiradi)
    // sum(4), sum(3), sum(2), sum(1) - chaqirilish shu ketma ketlikda buladi (sal tushinishga qiyin)
    // sum(4) bulganda kode tuxtamaydi qachin sum(1) bulsa ushanda kod tuxtaydi demak birinchi sum(1) kiyin 2,3,4 ishini tugatadi

  }; 

}
console.log(sum(4)) // 10

// -=-=- rely exaple 

// berilgan obj ichidagi barcha salary larni hisoblang

// let company = {
//   sales: [
//     {name:'John', salary: 1000},
//     {name: 'Alice', salary: 1600}
//   ],
//   developer: {
//     sites:[
//       {name:'Peter',salary:2000},
//       {name: 'Alex', salary: 1800}
//     ],
//     internals: [{name:'Jack', salary:1300}]
//  },
// }

// obj bor obj ichida bulimlar bor bulimlar ichida birdan user kelsa [] buladi sales dek 
// agar bulimlar yana bulimlarga ajralgan bulsa {} buladi developer dek 


let company = {
  sales: [
    {name:'John', salary: 1000},
    {name: 'Alice', salary: 1600}
  ],
}
// let company = [
//   {name:'John', salary: 1000},
//   {name: 'Alice', salary: 1600}
// ]
// obj salary biz hisoblashimiz kerak bulgan malumotlarhing hammasi [array] ichidagi obj larda biz birinchi arraylarni topib olishimiz kerak bu userlarni topdek degani 
// 

const getCalk = (company) => {
  if(Array.isArray(company)){ // company ning ichida faqar array bulganlarni chiqardi 
    // case (1)

    return company.reduce((prev,current) => prev + current.salary,0) 
    // chiqqan har bir array valuesi (obj) current ga teng bulyapdi va prev (0) ga current.salary yane obj ichidagi salary lar qushilyapdi
  }else{
  // case (2)

  // agar else ishlasa yane tekshiryotgan malumotimiz obj bulsa uning valularini chiqarib olamiz  yane sales ni valuesini agar yana boshqa element bulmasa 
  let sum = 0
  for (let subdep of Object.values(company)){// subdep obj ichidagi keyning valulariga teng bulyapdi sales ning valuesiga 
    sum += getCalk(subdep) // sum ni sum + getCalk ga teng qilyapdi getCalk bizda prev yane obj.salary lar yig'indisiga teng edi 
    // shu blan birgalikda getCalk ga yangi parametr berib ketyapdi yane obk ichidagi key valuesini

    // endi getCalk yangi parametr bergandan kiyin buni if yana tekshiradi agar u parametr (obj valuesi) array bulsa if ishlaydi array bulmasa 
    // yana else ishlaydi va usha malumot ishidagi key valuelarini parametr sifatida yana getCalk ga beradi 

    // shu orada getCalk qiymatini sum ga qushib ketadi 
    // getCalk ga qiymat if ishlagnda salary lar qiymati birikadi 
  }
  // console.log(sum) // sum ga value else ishlaganda yig'iladi birdan if ishlasa getCalk uzida value qolib ketadi
  }
}
console.log(getCalk(company)) // bu holatda undefined chiqadi chunke 

