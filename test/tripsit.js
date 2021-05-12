const tripsitAPI = require('../index.js');
const { assert } = require('chai');

describe("tripsit-api", () => {

  it("should get valid [/api/tripsit/getInteraction]", () =>{
    return tripsitAPI.getInteraction("lsd", "mdma")
    .then( data => {
      assert.property((data), 'status');
      assert.equal(data.status, 'Low Risk & Synergy');

      assert.property(data, 'interactionCategoryA');
      assert.equal(data.interactionCategoryA, 'lsd');

      assert.property(data, 'interactionCategoryB');
      assert.equal(data.interactionCategoryB, 'mdma');
    });
  });

  it("should get invalid [/api/tripsit/getInteraction]", () =>{
    return tripsitAPI.getInteraction("notadrug", "notadrug")
    .then( data => {
      assert.property(data, 'err');
      assert.equal(data.err, true);
      assert.property(data, 'msg');
    });
  });

  it("should get valid [/api/tripsit/getDrug]", () =>{
    return tripsitAPI.getDrug("mdma")
    .then( (data) => {
      assert.property(data, 'name');
      assert.equal(data.name, 'mdma');

      assert.property(data, 'properties');
      assert.property(data, 'aliases');
      assert.property(data, 'categories');
    });
  });

  it("should get invalid [/api/tripsit/getDrug]", () =>{
    return tripsitAPI.getDrug("notadrug")
    .then( (data) => {
      assert.property(data, 'err');
      assert.equal(data.err, true);
      assert.property(data, 'msg');
    });
  });

  it("should get [/api/tripsit/getAllDrugNames]", () =>{
    return tripsitAPI.getAllDrugNames()
    .then( (data) => {
      assert.equal(typeof data, 'object');
    });
  });

  it("should get valid [/api/tripsit/getAllDrugNamesByCategory]", () =>{
    return tripsitAPI.getAllDrugNamesByCategory("psychedelic")
    .then( (data) => {
      assert.equal(typeof data, 'object');
    });
  });

  it("should get invalid [/api/tripsit/getAllDrugNamesByCategory]", () =>{
    return tripsitAPI.getAllDrugNamesByCategory("notacategory")
    .then( (data) => {
      assert.property(data, 'err');
      assert.equal(data.err, true);
      assert.property(data, 'msg');
    });
  });

  it("should get [/api/tripsit/getAllDrugs]", () =>{
    return tripsitAPI.getAllDrugs()
    .then( (data) => {
      assert.equal(typeof data, 'object');
    });
  });

  it("should get [/api/tripsit/getAllCategories]", () =>{
    return tripsitAPI.getAllCategories()
    .then( (data) => {
      assert.equal(typeof data, 'object');
    });
  });

  it("should get [/api/tripsit/getAllDrugAliases]", () =>{
    return tripsitAPI.getAllDrugAliases()
    .then( (data) => {
      assert.equal(typeof data, 'object');
    });
  });

});
