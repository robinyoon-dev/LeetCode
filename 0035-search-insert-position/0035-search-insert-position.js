/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let left = 0;
    let right = nums.length -1;
    
    while(left < right){
        let middle = Math.round((left + right) / 2);
        
        if(nums[middle] === target){
            return middle;
        }
        
        if(nums[middle] < target){
            left = middle + 1;
        }
        
        if(nums[middle] > target){
            right = middle  - 1;
        }
        
    };
    
    if(nums[left] < target){
        return left + 1;
    } else{
        return left;
    }
    
    
};

