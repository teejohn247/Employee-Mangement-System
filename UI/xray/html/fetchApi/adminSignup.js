const signup = document.querySelector(".login");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const name = document.querySelector(".admin_name");
// const loginError = document.querySelector(".login-error");


signup.addEventListener("submit", event => {
    fetch(
    "http://localhost:5000/api/v1/admin/signup", {
        method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
        body: JSON.stringify({ name: name.value, email:email.value,
          password: password.value})
	})
		.then(res => res.json())
		.then(data => {
            console.log(data);
      if (data.status !== 201) {
        loginError.style.display = " block";
				setTimeout(() => {
					loginError.style.display = "none";
				}, 3000);
			} else {
                console.log(data);
				localStorage.setItem("authToken", JSON.stringify(data.token));
                localStorage.setItem("admin", data.admin);
				window.location = "../UI/dashboard.html";
			}
			})
		.catch(error => console.log(error.message));
	event.preventDefault();
});