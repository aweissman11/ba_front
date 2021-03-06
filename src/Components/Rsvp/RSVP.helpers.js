
export const getCarpoolText = (driving) => {
  return driving === 'spots' ? 'I have this many spots available' : 'I need this meany seats';
}

export const addPerson = (rsvpInfo, [changeRsvpInfo, forceUpdate]) => {
  return () => {
    let newPerson = {
      fullName: '',
      isKid: false,
      allergies: 'None',
      personIndex: rsvpInfo.people.length
    }

    rsvpInfo.people = [...rsvpInfo.people, newPerson];
    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }
}

export const removePerson = (index, rsvpInfo, [changeRsvpInfo, forceUpdate]) => {
  return () => {
    let newPeopleList = rsvpInfo.people.filter((p, i) => i !== index);
    rsvpInfo.people = newPeopleList;
    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }
}

export const addSong = (rsvpInfo, [changeRsvpInfo, forceUpdate]) => {
  return () => {
    let newSong = {
      song: '',
      artist: ''
    };

    rsvpInfo.songs = [...rsvpInfo.songs, newSong];
    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }
}

export const removeSong = (index, rsvpInfo, [changeRsvpInfo, forceUpdate]) => {
  return () => {
    rsvpInfo.songs.splice(index, 1);
    rsvpInfo.songs = [...rsvpInfo.songs];
    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }
}

export const updateSong = (song, index, rsvpInfo, [changeRsvpInfo, forceUpdate]) => {
  return () => {
    rsvpInfo.songs[index] = song;

    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }
}

export const getSaveCompleteText = (saveSuccess) => {
  if (saveSuccess.rsvp_id) {
    return { saveMessage: 'Save Successful!' };
  } else {
    return {
      saveMessage: 'Failed to save',
      failMessage: saveSuccess.message
    };
  }
}