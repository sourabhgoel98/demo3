let myArray = [1,22,3,20,3,4,5];

//find the larget element
let largetValue = 0;
for( i=0; i <= myArray.length-1; i++){
    if(myArray[i] >=  largetValue){
        largetValue = myArray[i]
    }
    
 }



 //delete third element of array
 for( i=2; i <= myArray.length-1; i++) {
     if(i>= 3) {
         myArray[i-1] = myArray[i];
         }
 }
myArray.pop();
console.log(myArray);