import React, { useEffect, useRef, useState } from "react";
import "./table.css";
import { useParams } from "react-router-dom";

export default function DisplayIndividualBank() {
  const { ifsc_code } = useParams();
  const favRef = useRef()

  const [rowData, setRowData] = useState({});
  const [fav, setFav] = useState({});

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
             {/* <th>Favorite</th>  */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ifsc_code}</td>
            <td>{rowData.bank_id}</td>
            <td>{rowData.branch}</td>
            <td>{rowData.address}</td>
            <td>{rowData.bank_name}</td>
             <td>
            </td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
}
