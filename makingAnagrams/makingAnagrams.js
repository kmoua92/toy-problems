/*
 * Source: https://www.hackerrank.com/challenges/ctci-making-anagrams
 * 
 * Alice is taking a cryptography class and finding anagrams to be very useful.
 * We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string.
 * In other words, both strings must contain the same exact letters in the same exact frequency.
 * For example, 'bacdc' and 'dcbac' are anagrams, but 'bacdc' and 'dcbad' are not.
 *
 * Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of
 * character deletions required to make the two strings anagrams. Can you help her find this number?
 *
 * Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions
 * required to make a and b anagrams. Any characters can be deleted from either of the strings.
 *
 * It is guaranteed that a and b consist of lowercase English alphabetic letters (i.e., a through z).
 * 
 */

var makingAnagrams = function makingAnagrams(a, b) {
  // initialize storage objects and deleteCount
  var storageObjects = [ {}, {} ];
  var deleteCount = 0;
  // split strings into arrays
  var stringArrays = [ a.split(''), b.split('') ];
  // loop through each string

  stringArrays.forEach(function(stringArray, storageArrayIndex) {
    stringArray.forEach(function(char) {
      // store character in respective storage object with count
      if ( storageObjects[storageArrayIndex][char] ) {
        storageObjects[storageArrayIndex][char] += 1;
      } else {
        storageObjects[storageArrayIndex][char] = 1;
      }
    });
  });

  // loop through each storage object
  storageObjects.forEach(function(storageObject, storageObjectIndex) {
    // get index of other storage object
    var otherStorageObjectIndex = !storageObjectIndex ? 1 : 0;

    for (var key in storageObject) {
      // if character is not present in the other storage object
      if ( storageObjects[ otherStorageObjectIndex ][key] === undefined ) {
        // increment deleteCount by the count in the storage object
        deleteCount += storageObject[key];
        // delete the property from storage object
        delete storageObject[key];
      }
      // if the counts in both storage objects are not equal
      if ( storageObject[key] !== storageObjects[ otherStorageObjectIndex ][key] ) {
        // increment deleteCount by the difference
        deleteCount += Math.abs( storageObject[key] - storageObjects[otherStorageObjectIndex][key] );
        // delete the property from both storage objects
        delete storageObject[key];
        delete storageObjects[otherStorageObjectIndex][key];
      }
    }
  });

  // return deleteCount
  return deleteCount;
};