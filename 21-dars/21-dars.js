
// -=-=-=-=-=- Advenced function 
// Muntarija 
//   - function call
//      - func.call(context, ...args) - syntax
//      - object ref link - from the ref // this gets undefined
//      - func.call - explicity set the this 
//      - let result = func.call(this, ...arguments)
//   - function apply
//      - call vs apply - function.call(contex, ...args); //
//                        func.apply(context, args); // args only array type
//   - function bind
//      - let copyMethod = func.call(constext, ...args); .. returns invokable function copy copyMethod()

// -=-=-=-=-=- function call 
// bu this ga qiymat biriktirish uchun chiqarilgan 

 let user = {
  name: 'Webbrain',
  lastName: 'Academy',
  title: 'IT CEnter',
  getFunc() {
    console.log(`${this.name} ${this.lastName}`)// thi orqali obj dagi keylarni chaqiryapmiz 
  } 
 }
 user.getFunc() // biz obj ichidagi fnc ni charsak bulyapdi 
 // value: Webbrain Academy chiqyapdi 

 // yana huddi shunday getFunc fnc bulgan obj ochsak 

 let user1 = {
  name: 'GEEK',
  lastName: 'Academy',
  title: 'IT CEnter',
  getFunc() {
    console.log(`${this.name} ${this.lastName}`)// thi orqali obj dagi keylarni chaqiryapmiz 
  } 
 }
 user.getFunc() // biz obj ichidagi fnc ni charsak bulyapdi 
 // value: GEEK Academy chiqyapdi 

 // ikkalasifaham tug'ri ishlayapdi biz getFunc ni deynamic qilishimiz mumkun ekan 
 
 // Bizga backEnd bizga malumot yuboryotganda fnc ni yozib yubormaydi 


let users = [
  {
    name: 'GEEK',
    lastName: 'Academy',
    title: 'IT Center',
  },
  {
    name: 'Webbrain',
    lastName: 'Academy',
    title: 'IT CEnter',
  }
]

// bizga malumotlar backEnd dan bu holatda keladi kurgan bulsangiz buyirda fnc yuq 
// biz fnc ni uzimiz yozsak buladi Bu fnc Jenirek Function buladi
function getFull(smth) { 
  console.log(`${this.name} ${this.lastName}`)
} 
getFull()// bu holatda undefined undefined chiqadi chunke this da hechqanday malumot yuq 
// agar this obj ichida bulganda uning qiymatini olardi hoz this da hechqanday qiymat yuq 

// Biz this ga call orqali qiymat biriktirishimiz mumkun ekan 
// call(this,param) 2 ta parametr oladi 
// 1 - this nmaning qiymatini olishi 
// 2 - functionga parametr buladi 

getFull.call(user, 'Javlon') // user malumotlari getFull this ga teng buldi va 'Javlon' getFull ning parametiri smth ga teng buladi
// value: Webbrain Academy
// bu holatda getFull ichidagi this userning qiymatlariga teng bulyapdi 
getFull.call({name:'John', lastName:'Doniyarov'}) // Jahon Doniyarov
// biz call ning 1-parametriga nma qiymat bersak fnc ichidagi this ushanda teng buladi 

// backEnd dan kelyotgan malumotda obj lar kup va nomi yuq [{...},{...},{...}] biz bularniham thisga qiymat qilib berask buladi 
// birinchi array ichidagi objlarni bittalab olishimiz kerak buning uchun fordan foydalanamiz 

for(us of users){
  // console.log(us) // array ichidagi 2 ta objniham bittadan chiqarayapdi 
  getFull.call(us)
}

// -=-=-=- Bu Jenirek function deyiladi bitta fnc yoziladi va u hammasiga mos keladi 


// -=-=-=-=-=-=-=- apply 
// bu ham call blan birhil ishlaydi farqi bunda parametrga qiymatni [] ichida yozamiz
// getFull(user, 'jahon') //  bu holatda smth ga qiymat berolmaymiz 
// getFull(user, ['jahon',...]) //  bu holatda smth ga qiymat berolamiz 

getFull(user,['John'])

// -=-=-=-=-=-=-=- Bind 
// buham call va apply blan bir hil ishlaydi faqat bu function qaytaradi qaytgan fnc ni  chaqirganimizdagina ishlaydi 
// bu parametrga qiymatni call ga uxshab beradi (this, 'Jorj)

getFull.call(user) // value: Webbrain Academy
getFull.apply(user) // value: Webbrain Academy
getFull.bind(user) // value:         - malumot yuq bundan 
// ishlashi uchun qaytyotgan functionniham chaqirishimiz kerak 
// 1 - usul 
// constraktor (nisted) function chaqirgandek chaqiramiz ()()
getFull.bind(user)() // value: Webbrain Academy
// bu function qaytaradi biz buni verablega tenglashtirib verableni chaqirsak kiyin javob chiqadi 
let mt = getFull.bind(user) // mt functionga teng bulyapdi biz endi mt ni fnc sifatida chaqirsak kiyin bind qiymati chiqadi 
mt() // Webbrain Academy

// bind farqi shunda bu birinchi fnc ni copy qilib oladi va uni verablega qaytaradi va verable chaqirilganda ishlaydi 