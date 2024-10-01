import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Role() {
  return (
    <>
    <h2>각자 페이지 들어가서 역할분담한 페이지 쭉 만들고 나중에 한번에 라우팅 합시다.</h2>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to="/test1">송성훈</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to="/test2">김도현</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to="/test3">김근민</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
