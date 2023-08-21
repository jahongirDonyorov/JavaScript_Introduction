let a = [1,2,3,4,5]

Array.prototype.remove = function (v){
  let res = this.filter((a,b) => {
    return a !== v
  })
  console.log(res)
}
a.remove(3)

// buni export qilolmaymiz lekn import qilsak buladi 

//-=-=-=-=-=- Dynamic import 
// import 'file manzili yoziladi' buldi