import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="logo">
        <img src="" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
