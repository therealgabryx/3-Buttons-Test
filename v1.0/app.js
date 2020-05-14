function checkFirst() {
  var check = prompt("HTML e' un.. ?", 'linguaggio di programmazione');
  if (check == 'linguaggio di markup') {
    alert('bravo!');
    enableBtn(2);
  } else {
    alert('torna a studiare..');
  }
}

function checkSecond() {
  var check = prompt("Google Chrome e' un.. ?", 'social media');
  if (check == 'browser') {
    alert('easy!');
    enableBtn(3);
  } else {
    alert('try again..');
    enableBtn(1);
  }
}

function checkThird() {
  var check = prompt(
    "In un'immagine RGB a 8 bit per pixel quale valore puo' assumere al massimo ogni canale.. ?",
    '512/2'
  );
  if (check == '255') {
    alert('good job!');
    enableBtn(0);
  } else {
    alert('not really..');
    enableBtn(1);
  }
}

function restart() {
  enableBtn(1);
}

function enableBtn(num) {
  switch (num) {
    case 1:
      document.getElementById('btnOne').disabled = false;
      document.getElementById('btnOne').style.visibility = 'visible';
      document.getElementById('btnTwo').disabled = true;
      document.getElementById('btnTwo').style.visibility = 'hidden';
      document.getElementById('btnThree').disabled = true;
      document.getElementById('btnThree').style.visibility = 'hidden';
      break;
    case 2:
      document.getElementById('btnOne').disabled = true;
      document.getElementById('btnTwo').disabled = false;
      document.getElementById('btnTwo').style.visibility = 'visible';
      document.getElementById('btnThree').style.visibility = 'hidden';
      break;
    case 3:
      document.getElementById('btnOne').disabled = true;
      document.getElementById('btnTwo').disabled = true;
      document.getElementById('btnThree').disabled = false;
      document.getElementById('btnThree').style.visibility = 'visible';
      break;
    case 0:
      document.getElementById('btnOne').disabled = true;
      document.getElementById('btnTwo').disabled = true;
      document.getElementById('btnThree').disabled = true;
      alert('test superato!');
      break;
  }
}
