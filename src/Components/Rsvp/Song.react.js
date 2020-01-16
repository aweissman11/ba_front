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
        inputId={'song' + i}
        inputChangeHandler={handleChange}
        inputValue={song.song}
        key={i + 'song-name' + Date.now()}
      />
      <FancyInput
        hint='Artist'
        inputName='artist'
        inputId={'artist' + i}
        inputChangeHandler={handleChange}
        inputValue={song.artist}
        key={i + 'artist-name' + Date.now()}
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