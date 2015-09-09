var Model = function() {
  this.storage = {};
  this.listeners = {};
};

Model.prototype.trigger = function(event) {
  var eventListeners = this.listeners[event] || [];

  for (var i = 0; i < eventListeners.length; i++) {
    eventListeners[i](this);
  }
};

// When using an object with multiple key-value pairs to set attributes,
// do we want to trigger multiple 'change' events or just one?
// It seems that we definitely want to trigger the 'change:attribute'
// event per attribute changed. 
Model.prototype.setAttribute = function(attribute, value) {
  if (this.storage[attribute] !== value) {
      this.storage[attribute] = value;
      this.trigger('change');
      this.trigger('change:' + attribute);
  }
};

Model.prototype.set = function(attribute, value) {
  if (typeof attribute === "object" && attribute !== null) {
    for (var key in attribute) {
      this.setAttribute(key, attribute[key]);
    }
  } else {
    this.setAttribute(attribute, value);
  }
};

Model.prototype.get = function(attribute) {
  return this.storage[attribute];
};

Model.prototype.on = function(event, callback) {
  this.listeners[event] = this.listeners[event] || [];
  this.listeners[event].push(callback);
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

person.on('change:hair', function(_person, value) {
  console.log('your hair color is %s',
              _person.get('hair'));
});

person.set({ age: 100 });
person.set({ age: 100, hair: 'brown' });

console.log('name is %s and age is %s', person.get('name'), person.get('age'));