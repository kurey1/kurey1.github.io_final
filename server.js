const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/submit-form', (req, res) => {

  const { name, email, phone, message } = req.body;


  const transporter = nodemailer.createTransport({
    service: 'Mailjet',
    auth: {
      user: '67533ab04f5e6403e5e780401f07ab58',
      pass: '73e8119e22ed2529fc35350c970f262f'
    }
  });


  const mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'New Volunteer Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});