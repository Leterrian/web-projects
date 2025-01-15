
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "photos/Coffee_Drinks.jpg") {
        myImage.setAttribute('src', 'photos/coffeelogo.jpg');
    } else {
        myImage.setAttribute('src', 'photos/Coffee_Drinks.jpg');
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        loadStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool  ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});