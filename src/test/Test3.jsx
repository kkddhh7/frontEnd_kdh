import React from "react";
import { Link } from "react-router-dom";

export default function Test3() {
  return (
    <div>
      <h1>Test3</h1>
      <Link to="/map">
        <button>Map으로 이동</button>
      </Link>
    </div>
  );
}