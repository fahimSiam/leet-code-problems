const threeSum = function(nums) {
    nums.sort((a,b)=>a-b) //always sort in this manner because js by default sorts in string so -4 becomes larger than -2
    const result = []
    //console.log(nums)
    for (let i = 0; i < nums.length - 2; i++){
        // Skip duplicates to avoid duplicate triplets
        if (i > 0 && nums[ i ] === nums[ i - 1 ]) {
            //console.log('i', i, "nums[i]", nums[i], "nums[i-1]", nums[i]);
            continue  
        } else {
            //console.log("else",'i', i, "nums[i]", nums[i], "nums[i-1]", nums[i]);
        }

        let left = i+1
        let right = nums.length-1

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right]
            if(sum === 0){

            result.push([nums[i], nums[left], nums[right]])
            
            // Skip duplicates for the left pointer
            while(left< right && nums[left] === nums[left+1]) left++

            // Skip duplicates for the right pointer
            while(left< right && nums[right] === nums[right-1]) right--

            left++
            right++
            }else if(sum < 0){
                left++
            }else{
                right--
            }   
        }       
    }
    return result
};
console.log('result',threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))