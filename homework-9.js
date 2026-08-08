import { usersComments } from './comments.js';

// задание №2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const result= numbers.filter(number => number>=5);
console.log(result);

// задание №3
const furniture = ['table', 'chair', 'sofa', 'bed', 'wardrobe'];
const isPresent = furniture.includes('sofa');
console.log(isPresent);

// задание №4
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray(numbers));
console.log(reverseArray(furniture));

// задание №7
const mail= usersComments.filter(user => user.email.includes ('.com'));
console.log(mail);

// задание №8
const updatedUser = usersComments.map(user => ({ ...user, postId: user.id<=5 ? 2 : 1 }));
console.log(updatedUser);

// задание №9
const data = usersComments.map(({id, name}) => ({id, name}));
console.log(data);

// задание №10
const updatedUsersComments={...usersComments, isInvalid: 180};
console.log(updatedUsersComments);

const addPropertyUserComments = usersComments.map(user => ({...user, isInvalid: user.body.length < 180 ? true: false}));
console.log(addPropertyUserComments);
