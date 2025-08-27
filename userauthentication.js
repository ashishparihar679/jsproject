let user=JSON.parse(localStorage.getItem("user")||"[]");

const userdata=(e)=>{
    e.preventDefault();

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let mobileno=document.getElementById('mobileno').value;
    let password=document.getElementById('password').value
    let z={name,email,mobileno,password}
    user.push(z)
    localStorage.setItem("user",JSON.stringify(user))
    // console.log(user);
    window.location.href="login.html"
    
}

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("form"),addEventListener("submit",userdata)
})

 document.getElementById("log_Btn").addEventListener("click", function() {
            window.location.href = "./login.html"; // Yahan apna registration page daal sakte ho
        });