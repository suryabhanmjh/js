let val=()=>{
    
    let inputname= document.querySelector("#name").value
     
    // let errname= document.querySelector("#errname")
    // if(inputname.length==0){
    //  errname.innerHTML="Please enter your name"
    //  errname.style.color="red"
    //  return false
    // }
 
    if(inputname==""){
     errname.innerHTML="Please enter your name!"
     errname.style.color="red"
     return false
    }
 
    let inputnumber=document.querySelector("#number").value
 
    let errnumber=document.querySelector("#errnumber")
    if(inputnumber==""){
       errnumber.innerHTML="Please enter your number!";
       errnumber.style.color="red"
       return false
    }
 
    let inputemail=document.querySelector("#email").value
    
    if(inputemail==""){
       erremail.innerHTML="Please enter your email!";
       erremail.style.color="red"
       return false
    }
    
    let inputpass=document.querySelector("#pass").value
    
    if(inputpass==""){
       errpass.innerHTML="Please enter your password!";
       errpass.style.color="red"
       return false
    }
 
    let inputcpass=document.querySelector("#cpass").value
 
    if(inputcpass==""){
       errcpass.innerHTML="Please enter your confirm password!"
       errcpass.style.color="red"
       return false
    }
 }