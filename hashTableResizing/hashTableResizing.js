/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resize = function resize(newSize) {
    // initialize a tempStorage variable to []
    var tempStorage = [];
    // loop through storage
    for (var i = 0; i < storage.length; i++) {
      // loop through each tuple
      if (storage[i]) {
        for (var j = 0; j < storage[i].length; j++) {
          // get hash from key in tuple
          var hash = getIndexBelowMaxForKey(storage[i][j][0], newSize);
          // add tuple to tempStorage
          if (tempStorage[hash]) {
            tempStorage[hash].push(storage[i][j]);
          } else {
            tempStorage[hash] = [storage[i][j]];
          }
        }
      }
    }
    // set storage equal to tempStorage
    storage = tempStorage;
    // set storageLimit to newSize
    storageLimit = newSize;
  };
  
  result.insert = function(key, value) {
    // get hashed key
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    // if storage has value at hash
    if (storage[hash]) {
      // initialize foundMatch to false
      var foundMatch = false;
      // loop through array at hash
      for (var i = 0; i < storage[hash].length; i++) {
        // if key in tuple matches key
        if (storage[hash][i][0] === key) {
          // overwrite value in tuple with value
          storage[hash][i][1] = value;
          // toggle foundMatch
          foundMatch = !foundMatch;
        }
      }
      // if foundMatch if false
      if (!foundMatch) {
        // push key, value tuple to array at hash
        storage[hash].push([key, value]);
      }
    // else
    } else {
      // add array with single key, value tuple at hash
      storage[hash] = [[key, value]];
    }
    // increment size by 1
    size++;

    // if size is greater than 3/4th of storageLimit
    if (size > 0.75 * storageLimit) {
      // resize storage
      resize(size * 2);
    }
  };

  result.retrieve = function(key) {
    // get hashed key
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    // if storage has value at hash
    if (storage[hash]) {
      // loop through array at hash
      for (var i = 0; i < storage[hash].length; i++) {
        // if key in tuple matches key
        if (storage[hash][i][0] === key) {
          // return value in tuple
          return storage[hash][i][1];
        }
      }
    }
    // return null
    return null;
  };

  result.remove = function(key) {
    // get hashed key
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    // initialize value with null
    var value = null;
    // if storage has value at hash
    if (storage[hash]) {
      // loop through array at hash
      for (var i = 0; i < storage[hash].length; i++) {
        // if key in tuple matches key
        if (storage[hash][i][0] === key) {
          // set value to the value in tuple
          value = storage[hash][i][1];
          // splice out tuple
          storage[hash].splice(i, 1);
        }
      }
    }

    // if size is less than 1/4th of storageLimit
    if (size < 0.25 * storageLimit) {
      // resize storage
      resize(size / 2);
    }

    // return value
    return value;
  };

  return result;
};
