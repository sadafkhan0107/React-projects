import foods from './foods';
import {choice, remove} from './helpers';

let fruit= choice(foods);

console.log(`items in foods are ${foods.length}`)

console.log(`May i have a ${fruit}, please`)

console.log(`Here's your ${fruit}, try it`)

let remaining= remove(foods, fruit);
console.log(`items remaining after removing are ${remaining.length}`)