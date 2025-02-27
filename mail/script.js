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
// controlla se la mail è presente nella lista


for (let i = 0; mail < mailingList.length; i++); {
    if (mail < mailingList.length); {
        console.log(mail);
    }

    else if (mail > mailingList.length); {
        console.log('invitato non presente.')
    }
}
