import {injectable, /* inject, */ BindingScope} from '@loopback/core';

const twilio = require('twilio');

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Servicio de mensajeria Twilio
   */
  EnivarnotificacionesporSMS(): void {
    console.log("Hola")
    const accountSid = 'AC051f24378a322cab6c00e01cc1dfbe53'; // Your Account SID from www.twilio.com/console
    const authToken = 'ece4cec79915c2a512e7187c5f09016b'; // Your Auth Token from www.twilio.com/console

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: 'Hola Jovanny',
        to: '+573128955670', // Text this number
        from: '+14176603116', // From a valid Twilio number
      })
      .then((message: any) => console.log(message.sid));
  }
}
