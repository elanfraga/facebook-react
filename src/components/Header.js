import React from "react";
import { FaUserAlt } from "react-icons/fa";

function Header() {
  return (
    <header className="content">
      <nav className="content">
        <h1>facebook</h1>
        <div>
          <span>Meu perfil</span>
          <FaUserAlt color="white" size={15} className="acount" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
