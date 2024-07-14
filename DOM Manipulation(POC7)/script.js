// DOM manipulation to toggle between dark and light modes

const body = document.body; // to access body tag
const toggleMode = document.getElementById("toggle"); // to access button using ID

// to trigger function to change mode when button is clicked
toggleMode.onclick = function() {

    //to access body's class list and see if a class called light-mode is present
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode"); 
        body.classList.add("dark-mode"); // if yes remove light-mode and add dark-mode class
        toggleMode.textContent = "Switch to Light Mode"; // change button text
    } 
    
    //vice-versa
    else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        toggleMode.textContent = "Switch to Dark Mode";
    }
};
/* when done so, the css styling properties of the respective mode's class is applied 
to the webpage's background */
