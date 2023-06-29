function hide(el) {
    el.remove();
}

function choosePet(element){
    alert("You are looking for " + element.value);
}

var count = 1;
var countElement = document.querySelector("count");

console.log(countElement);

function add1() {
    count++;
    countElement.innerHTML = count+"Petting(s)";
    console.log(count);
}

// I could not get the pet counter to work ):