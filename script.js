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
  ['&#8593;', '&#8593;'],
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

const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = 'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левые ctrl + alt';
document.body.append(footer);


function createKeyboard() {
    for (let i=0; i<keyboardKeys.length; i+=1) {
        
    }
}