import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
const auth = getAuth();
const signup = () => {
    console.log(auth);
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((resolve)=>{
        alert("successfully Signup")

    }).catch((reject)=>(
        alert("Signup Rejected")
    ))
}

let signbtn = document.getElementById("btn-signup");
signbtn.addEventListener("click", signup)


const login = () => {
    let emaill = document.getElementById("emaill");
    let passwordd = document.getElementById("passwordd");
    signInWithEmailAndPassword(auth, emaill.value, passwordd.value)
    .then((res)=>{
        alert("successfully login")
        window.location = "https://tahirahroohi271.github.io/Memory-Game/"
    }).catch((rej)=>(
        alert("Login Rejected")
    ))
}

let loginbtn = document.getElementById("btn-login");
loginbtn.addEventListener("click", login)