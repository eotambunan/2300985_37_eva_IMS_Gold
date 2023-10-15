// selector
const navigator = document.querySelectorAll("#navbarNav li a")
// function

// event listener
navigator.forEach(function(item){
    item.addEventListener("click",function(){
        navigator.forEach(function(li){
            li.classList.remove("active")
        })
        this.classList.add("active")
    })
});

// searchProduct start
const searchProduct = document.getElementById("search-product")
const productEndPoint = "http://localhost:3000/user/product"
// searchProduct end

// logout start
const logOut = document.getElementById("log-out")
const logOutEndPoint = "/users/logout"

logOut.addEventListener("click",async function(){
    try {
        await fetch(logOutEndPoint,{
            method:"POST"
        })
        window.location.href = "http://localhost:3000/users/home"
    } catch (error) {
        
    }
})
// logout end

