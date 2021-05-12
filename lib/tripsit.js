const fetch = require('node-fetch');

const baseURL = "https://tripbot.tripsit.me/api/tripsit/";

function checkStatus(res) {
  if (res.ok) { return res; }
  throw { status: res.status, message: res.statusText };
}

function getInteraction(drugA, drugB) {
  return fetch(`${baseURL}getInteraction?drugA=${drugA}&drugB=${drugB}`)
    .then(checkStatus)
    .then(res => res.json())
    .then(json => json.data[0]);
}


exports.getInteraction = getInteraction;
