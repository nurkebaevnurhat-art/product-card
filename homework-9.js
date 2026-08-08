// задание №2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const result= numbers.filter(number => number>=5);
console.log(result);

// задание №3
const furniture = ['table', 'chair', 'sofa', 'bed', 'wardrobe'];
const searchItem = 'sofa';
const isPresent = furniture.includes(searchItem);
if (isPresent) {
  console.log(`${searchItem} is present in the array.`);
} 
else {
  console.log(`${searchItem} is not present in the array.`);
}

// задание №4
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray(numbers));
console.log(reverseArray(furniture));
