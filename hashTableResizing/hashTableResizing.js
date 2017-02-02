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
    // loop through storage
      // loop through each tuple
        // get hash from key in tuple
          // add tuple to tempStorage
    // set storage equal to tempStorage
  };
  
  result.insert = function(key, value) {
    // get hashed key
    // if storage has value at hash
      // initialize foundMatch to false
      // loop through array at hash
        // if key in tuple matches key
          // overwrite value in tuple with value
          // toggle foundMatch
      // if foundMatch if false
        // push key, value tuple to array at hash
    // else
      // push array with single key, value tuple
    // increment size by 1

    // if size is greater than 3/4th of storageLimit
      // resize storage
  };

  result.retrieve = function(key) {
    // get hashed key
    // if storage has value at hash
      // loop through array at hash
        // if key in tuple matches key
          // return value in tuple
    // return null
  };

  result.remove = function(key) {
    // get hashed key
    // initialize value with null
    // if storage has value at hash
      // loop through array at hash
        // if key in tuple matches key
          // set value to the value in tuple
          // delete tuple

    // if size is less than 1/4th of storageLimit
      // resize storage

    // return value
  };

  return result;
};
