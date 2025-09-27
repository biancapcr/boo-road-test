import React from "react";

function Registrati() {
  return (
    <form className="auth-form">
      <input type="text" placeholder="Nome" required />
      <input type="text" placeholder="Cognome" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Crea account</button>
    </form>
  );
}

export default Registrati;
