"use strict";
class Notificacion{
    constructor(username){
        this._username = username;
    }
    enviarMensaje(mensaje){
        return `Notificación para [${this._username}]:${mensaje}`;
    }
}

class Email extends Notificacion{
    constructor(username, correo){
        super(username);
        this._correo = correo;
    }
    enviarMensaje(mensaje){
        return `Enviando Email a [${this._correo}]: ${mensaje}`
    }
}

class SMS extends Notificacion{
    constructor(username, numeroTelefono){
        super(username);
        this._numeroTelefono = numeroTelefono;
    }
    enviarMensaje(mensaje){
        return `Enviando SMS al [${this._numeroTelefono}]: [${mensaje}] `
    }
}

function comunicar(medio, texto){
    console.log(medio.enviarMensaje(texto));
}
let notif1 = new Notificacion("Luis");
let notifi2 = new Email("Marian", "mariancita@teamo.com");
let notifi3 = new SMS("Fer", 2221234);

comunicar(notif1,"HOla como estás perrito?");
comunicar(notifi2,"Mariancita linda preciosa");
comunicar(notifi3,"a que hora llegas?");
