import React from "react";

function Login() {
  return (
    <form className="auth-form">
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Entra</button>
    </form>
  );
}

export default Login;
