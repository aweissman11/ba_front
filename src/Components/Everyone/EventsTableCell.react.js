import React from 'react';
import { Person, InnerTdWrap } from './Everyone.styled';

const EventsTableCell = ({ cell }) => {
  if (typeof cell.value === 'object') {
    if (cell.column.Header === 'Attendees') {
      return (
        <td>
          <InnerTdWrap>
            {cell.value.map((entry, i) => (
              <Person key={i}>
                <p>Party of: {entry.partyName}</p>
                <p>Email: {entry.email}</p>
                <p>Guests: {entry.partyNum}</p>
              </Person>
            ))}
          </InnerTdWrap>
        </td>
      )
    }

    return (
      <td>
        {cell.value.map((entry, i) => (
          <p key={i}>{JSON.stringify(entry)}</p>
        ))}
      </td>
    )
  }

  return (
    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
  )
}

export default EventsTableCell;