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
//  controlla che sia nella lista di chi può accedere
//  stampa un messaggio appropriato sull’esito del controllo.







for (let i = 0; mail < mailingList.length; i++) {
    if (mail < mailingList.length) {
        console.log(mail);
    }

    if (mail > mailingList.length) {
        console.log('invitato non presente.')
    }
}
