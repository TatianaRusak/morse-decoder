const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----': '0',
    'space':  ' ',
};

function decode(expr) {
  let exprArr = [];
  for (let i = 0; i < expr.length; i+=10){
    exprArr.push(expr.slice(i, i + 10));
  };

  let re0 = /00/gi
  let re1 = /10/gi;
  let re2 = /11/gi;

  let exprArrMorse = exprArr.map(str => {
    str = str.replace(re0, '');
    str = str.replace(re1, '.');
    str = str.replace(re2, '-');
    str = str.replace('**********', 'space');
    return str;
  })

  let stringDecode = exprArrMorse.map(letter => {
    letter = MORSE_TABLE[letter];
    return letter;
  })
  return stringDecode.join('');
}

module.exports = {
    decode
}