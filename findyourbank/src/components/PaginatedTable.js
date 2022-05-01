import React, { useEffect, useMemo, useState } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import "./table.css";
import { useNavigate } from "react-router-dom";
import GlobalFilter from "./GlobalFilter";

export const PaginatedTable = ({ data, isLoading }) => {
  const navigate = useNavigate();
  const expandRow = (row) => {
    navigate(`/banks/${row.original.ifsc}`);
    localStorage.setItem("bank-details", JSON.stringify(row.original));
  };

  const [query, setQuery] = useState("");

  const productsData = useMemo(() => [...data], [data]);

  const productsColumns = useMemo(
    () =>
      data[0]
        ? Object.keys(data[0])
            .filter((key) => key !== "city")
            .filter((key) => key !== "district")
            .filter((key) => key !== "state")
            .map((key) => {
              return { Header: key, accessor: key };
            })
        : [],
    [data]
  );

  const tableInstance = useTable(
    {
      columns: productsColumns,
      data: productsData,
    },
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    setGlobalFilter,
    state,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return isLoading ? (
    <h1>Loading..</h1>
  ) : (
    <>
      <div className="searchStyle">
        <GlobalFilter
          filter={globalFilter}
          setFilter={setGlobalFilter}
          getQuery={(q) => setQuery(q)}
        />
      </div>
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        onClick={() => {
                          expandRow(row);
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="container1">
        <span>
          {" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
          {"  "}
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next{" "}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}{" "}
        </button>
        <span>
          {"   "} Go to page:{"   "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>{" "}
        <select
          className="select-class-1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
