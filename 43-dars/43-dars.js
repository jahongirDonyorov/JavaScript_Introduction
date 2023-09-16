
// -=-=-=-=-=-=-=- Fetch Advanced

// -=-=-=-=- Muntarija

//    - Sanding image 
//    - Swagger in detall 
//    - Multipart file 
//    - Form Data 
//    - ReadbleStream 
//    - Fetch API's 


// -=-=-=-=-=-=-=-=-=- Swagger 
// backend chi bizga backendini Swagger da tushilarli qilib beradi uyirda qaysi link GET PUT DELETE POST ekanligi va boshqa malumotlar kursatilgan buladi 


// -=-=-=-=- Response body 
//    - .text() - fetch txt file from local 
//    - .json()
//    - .blob()
//    - .fromData
//    - .arrayBuffer
   
// biz txt.txt fileni fetch yordamida olib uni ishlatishimiz mumkun ekan 
fetch('./txt.txt')
  // .then((res) => console.log(res)) // bizga malumot response holatda kelyapdi / biz buni oddiy qitx qilib olishimiz kerak
  // kelyotgan malumotni uqimoqchimiz oddiy holatda param.json() qilinadi 
  // .then((res) => res.json()) // bizga kelyotgan malumot json emas shuning uchun bizga error beradi 
  
  // kelyotgan .json urnida malumot typeiga qarab .text(), .json(), .blob(), .fromData, .arrayBuffer lar kelishi mumkun 

  // buni .blob qilsakham bulardi lekn bu bizga blob qilib beradi malumotni 
  // .then((res) => res.blob()) // Blob {size: 25, type: 'text/plain'}

  // bu malumot txt bulganligi uchun buni .txt() qilishimiz kerak 
  .then((res) => res.text())// bu respons dan txt holatga utti
  // endi buni consolda chiqarsak buladi 
  .then((res) => console.log(res))

  
  // user malumotlarini inputga kiritsin va click qilsin agar user ruyhatdan utgan bulsa (authenticationToken keladi) broryozuv chiqsin 
  // buni qilish uchun bizga backend kerak buladi bizda hozirgi vahtda u mavjud emas shuning uchun uzimiz formulasini yozib turamiz backend
  // kelganda linkini quyib quysak ishlaydi 
  
  function login() {
    fetch('https://..........',{
      // Swagger da usha link uchun kursatilgan method ni yozamiz 
      method:'POST',
      // yuborilyotgan malumot turini yozamiz 
      headers:{
        'Content-Type':'application/json' // json farmatda yuboryotganimiz uchun
      },
      body: JSON.stringify({
        // backend dagi email ga emailni password da bizdan boryotgan password larni tenglashtirdik 
        email: email.value,
        password: password.value,
      })
    })
    // bizgfa qaytayotgan malumotni endi jsondan chiqarib olamiz 
    .then((res) => res.json())
    .then((res) => console.log(res))
  }

  // bu holatda ham qilsak buladi lekn kuproq malumot kirgizish kerak bulsa (masalan uy malumotlarini) 
  // biz bu holatda bittadan har bir input malumotini tenglashtirib chiqishimiz kerak buladi 
  // bitta form dan hamma malumot keladigan qilsak buladi / buning uchun formData dan foydalansak buladi 


  // -=-=-=-=-= FormData()
  // new fromData(fromElement) - rending file from input type file 
  //  - fromData methods - https://httpbin.org/post
  //    - append - append(key, value) / attach data 
  //    - get - get(key) / returns the value 
  //    - has - has(key) / returns boolean 
  //    - delete - delete(key) / removes the element 
  //  - sending data from element in html 


  // birinchi htmlni uzgartirshimiz kerak hammasini form ga solib id larni name ga uzgartiramiz va name nomi backendda borish kere bulgan 
  // value bilan birhilbulish kerak masalan email ga boradigam inputning name mi email bulishi kerak 

  // endi biz onclick emas balke form submit bulganda code ishlasin deymiz 

  formEvent.onsubmit = (e) => {
    // event yurib ketmasligi uchun unin tuxtatib quyamiz 
    e.preventDefault();
    // formData ni birinchi veriablega olib olamiz 
    let form = new FormData(formEvent)
    
    // bizda rasm malumotlariham kelyapdi u malumotlar formEvent ga tug'ridan tug'ri kelmaydi 
    // bi u malumotlarni formData ning methodlari yordamida qushib olishimiz kerak form ga 

    form.append('userImg', file.files[0])// htmlda yuq inputda rasm userImg nomi blan qushilyapdi 
    // faqat bitta emas bir nechta fileni yuborsak buladi 
    form.append('roleIdSet', '1')

    // bular rasmni url qilib backend uchun yasab beryapdi bzi rasmni URL orqaliham url qilsak buladi lekn u local qilib yasab beradi url ni 
    let imgUrl = URl.createObjectURL(file.files[0])
    console.log(imgUrl, 'url')

    // backend ga borishi kerak bulmagan malumotni dele qilib yuborsak bularkan bunin FormData methodi yordamida qilamiz 
      
    form.delete('password') // password malumoti backend ga bormayapdi 

    fetch('https://..........',{
      // bunda method yozamiz 
      method: 'POST',
      // headers kerak emas 

      // body yozamiz / formni yuboramiz chunke hamma malumotlar formda
      body: form
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
  }
