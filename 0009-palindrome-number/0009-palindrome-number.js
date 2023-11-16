/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
    let xToString = String(x);
    
    let startPoint = 0;
    let endPoint = xToString.length - 1;
    
    while(startPoint < endPoint){
        
        if(xToString[startPoint] !== xToString[endPoint]){
            return false;
        }
        
        startPoint++;
        endPoint--;
    }
    
    return true;
    
};