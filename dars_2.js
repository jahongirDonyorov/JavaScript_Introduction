// -#-#-#-#-#-#-#-#- Kirish

// -=-=-=-=-=-=- belgilar -=-=-=-=-=-=-=-

// -#-#-# - eng asosiy narsalar
// -=-=-= - mavzu nomi
// --=--=-- - qushimcha malumotlar
// !_!_ - Eslatma ( yodlash qilish shart bulgan narsalar )
// #_#_#_#_# - darsning (mavzuning) oxiri (tugashi)

// #_#_#_#_#_#_#

// -#-#-#-#-#-#-#-#-#- Vesual Studio Code Settings -#-#-#-#-#-#-#-#-#-#-#-#-

// -=-=-=-=-=-=-=- Vesual Studio Code Access

// -=-=-=-=-= Auto Save
// kodimizni automatik ravishda save qilib boradi ctrl + S ni bosish shart emas
// buni tepadagi file bulimidan auto save ni yoqamiz

// -=-=-=-=-= Search
// bu blan biz codimizddagi uzgartirmoqchi bulgan barcha birhil suzlarni topib bittada uzgartirsak buladi

// "Search" bulimiga uzgartirmoqchi bulgan suzimizni
// "Replace" bulimiga qaysi suzga uzgarishi kerak bulsa ushani yozamiz

// -=-=-=-=-= Seurce control
// bu git repositories blan ishlashda kerak buladi
// bu blan gitHub codeni hech qanday termenalsiz oson va tez joylashimiz va kuzatib borishimiz mumkum

// -=-=-=-=-= sitting tab size
// bu tap bosilganda qancha joy tashlanishi defolt 4 turadi buni uzingizga moslab olishingiz mumkun 
// sitting ga kirib tab size degan joyini uzgartirsak buladi meni uzim 2 qilganman

// -=-=-=-=-= Spaces 
// bu Vs code ning eng paski qismida joylashgan buni 2 qilib quysak kodimiz kup joy olmaydi

// -=-=-=-=-=-=-=-=- extensions -=-=-=-=-=-=-=-=-=-=-
// Vesual studio code da codlarni osonroq yozish uchin extension dan foydalanamiz

// 1. All Autocomplete
//        Bu bizga codimizni tuldirib beradi, yani bror codening birinchi harfini yozsak qolganini uzi chiqarib beradi
// 2. Auto Close Tag
//        Bu bizga automatizke taglarimizni yopib beradi. Ochuluvchi tagni yozsak qolganini uzi chiqarib beradi
// 3. Auto Rename Tag
//        Bu bizga 2 talik taglarni uzgartirishda ishlatiladi. ochiluvchi tag nomini uzgartirsak <h1> yopuluvchisi </h1> automatik ravishda uzgaradi
// 4. Auto Complete Tag
//        Bu bizga codeni complete qilib beradi
// 5. Bracket Pair Colorizer 2
//        Bu bizga Js kodimizda qavslar kupayb ketganda qaysi qavs qaysiga tegishli ekanligini kursatadi
//        !!! hozirda bu extension ishlamaydi because Vs Code ni uziga qushilgan sittings bulimiga @id:editor.bracketPairColorization.enabled @id:editor.guides.bracketPairs - shuni yozib true qilsak ishlaydi
// 6. Code Runner
//        Bu bizga JS kodimizni Run qilib (tremenalda ishlatib) beradi
// 7. CSS Peek
//        Bu bizga Html da turib uzimizga kerakli class ga css da qanaqa stelies berilganini kursatadi
//        Kurish uchun kerakli classni ustiga meshkani olib borib turish kerak
// 8. Import Cost
//        Bu bizga qandaydur kutubhonani yuklaganimizda u nechchi mg ekanligini kursatadi
// 9. indent-rainbow
//        Bu bizga kodimizni bush joylarini ranglar blan tuldirib chiroyli qilib beradi / buni quyish hohishiy
// 10. IntelliSense for CSS class names in HTML
//        Bu bizga css class yozyotganimizda class nomini tulig'ini chiqaradi/patkaz beradi shunga uxshash kilaslarni chiqarib
// 11. JavaScript (ES6) code snippets
//        Bu bizga ES6,7,8,9 da ishlashimiz uchun kerak buladi
// 12. Live Sass Compiler
//        Bu bizga sass blan ishlayotganimizda kerak buladi Sass da yozgan lodimizni css ga utgazish uchun
// 13. Live Server
//        Bu bizga loyihamizni brawserda tez va oson ochib beradi / har bir yozgan kodimiz automatik ravshda brawserda chiadi.
// 14. Path Autocomplete
//        Bu bizga rasm import qilyotganimizda patkaz (usha yirdagi rasmlar ruyhatini) kursatadi
// 15. Path Intellisense
//        Kompanintlarni automatik import qilib beradi / kupincha reactda ishlatiladi
// 16. Prettier - Code formatter
//        kodimizni farmatlab beradi / install qilingandan kiyin pasdagi Json formatni olib sittings Json ga joylashimiz kerak kiyin format on savi ni sittings dan yoqib quyamiz
// 17. Reactjs code snippets
//        React da ishlashimizni osonlashtiradi kalit suzlarning uzi blan kompanentlarni boshqa narsalarni yozsak buladi
// 18. Material Icon Theme
//        Bu html,css,Js va boshqa file larni xarxil iconcali qilib beradi
// 19. Incredibly In Your Face
//        Bu JS dagi hatolarni kursatadi va ushanga qarab odamning yuzi uzgarib boradi Juda qiziqarli extension
// 20. CodeSnap
//        Bu blan kodimizni kerakli qismini chroyli rasm holatida olsak buladi


// #_#_#_#_#_#_#


// -=-=-=-=-=-=-=- JavaScript kirish 

// -=-=-=- JS File yaratish
// js file ham qolgan file lardik yaratiladi Boshida mavzuga oid suz va oxiri . js blan tugashi shart 
// misol: index.js, style.js, main.js va hokozo ..... 

// JS File ni HTML ga ulash 
// Js fileni ulashni 2 ta eng samarali yuli mavjud
// 1. Bu usul js kodimiz kamroq bulsa kam kod yozilsa qullasak buladi / HTML file ning uzida JS yoziladi
//  HTML kodning pastidan (bodyning ichida) <script> ... </script> shu tag yoziladi va shuning ichiga JS code yozib boriladi

// 2. Bu usul kode kub bulganda ishlatiladi / addelne JS file ni HTML ga ulash / bu usul boshqalariga qaraganda kuproq ishlatiladi 
// Js file ulash uchun HTML kodning eng pastki qismidan <script src='fili manzini'></script>  yozilgan holda ulanadi