let count = 0
const countAddBtn = document.getElementById("add")
const countHeader = document.getElementById("count")
const countSubstractBtn = document.getElementById("minus")
countHeader.innerText = count
countAddBtn.addEventListener(
    "click", () =>{
        count++;
        countHeader.innerText = count;
    }
)

countSubstractBtn.addEventListener(
    "click", () =>{
        count--;
        countHeader.innerText = count;
    }
)