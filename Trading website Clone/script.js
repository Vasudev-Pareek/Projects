window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    const LogoChange = document.getElementById("Logo-change");
    const NavGetBtn = document.getElementById("nav-GetBtn");
    if (window.pageYOffset > 0) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 1)";
      navbar.style.color = "black";
      NavGetBtn.style.color = "black";
      NavGetBtn.style.borderColor = "black";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
      navbar.style.color = "white";
      NavGetBtn.style.color = "white";
      NavGetBtn.style.borderColor = "white";
    }
  };


const textElement = document.getElementById('scrolling-text');
const textElementCopy = document.getElementById('scrolling-text-copy');
let xPosition = 0; 
const scrollSpeed = 2; 

function scrollText() {
  xPosition -= scrollSpeed; 
  textElement.style.transform = `translate3d(${xPosition}px, 0, 0)`; 
  textElementCopy.style.transform = `translate3d(${xPosition + textElement.offsetWidth}px, 0, 0)`;

  if (xPosition <= -textElement.offsetWidth) {
    xPosition = 0; 
  }

  requestAnimationFrame(scrollText);
}

scrollText();

icon = document.getElementById("eye-img")
icon2 = document.getElementById("eye-img2")
password = document.getElementById("password")
password2 = document.getElementById("password2")
SignUp = document.getElementById("SignUp")
SignIn = document.getElementById("SignIn")
GoToSignUp = document.getElementById("GoToSignUp")
GoToSignIn = document.getElementById("GoToSignIn")



// icon.addEventListener("click",()=>{
//     if(icon.src.includes('images/65000.png')){
//         icon.src = "images/5062877.png";
//         password.type="text";
//     }else{
//         icon.src = 'images/65000.png';
//         password.type="password";
//     }
// })

// icon2.addEventListener("click",()=>{
//     if(icon2.src.includes('images/65000.png')){
//         icon2.src = "images/5062877.png";
//         password2.type="text";
//     }else{
//         icon2.src = 'images/65000.png';
//         password2.type="password";
//     }
// })



// const MyEye = document.querySelectorAll(".My-eye-img")
// const PasswordInput = document.querySelectorAll(".Password-input")

// MyEye.forEach(Eye=>{
//   Eye.addEventListener("click", ()=>{
//     PasswordInput.forEach(Inputs=>{
//       if(Eye.src.includes('images/65000.png')){
//         Eye.src = "images/5062877.png";
//         Inputs.type="text";
//       }else{
//         Eye.src = 'images/65000.png';
//         Inputs.type="password";
//     }
//     })
//   })
// })
const MyEye = document.querySelectorAll(".My-eye-img");
const PasswordInput = document.querySelectorAll(".Password-input");

MyEye.forEach((Eye, index) => {
  Eye.addEventListener("click", () => {
    const Input = PasswordInput[index]; 
    if (Eye.src.includes('images/65000.png')) {
      Eye.src = "images/5062877.png";
      Input.type = "text";
    } else {
      Eye.src = 'images/65000.png';
      Input.type = "password";
    }
  });
});




GoToSignIn.addEventListener("click",()=>{
    if(SignUp.style.display === "block"){
        SignUp.style.display = "none";
        SignIn.style.display = "block";
      }else{
        SignIn.style.display = "block"
        SignUp.style.display = "none";
        SignIn.style.height = "400px";        
        // console.log("hello world");
    }
})

GoToSignUp.addEventListener("click",()=>{
    if(SignIn.style.display === "block"){
        SignIn.style.display = "none";
        SignUp.style.display = "block";
      }else{
        SignUp.style.display = "block"
        SignIn.style.display = "none";
    }
})



let nav_bars = document.getElementById("nav-bars");
let responsiveNavbar = document.getElementById("responsive-navbar-id");

nav_bars.addEventListener("click", () => {
  if (responsiveNavbar.style.display == "block") {
    responsiveNavbar.style.display = "none"
  }else{
    responsiveNavbar.style.display = "block"
  }
});
