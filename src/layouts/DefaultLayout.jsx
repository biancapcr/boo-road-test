import React from "react";
import Header from "../components/Header";

function DefaultLayout({ children, onLoginClick, onRegisterClick }) {
  return (
    <div className="default-layout">
      <Header onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      <main>{children}</main>
    </div>
  );
}

export default DefaultLayout;
