// category Selected
const category = document.getElementById("category")
const dataCategory = category.getAttribute("data-category")
const categoryOption = document.querySelectorAll("#category option")
for (let i = 0; i < categoryOption.length; i++) {
    const categoryOptionValue = categoryOption[i].value;
    if (categoryOptionValue==dataCategory) {
        categoryOption[i].setAttribute("selected","")
    }
}


// year Selected
const year = document.getElementById("year")
const datayear = year.getAttribute("data-year")
const yearOption = document.querySelectorAll("#year option")
for (let i = 0; i < yearOption.length; i++) {
    const yearOptionValue = yearOption[i].value;
    if (yearOptionValue==datayear) {
        yearOption[i].setAttribute("selected","")
    }
}

