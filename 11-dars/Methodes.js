// -=-=-=-=-=-=-=-=-=-=-=- String -=-=-=-=-=-==-=-=-=-=-=-

// -=-=-=-=-=-=- 1. length
// uzunligini ulchaydi (yozilgan malumot sonini chiqaradi bush kataklarham hisoblanadi)

// -=-=-=-=-=-=- 2. at()
// uzimizga kerakli indexda nma borligini chiqarib beradi

// -=-=-=-=-=-=- 3. toUpperCase()
// Ushbu metod matndagi barcha harflarni katta harflarga o'zgartiradi.

// -=-=-=-=-=-=- 4. toLowerCase()
// Ushbu metod matndagi barcha harflarni kichik harflarga o'zgartiradi.

// -=-=-=-=-=-=- 5. indexOf(str)
// biz yozgan malumot stringda nechinchi indexda ekanligini chiqaradi malumot bulmasa -1 chiqadi
// boshidan tekshirib keladi

// -=-=-=-=-=-=- 6. lastIndexOf(str)
// biz yozgan malumot stringda nechinchi indexdaligini chiqaradi
// oxiridan tekshirib keladi

// -=-=-=-=-=-=- 7. includes(str)
// biz yozgan malumot stringda bor yuqligini tekshiradi / true false qaytaradi

// -=-=-=-=-=-=- 8. startsWith(str)
// biz yozgan malumot stringning boshida bor yuqligini tekshiradi

// -=-=-=-=-=-=- 9. endsWith(str)
// biz yozgan malumot stringning oxirida bor yuqligini tekshiradi

// -=-=-=-=-=-=- 10. padEnd(count, value)
// Ushbu metod matni berilgan uzunlikka keltirib, bo'sh joylarni berilgan
//  qiymat bilan to'ldiradi. (5,-) hi---, hi...

// -=-=-=-=-=-=- 11. padStart(caunt, value)
// Ushbu metod matni berilgan uzunlikka keltirib, bo'sh joylarni berilgan
// qiymat bilan to'ldiradi. (5,-) ---hi, ...hi

// -=-=-=-=-=-=- 12. slice(strat, end))
// uzimizga kerkli indexda matnni kesib chiqarib beradi

// -=-=-=-=-=-=- 13. substring(start,end)
// Ushbu metod matndagi berilgan kesma ni qaytaradi. `slice()` bilan bir xil ishlaydi,
// ammo manfiy indekslar bilan ham ishlayadi.

// -=-=-=-=-=-=- 14. substr(start, length)
// Ushbu metod berilgan indeksdan boshlab, berilgan uzunlikda kesmani qaytaradi.

// -=-=-=-=-=-=- 15. eval(str)
// string ichidagi arifmetk amallarni bajaradi / let x = 3; eval('x + 2'); 5

// -=-=-=-=-=-=- 16. trim()
// Bu metod matndagi bosh va oxirgi bo'sh joylarni olib tashlaydi.

// -=-=-=-=-=-=- 17. trimStart()
// Bu metod matndagi faqat bosh bo'sh joylarni olib tashlaydi.

// -=-=-=-=-=-=- 18. trimEnd()
// Bu metod matndagi faqat oxirgi bo'sh joylarni olib tashlaydi.

// -=-=-=-=-=-=- 19. concat(str2)
// Bu metod bir nechta matnlarni bir-biriga qo'shadi.

// -=-=-=-=-=-=- 20. String.row
// Ushbu metod string litarallarni belgilagan yo'llar bilan chiqarib beradi.

// -=-=-=-=-=-=- 21. charAt()
// Bu metod berilgan indekstagi qiymatni qaytaradi.

// -=-=-=-=-=-=- 22. localeCompare()
// Ushbu metod berilgan matnlar o'rtasidagi tarjima tartibini solishtiradi.

// -=-=-=-=-=-=- 23. split()
// Bu metod matni () ichida belgilangan malumot asosida bo'lib massivga aylantiradi.

// -=-=-=-=-=-=- 24. search()
// uzimizga kerakli harf stringda nechinchi indexdaligini qaytaradi 

// -=-=-=-=-=-=- 25. valueOf()
// Ushbu metod obyektni boshqa ma'lumot turlariga o'girib qaytaradi (masalan, matnning asliy qiymatini).

// -=-=-=-=-=-=- 26. replace()
// Ushbu metod berilgan matndagi bir qismni boshqa bir qism bilan almashtiradi.
// str.replace("World", "Universe"); // Natija: "Hello, Universe!"

// -=-=-=-=-=-=- 27. match()
// Bu metod matndagi belgilangan qismni topib massiv ko'rinishida qaytaradi.
// str.match(/World/) // Natija: ["World"]