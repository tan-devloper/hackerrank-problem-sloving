
const nums = [2, 10, 11, 15];    
const target = 9;


let two_sum = () => {
    const map = new Map();
    let result ;


    for (let i in nums) {

    const difference = target - nums[i];

    if(map.has(difference)) 
        result = [i , map.get(difference)]
    
    map.set(nums[i], i);
    }

    return result;
}


console.log(two_sum())