var Model = function() {
  this.storage = {};
  this.listeners = {};
};

Model.prototype.setListener = function(key, callback) {
  this.listeners[key] = callback;
};

Model.prototype.set = function(attribute, value) {
  var attributeListeners;
  
  if (arguments.length === 1) {
    for (var key in attribute) {
      this.storage[key] = attribute[key];
      attributeListeners = 'change:' + key;
    }
  } else {
    this.storage[attribute] = value;
    attributeListeners = 'change:' + attribute;
  }
  
  if (this.listeners.change) {
    this.listeners.change();
  }
  if (this.listeners[attributeListeners]) {
    this.listeners[attributeListeners](this);
  }
};

Model.prototype.get = function(attribute) {
  return this.storage[attribute];
};

Model.prototype.on = function(event, callback) {
  this.listeners[event] = callback;
};

// edit above this line

var person = new Model();

person.on('change', function(_person) {
  console.log('change event');
});


person.set('name', 'bob');
person.set({ age: 99 });

person.on('change:age', function(_person, value) {
  console.log('happy birthday, %s, you are %s',
              _person.get('name'),
              _person.get('age'));
});

person.set({ age: 100 });
person.set({ age: 100 });

console.log('name is %s and age is %s', person.get('name'), person.get('age'));