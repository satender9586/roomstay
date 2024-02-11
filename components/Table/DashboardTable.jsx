"use client"
import React from 'react';
import { useTable } from 'react-table';

const columns = [
  {
    Header: "ID",
    accessor: "id"
  },
  {
    Header: "Gender",
    accessor: "gender"
  },
  {
    Header: "Salary",
    accessor: "salary"
  }
];

const data = [{ id: 1, gender: "male", salary: "1200" }];

const DashboardTable = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className=" overflow-x-auto">
     <div className='container'>
     <table {...getTableProps()} className="min-w-full divide-y divide-gray-200 border border-collapse border-gray-300">
        <thead className="bg-gray-50">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
     </div>
    </div>
  );
};

export default DashboardTable;
