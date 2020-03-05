const nums = [1, 2, 3, 4, 6, 8, 9];
const part = nums.slice(2, 5);
console.log(part);
const removed = nums.splice(2,2,77);
console.log(removed);
console.log(nums);

const togather = nums.join(" / ");
console.log(togather);
