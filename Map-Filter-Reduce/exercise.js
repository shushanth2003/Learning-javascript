const data=[1,2,3,4,5,6];
const result=data.filter(num=>num%2==0)
.map(num=>num*2).reduce((acc,curr)=>(acc+curr),0);
console.log(result);