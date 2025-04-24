let sendData=()=>{
    localStorage.setItem("name", "John Doe");
    localStorage.setItem("age", 30);
    localStorage.removeItem("age");
    location.reload();
}
 let show=document.querySelector("#show");
 show.innerHTML=`<h1> Hello ${localStorage.getItem("name")}</h1>`;

 let removeData=()=>{
    // localStorage.removeItem("name");
    localStorage.clear();
    // show.innerHTML=`<h1>${localStorage.getItem("name")}</h1>`;
    location.reload();
 }

 let send=()=>{
// input.value=""
    let input=document.querySelector("#input").value;
    localStorage.setItem("name", input);
    location.reload();
    // show.innerHTML=`<h1>${localStorage.getItem("name")}</h1>`;
    // console.log(localStorage.getItem("name"));
 }