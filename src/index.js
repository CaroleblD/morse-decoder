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
    '-----':  '0',
};

function decode(expr) {

    let morseWord = ''

    
    for (let i = 0; i < expr.length; i += 10) {

        if (expr.slice(i, (i + 10)) === '**********') {
            morseWord += ' '
            continue
        }

        if (expr.slice(i, (i + 10)) === undefined) {
            continue
        }


        let binLetter = expr.slice(i, (i + 10))

        let morseLetter = ''

        for (let x = 0; x < binLetter.length; x += 2) {

            let morse = ''
            
            if (binLetter.slice(x, (x + 2)) === '00') morse += ''
            if (binLetter.slice(x, (x + 2)) === '10') morse += '.'
            if (binLetter.slice(x, (x + 2)) === '11') morse += '-'

            morseLetter += morse

        }

        let letter = MORSE_TABLE[morseLetter]

        morseWord += letter

    }

    return morseWord

}

module.exports = {
    decode
}