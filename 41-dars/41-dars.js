// -=-=-=-=-=-=-=-=-=-=- Binary data
// -=-=- ArrayBuffer and Blob, File


console.log('h') // h
// buning asce kode dagi raqamini bilish uchun biz charCadeAt() methodedan foydalanamiz 

// -=-=-=-=-=- charCadeAt()
// bu bizga elementning asce code dagi raqamini chiqarib beradi 
console.log('h'.charCodeAt()) // 104
console.log('i'.charCodeAt()) // 105
// kampyuter har domin asce code buyicha yuradi (tekshiradi) 
// kampyuter asce code buyicha uqiganda qolganlarga nisbatan tezroq ishlaydi 


// -=-=-=-=-=-=-=-=- new ArrayBuffer() 
// buning malumotlari nma bulsaham ularni binary holatda ishlatsak buladi 
// oddiy malumot memoryda bitta katakni tuliq egallab oladi bu esa faqat uziga keraklicha joyni oladi 

// Masalan: Biz 'Hi' suzini ArrayBuffer ga yozmoqchimiz 

// 1 - uzgaruvchi ochib olamiz va unga new ArrayBuffer(...) biriktirami 
let buffer = new ArrayBuffer(2) // 2ta byte ochadi buni kiyin uzgartirib (qushib, ayirib) bulmaydi 
// biz buni tug'ridan tug'ri kurib, ishlatib bulmaydi buni kurishimiz uchun new DataView() vs Typed array lardan foydalansak buladi 
// hozir bizga DataView ni uzidan foydalansakham buladi.

// -=-=-=-=-=- DataView(...)
// uzgaruvchi yaratib unda new DataView(kurmoqchi bulgan ArrayBuffer) yozib olamiz 
let view = new DataView(buffer) // bu beffer ning setter gettiri desakham buladi 

// -=-=-=-=-=-=- 1byte - 8bit ga tug'ri keladi / bularni byte vs bit papkasidagi raslardan kuproq malumot olsak buladi 

// endi ArrayBuffer da 2 ta byte mavjud ularning qiymati 0 buladi biz Hi suzini yozishimiz uchun ularga qiymat biriktirishimiz kerak 

// qiymat biriktirish uchun setInt8,16,32,64 lardan foydalanamiz / 8,16,32,64 larning farqiniham byte vs bit papkasidagi rasmlarda kurishimiz mumkun 


// 8 standart holat bir byte ichida 8 ta bit (malumot) buladi 
// 16 bu kattaroq malumot bulganligi uchun 1byte ichida (8/2=4) 4 ta bit (malumot) buladi 
// 32 bunda esa 1byte ichida (8/4=2) 2 ta bit (malumot) buladi 
// 64 eng kattasi 1byte ichida (8/8=1) 1 ta bit (malumot) buladi 

// new ArrayBuffer(2) / setInt8 - [00000000  00000000] - 2 ta byte har birida 8 tadan bit bor 
// new ArrayBuffer(2) / setInt16 - [0000  0000] - 2 ta byte har birida 4 tadan bit bor 
// new ArrayBuffer(2) / setInt32 - [00  00] - 2 ta byte har birida 2 tadan bit bor 
// new ArrayBuffer(2) / setInt32 - [0  0] - 2 ta byte har birida 1 tadan bit bor 

// -=-=-=-=-=-=-=- setInt8,16,32,64 
// bu index buyicha malumot qushadi biz 0 indexga h 1 indexga i yozishimiz kerak shunda ArrayBuffer qiymati hi buladi 

// view.setInt8(0,'h') - bu holatda yozsakham buladi lekn biz buni asce code buyicha yozamiz 
view.setInt8(0, 104) // 104 - h
view.setInt8(1, 105) // 105 - i

// Bularni kurish uchun getInt8... dan foydalanamiz 

// -=-=-=-=-=-=- getInt8,16,32,64 
// bu bizga ArrayBuffer malumotini kurish uchun kerak 
console.log(view.getInt8(0)) // 104
console.log(view.getInt8(1)) // 105 
// bularda javob asce code shaklida chiqyapdi biz asce codeni qiymatini String.fromCharCode() yordamida kursak bulardi 
console.log(String.fromCharCode(view.getInt8(0)))
console.log(String.fromCharCode(view.getInt8(1)))


// -=-=-=-=-=-=- new Uint8Array / 16 / 32 / 64
// bu tig'ridan tug'ri get qilib chiqarib beradi 

let unit = new Uint8Array([104, 105]) // bu ArrayBuffer emas hozir 
console.log(unit) // buni kursak ichida buffer bor u ArrayBuffer ga teng 
// biz buni unit.buffer qilsak bu ArrayBuffer ga uzgaradi yane unda ishlagan hamma methodelar bundaham ishlaydi 
console.log(unit.buffer)// ArrayBuffer buldi va 2 ta byte ochib ichiga h,i larni yozdi 
// tepadagi get qilingan holatning qisqartmasi birdan get bulgan holatda yozilishi

// malumotni chiqarish uchun Textdecode dan foydalanamiz 

// -=-=-=-=-=-=-=-=-=- new TextDecoder() / decode
// malumotni chiqarib beradi DataView dek / bu ikkala holatdaham ishlayveradi ArrayBuffer qilib ochganimizdaham birdan get qilib ketganimizdaham 
// asce code buyicha malumotlarni birdan chiqarib beradi DataView dagidek String.fromCharCode qilishimiz kerak emas unda 

let decoder = new TextDecoder()
// -=-=-=- decode 
// malumotni chiqarish uchun decoder.decode(chiqarmoqchi bulgan malumot)
console.log(decoder.decode(unit)) // hi ni chiqarib beryapdi 
console.log(decoder.decode(buffer)) // hi ni chiqarib beryapdi 
// bu biz ga birdan asce codeni harfga aylantirib chiqarib beryapdi 


// -=-=-=-=-=-=-=- new textEncoder() / encode
// buham huddi TextDecoder dek ishlaydi faqat bu asce code holatda malumotni chiqarib beradi 

let encoder = new TextEncoder()

// -=-=-=- encode
// malumotni chiqarish uchun decoder.encode(chiqarmoqchi bulgan malumot)

console.log(encoder.encode(unit))


// #-#-#-#-#-#-#-#-#-#-#-#-#-# 


// -=-=-=-=-=-=-=-=-=-=-=-=-=- Blob and File
// ikkalasi bir biriga uxshash

// -=-=-=-=- new Blob - Binary Large Object, can be on disk / cache 
// blobni  biz url sifatida ishlatib usha url malumotini download qilishimiz mu  mkun 
// new Blob()

// Masalan:
// biz fetch yordamida rasm linkidan rasmni olyapmiz 
fetch(
  "https://images.unsplash.com/photo-1671899635938-6160ec1f81fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
)
// .then((res) => res.json())// bu holatda bizga error beradi kelyotgan malumotlar json emas deb kelyotgan rasmning malumotlari blob buladi shuning uchun biz buni json emas blob qilishimiz kerak 
.then((res) => res.blob()) //  bu holatda code tug'ri ishlaydi vabizga  rasm malumotlari keladi Blob {size: 674270, type: 'image/jpeg'} shu shaklda 
.then((res) => {
  console.log(res) 
})
// bu bizga Blob {size: 674270, type: 'image/jpeg'} shu qiymat (rasmning malumotlarini) qaytarayapdi 
 
// biz buni uzimiz yaratsakham buladi 
// let blob = new Blob([buffer], {type:'text/plain'})
// console.log(blob) // Blob {size: 2, type: 'text/plain'}
// 2 size chiqyapdi buffer yozganmiz bufferda 2 ta malumot bor edi 

let blob = new Blob(['hello'], {type:'text/plain'}) // agar hello qilsak 5 chiqadi 5 ta malumot bulganligi uchun
console.log(blob) // Blob {size: 5, type: 'text/plain'}

// Blob yasaldi endi biz click bosilganda blobning malumotlarini download qiladigan qilishimiz mumkun ekan 
down.onclick =()=>{
  // a tagini yaatib olamiz / blobni yuklab olish uchun kerak buladi url 
  let a = document.createElement('a')
  // blobni url qilib olishimiz kerak 
  // URL yaratish uchun URL.createObjectURL() dan foydalanamiz 
  let url = URL.createObjectURL(blob) // bu bizga blobning url qilib yasab beradi 
  // hozilgi holatda biz click qilganimizda bizga blob url lini chiqarib beradi

  // a ning href tiga url ni berib olamiz 
  a.href = url;
  // yuklab olinganda nma deb yozib chiqishi png text va hokozo
  a.download = 'text' 
  // endi tayyor bulgan tag ni body ichiga quyamiz 
  document.body.append(a)
  // oxiri download bosilganda a tagiham click bulsin deymiz
  a.click()

  // bu holatda downloat bosilganda bizga blobdagi hello suzini yuklab olyapdi  
  // bu rasb bulishiham mumkun  

  // biz backenddan kelyotgan imageni browserda chiqarsak buladi click bosilganda  

  fetch(
    "https://images.unsplash.com/photo-1671899635938-6160ec1f81fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
  )
  // .then((res) => res.json())// bu holatda bizga error beradi kelyotgan malumotlar json emas deb kelyotgan rasmning malumotlari blob buladi shuning uchun biz buni json emas blob qilishimiz kerak 
  .then((res) => res.blob()) //  bu holatda code tug'ri ishlaydi vabizga  rasm malumotlari keladi Blob {size: 674270, type: 'image/jpeg'} shu shaklda 
  .then((res) => {
    // resni url qilib olamiz 
    let url = URL.createObjectURL(res)
    // img src ga url ni quyib olamiz 
    img.src = url
    console.log(url) 
  })
}
// download bolisganda uzimiz yaatgan blobni yuklab olyapdi va fetch da yaratilgan blob rasmni browserda chiqaryapdi  


// Blobni 3 xil yul blan yasasak bular ekan 
// 1 - Buffer yordamida 
// 2 - fetch yordamida backenddan malumot olib kelib ysasak buladi 
// 3 - Blob ni uzi blan yasasak buladi 

// -=-=-=-=-=-=-=-=-=-=- 

// biz kampyuter filelari ichidagi rasmniham olsak bularkan buning uchun 1-htmlda file type li input yaratib olishimiz kerak 
// va u onchange bulganda getFile ishlasin deymiz va event yuboramiz eventda file bor unda biz tanlagan file linki keladi 

const getFile = (e) =>{
  // console.log(e.target.files) // bu bizga bosgan filelarni chiqarib beradi [0] qilsak aynan biz tanlagan file 
  console.log(e.target.files[0]) // buniham url qilib olamiz 
  let url = URL.createObjectURL(e.target.files[0])
  // va usha rasm urlini img1 ning src iga berib olamiz 
  img1.src = url
  // biz tanlagan file resultatda chiqyapdi 
}


// -=-=-=-=-=-=-=- File 
// new File([ArrayBuffer / str], 'file name', {type:'txet/plain'})
// bu Blob blan bir hil  

// Homework
// blob yordamida rasm yuklab oladigan qil 