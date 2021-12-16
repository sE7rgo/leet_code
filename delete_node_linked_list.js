let listNode = [4, 5, 1, 9];

const deleteNode = function (node) {
  const index = listNode.indexOf(node);
  listNode.splice(index, 1);
};
deleteNode(5);
console.log(listNode);
