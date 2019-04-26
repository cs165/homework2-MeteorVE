const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};


function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.

  var nextNode = function (node, deeperDone) {
    return !node ? undefined
      : node.childNodes.length && !deeperDone ? node.childNodes[0]
        : node.nextSibling ? node.nextSibling
          : nextNode(node.parentNode, 1);
  };

  for (var node = document.body; node; node = nextNode(node)) {
    console.log(node.nodeName);
    if (node.nodeName == "BODY" || node.nodeName == "SCRIPT" || node.nodeName == "STYLE" || node.nodeName == "svg" || node.nodeName == "HEADER" || node.nodeName == "#text" || node.nodeName == "COMMENT" || node.nodeName == "DIV" || node.nodeName == "MAIN" )
      continue;
    console.log("Start to detect : " + node.innerHTML);
    var words = node.innerHTML.split(/[ \n]/);
    console.log(words);
    var recovery_text = "";
    
    for(var i=0; i < words.length; i++ ){
      if (words[i] in MATCH_LIST ){
        console.log("before : " + words[i] + " match : " + MATCH_LIST[words[i]]);
        words[i] = MATCH_LIST[words[i]];
      }
      recovery_text += words[i] + " " ;
    }
    //console.log(recovery_text);
    node.innerHTML = recovery_text;
    //if (node.id) console.log(node.id); // skip text nodes
  }
}



transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');