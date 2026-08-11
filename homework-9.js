import { usersComments } from './comments.js';

// задание №2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const newNumbers = numbers.filter(number => number >= 5);

console.log(newNumbers);

// задание №3
const furniture = ['table', 'chair', 'sofa', 'bed', 'wardrobe'];
const isPresent = furniture.includes('sofa');

console.log(isPresent);

// задание №4
function reverseArray (arr) {
return arr.reverse();
}

console.log(reverseArray(numbers));
console.log(reverseArray(furniture));

// задание №7
const mailComUsers = usersComments.filter(user => user.email.includes ('.com'));

console.log(mailComUsers);

// задание №8
const updatedUsers = usersComments.map(user => ({ ...user, postId: user.id<=5 ? 2 : 1 }));

console.log(updatedUsers);

// задание №9
const dataUsers = usersComments.map(({id, name}) => ({id, name}));

console.log(dataUsers);

// задание №10
const updatedUsersComments = {...usersComments, isInvalid: 180};

console.log(updatedUsersComments);

const PropertyUserComments = usersComments.map(user => ({...user, isInvalid: user.body.length < 180 ? true: false}));

console.log(PropertyUserComments);
