var nx = require('next-js-core2');
var NxObservable = require('../src/next-observable');

describe('NxObservable.methods', function() {
  test('init NxObservable', function() {
    var ob1 = new NxObservable();
    var res = ob1.subscribe(function(data) {
      console.log('test1:->', data);
    });

    ob1.notify({ name: 'test1' });
    ob1.notify({ name: 'test2' });
    res.destroy();
    ob1.notify({ name: 'test3' });
  });
});
