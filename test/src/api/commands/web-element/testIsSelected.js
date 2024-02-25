const assert = require('assert');
const MockServer  = require('../../../../lib/mockserver.js');
const CommandGlobals = require('../../../../lib/globals/commands-w3c.js');

describe('element().isSelected() command', function() {
  before(function (done) {
    CommandGlobals.beforeEach.call(this, done);
  });

  after(function (done) {
    CommandGlobals.afterEach.call(this, done);
  });

  it('test .element().isSelected() selected', async function() {
    MockServer.addMock({
      url: '/session/13521-10219-202/element/0/selected',
      method: 'GET',
      response: JSON.stringify({
        value: true
      })
    }, true);

    const resultPromise = this.client.api.element('#signupSection').isSelected();
    const result = await resultPromise;
    assert.strictEqual(result, true);
  });

  it('test .element().isSelected() not selected', async function() {
    MockServer.addMock({
      url: '/session/13521-10219-202/element/0/selected',
      method: 'GET',
      response: JSON.stringify({
        value: false
      })
    }, true);

    const resultPromise = this.client.api.element('#signupSection').isSelected();
    const result = await resultPromise;
    assert.strictEqual(result, false);
  });
});

