const tripsitAPI = require('../index.js');
const { assert } = require('chai');

describe("tripsit", () => {

  it("should get valid drug interaction", () =>{
    tripsitAPI.getInteraction("lsd", "alcohol")
    .then( data => {
      assert.property(data, 'status');
      assert.equal(data.status, 'Low Risk & Decrease');

      assert.property(data, 'interactionCategoryA');
      assert.equal(data.interactionCategoryA, 'lsd');

      assert.property(data, 'interactionCategoryB');
      assert.equal(data.interactionCategoryB, 'alcohol');
    });
  });

});
