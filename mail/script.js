// creazione mailing list
const mailingList = [
    'Nathan@gmail.com',
    'Ed@gmail.com',
    'Fabio@gmail.com',
    'Phil@gmail.com',
    'Phil@gmail.com',
    'Carlo@gmail.com',
    'Lewis@gmail.com',
    'Lewis@gmail.com',
];

const mail = (prompt('inserisci la tua mail'));
//  controlla che sia nella lista di chi può accedere senza usare la proprietà includes
//  stampa un messaggio appropriato sull’esito del controllo.


for (let i = 0; i < mailingList.length; i++) {
    const mail = mailingList[i];
    if (mail === mailingList[i]) {
        mailFound = true;
    }
    console.log(mailFound);
}






