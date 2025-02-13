/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function(l1, l2) {
    return l1 * l2;
}

console.log(area(2, 4))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function(n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3
    } else {
        return n1 + n2
    }
}

console.log(crazySum(8, 8)) // 64
console.log(crazySum(10, 8)) // 18

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function(n) {
    if(n > 19) {
        return Math.abs((n - 19) * 3)
    } else {
        return Math.abs(n - 19)
    }
}

console.log('crazydiff', crazyDiff(60))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function(n){
    if ((n >= 20 && n <= 100) || n === 400) {
        return true
    } else {
        return false
    }
}

console.log(boundary(1)) //false
console.log(boundary(21)) //true
console.log(boundary(400)) //true


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function(stringa){
    if(stringa.startsWith('EPICODE')){
        return stringa
    } else {
       return 'EPICODE ' + stringa
    }
}

console.log(epify('EPICODE PROFUMA'))
console.log(epify('PUZZA'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function(n) {
    if (Math.abs(n) % 3 === 0 || Math.abs(n) % 7 === 0) {
        console.log(n + ' è un multiplo di 3 o di 7')
        return true
    } else {
        console.log(n + ' non è un multiplo di 3 o di 7')
        return false
    }
}


check3and7(8)
check3and7(7)
check3and7(-7)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function(str) {
    let splitStr = str.split('')
    console.log(splitStr)
    let reverseStr = splitStr.reverse()
    console.log(reverseStr)
    let joinStr = reverseStr.join('')
    //console.log(joinStr)
    return joinStr
}

console.log(reverseString('ciao'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function(str) {
    let words = str.split(' ') //separa con lo spazio
    //console.log(words)
    //toUpperCase()
    //let result = ''
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        // result += words[i].charAt(0).toUpperCare + words[i].slice(1) + ' '
    }
    return words.join(' ')
}
    
console.log(upperFirst('la maremma maiala'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function(str) {
    const citrus = str.slice(1, (str.length -1))
    return citrus
}

console.log(cutString('Limone')) // imon

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function(n) {
    let randomNumbers = []
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 11))
    }
    return randomNumbers
}

console.log(giveMeRandom(5))