// if else da order nma va unga qanchalik ahamiyat berishimiz kerak ?

// Order - Joylashi hisoblanadi. 
// Joylashish ketma ketligi if else da katta ahamiyatga ega. 

let x = 8;

if(x < 10){
  console.log('x < 10')
}else if(x < 20){
  console.log('x < 20')
}else{
  console.log('x > 20')
}
// value : x < 10

if(x < 20){
  console.log('x < 20')
}else if(x < 10){
  console.log('x < 10')
}else{
  console.log('x > 20')
}

if(x < 10 && x > 0){
  console.log('x < 10')
}else if (x < 20 && x > 10){
  console.log('x < 20')
}else{
  console.log('x > 20')
}

if( x < 20 && x > 10){
  console.log('x < 20')
}else if (x < 10 && x > 0){
  console.log('x < 10')
}else{
  console.log('x > 20')
}


let a = 1;
let v = a < 10;
switch (a) {
  case v:
    console.log("salom");
    break;
  case 10 && 20:
    console.log('hello')
    break
  default:
    console.log("aliki");
}

for(let i = 0; i <= 10; i++){
  console.log(`salom ${i}`)
}

let g = 9;

while(g <= 10, g++){
  console.log(`salom ${g}`)
  
}