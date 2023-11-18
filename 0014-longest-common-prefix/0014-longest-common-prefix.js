/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //같은 것만큼 return
    
    let point = 1;
    
    let tempPrefix = "";
    
    let tempPrefixesArr = [];
    
    const condition = (currentValue) => currentValue === tempPrefixesArr[0];
    
    
    let strLengths = strs.map(str => str.length);
    
    let minimumStrLength = Math.min(...strLengths);
    
    //edge case1
    if(strs.length === 1){
        return strs[0];
    }
    
    //edge case2
    if(minimumStrLength === 0){
        return "";
    }
    
    while(point <=  minimumStrLength){
        
         for(let i = 0; i < strs.length; i++){
                
            tempPrefixesArr.push(strs[i].slice(0, point)); 
        }
    
        console.log(tempPrefixesArr);
               
        
        if(!tempPrefixesArr.every(condition)){
            return tempPrefix;
        }else{
            tempPrefix = tempPrefixesArr[0];
            console.log("tempPrefix: "+ tempPrefix);
            tempPrefixesArr= [];
            point++;
        }
    }
    
    
    
    //["ab", "a"]
        if(tempPrefixesArr.every(condition)){
            return tempPrefix;
        }
    

    
    
    
};