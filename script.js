function addToTotal(adjustedRow, numAdjustment) {
  var elem = document.getElementById(adjustedRow);
  var numInput = document.getElementById(numAdjustment);
  if(numInput.value != 0){
    elem.innerHTML = parseInt(elem.innerHTML) + parseInt(numInput.value);
    numInput.value = 0;
  }else elem.innerHTML++;
}

function subtractToTotal(adjustedRow) {
  var elem = document.getElementById(adjustedRow);
  elem.innerHTML--;
}

function moveToNext(current, next) {
  var currentPos = document.getElementById(current).innerHTML;
  var nextPos = document.getElementById(next).innerHTML;
  document.getElementById(next).innerHTML = parseInt(currentPos) + parseInt(nextPos);
  document.getElementById(current).innerHTML = 0;
}
