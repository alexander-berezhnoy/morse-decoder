const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  let letters = expr.match(new RegExp('.{1,' + 10 + '}', 'g'));
  let morse = letters.map(letter => {
    if (letter === '**********') return ' ';
    return letter
      .replace(/00/g, '')
      .replace(/10/g, '.')
      .replace(/11/g, '-');
  });
  return morse
    .map(morseLetter => {
      if (morseLetter === ' ') return ' ';
      return MORSE_TABLE[morseLetter];
    })
    .join('');
}

module.exports = {
  decode
};
