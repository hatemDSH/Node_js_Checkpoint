const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'derzahat@gmail.com',
    pass: '*********'
  }
});

const mailOptions = {
  from: 'derzahat@gmail.com',
  to: 'hatderza@gmail.com',
  subject: 'Hello from i m  Node.js',
  text: 'This is a test email sent from a Node.js program!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
