let value = prompt('Input word!');
let valueString = value.toString();
if (isPalindrome(valueString)){
    alert('This is Palindrome')
}else alert ("isn't Palindrome");

function isPalindrome(value){
   for( i = 0; i< (value.length -1)/2; i++)
   {
       if ((value[i]) !== value[(value.length-1-i)]){
           return false;
       }        
   }return true; 
}

