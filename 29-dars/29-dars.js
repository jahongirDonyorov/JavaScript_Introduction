// -=-=-=-=-=- Moduls 

//    - Module nima ?
//    - Old organisition way
//    - import va export 
//    - direct import 
//    - default export va import 
//    - export vs default export 
//    - changing import name 

// -=-=-=-=-= What is Module ?
//    Work only http(s)not local 

// -=-=-=-=- Module tug'ri ishlashi uchun biz htmlda script tagiga type='module' qilishimiz kerak 
// html file ga kirib kurishingiz mumkun 

// import va export tushinchalari mavjud import qabul qilish export yuborish 

// bizda kodlar mavjud lekn kodlarimiz juda kupayib uqishga (tushinishga) xalaqt beryapdi 
// biz bu kodlarni addelne js file ga utkazib usha kodni import qilib olib shu (asosiy) js file da ishlatishimiz mumkun ekan 

// let user = [
//   {id:1, name:'John'},
//   {id:2, name:'John'},
//   {id:3, name:'John'},
//   {id:4, name:'John'},
//   {id:5, name:'John'},
//   {id:6, name:'John'},
// ]

// tassavur qiling shunda 100 qator malumot bor bitta file da kod kupayb ketadi bu bizni kodni uqishimizda chalgib ketishimizga olib kelishi mumkun 
// biz addelne js file ochib bu kodlarni usha yerga ozib ularni bu yirda ishlatsak buladi 

// mock.js file ochib oldik va uni ichiga bu malumotlarni yozdik

// endi mack.js dagi malumotlarni ishlatishimiz uchun Importy (olish) va Export (yuborish) dan foydalanamiz 

// mock.js da biz malumotlarni yuborishimiz uchun exportdan foydalanamiz (kirib kurishingiz mumkun)

// uu malumotlarni yuborganidan (export) sung biz ularni ishlatish uchun qabul (import) qilib olishimiz kerak buladi 

// biz malumotni bu yirda qabul qilib ololmaymiz import ni htmlda script tagi ichida type='modul' bulgandagina ishlatolamiz

// bularning hama ulanish misollari html da ulab kursatilgan bu type='module' ichida bulmasa ishlamaydi 
// buyirda importlarni ishlatish uchun html script tagiga birinchi type='module' qilib kiyin shu file ni src blan ulashimiz kerak 

// buning javoblarini terminalda kurib bulmaydi chrome console da kursak buladi 

// -=-=-=-=- import (qabul qilish)
// import qilishni html ga utib kurishingiz mumkun 

//  import formulasi
//    1      2      3       4
// import {users} from './mock.js'

// 1 - import kalit suz 
// 2 - {nmani import qilyotganimiz} - nimani olyotganimiz 
// 3 - from - qayardan 
// 4 - file manzili

// Biz kuplab malumotlarni export qilishimizham mumkun

// 1 - usul 
// har bir yubormoqchi bulgan malumotimiz oldiga export quyib chiqamiz

// 2 - usul 
// export {icgida yubormoqchi belgan malumotlarimizni nomini  yozib quyamiz , blan ajratilgan holatda}

// export{getName, users, name, va hokozo}

// bularni qabul (emport) qilishdaham , quyib hammasini yozib ketaveramiz
// import {getName, users, name} from './mock.js'



// -=-=-=-=-=-=- export default

// export ni uzida export qilinyotgan malumot qanday bulsa import qilishdaham huddi shu nom yozilardi deskrakche dek export defaultda esa unday emas 

// let mentor = [1,2,3]

// export default mentor

// import ixtiyoriyNom from './mock.js'



/// -=-=-=-=-=-=-=-=-

// biz Arrayga prototypr blan remove fnc qushsak va uni boshqa file larda ishlatmoqchi bulsak
// agar oddiy holatda export import qilsa uni ichlatidh uchun chaqirilgan veriable nomini yozishimiz kerak buladi 
// buz buni yozmasdan uzini file da qanday ishlatilsa shunday ishlatib ketadigan qilishimiz mumkun 

// yangi prototyp.js file ochib olamiz  

// bunday holda export qilish shart imas importni uzida ulab olsak buladi 
// import '.bizdan manzil yoziladi'


// bu kodlarni hammsaini htmlda ishlatib misollar keltirganmiz 
// lekn bularni shuyirdaham ishlatsak buladi faqat buning uchun html da typr='module' dan sung src blan shu fileni ulashimiz kerak buladi 
// lekn impot qilingan valuelarni biz terminalda kurolmaymiz chrome console da kursak buladi 

// import './prototyp.js'
// let a = [1,2,3,4,5,6,7,8]

// a.remove(3) // 3 ni olib tashlayapdi code ishlayapdi  / htmlda ulanganingizdan kiyin ishlating
// valueni chrome consolda kursa buladi terminal chiqarmaydi
