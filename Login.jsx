import { useState } from "react";

function Login() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "suganth@gmail.com" && password === "12345") {
      setMessage("Login successful");
    } else {
      setMessage("Invalid Email or Password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />

        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" required />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>

      {message && (
        <h3 style={{ color: message === "Login successful" ? "green" : "red" }}>
          {message}
        </h3>
      )}
    </div>
  );
}

export default Login;