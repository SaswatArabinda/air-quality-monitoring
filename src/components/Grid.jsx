import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { columns, defaultSorted, rowStyle } from "./gridConfig";

export const Grid = ({ data, setSelectedCity }) => {
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setSelectedCity(row.city);
    },
  };

  return (
    <>
      <h3 className="grid-heading">Air Quality Monitoring</h3>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        rowEvents={rowEvents}
        rowStyle={rowStyle}
        defaultSorted={defaultSorted}
      />
    </>
  );
};

export default Grid;
