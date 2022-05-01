import React, { useEffect, useState } from "react";
import "./table.css";
import { useParams } from "react-router-dom";

export default function Favorites() {
  const { ifsc_code } = useParams();

  const [rowData, setRowData] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("bank-details");
    if (data) setRowData(JSON.parse(data));
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>IFSC</th>
            <th>bank_id</th>
            <th>branch</th>
            <th>address</th>
            <th>Bank Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{rowData.ifsc}</td>
            <td>{rowData.bank_id}</td>
            <td>{rowData.branch}</td>
            <td>{rowData.address}</td>
            <td>{rowData.bank_name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
