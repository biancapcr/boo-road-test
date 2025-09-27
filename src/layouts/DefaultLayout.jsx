import React from "react";
import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default DefaultLayout;
