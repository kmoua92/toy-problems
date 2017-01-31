/*
 *
 * Given a root of a binary search tree and a key x, find the largest key in the tree that is
 * smaller than x.
 * 
 * Example: if an in-order list of all keys in the tree is [2, 3, 4, 7, 17, 19, 21, 35, 89] and x
 * is 19, the biggest key that is smaller than x is 17.
 * 
 */

var largestSmallerBSTKey = function largestSmallerBSTKey(root, x, largestValidKey) {
  // if largestValidKey is undefined set to null
  // if value at root is greater than or equal to x
    // if left property in root is null return largestValidKey
    // else return invocation of largestSmallerBSTKey with left property
  // if right property in root is null return largestValidKey
  // else return invocation of largestSmallerBSTKey with right property and current root value
};
