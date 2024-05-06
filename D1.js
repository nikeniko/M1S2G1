/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*javaSript ha come principal datatype i numeri interi o decimali esempio=10 decimali e esempio=12,5 decimali, stringhe che sono una semplice sequenza di caratteri ad esempio "nicolas" che si scrive let name = "nicolas"
boolean che possono essere scritti come "vero" e "falso", in seguito ci sono Null è praticamente usato per dare un valore inesistente ad una variabile, undefined è quando non viene dato un valore ad una variabile */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "nicolas";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12;
let number2 = 20;
console.log(number1 + number2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "petrusowski";
console.log("Il valore della variabile myName è:", myName);
const mySurname = "petrusowski";
//mySurname = "pincopallino";
console.log("il valore variabile di mySurname è:", mySurname);
/* essendoci una valore mySurame che è una costante già esistente il codice di rompe, perchè il valore di mySurname non può essere cambiato essento come una scatola sigillata*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let number3 = "4";
console.log(x - number3);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log("name1 è uguale a name2", name1 === name2);
console.log(name2.toLocaleLowerCase() === name1);
