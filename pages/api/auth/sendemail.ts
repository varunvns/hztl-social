import type { NextApiRequest, NextApiResponse } from 'next'
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
  email: string
}

export default function handler (email: string)  
{
    console.log("INSIDE SEND MAIL");
    
    //const useremail = req.body.email;
    const message =`
    Email: ${email}\n\r
    Message:'You have been successfully registered to Horizontal Social'
    `;
    message.replace
    const data={
        to:email,
        from:'dtiwari@horizontal.com',
        subject:'account creation confrimation mail',
        text: message,
        html: message.replace(/\r\n/g,'<br>')
    }
    console.log('sending email');
    const status:boolean =mail.send(data);
    if(status){
    console.log('email sent');
    console.log(email);
    }
   // res.status(200).json({ email: email })
}
