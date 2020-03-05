const nums = [1,  -5, -3, 4,  9, -7, 8];

// for(let i = 0; i < nums.length; i++){
  
//   if(nums[i]>3){
//       break;
//   }
//   console.log(nums[i]);
// }

for(let i = 0; i < nums.length; i++){
  
    if(nums[i]< 0){
        continue;
    }
    console.log(nums[i]);
  }
  
