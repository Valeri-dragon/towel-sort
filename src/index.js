
// You should implement your task here.

module.exports = function towelSort (matrix) {
var myArr=[];
    
    if(Array.isArray(matrix) && matrix.length >0){
    
        
    for (i=0; i < matrix.length; i++) {
		
		if (i%2  !== 0){ 
             matrix[i]=matrix[i].reverse();
            }
         
        let elements = matrix[i];
        for (j=0; j < elements.length; j++){
             myArr.push(elements[j]);
            }
    }
}
    return myArr;
		}
        
	
 

