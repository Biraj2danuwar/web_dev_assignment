const status = document.getElementById("paragraph");
const button = document.getElementById("signUp");

button.addEventListener("click", function(){
    status.textContent = "Creating account...";

    const myPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Account Created Successfully!");
        }, 2000);
    });

    myPromise.then((message) => {
        status.textContent = message;
    });
});