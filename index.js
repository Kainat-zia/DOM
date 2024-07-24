// console.log(document);
// console.log(document.head);
// console.log(document.body);

// console.log(document.body.childNodes)


let Head = document.getElementById("heading")
Head.style.color = "blue";
Head.style.backgroundColor = 'black';
Head.style.fontSize = "65px";
Head.style.border = "4px solid orange";

let paragraph = document.getElementsByClassName("para")

paragraph[2].innerHTML = "DOM Manipulation"
paragraph[0].style.color = "orange";
paragraph[0].style.backgroundColor = "yellow"
paragraph[1].style.color = "green";
paragraph[1].style.backgroundColor = "black"
paragraph[1].style.fontSize = "65px";

let collection = document.getElementsByClassName("container")
collection[1].style.color = "brown"

let collect = document.getElementsByTagName("li")
document.getElementById("demo").innerHTML = collect[1].innerHTML
document.getElementById("demo").innerHTML = collect[2].innerHTML

function changecolor(newcolor){
    const btn = document.getElementById("para")
    btn.style.color = newcolor
}