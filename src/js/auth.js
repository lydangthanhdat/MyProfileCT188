const loginContainer = document.querySelector(".auth-login");
const registerContainer = document.querySelector(".auth-register");
const loginRedirect = document.querySelector(".login-redirect");
const registerRedirect = document.querySelector(".register-redirect");

function redirect(from, to) {
    from.classList.toggle("d-none");
    to.classList.toggle("d-none");
}

loginRedirect.addEventListener("click", () => {
    redirect(loginContainer, registerContainer);
})
registerRedirect.addEventListener("click", () => {
    redirect(loginContainer, registerContainer);
})