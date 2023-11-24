/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let obj = {
        ")" : "(",
        "]" : "[" ,
        "}": "{" 
    };
    
    let openedArr = ["(", "[", "{"];
    let closedArr = [")", "]", "}"];
    
    let isOpened = 0;
    
    
    let tempArr = [];
    
    
    let arr = s.split('');
    
    for(let char of arr){
        if(isOpened === 0){
            if(closedArr.includes(char)){
                return false;
            }
            if(openedArr.includes(char)){
                isOpened++;
                tempArr.push(char);
            }
        }else{
            //isOpened >= 1 인 경우
            
            // ([
            if(openedArr.includes(char)){
                tempArr.push(char)
                isOpened++;
            }
            
            
            
            if(closedArr.includes(char)){
                // ()
                if(obj[char] === tempArr[tempArr.length -1]){
                    tempArr.pop();
                    isOpened--;
                
                }else{
                // (]    
                    return false;
                }
                        
            }
                        
        }    
    }
    
    if(tempArr.length === 0){
        return true;
    }else{
        return false;
    }
    
};