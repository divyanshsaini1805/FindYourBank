import React, { useState } from "react";
import "./filter.css";

export default function Utilities({ data, getQuery }) {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div className="cont">
      <select
        className="select-class"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="MUMBAI">MUMBAI</option>
        <option value="KASHIPUR">KASHIPUR</option>
        <option value="LUCKNOW">LUCKNOW</option>
        <option value="DELHI">DELHI</option>
        <option value="DEHRADUN">DEHRADUN</option>
      </select>

      <select className="select-class">
        <option value="ifsc">ifsc</option>
        <option value="bank_id">bank_id</option>
        <option value="branch">branch</option>
        <option value="address">address</option>
        <option value="bank_name">bank_name</option>
      </select>
    </div>
  );
}
