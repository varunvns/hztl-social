// import type { NextApiRequest, NextApiResponse } from 'next'
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);



export default function handler (email: string)  
{
    console.log("INSIDE SEND MAIL");
    const message =`
    Email: ${email}
    Message:'You have been successfully registered to Horizontal Social'
    `;
    const data={
        to:email,
        from:'dtiwari@horizontal.com',
        subject:'account creation confrimation mail',
        text: message
        
    }
    console.log('sending email');
    const status:boolean =mail.send(data);
    if(status){
    console.log('email sent');
    console.log(email);
    }
}