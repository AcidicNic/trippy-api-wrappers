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

function getDrug(drugName) {
  return fetch(`${baseURL}getDrug?name=${drugName}`)
    .then(checkStatus)
    .then(res => res.json())
    .then(json => json.data[0]);
}

function getAllDrugNames() {
  return fetch(`${baseURL}getAllDrugNames`)
    .then(checkStatus)
    .then(res => res.json())
    .then(json => json.data[0]);
}

function getAllDrugNamesByCategory(category) {
  return fetch(`${baseURL}getAllDrugNamesByCategory?category=${category}`)
    .then(checkStatus)
    .then(res => res.json())
    .then(json => {
      /* This API route doesn't return an error for an invalid
        category name! :( So I added my own check for it here. */
      if (json.err == null && json.data[0].length == 0) {
        return { err: true, msg: "Invalid category name." };
      }
      return json.data[0];
    });
}

function getAllDrugs() {
  return fetch(`${baseURL}getAllDrugs`)
    .then(checkStatus)
    .then(res => res.json())
    .then(json => json.data[0]);
}

function getAllCategories() {
  return fetch(`${baseURL}getAllCategories`)
    .then(checkStatus)
    .then(res => res.json())
    .then(json => json.data[0]);
}

function getAllDrugAliases() {
  return fetch(`${baseURL}getAllDrugAliases`)
    .then(checkStatus)
    .then(res => res.json())
    .then(json => json.data[0]);
}

module.exports = {
  getInteraction,
  getDrug,
  getAllDrugNames,
  getAllDrugNamesByCategory,
  getAllDrugs,
  getAllCategories,
  getAllDrugAliases
}
