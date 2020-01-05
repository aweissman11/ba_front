import React from 'react'
import { NewPerson } from './RSVP.styled';
import FancyInput from '../Shared/Elements/FancyInput.react';
import { FancyButton } from '../Shared/Elements/FancyButton.react';

const Song = ({
  i,
  removeSong,
  song,
  updateSong
}) => {

  const handleChange = (inputName, value) => {
    song[inputName] = value;
    updateSong(song);
  }

  return (
    <NewPerson>
      <FancyInput
        hint='Song Name'
        inputName='song'
        inputChangeHandler={handleChange}
        inputValue={song.song}
      />
      <FancyInput
        hint='Artist'
        inputName='artist'
        inputChangeHandler={handleChange}
        inputValue={song.artist}
      />
      <FancyButton
        handleClick={() => removeSong(i)}
        btnLabel='Remove Song'
        centerIt
      />
    </NewPerson>
  )
}

export default Song