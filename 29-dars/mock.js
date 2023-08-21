
// codni buyirga yozamiz 

let user = [
  {id:1, name:'John'},
  {id:2, name:'John'},
  {id:3, name:'John'},
  {id:4, name:'John'},
  {id:5, name:'John'},
  {id:6, name:'John'},
]

// biz kodni bu holatda asosiy file da ishlatolmaymiz
// kodni asosiy js file ga yuborish (exprot) qilishimiz kerak 

// -=-=-=-=-=- Export (yuborish)
// export qilish uchun biz export qilmoqchi bulgan malumotimiz oldidan export kalit suzini yozishimiz kerak buladi

export let users = [
    {id:1, name:'John'},
    {id:2, name:'John'},
    {id:3, name:'John'},
    {id:4, name:'John'},
    {id:5, name:'John'},
    {id:6, name:'John'},
    {id:7, name:'John'},
    {id:8, name:'John'},
    {id:9, name:'John'},
    {id:10, name:'John'},
    {id:11, name:'John'},
    {id:12, name:'John'},
    {id:13, name:'John'},
    {id:14, name:'John'},
    {id:15, name:'John'},
    {id:16, name:'John'},
    {id:17, name:'John'},
    {id:18, name:'John'},
    {id:19, name:'John'},
    {id:20, name:'John'}
  ]

  // yana bosqa bir malumotni yuborishimiz mumkun 
  export let list = [1,2,3,4,5,6]

// har birining oldiga export quyib bittalab yubormasdan hammasini bitta qilib yuborsakham buladi 

// export {users, list} // yubormoqchi bulgan hamma malumotlarimizni name ni yozamiz 



// -=-=-=-= export default

// bitta file da fqat bitta yoziladi buham huddi exportdek malumotni yuboradi 
// lekn bundan kelyotgan malumotni import qilishda {} siz va uzimiz hohlagan nom blan qobul qilibolsak buladi 
export default users