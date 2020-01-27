import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import { NewPerson } from './RSVP.styled';
import FancyInput from '../Shared/Elements/FancyInput.react';
import { FancyButton } from '../Shared/Elements/FancyButton.react';

const Song = ({
  i,
  removeSong,
  song,
  updateSong
}) => {
  let [uniqueId, setId] = useState('');

  useEffect(() => {
    setId(v4());
  }, [])

  const handleChange = (inputName, value) => {
    song[inputName] = value;
    updateSong(song);
  }

  return (
    <NewPerson
      key={i + '-new-song-' + uniqueId}
    >
      <FancyInput
        hint='Song Name'
        inputName='song'
        inputId={'song' + i}
        inputChangeHandler={handleChange}
        inputValue={song.song}
        key={i + '-song-name-' + uniqueId}
        passedKey={i + '-song-name-' + uniqueId}
      />
      <FancyInput
        hint='Artist'
        inputName='artist'
        inputId={'artist' + i}
        inputChangeHandler={handleChange}
        inputValue={song.artist}
        key={i + '-artist-name-' + uniqueId}
        passedKey={i + '-artist-name-' + uniqueId}
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