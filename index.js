function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  // return document.querySelector('#nested .target')
  var nest = document.querySelector("#nested")
  return nest.querySelector('.target')
}

function deepestChild() {
  // var current = document.querySelector('#grand-node')
  // while (current.children.length) {
  //   current = current.children[0]
  // }
  // return current
  var divs = document.querySelectorAll('#grand-node div');
  for (var i = 0; i < divs.length; i++) {
    if (!divs[i].children.length) {
      return divs[i];
    }
  }
}

function increaseRankBy(n){
  var lis = document.querySelectorAll(".ranked-list li")
  for (var i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}
