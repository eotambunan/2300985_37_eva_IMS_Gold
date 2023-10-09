// selector
const search = document.getElementById("search")
const result = document.getElementById("data")
const buttonSubmit = document.getElementById("buttonSubmit")
const p = document.querySelectorAll("p")

// function search
const pValue = p.innerHTML
console.log(p);
let data = []
for (let i = 0; i < p.length; i++) {
    const element = p[i].innerHTML;
    data.push(element)    
}
console.log(data);

// event listener
search.addEventListener("keyup",function(){
    while (result.firstChild) {
        result.removeChild(result.firstChild);
  }
  const searchValue = search.value
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes(searchValue)) {
        const pp = document.createElement('p')
        pp.textContent = data[i]
        result.appendChild(pp)
    }
  } 
})

