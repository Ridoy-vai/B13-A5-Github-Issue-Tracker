// all id connect
const username = document.getElementById("Username");
const password = document.getElementById("password");
const signInButton = document.getElementById("Sign-In-button");

// login function
signInButton.addEventListener("click", () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    // validation check
    if (usernameValue === "" || passwordValue === "") {
        alert("invalid username and password");
        return;
    }

    if (usernameValue === "admin" && passwordValue === "admin123") {
        openPage();
        return;
    }

    alert("login failed: invalid username and password");
});

function openPage() {
    window.location.href = "data-load.html";
}
