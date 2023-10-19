$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


// login start
const loginEndPoint = "http://localhost:3000/users/login"
const login = document.getElementById("login")
const email = document.getElementById("email")
const password = document.getElementById("password")
const informationLog = document.getElementById("information-log")
const informationReg = document.getElementById("information-reg")

login.addEventListener("click", async function(event) {
  event.preventDefault()
    try {
      const response = await fetch(loginEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        })
      });
      const json = await response.json()
      if(json.statusCode ==200){
        if(json.role=="customer"){
          window.location.href = "/users/home"
        }else if(json.role=="admin")
        window.location.href = "/admin/home"
      }else if(json.statusCode ==404){
        informationLog.innerHTML = `**Cannot Find User**`
      }else if (json.statusCode ==401){
        informationLog.innerHTML = `**Wrong Password**`
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  });
// login end

// registration start
const registrationEndPoint = "http://localhost:3000/users/registration"
const nameReg = document.getElementById("name-reg")
const emailReg = document.getElementById("email-reg")
const passwordReg = document.getElementById("password-reg")
const registration = document.getElementById("registration")

registration.addEventListener("click",async function(event){
  event.preventDefault()
    const name = nameReg.value
    const email = emailReg.value
    const password = passwordReg.value
    if (name.length==0||email.length==0||password.length==0) {
        alert("CANNOT BLANK")
    }else{
        try {
            const response = await fetch(registrationEndPoint,{
                method : "post",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name : name,
                    email : email,
                    password : password
                })
            })
            const json = await response.json()
            if(json.statusCode==401){
              informationReg.innerHTML = `**Email has been used**`      
            }else if(json.statusCode==200){
              informationReg.setAttribute("style","color:#76b852")
              informationReg.innerHTML = `**Succesfully registered**`      
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    }
})
// registration end