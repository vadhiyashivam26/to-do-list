let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete task";
    delbtn.classList.add("delete");

    li.appendChild(delbtn);
    ul.appendChild(li);
    input.value = ""; 
});

let delButton = document.querySelectorAll(".delete");
ul.addEventListener("click", function (e){
    if(e.target.nodeName == "BUTTON"){
        let listName = e.target.parentElement;
       listName.remove();
    }
});
