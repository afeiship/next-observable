(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxObservable = nx.declare('nx.Observable', {
    methods: {
      init: function() {
        this.observers = [];
      },
      subscribe: function(inFn) {
        this.observers.push(inFn);
        var self = this;
        var observers = this.observers.slice(0);
        var index = observers.indexOf(inFn);
        return {
          destroy: function() {
            self.observers.splice(index >>> 0, 1);
          }
        };
      },
      notify: function(inData) {
        nx.forEach(this.observers, function(observer) {
          observer(inData);
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxObservable;
  }
})();
