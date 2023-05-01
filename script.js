const keyboardKeys = [

  ['Backquote', '`', 'ё', '~', 'Ё'],
  ['Digit1', '1', '1', '!', '!'],
  ['Digit2', '2', '2', '@', '"'],
  ['Digit3', '3', '3', '#', '№'],
  ['Digit4', '4', '4', '$', ';'],
  ['Digit5', '5', '5', '%', '%'],
  ['Digit6', '6', '6', '^', ':'],
  ['Digit7', '7', '7', '&', '?'],
  ['Digit8', '8', '8', '*', '*'],
  ['Digit9', '9', '9', '(', '('],
  ['Digit0', '0', '0', ')', ')'],
  ['Minus', '-', '-', '_', '_'],
  ['Equal', '=', '=', '+', '+'],
  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],

  ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
  ['KeyQ', 'q', 'й', 'Q', 'Й'],
  ['KeyW', 'w', 'ц', 'W', 'Ц'],
  ['KeyE', 'e', 'у', 'E', 'У'],
  ['KeyR', 'r', 'к', 'R', 'К'],
  ['KeyT', 't', 'е', 'T', 'Е'],
  ['KeyY', 'y', 'н', 'Y', 'Н'],
  ['KeyU', 'u', 'г', 'U', 'Г'],
  ['KeyI', 'i', 'ш', 'I', 'Ш'],
  ['KeyO', 'o', 'щ', 'O', 'Щ'],
  ['KeyP', 'p', 'з', 'P', 'З'],
  ['BracketLeft', '[', 'х', '{', 'Ъ'],
  ['BracketRight', ']', 'ъ', '}', 'Ъ'],
  ['Backslash', '\\', '\\', '|', '/'],
  ['Delete', 'Del', 'Del', 'Del', 'Del'],

  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
  ['KeyA', 'a', 'ф', 'A', 'Ф'],
  ['KeyS', 's', 'ы', 'S', 'Ы'],
  ['KeyD', 'd', 'в', 'D', 'В'],
  ['KeyF', 'f', 'а', 'F', 'А'],
  ['KeyG', 'g', 'п', 'G', 'П'],
  ['KeyH', 'h', 'р', 'H', 'Р'],
  ['KeyJ', 'j', 'о', 'J', 'О'],
  ['KeyK', 'k', 'л', 'K', 'Л'],
  ['KeyL', 'l', 'д', 'L', 'Д'],
  ['Semicolon', ';', 'ж', ':', 'Ж'],
  ['Quote', "'", 'э', '"', 'Э'],
  ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],

  ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['KeyZ', 'z', 'я', 'Z', 'Я'],
  ['KeyX', 'x', 'ч', 'X', 'Ч'],
  ['KeyC', 'c', 'с', 'C', 'С'],
  ['KeyV', 'v', 'м', 'V', 'М'],
  ['KeyB', 'b', 'и', 'B', 'И'],
  ['KeyN', 'n', 'т', 'N', 'Т'],
  ['KeyM', 'm', 'ь', 'M', 'Ь'],
  ['Comma', ',', 'б', '<', 'Б'],
  ['Period', '.', 'ю', '>', 'Ю'],
  ['Slash', '/', '.', '?', ','],
  ['ArrowUp', '⇧', '⇧', '⇧', '⇧'],
  ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],

  ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
  ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['Space', 'Space', 'Space', 'Space', 'Space'],
  ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['ArrowLeft', '⇦', '⇦', '⇦', '⇦'],
  ['ArrowDown', '⇩', '⇩', '⇩', '⇩'],
  ['ArrowRight', '⇨', '⇨', '⇨', '⇨'],
  ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],

];

// Создаю элементы страницы
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

let currentLang = 'en';
localStorage.setItem('en', 1);

document.addEventListener('keydown', (event) => {
  if (((event.code === 'AltLeft' && event.ctrlKey) || (event.code === 'ControlLeft' && event.altKey)) && currentLang === 'ru') {
    for (let i = 0; i < keyboardKeys.length; i += 1) {
      const key = document.querySelector(`#${keyboardKeys[i][0]}`);
      key.innerHTML = `${keyboardKeys[i][1]}`;
      localStorage.removeItem('ru', 2);
      localStorage.setItem('en', 1);
      currentLang = 'en';
    }
  } else if (((event.code === 'AltLeft' && event.ctrlKey) || (event.code === 'ControlLeft' && event.altKey)) && currentLang === 'en') {
    for (let i = 0; i < keyboardKeys.length; i += 1) {
      const key = document.querySelector(`#${keyboardKeys[i][0]}`);
      key.innerHTML = `${keyboardKeys[i][2]}`;
      localStorage.removeItem('en', 1);
      localStorage.setItem('ru', 2);
      currentLang = 'ru';
    }
  }
});

// Создаю клавиши клавиатуры
function createKeyboard() {
  for (let i = 0; i < 14; i += 1) {
    const key = document.createElement('span');
    row1.append(key);
    row1.classList = 'row';
    key.className = `key ${keyboardKeys[i][0].toLowerCase()}`;
    const [id] = keyboardKeys[i];
    key.id = id;
    key.innerHTML = keyboardKeys[i][localStorage.getItem('en') || localStorage.getItem('ru')];
  }
  for (let i = 14; i < 29; i += 1) {
    const key = document.createElement('span');
    row2.append(key);
    row2.classList = 'row';
    key.className = `key ${keyboardKeys[i][0].toLowerCase().replace('key', 'key-')}`;
    const [id] = keyboardKeys[i];
    key.id = id;
    key.innerHTML = keyboardKeys[i][localStorage.getItem('en') || localStorage.getItem('ru')];
  }
  for (let i = 29; i < 42; i += 1) {
    const key = document.createElement('span');
    row3.append(key);
    row3.classList = 'row';
    key.className = `key ${keyboardKeys[i][0].toLowerCase().replace('key', 'key-')}`;
    const [id] = keyboardKeys[i];
    key.id = id;
    key.innerHTML = keyboardKeys[i][localStorage.getItem('en') || localStorage.getItem('ru')];
  }
  for (let i = 42; i < 55; i += 1) {
    const key = document.createElement('span');
    row4.append(key);
    row4.classList = 'row';
    key.className = `key ${keyboardKeys[i][0].toLowerCase().replace('key', 'key-')}`;
    const [id] = keyboardKeys[i];
    key.id = id;
    key.innerHTML = keyboardKeys[i][localStorage.getItem('en') || localStorage.getItem('ru')];
  }
  for (let i = 55; i < 64; i += 1) {
    const key = document.createElement('span');
    row5.append(key);
    row5.classList = 'row';
    key.className = `key ${keyboardKeys[i][0].toLowerCase()}`;
    const [id] = keyboardKeys[i];
    key.id = id;
    key.innerHTML = keyboardKeys[i][localStorage.getItem('en') || localStorage.getItem('ru')];
  }
  textarea.focus();
}
createKeyboard();

const keyItem = document.querySelectorAll('.key');
//Связываю нажатие на реальной клавиатуре с нажатием на виртуальной клавиатуре
document.addEventListener('keydown', (event) => {
  for (let i = 0; i < keyboardKeys.length; i += 1) {
    event.preventDefault();
    if (event.code === keyboardKeys[i][0]
      && event.code !== 'Tab'
      && event.code !== 'Space'
      && event.code !== 'Backspace'
      && event.code !== 'Delete'
      && event.code !== 'Enter'
      && event.code !== 'ControlLeft'
      && event.code !== 'ControlRight'
      && event.code !== 'AltLeft'
      && event.code !== 'AltRight'
      && event.code !== 'MetaLeft'
      && event.code !== 'CapsLock'
      && event.code !== 'ShiftLeft'
      && event.code !== 'ShiftRight') {
      const button = keyboardKeys[i][0].toLowerCase().replace('key', 'key-');
      document.querySelector(`.${button}`).classList.add('active');
      if (currentLang === 'en') {
        textarea.value += keyboardKeys[i][1];
      } else textarea.value += keyboardKeys[i][2];
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < keyboardKeys.length; i += 1) {
    if (event.code === keyboardKeys[i][0]) {
      const button = keyboardKeys[i][0].toLowerCase().replace('key', 'key-');
      if (event.code !== 'CapsLock') {
        document.querySelector(`.${button}`).classList.remove('active');
      }
    }
  }
});

// Связываю нажатие мышкой кнопок виртуальной клавиатуры с выводом символов в textarea
keyItem.forEach(key => {
  key.addEventListener('mousedown', () => {
    if (event.target.id !== 'Space'
        && event.target.id !== 'Tab'
        && event.target.id !== 'Backspace'
        && event.target.id !== 'Delete'
        && event.target.id !== 'Enter'
        && event.target.id !== 'MetaLeft'
        && event.target.id !== 'ControlLeft'
        && event.target.id !== 'ControlRight'
        && event.target.id !== 'AltLeft'
        && event.target.id !== 'AltRight'
        && event.target.id !== 'CapsLock'
        && event.target.id !== 'ShiftLeft'
        && event.target.id !== 'ShiftRight'
        ) {
      textarea.value +=key.textContent;
    }
  })
})




// Нажатие мышкой виртуального пробела
document.addEventListener('mousedown', (event) => {
  if (event.target.id === 'Space') {
    textarea.value += ' ';
  }
});

// Нажатие пробела на реальной клавиатуре
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    textarea.value += ' ';
    document.querySelector('#Space').classList.add('active');
  }
});

// Нажатие мышкой виртуального Tab
document.addEventListener('mousedown', (event) => {
  if (event.target.id === 'Tab') {
    textarea.value += '    ';
  }
});

// Нажатие Тab на реальной клавиатуре
document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    textarea.value += '    ';
    document.querySelector('#Tab').classList.add('active');
  }
});

function deleteSumbolBefore() {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  if (start === end) {
    if (start > 0) {
      textarea.value = textarea.value.substring(0, start - 1) + textarea.value.slice(end);
      textarea.selectionStart = start - 1;
      textarea.selectionEnd = start - 1;
    }
  } else {
    textarea.value = textarea.value.substring(0, start) + textarea.value.slice(end);
    textarea.selectionStart = start;
    textarea.selectionEnd = end;
  }
}

function deleteSumbolAfter() {
  const start = textarea.selectionStart;
  const textBeforeCursor = textarea.value.substring(0, start);
  const textAfterCursor = textarea.value.substring(start + 1);
  textarea.value = textBeforeCursor + textAfterCursor;
  textarea.selectionStart = start;
  textarea.selectionEnd = start;
}

// Нажатие мышкой виртуального Backspace и Del. Работает с кареткой в любом месте! Ура!!!
document.addEventListener('mousedown', (event) => {
  if (event.target.id === 'Backspace') {
    deleteSumbolBefore();
  }
});

// Нажатие Backspace на реальной клавиатуре
document.addEventListener('keydown', (event) => {
  if (event.code === 'Backspace') {
    document.querySelector('#Backspace').classList.add('active');
    deleteSumbolBefore();
  }
});

// Нажатие мышкой виртуального Del
document.addEventListener('mousedown', (event) => {
  if (event.target.id === 'Delete') {
    deleteSumbolAfter();
  }
});

// Нажатие Del на реальной клавиатуре
document.addEventListener('keydown', (event) => {
  if (event.code === 'Delete') {
    document.querySelector('#Delete').classList.add('active');
    deleteSumbolAfter();
  }
});

// Нажатие мышкой виртуального Enter
document.addEventListener('mousedown', (event) => {
  if (event.target.id === 'Enter') {
    textarea.value += '\n';
  }
});

// Нажатие Enter на реальной клавиатуре
document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    textarea.value += '\n';
    document.querySelector('#Enter').classList.add('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'MetaLeft') {
    document.querySelector('#MetaLeft').classList.add('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ControlRight') {
    document.querySelector('#ControlRight').classList.add('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ControlLeft') {
    document.querySelector('#ControlLeft').classList.add('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft') {
    document.querySelector('#AltLeft').classList.add('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'AltRight') {
    document.querySelector('#AltRight').classList.add('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft') {
    document.querySelector('#ShiftLeft').classList.add('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftRight') {
    document.querySelector('#ShiftRight').classList.add('active');
  }
});

const keysArray = [...document.querySelectorAll('[class*="key-"], #Comma, #Period, #Semicolon, #Quote, #BracketLeft, #BracketRight')];
let downCounter = 0;
document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock' && downCounter === 0) {
    for (let i = 0; i < keysArray.length; i += 1) {
      keysArray[i].textContent = keysArray[i].innerHTML.toUpperCase();
      document.querySelector('#CapsLock').classList.add('active');
    }
    downCounter += 1;
  } else if (event.code === 'CapsLock' && downCounter === 1) {
    for (let i = 0; i < keysArray.length; i += 1) {
      keysArray[i].textContent = keysArray[i].innerHTML.toLowerCase();
      downCounter = 0;
      document.querySelector('#CapsLock').classList.remove('active');
    }
  }
});

document.addEventListener('click', (event) => {
  if (event.target.id === 'CapsLock' && downCounter === 0) {
    for (let i = 0; i < keysArray.length; i += 1) {
      keysArray[i].textContent = keysArray[i].innerHTML.toUpperCase();
      document.querySelector('#CapsLock').classList.add('active');
    }
    downCounter += 1;
  } else if (event.target.id === 'CapsLock' && downCounter === 1) {
    for (let i = 0; i < keysArray.length; i += 1) {
      keysArray[i].textContent = keysArray[i].innerHTML.toLowerCase();
      downCounter = 0;
      document.querySelector('#CapsLock').classList.remove('active');
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft') {
    for (let i = 0; i < keyboardKeys.length; i += 1) {
      const key = document.querySelector(`#${keyboardKeys[i][0]}`);
      if (currentLang === 'en') {
        key.innerHTML = keyboardKeys[i][3];
      } else key.innerHTML = keyboardKeys[i][4];
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft') {
    for (let i = 0; i < keyboardKeys.length; i += 1) {
      const key = document.querySelector(`#${keyboardKeys[i][0]}`);
      if (currentLang === 'en') {
        key.innerHTML = keyboardKeys[i][1];
      } else key.innerHTML = keyboardKeys[i][2];
    }
  }
});

document.addEventListener('mousedown', (event) => {
  if (event.target.id === 'ShiftLeft') {
    for (let i = 0; i < keyboardKeys.length; i += 1) {
      const key = document.querySelector(`#${keyboardKeys[i][0]}`);
      if (currentLang === 'en') {
        key.innerHTML = keyboardKeys[i][3];
      } else key.innerHTML = keyboardKeys[i][4];
    }
  }
});

document.addEventListener('mouseup', (event) => {
  if (event.target.id === 'ShiftLeft') {
    for (let i = 0; i < keyboardKeys.length; i += 1) {
      const key = document.querySelector(`#${keyboardKeys[i][0]}`);
      if (currentLang === 'en') {
        key.innerHTML = keyboardKeys[i][1];
      } else key.innerHTML = keyboardKeys[i][2];
    }
  }
});

// keyItem.forEach(key => 
//   key.addEventListener('keydown',()=>{
//     textarea.value += key.textContent
//   }))

// keyItem.forEach(key => 
//   key.addEventListener('mousedown',()=>{
//     textarea.value += key.textContent
//   }))