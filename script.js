const keyboardKeys = [

  ['`', 'ё'],
  ['1', '1'],
  ['2', '2'],
  ['3', '3'],
  ['4', '4'],
  ['5', '5'],
  ['6', '6'],
  ['7', '7'],
  ['8', '8'],
  ['9', '9'],
  ['0', '0'],
  ['-', '-'],
  ['=', '='],
  ['Backspace', 'Baskspace'],

  ['Tab', 'Tab'],
  ['q', 'й'],
  ['w', 'ц'],
  ['e', 'у'],
  ['r', 'к'],
  ['t', 'е'],
  ['y', 'н'],
  ['u', 'г'],
  ['i', 'ш'],
  ['o', 'щ'],
  ['p', 'з'],
  ['[', 'х'],
  [']', 'ъ'],
  ['\\', '3'],
  ['Del', 'Del'],

  ['CapsLock', 'CapsLock'],
  ['a', 'ф'],
  ['s', 'ы'],
  ['d', 'в'],
  ['f', 'а'],
  ['g', 'п'],
  ['h', 'р'],
  ['j', 'о'],
  ['k', 'л'],
  ['l', 'д'],
  [';', 'ж'],
  ["'", 'э'],
  ['Enter', 'Enter'],

  ['Shift', 'Shift'],
  ['z', 'я'],
  ['x', 'ч'],
  ['c', 'с'],
  ['v', 'м'],
  ['b', 'и'],
  ['n', 'т'],
  ['m', 'ь'],
  [',', 'б'],
  ['.', 'ю'],
  ['/', '.'],
  ['&#9650;', '&#9650;'],
  ['Shift', 'Shift'],

  ['Ctrl', 'Ctrl'],
  ['Win', 'Win'],
  ['Alt', 'Alt'],
  ['Space', 'Space'],
  ['Alt', 'Alt'],
  ['&#9668;', '&#9668;'],
  ['&#9660;', '&#9660'],
  ['&#9660;', '&#9660'],
  ['Ctrl', 'Ctrl']

];

const header = document.createElement('header');
header.className = 'header';
header.innerHTML = 'Виртуальная клавиатура';
document.body.prepend(header);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.placeholder = '[ Hello! Enter something ]';
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
    key.innerHTML = keyboardKeys[i][0];
  }
  for (let i = 14; i < 29; i += 1) {
    const key = document.createElement('span');
    row2.append(key);
    row2.classList = 'row';
    key.className = 'key';
    key.innerHTML = keyboardKeys[i][0];
  }
  for (let i = 29; i < 42; i += 1) {
    const key = document.createElement('span');
    row3.append(key);
    row3.classList = 'row';
    key.className = 'key';
    key.innerHTML = keyboardKeys[i][0];
  }
  for (let i = 42; i < 55; i += 1) {
    const key = document.createElement('span');
    row4.append(key);
    row4.classList = 'row';
    key.className = 'key';
    key.innerHTML = keyboardKeys[i][0];
  }
  for (let i = 55; i < 64; i += 1) {
    const key = document.createElement('span');
    row5.append(key);
    row5.classList = 'row';
    key.className = 'key';
    key.innerHTML = keyboardKeys[i][0];
  }
}

createKeyboard();
