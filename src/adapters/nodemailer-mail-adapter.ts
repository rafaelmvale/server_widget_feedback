import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "./mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7bef2c21dbd4d7",
    pass: "510b501ae8d479"
  }
});

export class NodeMailMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData){

    
      
  await transport.sendMail({
    from: 'Equipe feedget <oi@feedget.com>',
    to: "Rafael Vale <rafael.marques.vale.dev@gmail.com>",
    subject,
    html: body,
  });

  }
}