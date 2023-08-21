// -=-=-=-=-=-=-=- Curry function

//    - Curry function nma ?
//    - nmaga curry function kerak ?
//    - Infinite curry function ?

//  - Curry backgraund - originally came from lambda calculus
//  - Why should use currying
//      - checking methods before execution
//      - avoid passing tje same variable again and again
//      - ease complexity by dividing functions into smaller function
//      - used to create HOF
//  - Curry function - function which returns another funtion / can take multiple arguments at a time.
//      - curry function call in different ways by adding two args
//  - Why we need curry function ?
//      - ex: nested curry function exapmle sum(1)(2)(3) // lagging every step // a,b,c funcs
//      - operation examples: add, drivide, multiply, sibtruct
//  - Infinite Curry
//      - explain by adding infinite args

// -=-=-=-=-=-=-=- Curry function
// bir vahni ichida bir nechta (maltibil) argumentlarni qabul qiloladigan function turiga aytiladi
// yoke boshqa bir functionga return qilgan function ga aytiladi -/- enterweu da curry fnc nma desa shu ikkalasini aytsangiz buladi

function getDate(a) {
  return (b) => {
    return (c) => {
      console.log(a + b + c);
    };
  };
}

// buni qisqartirib shu holatda yozsakham buladi
// const getDate = (a) => (b) => (c) => a + b + c; // curry function

getDate();

// buni terminalda kursak yaxshi tushinmaymiz chrome consoleda kurish kerak
// console.log(getDate(1)) // buni console da kursak bizga
// fnc chairganimizda bu ichidagi malumotlarni chiqaradi biz ichidagi fnc larni chaqirmasak ularham malumot sifatida chiqadi

// value:
// (b) => {
//   return (c) => {
//     console.log(a + b + c)
//   }
// }

// shu valueni chiqarib beradi chunke buni ichidagi fnclar chaqirilmagan shuning uchun shu holatda chiqyapdi ichidagi fnc ni chaqirish uchun yana bitta () quyiladi

// console.log(getDate(1)(2)) // bu holatda getDate va uning ichidagi birinchi fnc chaqirilyapdi

// value:
// (c) => {
//   console.log(a + b + c)
// }

// bu holatda ohirgi fnc chaqirilmaganligi uchun shunday chiqadi hammasini chaqirsak javob chiqadi

// console.log(getDate(1)(2)(3)) // bu holatda hammasi chaqirilganligi uchun javob chiqadi 6

// -=-=-=-=-=- Carry function deb shunga aytiladi
// carry (kutarib yurish) getDate uzining ichidagi fnclarni kutarib yuribdi degan manoga kelsak buladi

// Matimatik amal bajarishimizda bu bizga juda qul keladi Boshqa narsalarda sal qiyinroq buladi ishlatish busizham u ishlarni qilsak buladi

// Real projectlarda bundagi (1)(2)(3) parametrlarni (1,2,3) deb bersak osonroq buladi oddiy fncdaham bu qilgan ishni qilgan bulamiz

function getFunc(a, b, c) {
  console.log(a + b + c);
}
console.log(getDate(1, 2, 3)); // 6 / bu holtda oddiy function daham u qilgan ishni qilsak buladi

// -=-=-=-=- Real Example

// curry function oching
// bitta fnc ichida return blan 3 ta callback fnc ochilgan va eng kattasi (expration) fnc ga berilgan argument plus yoke menus bulishiga qarab qolgan argumentlar qiymati ustida qushish ayirish amallarini bajarsin

const operation = (type) => {
  return (a) => (b) => (c) => {
    switch (type) {
      case "plus":
        return a + b + c;
        break;
      case "menus":
        return a - b - c;
        break;
    }
  };
};

const math = operation("plus"); // 6
// const math = operation('menus') // -4

console.log(math(1)(2)(3));

// Homework

// 1.
// infinite holatini qilib kelish kerak
// yane math(1)(2)(3)()()() - nechta yozishimizdan qatiy nazar hammasini qushib berishi kerak

// 2.
// huddi shu functionni odatiy decloration fnc da yozish kerak
math("plus", 1, 2, 3, 4); // buham infinite bulishi mumkun

// 3.
mergeWords("There")("is")("no")("spoon.")();
// value: 'There is no spoon.'
