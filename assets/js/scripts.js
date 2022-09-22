let firstParagraph = document.querySelector("p")
let changableParagraph = document.querySelector(".changable")
let apara = document.getElementById("apara")

let allParagraphs = document.querySelectorAll("p")
let allSpans = document.getElementsByTagName("span")

apara.innerHTML = "New text"
changableParagraph.classList.add("new")
changableParagraph.classList.remove("new")

console.log(changableParagraph.classList)