describe('largestSmallerBSTKey', function() {

  // build BST constructor
  var BinarySearchTree = function(values) {
    // set root
    var middleIndex = Math.floor(values.length / 2);
    this.root = this.buildNode(values[middleIndex]);

    // loop through rest of values and build tree
    values.forEach(function(value, index) {
      if (index !== middleIndex) { this.addNode(value); }
    });
  };

  BinarySearchTree.prototype.buildNode = function(value) {
    return {
      value: value,
      left: null,
      right: null
    };
  };

  BinarySearchTree.prototype.addNode = function(value, root) {
    if (value < root.value) {
      if (!root.left) {
        root.left = this.buildNode(value);
      } else {
        this.addNode(value, root.left);
      }
    } else {
      if (!root.right) {
        root.right = this.buildNode(value);
      } else {
        this.addNode(value, root.right);
      }
    }
  };

  // build BST example
  var exampleValues = [2, 3, 4, 7, 17, 19, 21, 35, 89];
  var exampleBST = new BinarySearchTree(exampleValues);

  it('should return a number', function() {
    var result = largestSmallerBSTKey(exampleBST.root, 19);

    expect(result).to.be.a('number');
  });

  it('should handle example case', function() {
    var result = largestSmallerBSTKey(exampleBST.root, 19);

    expect(result).to.be.equal(17);
  });
});
