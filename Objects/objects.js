const newObject=new Object();

//literals
const data={
    name:"Shushanth",
    dept:"Artificial Intelligence and Data Science"
};
console.log(data.name);
// console.log(data.dept);

delete data.dept;

//multiword property
const multiData={
    name:"Shushanth",
    department:"Artificial Intelligence and Data Science",
    "class section":"C"
};
console.log(multiData["class section"]);

for(let num in multiData){
    console.log(num);
}