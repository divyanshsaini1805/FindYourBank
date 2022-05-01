import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="header-right">
          <a className="active" onClick={() => navigate("/")}>
            All Banks
          </a>
          {/* <a onClick={() => navigate("/favorites")}>Favourites</a> */}
        </div>
      </div>
    </>
  );
}
