import React from 'react'
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'

import EventsTableCell from './EventsTableCell.react';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid white;
    margin: auto;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid white;
      border-right: 1px solid white;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, i) => (
                    <EventsTableCell
                      key={cell.value + i}
                      cell={cell}
                    />
                  ))}
                </tr>
              )}
          )}
        </tbody>
      </table>
    </>
  )
}

function EveryoneEvents(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Name',
            accessor: 'id',
          },
          {
            Header: 'Attendees',
            accessor: 'attendees',
          },
          {
            Header: 'Number',
            accessor: 'number',
          },
          {
            Header: 'When',
            accessor: 'when',
          },
        ],
      },
    ],
    []
  )

  return (
    <Styles>
      <Table columns={columns} data={props.rsvps} />
    </Styles>
  )
}

export default EveryoneEvents
