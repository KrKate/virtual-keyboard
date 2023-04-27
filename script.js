const keyboardKeys = [

  ['Backquote', '`', 'ё'],
  ['Digit1', '1', '1'],
  ['Digit2', '2', '2'],
  ['Digit3', '3', '3'],
  ['Digit4', '4', '4'],
  ['Digit5', '5', '5'],
  ['Digit6', '6', '6'],
  ['Digit7', '7', '7'],
  ['Digit8', '8', '8'],
  ['Digit9', '9', '9'],
  ['Digit0', '0', '0'],
  ['Minus', '-', '-'],
  ['Equal', '=', '='],
  ['Backspace', 'Backspace', 'Baskspace'],

  ['Tab', 'Tab', 'Tab'],
  ['KeyQ', 'q', 'й'],
  ['KeyW', 'w', 'ц'],
  ['KeyE', 'e', 'у'],
  ['KeyR', 'r', 'к'],
  ['KeyT', 't', 'е'],
  ['KeyY', 'y', 'н'],
  ['KeyU', 'u', 'г'],
  ['KeyI', 'i', 'ш'],
  ['KeyO', 'o', 'щ'],
  ['KeyP', 'p', 'з'],
  ['BracketLeft', '[', 'х'],
  ['BracketRight', ']', 'ъ'],
  ['Backslash', '\\', '3'],
  ['Delete', 'Del', 'Del'],

  ['CapsLock', 'CapsLock', 'CapsLock'],
  ['KeyA', 'a', 'ф'],
  ['KeyS', 's', 'ы'],
  ['KeyD', 'd', 'в'],
  ['KeyF', 'f', 'а'],
  ['KeyG', 'g', 'п'],
  ['KeyH', 'h', 'р'],
  ['KeyJ', 'j', 'о'],
  ['KeyK', 'k', 'л'],
  ['KeyL', 'l', 'д'],
  ['Semicolon', ';', 'ж'],
  ['Quote', "'", 'э'],
  ['Enter', 'Enter', 'Enter'],

  ['ShiftLeft', 'Shift', 'Shift'],
  ['KeyZ', 'z', 'я'],
  ['KeyX', 'x', 'ч'],
  ['KeyC', 'c', 'с'],
  ['KeyV', 'v', 'м'],
  ['KeyB', 'b', 'и'],
  ['KeyN', 'n', 'т'],
  ['KeyM', 'm', 'ь'],
  ['Comma', ',', 'б'],
  ['Period', '.', 'ю'],
  ['Slash', '/', '.'],
  ['ArrowUp', '&#9650;', '&#9650;'],
  ['ShiftRight', 'Shift', 'Shift'],

  ['ControlLeft', 'Ctrl', 'Ctrl'],
  ['MetaLeft', 'Win', 'Win'],
  ['AltLeft', 'Alt', 'Alt'],
  ['Space', 'Space', 'Space'],
  ['AltRight', 'Alt', 'Alt'],
  ['ArrowLeft', '&#9668;', '&#9668;'],
  ['ArrowDown', '&#9660;', '&#9660'],
  ['ArrowRight', '&#9658;', '&#9658;'],
  ['ControlRight', 'Ctrl', 'Ctrl']

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

/// ///////////////////////////////////////////////////////////////////////////

function createKeyboard() {
  for (let i = 0; i < 14; i += 1) {
    const key = document.createElement('span');
    row1.append(key);
    row1.classList = 'row';
    key.className = `key ${keyboardKeys[i][0].toLowerCase()}`;
    key.id = keyboardKeys[i][0];
    key.innerHTML = keyboardKeys[i][1];
  }
  for (let i = 14; i < 29; i += 1) {
    const key = document.createElement('span');
    row2.append(key);
    row2.classList = 'row';
    key.className = `key ${keyboardKeys[i][0].toLowerCase().replace('key', 'key-')}`;
    key.id = keyboardKeys[i][0];
    key.innerHTML = keyboardKeys[i][1];
  }
  for (let i = 29; i < 42; i += 1) {
    const key = document.createElement('span');
    row3.append(key);
    row3.classList = 'row';
    key.className = `key ${keyboardKeys[i][0].toLowerCase().replace('key', 'key-')}`;
    key.id = keyboardKeys[i][0];
    key.innerHTML = keyboardKeys[i][1];
  }
  for (let i = 42; i < 55; i += 1) {
    const key = document.createElement('span');
    row4.append(key);
    row4.classList = 'row';
    key.className = `key ${keyboardKeys[i][0].toLowerCase().replace('key', 'key-')}`;
    key.id = keyboardKeys[i][0];
    key.innerHTML = keyboardKeys[i][1];
  }
  for (let i = 55; i < 64; i += 1) {
    const key = document.createElement('span');
    row5.append(key);
    row5.classList = 'row';
    key.className = `key ${keyboardKeys[i][0].toLowerCase()}`;
    key.id = keyboardKeys[i][0];
    key.innerHTML = keyboardKeys[i][1];
  }
}

createKeyboard();

/// //////////////////////////////////////////////////////////////////////////////

// document.addEventListener('keydown', (event) => {
//   console.log(event.code);
//   for (let i=0; i<keyboardKeys; i++) {
//     if(event.code === keyboardKeys[i][0]) {
//       let key = keyboardKeys[i][0].toLowerCase().replace('key', 'key-');
//       document.querySelector(`.${key}`).classList.add('active');
//     }
//   }
// });

document.addEventListener('keydown', (event) => {
  for (let i = 0; i < keyboardKeys.length; i += 1) {
    if (event.code === keyboardKeys[i][0]) {
      const button = keyboardKeys[i][0].toLowerCase().replace('key', 'key-');
      document.querySelector(`.${button}`).classList.add('active');
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < keyboardKeys.length; i += 1) {
    if (event.code === keyboardKeys[i][0]) {
      const button = keyboardKeys[i][0].toLowerCase().replace('key', 'key-');
      document.querySelector(`.${button}`).classList.remove('active');
    }
  }
});
