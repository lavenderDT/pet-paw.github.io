var kot = document.getElementById('kot');

kot.onmousedown = function(e) {

  var coords = getCoords(kot);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  kot.style.position = 'absolute';
  document.body.appendChild(kot);
  moveAt(e);

  kot.style.zIndex = 1000; 

  function moveAt(e) {
    kot.style.left = e.pageX - shiftX + 'px';
    kot.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  kot.onmouseup = function() {
    document.onmousemove = null;
    kot.onmouseup = null;
  };

}

kot.ondragstart = function() {
  return false;
};

function getCoords(elem) {  
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}