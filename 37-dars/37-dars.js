// -=-=-=-=-=-=-=- DDOM 6 

// -=-=-=-=-=-=-=-=-=-=-=-=-= Form 

// -=-=-=- document.forms - get all forms / let from = document.froms.myForm 
//    - document.froms.myFrom - <from name='myFrom'>...</from>
//    - get froms without name / by array index 

// -=-=-=- Elements - get elements inside from 
//  - from.elements.age = <input name='age'>...</input>
//    - array - ager 2ta age input bolsa 
//    - obj - gar 1ta age bolsa 

// -=-=-=- Shorten Element - set ref pic 
//    - from.age vs from.elemnts.age 
//    - from.age.name - can't be changed
//    - from.elemnts.age.name - can be changeble

// -=-=-=- Select - <select name='select'>...</slect>
//    - options - select.options[2] = true 
//    - value - slect.value = 'banana'
//    - slectindex = select.selectedIndex =2
//    - can be selected by id and clasname 

// -=-=-=- Input - focus / blur 
//    - onblur - click outside of input 
//    - onfocus - click the input 
//    - try input email validation error 

// -=-=-=- Submit - from 
//    - action - url 
//    - method - method
//    - onsubmit = (event) =>


// -=-=-=-=-=-=-=-=-=-=- fromlarni olish

// -=-=-=- document.forms
// bu bizga htmldagi barcha form malumotlarini chiqarib beradi 
console.log(document.forms) 

// -=-=-=- document.forms[index]
// bu uzimizga kerakli fromni index buyicha oladi 
// uzimiz hohlaganimizga kirish uchun index nomerini yozishimiz kerak forms[0]
console.log(document.forms[0]); // bizga 0 indexdagu birinchi formni chiqarib beradi 

// -=-=-=- document.froms.name 
// bu fromdagi name blan olish uchun ishlatiladi 
// agar from kup buladigan bulsa va biz buni sanam utirmasdan namemini yozibham chiqarsak buladi 
console.log(document.forms.formBunker) // formBunker name li form ni chiqaribbberadi 


// -=-=-=-=-=-=- elements
// bu formi chidagi malumotlar blan ishlash uchun ishlatiladi 
let form = document.forms.JsForm;

// -=-=-=-=-=- from.elements
// from ichidagi malumotlarni chiqarib beradi 
console.log(form.elements) // JsForm ichidagi malumotlarni chiqarib beradi 

// -=-=-=-=-=- from.elements.inputname
// input name ni yozib form ichidagi uzimizga kerakli name dagi inputni olishimiz mumkun 
console.log(form.elements.login) // JsForm ichidagi login name li inputni chiqarib beradi
// agar bitta from ichida shunga uxshab 2 ta login bulsa array qaytaradi [] ichida index buyicha hohlaganimizni olishimiz mumkun 
// login:RadioNodeList(2) [input, input, value: ''] radioga uxshab node elementga uzgartirib quyayapdi / lekn bu holat juda kam buladi 

// -=-=-=-=-=- from.elements.inputname.value 
// usha inputdagi valuelarni olamiz bu blan 
console.log(form.elements.login.value) // input tag uziga defulte value berib quymasak hozir chiqmaydi chunke inputda value hozir mavjud emas 

// -=-=-=-=-=-=- bularni elementsizham obkelsak buladi 
console.log(form.password) // bizga password name li form ni chiqaryapdi 


 // #-#-#-#-#-#-#-#-#-#-#-# 


 // -=-=-=-=-=-=-=- Select 
 // biz html dan selectniham olsak buladi 
 console.log(form.select) // select malumotlarini chiqarib beradi 

 // -=-=-=- options 
 // bu bizga select ichidagi option larni chiqaradi 
 console.log(form.select.options) // ichidagi hamma optionlarni chiqaryapdi 

 // uzimizga keraklisini olishimiz uchun [index] yozishimiz kerak 
 
 console.log(form.select.options[1]) // 1 - indexdagi 2 - option Russia ni chiqaryapdi 
 // bizda selecy degan id ham bulganligi uchun from.select demasdan select (id) ni uzini yozibham ishlatib ketsak buladi 
 console.log(select.options[2]) // Korea ni chiqarib beryapdi 

 // -=-=-=-=-=- Hozir defulte holatda birinchisida uz turibdi JS dan biz buni uzgartirsak buladi uzimiz hohlagan option ni birinchiga quyishimiz mumkun 
 // Buni 3 ta yul blan bajarsak buladi .options, .value, selectedIndex 

 // -=-=-=-=- value 
 // qaysi valuedagi option birinchida chiqishini belgilasak buladi 
  console.log(select.value = 'ru') // endi saytga kirganimizd Russia defoult holatda birinchida turadi 

// -=-=-=-=- selectedIndex
// qaysi index option birinchida chiqishini belgilasak buladi 
console.log(select.selectedIndex = '2') // Korea defoult holda birinchida chiqyapdi 


// #-#-#-#-#-#-#-#-#-#-#-# 


// -=-=-=-=-=-=- input - blur / focus
// inputlarni tekshirish uzimizga moslash uchun ishlatiladi
// masalan input email bor unga @ yozilmasa error @ yozilmagan deb chiqishi kerak va input borderi red bulishi kerak  

// Buning uchun onblur va onfocus lardan foydalanamiz 

// -=-=-=-=-=-=- onblur
// bu bizga inputga yozib bulib boshqa inputga utganda ishlaydi 

login.onblur = (event) => { // event ni olvolyapmiz  
  // console.log(event) // onblur ishlayapdi biz inputdan chiqishimiz blan event chiqaryapdi 
  // event dan hamm malumot kelyapdi uning target bulimidagi value da inputga kiritgan valuelarimiz bor 
  // console.log(event.target.value) // inputga kiritgan valuelarimizni hiqaryapdi 
  
  // biz endi aytamizke inputdan kelyotgan malumotda @ bulsa input pasidagi loginerror ga @ yozilmagan deb text qushamiz
  // agar @ bulsa tug'ri email deb txet qushamiz 
  
  if(event.target.value.includes('@')){
    loginError.innerHTML = "tug'ri email kiritildi"
    loginError.style.color = 'green'
  }else{
    loginError.innerHTML = '@ yozilmagan'
    loginError.style.color = 'red'
  }
  // code tug'ri ishlayapdi lekn error payda bulgandan kiyin inputni uzgartirayotganimizda 
  // error uchib ketmayapdi biz aytishimiz kerakke xato chiqqandan kiyin boshqatdan yozishni boshlashimizdan error yuq bulishi kerak 

}
// buning uchun oninputdan foydalanamiz 
login.oninput = (event) => {
  loginError.innerHTML = null
}
// aytayapmizke login oninput bu;ganda yani inputda uzgarish bulsa yozilsa yoke uchirilsa (kechagi darsda kurgandik 3 xil turini)
// loginError null bulsin deyapmiz

// lekn bundanham optimal yuli mavjud

// -=-=-=-=-=-= onfocus 
// bu input focus bulganda (kirganimizdan)  ishga tushadi yozishham uchirishham kerak emas 

login.onfocus = (event) => {
  loginError.innerHTML = null
}
// bu holatda inputga kirganimizdan loginError da bror narsa chiqqanbulsa uchirib yuboradi 

// password qisminiham huddi shunday qilsangiz buladi 