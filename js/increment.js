let count = 0;
let Inc = ()=>{
    let Show = document.querySelector("#show");
    
    count++;
    Show.innerHTML = count;
}
let dec=()=>{
    let Show = document.querySelector("#show");
    
    count--;
    Show.innerHTML = count;
}
