import React from "react";
import "./TableGrid.css";

const tables = [
  { number: 1, status: "reserved" },
  { number: 2, status: "reserved" },
  { number: 3, status: "reserved" },
  { number: 4, status: "available" },
  { number: 5, status: "available" },
  { number: 6, status: "reserved" },
  { number: 7, status: "available" },
  { number: 8, status: "reserved" },
  { number: 9, status: "available" },
  { number: 10, status: "reserved" },
  { number: 11, status: "reserved" },
  { number: 12, status: "available" },
  { number: 13, status: "reserved" },
  { number: 14, status: "reserved" },
  { number: 15, status: "reserved" },
  { number: 16, status: "reserved" },
  { number: 17, status: "available" },
  { number: 18, status: "reserved" },
  { number: 19, status: "reserved" },
  { number: 20, status: "reserved" },
  { number: 21, status: "available" },
  { number: 22, status: "available" },
  { number: 23, status: "reserved" },
  { number: 24, status: "reserved" },
  { number: 25, status: "reserved" },
  { number: 26, status: "available" },
  { number: 27, status: "reserved" },
  { number: 28, status: "available" },
  { number: 29, status: "available" },
  { number: 30, status: "available" },
];

const TableGrid = () => {
  return (
    <div className="table-container">
      <h2 className="title">Tables</h2>
      <div className="legend">
        <div className="legend-item">
          <span className="dot reserved-dot"></span> Reserved
        </div>
        <div className="legend-item">
          <span className="dot available-dot"></span> Available
        </div>
      </div>
      <div className="table-grid">
        {tables.map((table) => (
          <div
            key={table.number}
            className={`table-card ${
              table.status === "available" ? "available" : "reserved"
            }`}
          >
            <div className="table-label">Table</div>
            <div className="table-number">
              {String(table.number).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableGrid;
