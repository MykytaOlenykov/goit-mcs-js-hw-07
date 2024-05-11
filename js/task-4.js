const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", e => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  const userEmail = email.value.trim();
  const userPassword = password.value;

  if (!userEmail || !userPassword) {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    email: userEmail,
    password: userPassword,
  };

  console.log(data);

  e.currentTarget.reset();
});
