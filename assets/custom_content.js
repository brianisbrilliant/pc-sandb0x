function file_upload_add(node) {
  if (node.value!='') {
  	node=node.parentNode;
    if (node.nextElementSibling === null) {
      var clone=node.cloneNode(true);
      clone.children[0].value='';
      node.parentNode.appendChild(clone);
    }
  }
}

function file_upload_delete(node) {
  if (node.parentNode.children[0].value!='') {
  	node=node.parentNode;
    if (node.parentNode.children.length==2) {
      var clone=node.cloneNode(true);
      clone.children[0].value='';
      node.parentNode.appendChild(clone);
    }
  	node.parentNode.removeChild(node);
  }
}