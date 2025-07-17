const orginalString="abc";
let reverseString="";
for(let i=0;i<orginalString.length;i++){
    const initChar=orginalString.charAt(orginalString.length-i-1);
    reverseString+=initChar;
}
console.log(reverseString);