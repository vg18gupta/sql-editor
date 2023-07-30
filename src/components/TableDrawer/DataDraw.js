import React from "react";
import TableStructure from "./TableStructure";

function DataDraw() {
  let customers = require("../../constants/DataStore/customers.json");
  let products = require("../../constants/DataStore/products.json");
  return (
    <div className="w-full h-screen overflow-auto scrollbar-hide py-4">
      <TableStructure
        tableHead={customers[0]}
        tableName="Customers"
        tableNo={1}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={products[0]}
        tableName="products"
        tableNo={3}
      />
    </div>
  );
}

export default DataDraw;
