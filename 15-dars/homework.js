// Moment.js Kutubhonasini Qulda yasaymiz


// O'zbekiston vaqti uchun offsetni aniqlash
const offset = 4; // O'zbekistonning UTC offseti +4

// Hozirgi vaqtni olish
const now = new Date();

const utcMilliseconds = now.getTime();
const uzTimeMilliseconds = utcMilliseconds + (offset * 60 * 60 * 1000);
const date = new Date(uzTimeMilliseconds); // date Uzbekiston vahtiga tenglashdi


// -=-=-=- Time

// Soat va daqiqalarni olish
const hours = date.getHours();
const menutus = date.getMinutes();
const seconds = date.getSeconds();
const MilliSconds = date.getMilliseconds();
console.log(hours, menutus, seconds,MilliSconds)

// Soat va Daqiqalar 01,02 bir xonaliklari oldidan 0 quyilgani 
let NewHours = hours.toString().padStart(2,0)
let NewMenutus = menutus.toString().padStart(2,0)
let NewSconds = seconds.toString().padStart(2,0)

// AM yoki PM formatini aniqlash
const ampm = hours >= 12 ? "PM" : "AM";

// Soatni 12-ga keltirib chiqarish / soat dagi 13,14...24 larni 1,2...12 qilib ketish
const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
{
  // -=- Nima Uchun yozilganligi
  // 12 % 1...11 gacha kichi sonni uzi chiqadi 1,2...12 -
  // soat 12 bulganda 12 % 12 = 0 buladi va bu holatda if else 12 ni chiqaradi
  // 13...24 % 12 ga bulinsa qoldiq 1,2...12 bulib ketadi

  {
    // !_!_! Eslatma !_!_!
    // Har doim  kichik sonni uzidan katta songa qoldiqli (%) blan bulsak qoldiq kichik sonni uzi buladi
    // console.log(2 % 2); // 0
    // console.log(2 % 3); // 2
    // console.log(2 % 12); // 2
  }
}

// -=-=-=- Date

// Yil, Oy va Kun larni olish.
const Year = date.getFullYear();
const Month = date.getMonth() + 1;
const Day = date.getDate();
const WeekDay = date.getDay(); // bu index buyicha haftani 0 dan sanaydi

// Oy va kunlar b=1 xonalik bulsa oldidan 0 qushish 
const NewMonth = Month.toString().padStart(2,0)
const NewDay = Day.toString().padStart(2,0)
const NewWeekDay = WeekDay.toString().padStart(2,0)

// Sanalarni ifodalashda "st", "nd", "rd", va "th"  ni chiqarish 
    // "st": 1-raqamli sanalarga (1st - birinchi)
    // "nd": 2-raqamli sanalarga (2nd - ikkinchi)
    // "rd": 3-raqamli sanalarga (3rd - uchinchi)
    // "th": 4-raqamli va undan yuqori sanalarga (4th - to'rtinchi)

    function getDayWithSuffix(date) {
      switch (date % 10) {
        case 1:
          return `${date}st`;
        case 2:
          return `${date}nd`;
        case 3:
          return `${date}rd`;
        default:
          return `${date}th`;
      }
    }

  const getDaySuffix = getDayWithSuffix(Day)

// hafta kunlarining nomini berish
const week = [
  "Yakshanba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];
const WeekDayName = week[WeekDay];

// Oylarning nomlarini beish
const Mon = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];
const MonthName = Mon[Month - 1]; // boya +1 qilganimiz uchun -1 qildik chunke array ham 0 indexdan boshlanadi


// -=-=-=- Multiple Locale Support

 function moment(param) {
  return{
    format : (a) => {
      // parametr Katta va Kichik varianti 
      let BigA = a.toString().toUpperCase()
      let SmallA = a.toString().toLowerCase()
    
      // Tuliq soat 
      let H_M = `${NewHours}:${NewMenutus} ${ampm}`
      let H_M_S = `${NewHours}:${NewMenutus}:${NewSconds} ${ampm}`

      if(a === 'LT'){
        return `${NewHours}:${NewMenutus}`
      }else if(a === 'LTS'){
        return `${NewHours}:${NewMenutus}:${NewSconds}`
      }else if(a === 'L' || a === 'l'){ // sama chiqishi kerak
       return a === BigA
       ?`${NewDay}/${NewMonth}/${Year}`
       :`${Day}/${Month}/${Year}`
      }else if(a === 'LL' || a === 'll'){
        return a === BigA
        ?`${Day} ${MonthName} ${Year}`
        :`${Day} ${MonthName.slice(0,3)} ${Year}`
      }else if(a === 'LLL' || a === 'lll'){
        return a === BigA
        ?`${Day} ${MonthName} ${Year} ${H_M}`
        :`${Day} ${MonthName.slice(0,3)} ${Year} ${H_M_S} `
      }else if (a === 'LLLL' || a === 'llll'){
        return a === BigA
        ?`${Day} ${MonthName} ${Year}, ${WeekDayName} ${H_M}`
        :`${Day} ${MonthName.slice(0,3)} ${Year}, ${WeekDayName.slice(0,4)} ${H_M_S}`

      }
      else{return `Bunday parametrli kod yuq`}
    },
    fromNow: (b) => {

    },
    
  }
  
}
// console.log(moment.locale())      // uz-latn
console.log(moment().format('LT'))   // 10:31
console.log(moment().format('LTS'))  // 10:31:38
console.log(moment().format('L'))    // 07/08/2023
console.log(moment().format('l'))    // 7/8/2023
// console.log(moment().format('LL'))   // 7 Avgust 2023
// console.log(moment().format('ll'))   // 7 Avg 2023
// console.log(moment().format('LLL'))  // 7 Avgust 2023 10:31
// console.log(moment().format('lll'))  // 7 Avg 2023 10:31
// console.log(moment().format('LLLL')) // 7 Avgust 2023, Dushanba 10:31
// console.log(moment().format('llll')) // 7 Avg 2023, Dush 10:31




// Format date 
// else if(a === 'MMMM Do YYYY, h:mm:ss a' ||a === 'dddd' ||a === 'MMM Do YY' || 
//                a === 'YYYY [escaped] YYYY' ||a === '' ){
//         // return `${MonthName} ${getDaySuffix(Day)} ${Year}, ${H_M_S}`
//         return a === 'MMMM Do YYYY, h:mm:ss a'?`${MonthName} ${getDaySuffix} ${Year}, ${H_M_S}`
//         :a === 'dddd'?`${WeekDayName}`: a === 'MMM Do YY'
//         ? `${MonthName.slice(0,3)} ${Day} ${Year.toString().substring(0,2)}`
//         : a === 'YYYY [escaped] YYYY' ? `${Year} escaped ${Year}` 
//         : a === '' ? `${Year}-${NewMonth}-${NewDay}`:'';
//       }

// console.log(moment().format('MMMM Do YYYY, h:mm:ss a')) // Avgust 7th 2023, 17:09:17 PM
// console.log(moment().format('dddd')) // Avgust 7th 2023, 17:09:17 PM
// console.log(moment().format("MMM Do YY")) // Avgust 7th 2023, 17:09:17 PM
// console.log(moment().format('YYYY [escaped] YYYY')) // Avgust 7th 2023, 17:09:17 PM
// // console.log(moment().format('')) // Avgust 7th 2023, 17:09:17 PM