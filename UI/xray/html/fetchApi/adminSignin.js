const signin = document.querySelector(".signin");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
// const loginError = document.querySelector(".login-error");


signin.addEventListener("submit", event => {
    fetch(
    "http://localhost:5000/api/v1/admin", {
        method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
        body: JSON.stringify({ email:email.value,
          password: password.value})
	})
		.then(res => res.json())
		.then(data => {
            console.log(data);
      if (data.token) {
          console.log(data);
				localStorage.setItem("authToken", JSON.stringify(data.token));
                // localStorage.setItem("admin", data.admin);
				window.location = "../html/dashboard-1.html";
        // loginError.style.display = " block";
				// setTimeout(() => {
				// 	loginError.style.display = "none";
				// }, 3000);
			} else {
                // console.log(data);
				// localStorage.setItem("authToken", JSON.stringify(data.token));
                // // localStorage.setItem("admin", data.admin);
				// window.location = "../dashboard-1.html";
			}
			})
		.catch(error => console.log(error.message));
	event.preventDefault();
});