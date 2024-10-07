const userName = document.querySelector("#name-input");
const userOutput = document.querySelector("#name-output")
userName.addEventListener("input", handleInput)
function handleInput(event) {
    console.log(event.target.value);
    console.log(userName.value.length);
    const inputValue = userName.value.trim()
    
    if (inputValue.length < 1) {
        userOutput.textContent = "Anonymous";
    }
    else {
        userOutput.textContent = inputValue;
    }


}

