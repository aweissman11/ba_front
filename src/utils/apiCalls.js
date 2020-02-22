
let blankInfo = {
  name: '',
  attending: false,
  email: '',
  firstTime: false,
  people: [],
  lodging: 'tent',
  dogs: '0',
  arrival: new Date('June 26, 2020'),
  events: [],
  chores: [],
  driving: 'full',
  spots: '0',
  songs: []
}

let externalApi = 'https://api.chelseyandaaronsbigadventure.com';
let currentApi = externalApi;

// Keeping these here for easy development if API needs updates
// let localApi = 'http://localhost:3000';
// let currentApi = localApi;


export const getRsvpFromDatabase = async (userInfo, rsvpInfo, [changeRsvpInfo, forceUpdate, setShouldPost]) => {
  let url = `${currentApi}/api/rsvp/${userInfo.sub}`;

  const response = await fetch(url);

  let readableResponse = [];
  if (response.status === 200) {
    readableResponse = await response.json();

    if (readableResponse[0] && readableResponse[0].user_id !== rsvpInfo.user_id) {
      readableResponse[0].arrival = new Date(readableResponse[0].arrival);
      changeRsvpInfo(readableResponse[0]);
      setShouldPost(false);
    }
  } else {
    changeRsvpInfo({
      ...blankInfo,
      email: userInfo.email,
      user_id: userInfo.sub
    });
    forceUpdate();
  }
}

export const postRSVPInfo = async (info) => {
  let url = `${currentApi}/api/rsvp/`;

  let formattedInfo = {
    Rsvp: {
      ...info
    }
  }

  const optionsObject = {
    method: "POST",
    body: JSON.stringify(formattedInfo),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const response = await fetch(url, optionsObject);
  if (response.ok) {
    const readableResponse = await response.json();
    return await readableResponse;
  } else {
    return {
      err: response.status,
      message: response.message
    }
  }
}


export const patchRsvpInfo = async (info) => {
  let url = `${currentApi}/api/rsvp/`;

  let formattedInfo = {
    Rsvp: {
      ...info
    }
  }

  const optionsObject = {
    method: "PATCH",
    body: JSON.stringify(formattedInfo),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    }
  }

  const response = await fetch(url, optionsObject);

  if (response.ok) {
    const readableResponse = await response.json();
    return await readableResponse;
  } else {
    return {
      err: response.status,
      message: response.message
    }
  }
}


export const returnRsvps = async () => {
  let url = `${currentApi}/api/rsvps`;

  const response = await fetch(url);

  let readableResponse = [];
  if (response.status === 200) {
    readableResponse = await response.json();
  }

  return readableResponse.Items;
}