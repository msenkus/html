function addToTotal(adjustedRow) {
  var elem = document.getElementById(adjustedRow);
  elem.innerHTML++;
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
