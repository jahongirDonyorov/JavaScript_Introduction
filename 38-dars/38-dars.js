// -=-=-=-=-=-=-=-=-=- DOM 7 (DOM Methods)

// -=-=-=-=- Range methods - select / remove / deselect / wrap 
//   -=- let renge = new range(); - belgilanishi kerak bulgan textni save qilib turish uchun 
//      - range.setStart(node, offset) - qayerdan boshlash  
//      - range.setEnd(node, offset) - qayargacha bulgan joyni tanlash 
//      - window.getSelection().addRange(range) - tanlangan joyni highlite qilish kk  
//      - EX: - range with paragtaph / nested p with nth count 

//      - range.setEndBefore() / setEndAfter() - right before and after 

// -=-=-=-=- Range edit methods 
//      - range.deleteContents() - remove range content from document 
//      - range.extractContents() - kesib olish, like splice / return new node 
//      - range.cloneContents() - copy of node / returns new node 
//      - range.insertNode(newNode) - insert node in the range 
//      - range.surroundContents(newNode) - range'ni node bn o'rash

// -=-=-=-=- Range Properties 
//      - range.startContainer() / endContainer() - ra 
//      - range.startOffset() / endOffset() 
//      - range.collapsed - boolean 



// #-#-#-#-#-#-#-#-#-#-#-#-# 


// -=-=-=-=-=-=-=-=-=- Range 
// bu methodlar yordamida biz textning uzimizga keraklicha joyini select qilib olsak buladi defauld holatda buladi biz belgilamasakham automatiske belgilangan buladi 


// -=-=-=-=- new Range 
// belgilanishi kerak bulgan textni save qilib turish uchun ishlatiladi 
let range = new Range()

// -=-=-=-=- Range Methods 

// -=-=-=-=-=-=-=- setStart(text,number)
// qayardan boshlab select bulishini bildiradi 

// 2 ta parametr oladi 
// 1 - qaysi element select bulishi 
// 2 - qayerdan boshlab select bulishi 
// range.setStart(data, 0) // data elementini 0 indexdan boshlab select qiladi

// -=-=-=-=-=-=-=- setEnd(text,number)
// qayargacha select bulishi

// 2 ta parametr oladi 
// 1 - qaysi element select bulishi 
// 2 - qayergacha select bulishi 
// range.setEnd(data, 5) // data elementini 5 - indexgacha select qiladi

// Bular bu uzidan uzi ishga tushmaydi bularni uzimiz ishlatishimiz kerak 

// -=-=-=-=-=-=-=- window.getSelection().addRange(range)
// bu bizga uzimizga kerakli rangeni ishga tushiradi 

// window.getSelection().addRange(range)
// buning strukturasi shunday ohirida addRange(...) ichiga ishga tushirmoqchi bulgan rangni yozamiz 

// -=- lekn bu ikkala holatdaham hatoliklar mavjud (ishlamaydi)


// 1 - biz data id li tag blan ishlayapmiz tag ichida faqat text emas kublab elementlar bulishi mumkun 
// yoke huddi shu id li kuplab taglar bulishi mumkun shuning uchun 
// aynan qaysi ustida amal bajarboqchiligimizni aytishimiz kerak 
// Masalan: data ichidagi firstChlid (birinchi element) ga nisbatan ishlasak buladi 

// range.setStart(data.firstChild, 0)
// range.setEnd(data.firstChild, 5)
// // firstChild qilganimiz uchun datalar kup bulsaham ularning ichidagi elementlar ustida amal bakarilyapdi 
// window.getSelection().addRange(range)
// bu holatda tug'ri ishlayapdi 


// lekn data ni uzini ishlatsak bu data id li taglar buyicha select qiladi 
// data id li taglar kupligi uchun aynan qaysi ekanligini belgilab olishimiz kerak 

range.setStart(data[0], 0) 
range.setEnd(data[1], 1)
// 0 data ni 0 elementidan boshlab 1 data ni 1 - elementigacha select qilsin deyapmiz 
// bu holatda harflarni dan olmayapdi firstChild qilmaganligimiz uchun birdan ichidagi elementlarni hisoblaydi
window.getSelection().addRange(range)