const keyboardKeys = [

  ['backtick','`', 'ё'],
  ['one','1', '1'],
  ['two','2', '2'],
  ['three','3', '3'],
  ['four','4', '4'],
  ['five','5', '5'],
  ['six','6', '6'],
  ['seven','7', '7'],
  ['eight','8', '8'],
  ['nine','9', '9'],
  ['zero','0', '0'],
  ['huphen','-', '-'],
  ['equals','=', '='],
  ['backspace','Backspace', 'Baskspace'],

  ['tab','Tab', 'Tab'],
  ['qKey','q', 'й'],
  ['wKey','w', 'ц'],
  ['eKey','e', 'у'],
  ['rKey','r', 'к'],
  ['tKey','t', 'е'],
  ['yKey','y', 'н'],
  ['uKey','u', 'г'],
  ['iKey','i', 'ш'],
  ['oKey','o', 'щ'],
  ['pKey','p', 'з'],
  ['square-bracket-right','[', 'х'],
  ['square-bracket-left',']', 'ъ'],
  ['slash-left','\\', '3'],
  ['del','Del', 'Del'],

  ['capslock','CapsLock', 'CapsLock'],
  ['aKey','a', 'ф'],
  ['sKey','s', 'ы'],
  ['dKey','d', 'в'],
  ['fKey','f', 'а'],
  ['gKey','g', 'п'],
  ['hKey','h', 'р'],
  ['jKey','j', 'о'],
  ['kKey','k', 'л'],
  ['lKey','l', 'д'],
  [';', 'ж'],
  ["'", 'э'],
  ['enter','Enter', 'Enter'],

  ['shift-left','Shift', 'Shift'],
  ['zKey','z', 'я'],
  ['xKey','x', 'ч'],
  ['cKey','c', 'с'],
  ['vKey','v', 'м'],
  ['bKey','b', 'и'],
  ['nKey','n', 'т'],
  ['mKey','m', 'ь'],
  ['comma',',', 'б'],
  ['dot','.', 'ю'],
  ['slash-right','/', '.'],
  ['up','&#9650;', '&#9650;'],
  ['shift-right','Shift', 'Shift'],

  ['ctrl-left','Ctrl', 'Ctrl'],
  ['Win', 'Win'],
  ['alt-left','Alt', 'Alt'],
  [ 'space','Space', 'Space'],
  ['alt-right', 'Alt', 'Alt'],
  ['left','&#9668;', '&#9668;'],
  ['down', '&#9660;', '&#9660'],
  ['right','&#9660;', '&#9660'],
  ['ctrl-right','Ctrl', 'Ctrl']

];

const header = document.createElement('header');
header.className = 'header';
header.innerHTML = 'Виртуальная клавиатура';
document.body.prepend(header);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.placeholder = '[ Hello! Enter something ]';
textarea.autofocus = true;
header.after(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
textarea.after(keyboard);

const row1 = document.createElement('div');
row1.className = 'row1';
keyboard.prepend(row1);

const row2 = document.createElement('div');
row1.className = 'row2';
row1.after(row2);

const row3 = document.createElement('div');
row1.className = 'row3';
row2.after(row3);

const row4 = document.createElement('div');
row1.className = 'row4';
row3.after(row4);

const row5 = document.createElement('div');
row1.className = 'row5';
row4.after(row5);

const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = 'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левые ctrl + alt';
document.body.append(footer);

function createKeyboard() {
  for (let i = 0; i < 14; i += 1) {
    const key = document.createElement('span');
    row1.append(key);
    row1.classList = 'row';
    key.className = 'key';
    key.id = keyboardKeys[i][0];
    key.innerHTML = keyboardKeys[i][1];
  }
  for (let i = 14; i < 29; i += 1) {
    const key = document.createElement('span');
    row2.append(key);
    row2.classList = 'row';
    key.className = 'key';
    key.id = keyboardKeys[i][0];
    key.innerHTML = keyboardKeys[i][1];
  }
  for (let i = 29; i < 42; i += 1) {
    const key = document.createElement('span');
    row3.append(key);
    row3.classList = 'row';
    key.className = 'key';
    key.id = keyboardKeys[i][0];
    key.innerHTML = keyboardKeys[i][1];
  }
  for (let i = 42; i < 55; i += 1) {
    const key = document.createElement('span');
    row4.append(key);
    row4.classList = 'row';
    key.className = 'key';
    key.id = keyboardKeys[i][0];
    key.innerHTML = keyboardKeys[i][1];
  }
  for (let i = 55; i < 64; i += 1) {
    const key = document.createElement('span');
    row5.append(key);
    row5.classList = 'row';
    key.className = 'key';
    key.id = keyboardKeys[i][0];
    key.innerHTML = keyboardKeys[i][1];
  }
}

createKeyboard();
