// -=-=-=-=-=-=-=-=- Advanced
// -=-=-=-=-=- Proxy

//   - Proxy - let     = new Proxy
//        - what is proxy ?
//        - target -is an obj to wrap
//        - handler - proxy configuration
//   - get(target,prooperty,receiver) // returning the function is value
//        - target - first arg in Proxy
//        - property name // passed by target call
//        - obj itself, this.
//        - ex: check given number is exist array using get
//        - ex: dictionary with default value in obj
//   - set(target, property, value receiver) // returning the function is value
//        - can add directly with dor or
//        - get validate before adding
//   - ownkeys(target) // returning the function is value
//        - works onlay with object loop
//        - validate before returning res
//        - Object.values(obj)
//        - Object.keys(obj)
//        - Object.entries(obj)
//        - ex: show keys without_
//   - has(target,property)
//        - ex: range from to // 1 bn 10 orasida son bor yoke yuqligini aniqlang.
//   -  Reflect -simplification of Proxy
//        - Built object - work only with set and get
//        - Reflect.set(user, 'smd', 'webbrian'); // user.smd
//        - Reflect.get(target, key)
//   - Reflect Type
//        - dynamic evaluated methods can loose this // immediately call
//        - ex: hi = obj.hi // hi() - gives undefined for this
//        - give 5 min to fix problem

// new Proxy() - NoPrivmatives ga nisbatan ioshlatiladi
// bu export levle dagi malumot hisoblanadi hammayam tug'ridan tug'ri buni ishlatavermaydi

let user = {};
let proxy = new Proxy(user, {});
// Proxy() 2ta parametr oladi
// 1 - si nimaga nisbatan ishlatayotganimiz
// 2 - si canfeguratsia (yane {} buladi uni ichiga biz 1-param ustida qandaydur amal bajarm,oqchi bulsak ushani yozamiz)

console.log(user); // {}
console.log(proxy); // {}
// ikkalasidaham bir hil malumot chiqadi boshida
let user2 = {
  name: "webbrian",
  _stir: 12345,
};

let proxy2 = new Proxy(user2, {
  // bunga nisbatan biror amalni shuni ichida bajaramiz

  // proxy ning uzini functionlari mavjud
  // 1 - get(), 2 - set(), 3 - ownKeys()

  // -=-=-=-=-=-=-=-=-=-=-=-  get(target,property,receiver){}

  // get uziga 3 ta parametr oladi

  // 1 - target -  butun boshli bizga kelyotgan obj
  // 2 - property -  uning ichidagi qiymatlar
  // 3 - receiver -

  get(target, property, receiver) {},
});

console.log(user2.name); // webbrian
// proxy ichiga fnc qushishimizdan oldin oldin
console.log(proxy2.name); // webbrian
// malumotlar bir xil chiqadi

// proxy ga uzning fncsini yozganimizdan keyin
console.log(user2); // { name: 'webbrian', _stir: 12345 }
console.log(proxy2); // { name: 'webbrian', _stir: 12345 }
// ikkalasidaham malumot chiqyapdi lekn ichidagi bitta keyni valuesini olishda xatolik buladi

// get fnc ni uzi yozilgan holat hechqanday return qaytmagan
console.log(user2.name); // webbrian bunda tug'ri ishlayveradi
console.log(proxy2.name); // undefined chiqadi {} ichiga uzgartirish kiritishimiz blan buning malumotlari yuqolib qoladi

// buni tug'irlash uchun  proxy {} ichida get fnc ochib unda property larni return qilishimiz kerak

let proxy3 = new Proxy(user2, {
  // bunga nisbatan biror amalni shuni ichida bajaramiz
  get(target, property, receiver) {
    // return qilgan malumotimiz proxy2.name  yoke lubboy bror narsa yozganimizda chiqadi

    // return 'Hi name' // hozir biz proxy2.nma yozsakham shu suz chiqadi
    // bi user2 ni malumotlari chiqarish uchun target (obj) ichidagi valuelar prooperty ni qaytarishimiz kerak target[prooperty]; [] bu keyni deynamic holatda olish uchun
    // return target[property] // kelyotgan .dan kiyingi malumot [] ichiga kelyapdi / target._stir qilgan bilan birhil

    // biz _ blan boshlangan keylar prived bulsin tashqarida ishlamasin deyishimiz mumkun
    if (property.startsWith("_")) {
      // property bizga string holatda keladi shuning uchun unda stringning methodelarini ishlatsak buladi
      return `access for ${property} is dineid`; // agar malumot boshida _ bulsa shu chiqsin deyapmiz
      // bu hafsizlik uchunham qilinadi brawserdan malumotlarni olishni oldini oladi
    } else {
      return target[property];
    }
  },
});
// return Hi name bulganda
//  console.log(proxy3.name) // Hi name chiqyapdi

// return target[prooperty] bulganda
console.log(proxy3.name); // webbrian chiqyapdi

console.log(proxy3._stir); // access for _stir is dineid - bizga bu malumotga kirish mumkun emas deb chiqadi
// proxy shu uchun bizga kerak buladi yane qaysidir malumotni exes qilishimizdan oldin u malumotni uzimizni qoidalarimizga moslash

proxy3.title = "It Center";

console.log(proxy3); // { name: 'webbrian', _stir: 12345, title: 'It Center' }
// obj ishlatgandek ishlatib ketaveramzi

// oddiy objni uzi bulsa biz muhum malumotlarni uzgartirib quyishimiz mumkun masalan user ning passwordini uzgartirishimiz yoke yangi name qushishimiz mumkun
// biz buni oldini proxy blan olsak buladi
// buning uchun set dan foydalanamiz

let user3 = {
  name: "John",
  _Mirread: false,
  password: 12345,
};
console.log(user3.password); // 12345
user3.password = 2004; // password ni uzgartiryapmiz
console.log(user3.password); // 2004

// bu holatda uzgarib ketyapdi biz password ni uzgartirib bulmaydigan qilishimiz mumkun

// -=-=-=-=-=-=-=-=-=- set(target,property,receiver){}
// buham huddi get kabi 3 ta parametr oladi

let proxy4 = new Proxy(user3, {
  set(target, property, receiver) {
    if (property === "password") {
      return false; // agar property password ga teng bulsa u return bulmaydi / return bulmasa tashqarida uni ishlatolmaymiz uzgartiribham bulmaydi bu holatda
    } else {
      // else ishlasa return true bulib yangi malumot qushiladigan bulsin deymiz
      target[property] = receiver; // obj valuelari yangi kelyotgan valuega teng bulsin deyapmiz
      // yangi malumot qushadi
      return true; // password bulmaganlar return buladi
      // return da qaytgan qiymat proxy.aaa qilganimizda chiqar edi
    }
  },
});
proxy4.password = 1999;
console.log(proxy4); // { name: 'John', _Mirread: false, password: 2004 }
// bunda qiymat uzgarmayapdi

// lekn boshqa qiymatni uzgartirsak yoke yangi qiymat qushsak
proxy4.name = "Jahongir";
console.log(proxy4); // { name: 'Jahongir', _Mirread: false, password: 2004 } = buniham uzgarmaydigan qilishimiz mumkun ekan

//  shularga proxy deyiladi

// -=-=-=-=-=-=-=-=-=- ownKeys(target){}
// bu loop qilib beradi
// bu bitta parametr oladi buldi obj ga teng

// masalan bizga oddiy holatda chaqirgnimizda hamma malumot chiqsin lekn loop qilganimizda userning kerakli malumotlar (_ blan yozilgan ) kurinmasin desak bundan foydalanamiz
let user4 = {
  name: "John",
  age: 19,
  _email: "jahondoniyarov@gmail.com",
  _pw: 12345,
};
// _email, _pw oddiy holatda chiqishi kerak lekn loop bulganda chiqmasligi kerak

let proxy5 = new Proxy(user4, {
  ownKeys(target) {
    return Object.keys(target).filter((vl) => !vl.startsWith("_"));
  },
});

console.log(proxy5); // { name: 'John',age: 19,_email: 'jahondoniyarov@gmail.com',_pw: 12345}
// oddiy holatda hamma malumot chiqyapdi

for (vl in proxy5) {
  console.log(vl);
} // value: name, age loop qilganimizda faqat shu malumotlar chiqyapdi

// -=-=-=-=-=-=-=-=-=- has(target, property){}
// bu faqat true false ga qaytadi (bu ichida bormi degan savob bilan birhil desakham buladi)

let range = {
  from: 1,
  to: 10,
};
// 1 dan 10 gacha bror uzimizga kerakli son bormi demoqchimiz
console.log(2 in range); // false qaytaradi
// 2 bor 1 dan 10 gacha bulgan sonlar orasida lekn true chiqmaydi chunke buyirda (range) faqat 1 va 10 bor

let proxy6 = new Proxy(range, {
  has(target, property) {
    return target.from <= property && target.to >= property;
    // agar targetni fromi kiritilgan son (property) dan kichik yoke teng bulsa va targetni to si property dan katta yoke teng bulsa true chiqar deyapmiz
  },
});
console.log(2 in proxy6); // true
// bu faqat shu uchun ichlatiladi

// -=-=-=-=-=-=-=-=-=-=- Reflect
// proxy ni sodda kurinishi bu faqat setter getter da ishlaydi

// user ga malumot qushish uchun proxy ochib yotmaymiz

// -=-=-=-=-=-=-=-=-=- Reflect.set(namaga, qanday malumot qushsin)
// malumot qushadi
Reflect.set(user4, "title", "IT Center "); // user4 ga key title value IR center qushyapdi

console.log(user4);

// -=-=-=-=-=-=-=-=-=- Reflect.get(nmadan, qaysi malumotni chiqarsin)
// malumotni chiqaradi resultda
console.log(Reflect.get(user4, "_pw")); // 12345 / _pw ni qiymatini chiqarib berayapdi

let user5 = {
  name: "webbrian",
  _pw: 12345,
  get() {
    console.log(this.name, this._pw);
  },
};

// get fnc ni chaqirsak hamma malumot tuliq chiqadi
user5.get(); // webbrian 12345

// lekn buni boshqa veriablega tenglashtirsakche
let data = user5.get; // chaqirilmagan fnc ni date ga tenglashtirdik

// date(); // undefined undefined - chiqadi chunke this ning qiymati yuqoib qolyapdi nmaga nisbatan / this date ga nisbatan ishlayapdi va date da malumot yuq
// buni tug'irlash uchun thisga qiymat yane nmadan qiymat olishini aytishimiz kerak
data.call(user5); // this user5dan qiymat olsin deyapmiz
// value: webbrian 12345 - chiqyapdi

// this yuqolishi

let us = {
  name: "John",
  getName() {
    console.log(this.name);
  },
};

let a = us.getName; 
// har doim shu holatda qilganimizda this qiymatini yuqotib bus {} teng bub qoladi
// yane qiymatni a dan izlaydi a faqat us ni ichidagi fnc ga teng bulyapdi uni ichida name boshqa keylar yuq shunga undefined chiqadi
// biz thisga nmadan qiymat olishini aytsak buladi apply, call, bind yordamida
a(); // undefined
a.apply(us);
a.call(us);
a.bind(us); // bindda qiymat tug'ridan tug'ri chiqmas edi u qiymatni qaytaradi
let b = a.bind(us);
console.log(b); // bu holatda binddan kelyotgan qiymatni kurishimiz mumkun
let c = us;
c.getName(); // John chiqadi tug'ri ishlaydi 
console.log(c.getName()); // undefined chiqadi chunke return blan malumot ayatmayapdi

// let a = us.getName() chaqirib tengkashtirsak birdan javobi a ga tenglashib xatolik bulmaydi
// javobini chiqaradi lekn bu holatda (us.getName) qilaganimizda this qiymatini yuqotadi a()ni chaqirganimizda


// thi qiymatini uzgartirish 
{
  // let us = {
  //   name: "John",
  //   getName() {
  //     console.log(this.name);
  //   },
  // };
  
  // let c = us;
  
  // let customThis = { name: "Alice" };
  // us.getName.call(customThis); // "Alice" ni chiqaradi
  // c.getName.call(customThis); // "Alice" ni chiqaradi
  
}
