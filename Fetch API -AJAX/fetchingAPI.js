const getData=async ()=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok){
            console.log(`Response Status Error : ${response.status}`)
        }
        const posts=await response.json();
        console.log("Posts Title : ",posts.title);
    }catch(error){
        console.log("Err to Failed : ",error.message);
    }
}
getData();