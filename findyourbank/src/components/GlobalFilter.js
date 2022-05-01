import React, { useState } from "react";
import "./filter.css";

export default function GlobalFilter({ filter, setFilter, getQuery }) {
  const [text, setText] = useState(" ");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <>
      <div className="containerr">
        <span>
          Search :{" "}
          <input
            value={filter || " "}
            onChange={(e) => setFilter(e.target.value)}
          />
        </span>
      </div>
    </>
  );
}
