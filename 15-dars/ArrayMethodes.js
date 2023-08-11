// Array.isArray - Berilgan qiymatni massiv bo'lishini tekshiradi.

// .length - Massivning elementlar sonini qaytaradi (uzunligi).

// .toString() - Massivni matn (string) ko'rinishida ifodalaydi.

// .join(',') - Massivning elementlarini bir-biriga bog'laydi va bir matn (string) sifatida qaytaradi.

// .concat() - Massivlarni birlashtiradi va yangi massivni qaytaradi.

// .at() - Berilgan indeksdagi elementni qaytaradi (ES2020 da qo'shilgan).

// .pop() - Massivning oxirgi elementini olib tashlaydi va uni qaytaradi.

// .push() - Massivning oxiriga yangi element(lar)ni qo'shadi.

// .shift() - Massivning birinchi elementini olib tashlaydi.

// .unshift() - Massivning boshiga yangi element(lar)ni qo'shadi.

// .splice() - Massivda element(lar)ni o'chiradi, qo'shadi yoki almashtiradi.

// .slice() - Massivning bir qismini ajratib olish uchun ishlatiladi.

// .indexOf() - Berilgan elementning birinchi indeksini qaytaradi, agar topilmasa -1 qaytaradi.

// .lastIndexOf() - Berilgan elementning oxirgi indeksini qaytaradi.

// .includes() - Berilgan elementni massivda qidiradi va mavjud bo'lsa true qaytaradi.

// .reverse() - Massivdagi elementlarni teskari tartibda joylashtiradi.

// .split() - Matn (string) ni belgilarga asoslanib massiv (array) qiladi .

// .find() - Berilgan shartga javob beruvchi birinchi elementni qaytaradi.

// .findIndex() - Berilgan shartga javob beruvchi birinchi elementning indeksini qaytaradi.

// .findlastIndex() - Berilgan shartga javob beruvchi oxirgi elementning indeksini qaytaradi.

// .reduce() - Massivdagi elementlarni birma-bir qo'shib, boshlang'ich qiymatdan o'tkazadi.

// .sort() - Massivdagi elementlarni tartiblaydi.

// .filter() - Berilgan shartga javob beruvchi elementlardan iborat yangi massiv qaytaradi.

// .forEach() - Massivdagi har bir element uchun biror amalni bajaradi.

// .map() - Massivdagi elementlardan yangi massiv yaratadi, har bir elementni o'zgartirib qaytaradi.

// .every() - Barcha elementlar berilgan shartni qanoatlantirsa true qaytaradi. === &&

// .some() - Massivdagi barcha elementlardan biri ham berilgan shartni qanoatlantirsa true qaytaradi. === ||

// .fill() - Berilgan qiymat bilan massivni to'ldiradi.

// .copyWithin() - Massivning bir qismini boshqa joyga nusxalaydi.

// .flat() - Massivning ichidagi ichki massivlarni [] larini olib tashlaydi. [1,[2]] === [1,2]

// .flatMap() - .map va .flat metodlarini biriktirgan varianti.

// Array.from - Boshqa obyektni massivga aylantiradi.

// new Set() - Yangi Set obyekti yaratadi.

// new Map() - Yangi Map obyekti yaratadi.

// ishlatilishiga misollar 
{
  {// Array.isArray
  const arr = [1, 2, 3];
  const isArr = Array.isArray(arr);
  console.log(isArr); // true
  }
  {// .length
  const arr = [10, 20, 30, 40];
  console.log(arr.length); // 4
  }
  {
  // .toString
  const arr = [1, 2, 3];
  const arrString = arr.toString();
  console.log(arrString); // "1,2,3"
  }
  {
  // .join
  const arr = [1, 2, 3];
  const joinedString = arr.join("-");
  console.log(joinedString); // "1-2-3"
  }

  {
  // .concat
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const concatenatedArr = arr1.concat(arr2);
  console.log(concatenatedArr); // [1, 2, 3, 4]
  }

  {
  // .at
  const arr = ['a', 'b', 'c'];
  console.log(arr.at(1)); // 'b'
  }

  {
  // .pop
  const arr = [1, 2, 3];
  const poppedElement = arr.pop();
  console.log(poppedElement); // 3
  console.log(arr); // [1, 2]
  }

  {// .push
  const arr = [1, 2];
  arr.push(3, 4);
  console.log(arr); // [1, 2, 3, 4]
  }

  {// .shift
  const arr = [1, 2, 3];
  const shiftedElement = arr.shift();
  console.log(shiftedElement); // 1
  console.log(arr); // [2, 3]
  }

  {
  // .unshift
  const arr = [2, 3];
  arr.unshift(1);
  console.log(arr); // [1, 2, 3]
  }

  {// .splice
  const arr = [1, 2, 3, 4, 5];
  const removedElements = arr.splice(1, 2);
  console.log(removedElements); // [2, 3]
  console.log(arr); // [1, 4, 5]
  }
  {// .slice
  const arr = [1, 2, 3, 4, 5];
  const slicedArr = arr.slice(1, 4);
  console.log(slicedArr); // [2, 3, 4]
  }

  {
  // .indexOf
  const arr = [10, 20, 30, 20, 40];
  const index = arr.indexOf(20);
  console.log(index); // 1
  }

  {
  // .lastIndexOf
  const arr = [10, 20, 30, 20, 40];
  const lastIndex = arr.lastIndexOf(20);
  console.log(lastIndex); // 3
  }

  {
  // .includes
  const arr = [1, 2, 3];
  const includesCheck = arr.includes(2);
  console.log(includesCheck); // true
  }
  {
  // .reverse
  const arr = [1, 2, 3];
  const reversedArr = arr.reverse();
  console.log(reversedArr); // [3, 2, 1]
  }
  {
  // .split
  const str = "Hello,World";
  const splitArr = str.split(",");
  console.log(splitArr); // ["Hello", "World"]
  }
  {
  // .find
  const arr = [1, 2, 3, 4, 5];
  const found = arr.find(element => element > 2);
  console.log(found); // 3
  }

  {
  // .findIndex
  const arr = [1, 2, 3, 4, 5];
  const foundIndex = arr.findIndex(element => element > 2);
  console.log(foundIndex); // 2
  }

  {
  // .lastIndexOf
  const arr = [1, 2, 3, 4, 5];
  const lastIndex = arr.lastIndexOf(3);
  console.log(lastIndex); // 2
  }

  {
  // .reduce
  const arr = [1, 2, 3, 4, 5];
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum); // 15
  }

  {
  // .sort
  const arr = [3, 1, 5, 2, 4];
  const sortedArr = arr.sort();
  console.log(sortedArr); // [1, 2, 3, 4, 5]
  }

  {
  // .filter
  const arr = [1, 2, 3, 4, 5];
  const filteredArr = arr.filter(element => element > 2);
  console.log(filteredArr); // [3, 4, 5]
  }

  {// .forEach
  const arr = [1, 2, 3];
  arr.forEach(element => {
    console.log(element);
  });}

  {
  // .map
  const arr = [1, 2, 3];
  const mappedArr = arr.map(element => element * 2);
  console.log(mappedArr); // [2, 4, 6]
  }

  {
  // .every
  const arr = [2, 4, 6, 8, 10];
  const everyCheck = arr.every(element => element % 2 === 0);
  console.log(everyCheck); // true
  }

  {
  // .some
  const arr = [1, 3, 5, 7, 10];
  const someCheck = arr.some(element => element % 2 === 0);
  console.log(someCheck); // true
  }

  {
  // .fill
  const arr = [1, 2, 3, 4];
  const filledArr = arr.fill(0, 1, 3);
  console.log(filledArr); // [1, 0, 0, 4]
  }

  {
  // .copyWithin
  const arr = [1, 2, 3, 4, 5];
  const copiedArr = arr.copyWithin(0, 3);
  console.log(copiedArr); // [4, 5, 3, 4, 5]
  }

  {
  // .flat
  const arr = [1, [2, 3], 4, [5, 6]];
  const flatArr = arr.flat();
  console.log(flatArr); // [1, 2, 3, 4, 5, 6]
  }

  {// .flatMap
  const arr = [1, 2, 3];
  const flatMappedArr = arr.flatMap(element => [element, element * 2]);
  console.log(flatMappedArr); // [1, 2, 2, 4, 3, 6]
  }

  {
  // Array.from
  const str = "Hello";
  const charArray = Array.from(str);
  console.log(charArray); // ["H", "e", "l", "l", "o"]
  }

  {
  // new Set
  const set = new Set([1, 2, 3, 2, 1]);
  console.log(set); // Set { 1, 2, 3 }
  }

  {
  // new Map
  const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
  console.log(map); // Map { 'a' => 1, 'b' => 2, 'c' => 3 }
}
}