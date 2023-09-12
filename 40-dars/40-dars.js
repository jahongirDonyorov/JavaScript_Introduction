// -=-=-=-=-=-=-=-=-= Clickjank attack 
// Siz malumotning ustiga bosganingizda boshqa bir malumot bosilib ketishiga aytiladi 
// user click qilganda uning malumotlarini ug'irlash uchun ishlatiladi 


const getData = (e) => {
  console.log(e, window.location)
}

// Masalan 
// victom class li element bosilganda window.location malumotlari consolda chiqyapdi (bu userning shaxsiy malumotlariham bulishi mumkun)
// victom ni kurinmas qilib quyib uning joyiga sohta odamlarni jalb qiluvchi suv h1 da yozilgan
// odamlar usha suzga qiziqb suz ustiga bosganda victom ishga tushadi va userning malumotlarini oladi 
// shu narsaga Clickjank attack deyiladi 

// -=-=-=-=-=- Clickjank ni oldini olish uchun shulardan foydalanamiz 

// -=-=- Same origin Policy - limits the access between windows 
//    - protect user information from theft 
//    - protocol / domain / port. 

// -=-=- X-Frame-Option - iframe clickjank 
//    - DENY - block all urls 
//    - SAMEORIGIN - all same url 
//    - ALLAW-FROM 
