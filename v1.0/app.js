function checkFirst(device) {
  switch (device) {
    case 'M':
      var check = prompt("HTML e' un.. ?", 'linguaggio di programmazione');
      if (check == 'linguaggio di markup') {
        alert('bravo!');
        enableBtnM(2);
      } else {
        alert('torna a studiare..');
      }
      break;
    case 'D':
      var check = prompt("HTML e' un.. ?", 'linguaggio di programmazione');
      if (check == 'linguaggio di markup') {
        alert('bravo!');
        enableBtn(2);
      } else {
        alert('torna a studiare..');
      }
      break;
  }
}

function checkSecond(device) {
  switch (device) {
    case 'M':
      var check = prompt("Google Chrome e' un.. ?", 'social media');
      if (check == 'browser') {
        alert('easy!');
        enableBtnM(3);
      } else {
        alert('try again..');
        enableBtnM(1);
      }
      break;
    case 'D':
      var check = prompt("Google Chrome e' un.. ?", 'social media');
      if (check == 'browser') {
        alert('easy!');
        enableBtn(3);
      } else {
        alert('try again..');
        enableBtn(1);
      }
      break;
  }
}

function checkThird(device) {
  switch (device) {
    case 'M':
      var check = prompt(
        "In un'immagine RGB a 8 bit per pixel quale valore puo' assumere al massimo ogni canale.. ?",
        '512/2'
      );
      if (check == '255') {
        alert('good job!');
        enableBtnM(0);
      } else {
        alert('not really..');
        enableBtnM(1);
      }
      break;
    case 'D':
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
      break;
  }
}

function restart(device) {
  switch (device) {
    case 'M':
      enableBtnM(1);
      break;
    case 'D':
      enableBtn(1);
      break;
  }
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


function enableBtnM(num) {
  switch (num) {
    case 1:
      document.getElementById('btnOneM').disabled = false;
      document.getElementById('btnOneM').style.visibility = 'visible';
      document.getElementById('btnTwoM').disabled = true;
      document.getElementById('btnTwoM').style.visibility = 'hidden';
      document.getElementById('btnThreeM').disabled = true;
      document.getElementById('btnThreeM').style.visibility = 'hidden';
      break;
    case 2:
      document.getElementById('btnOneM').disabled = true;
      document.getElementById('btnTwoM').disabled = false;
      document.getElementById('btnTwoM').style.visibility = 'visible';
      document.getElementById('btnThreeM').style.visibility = 'hidden';
      break;
    case 3:
      document.getElementById('btnOneM').disabled = true;
      document.getElementById('btnTwoM').disabled = true;
      document.getElementById('btnThreeM').disabled = false;
      document.getElementById('btnThreeM').style.visibility = 'visible';
      break;
    case 0:
      document.getElementById('btnOneM').disabled = true;
      document.getElementById('btnTwoM').disabled = true;
      document.getElementById('btnThreeM').disabled = true;
      alert('test superato!');
      break;
  }
}

