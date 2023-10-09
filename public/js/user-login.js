$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


// login start
const loginEndPoint = "http://localhost:3000/users/login"
const login = document.getElementById("login")
const email = document.getElementById("email")
const password = document.getElementById("password")
const information = document.getElementById("information")
const notification = document.getElementById("notification")

login.addEventListener("click", async function() {
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
      }else if(json.statusCode ==401){
        information.setAttribute("style","display:block;background-color:red")
        notification.innerHTML = `**Cannot Find User**`
      }else if (json.statusCode ==402){
        information.setAttribute("style","display:block;background-color:red")
        notification.innerHTML = `**Wrong Password**`
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

registration.addEventListener("click",async function(){
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
              information.setAttribute("style","display:block;background-color:red")
              notification.innerHTML = `**Email has been used**`      
            }else if(json.statusCode==200){
              information.setAttribute("style","display:block;background-color:greenyellow;color:black")
              notification.innerHTML = `**Succesfully registered**`      
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    }
})



// registration end