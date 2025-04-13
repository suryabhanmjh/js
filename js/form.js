let Val=()=>{
    
    let inputname= document.querySelector("#name").value
    let inputnumber=document.querySelector("#number").value
    let inputemail=document.querySelector("#email").value
    let inputpass=document.querySelector("#pass").value
    let inputcpass=document.querySelector("#cpass").value
    let errname=document.querySelector("#errname")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")
    let errnumber=document.querySelector("#errnumber")
     
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
 
    
    else if(inputnumber==""){
       errnumber.innerHTML="Please enter your number!";
       errnumber.style.color="red"
       return false
    }
// number validation
    else if(isNaN(inputnumber)){
         errnumber.innerHTML="Please enter only number!";
         errnumber.style.color="red"
         return false
     }
     else if(inputnumber.length!=10){
            errnumber.innerHTML="Please enter only 10 digits only!";
            errnumber.style.color="red"
            return false
        }
 
    
    
    else if(inputemail==""){
       erremail.innerHTML="Please enter your email!";
       erremail.style.color="red"
       return false
    }

    else if( !(inputemail.includes("@") && inputemail.includes(".com"))){
        erremail.innerHTML="Please enter valid email!";
        erremail.style.color="red"
        return false
    }
    
    
    
    else if(inputpass==""){
       errpass.innerHTML="Please enter your password!";
       errpass.style.color="red"
       return false
    }
 
    // password ==> Suryabhan@1234
    else if(inputpass.length<8){
       errpass.innerHTML="Password must be Suryabhan@1234!"
       errpass.style.color="red"
       return false
    }

    else if(!inputpass.includes("Suryabhan@1234")){
       errpass.innerHTML="Password must contain @ symbol!"
       errpass.style.color="red"
       return false
    }
    
    
 
    else if(inputcpass==""){
       errcpass.innerHTML="Please enter your confirm password!"
       errcpass.style.color="red"
       return false
    }


 }