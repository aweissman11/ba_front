import React from 'react';
import { Person } from './Everyone.styled';

const TableCell = ({ cell }) => {
  console.log(cell)
  if (typeof cell.value === 'object') {
    if (cell.column.Header === 'People') {
      return (
        <td>
          {cell.value.map((entry) => (
            <Person>
              <p>Name: {entry.fullName}</p>
              <p>Allergies: {entry.allergies}</p>
              <p>IsKid: {JSON.stringify(entry.isKid)}</p>
            </Person>
          ))}
        </td>
      )
    }
    if (cell.column.Header === 'Events') {
      return (
        <td>
          {cell.value.map((entry) => (
            <Person>
              <p>{entry}</p>
            </Person>
          ))}
        </td>
      )
    }
    if (cell.column.Header === 'Songs') {
      return (
        <td>
          {cell.value.map((entry) => (
            <Person>
              <p>Song: {entry.song}</p>
              <p>Artist: {entry.artist}</p>
            </Person>
          ))}
        </td>
      )
    }


    return (
      <td>
        {cell.value.map((entry) => (
          <p>{JSON.stringify(entry)}</p>
        ))}
      </td>
    )
  }
  if (cell.value === true) {
    return (
      <td>YES</td>
    )
  }
  if (cell.value === false) {
    return (
      <td>NO</td>
    )
  }
  if (cell.column.Header === 'arrival') {
    return (
      <td>{new Date(cell.value).toDateString()}</td>
    )
  }

  return (
    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
  )
}

export default TableCell;