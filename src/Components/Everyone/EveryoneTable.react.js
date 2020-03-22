import React from 'react'
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'

import EveryoneTableCell from './EveryoneTableCell.react';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid white;

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
                    <EveryoneTableCell
                      key={cell.value + i}
                      cell={cell}
                    />
                  ))}
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </>
  )
}

function EveryoneTable(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Attending',
            accessor: 'attending',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'People',
            accessor: 'people'
          },
          {
            Header: 'lodging',
            accessor: 'lodging',
          },
          {
            Header: 'dogs',
            accessor: 'dogs',
          },
          {
            Header: 'arrival',
            accessor: 'arrival',
          },
          {
            Header: 'Events',
            accessor: 'events',
          },
          {
            Header: 'Songs',
            accessor: 'songs',
          },
          {
            Header: 'First timer',
            accessor: 'firstTime',
          },
          {
            Header: 'Comment',
            accessor: 'comment',
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

export default EveryoneTable
