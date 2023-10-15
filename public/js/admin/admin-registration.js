// adminRegistration Start
const registrationAdminEndPoint = "http://localhost:3000/admin/registration"
const nameReg = document.getElementById("name")
const emailReg = document.getElementById("email")
const passwordReg = document.getElementById("password")
const registerButton = document.getElementById("register-button")
const indicator = document.getElementById("indicator")

registerButton.addEventListener("click",async function(event){
    event.preventDefault()
    const name = nameReg.value
    const email = emailReg.value
    const password = passwordReg.value
    if (!name||!email||!password) {
        alert("CANNOT BLANK")
    }else{
        try {
            const response = await fetch(registrationAdminEndPoint,{
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify({name,email,password})
            })
            const json = await response.json()
            if (json.statusCode==401) {
                indicator.setAttribute("style","display:block;color:red")
                indicator.innerHTML = `*${json.message}*`
            }else if(json.statusCode==201){
                indicator.setAttribute("style","display:block;color:rgb(6, 248, 6)")
                indicator.innerHTML = `*${json.message}*`
                nameReg.value = ""
                emailReg.value = ""
                passwordReg.value = ""
            }
            // console.log(json.statusCode);
        } catch (error) {
            console.log("Terjadi kesalahan:", error);
        }
    }
})

// adminRegistration End