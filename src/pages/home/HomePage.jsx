import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="mt-3 p-2 container">
      <h1>Welcome!</h1>
      <h2>Let's Generate Some Loot!</h2>
      <ul>
        <li>
          <Link to="/simple-weapons">Simple Weapons</Link>
        </li>
      </ul>
    </div>
  );
};
