const datas={name:"Shushanth",email:"bsshu2003@gmail.com"};
localStorage.setItem("user",JSON.stringify(datas));
const users=JSON.parse(localStorage.getItem("user"));
console.log(users.email);

