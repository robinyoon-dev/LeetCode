/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900,
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
   
    
    //배열로 만든 다음
    // 특정 요소 다음에 특정 요소가 있으면 둘이 합치는 걸로
    
    let sToArr = s.split('');
    
    let tempArr = [];
    let tempS = '';
  
    
    for(let i = 0; i < sToArr.length; i++){
        
        if(tempS.length > 0 ){
            
            let tempAdd = tempS+sToArr[i];
            console.log("tempAdd: "+ tempAdd );
        
            if(tempAdd in obj ){
                console.log("tempArr in obj");
                tempArr.push(tempAdd);
                tempS = '';
                
            }else{
                console.log("tempArr NOT in obj");
                
                
                if(sToArr[i] === 'I' || sToArr[i] === 'X' || sToArr[i] === 'C'){
                    tempArr.push(tempS);
                    tempS= '';
                    tempS = sToArr[i];
                }else{
                    tempArr.push(tempS);
                    tempArr.push(sToArr[i]);
                    tempS= '';
                }
            }
                 
        }else{
            
            if(sToArr[i] === 'I' || sToArr[i] === 'X' || sToArr[i] === 'C'){
                tempS = sToArr[i];
            }else{
                tempArr.push(sToArr[i]);
            }
            
            
        }     
    }
    
    if(tempS.length > 0){
        tempArr.push(tempS);
    }
    
   
    
    
    
    let changeToNum = tempArr.map(char => obj[char]);
    
    let result = changeToNum.reduce((sum, current) => sum + current, 0);
    
    return result;
    
};