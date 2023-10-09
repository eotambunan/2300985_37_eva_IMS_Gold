const form = document.getElementById("form")
const submit = document.getElementById("submit")

submit.addEventListener("click",function(){
    Event.preventDefault()
    const formData = new FormData()
    const title = document.getElementById("title").value
    formData.append("title",title)
    const writer = document.getElementById("writer").value
    formData.append("writer",writer)
    const image = document.getElementById("image").value
    formData.append("image",image)

    fetch('/admin/add_product',{
        method: "POST",
        body: formData
    })
});

