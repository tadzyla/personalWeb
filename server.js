

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + './public/index.html')
})

app.post('/', (req, res) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.mail.com',
        port: 587,
        secure: false,
        auth: {
            user: ${{ secrets.TZ_EMAIL }},
            pass: ${{ secrets.TZ_PASS }},
        }
    })

    const mailOptions = {
        from: 'tadas@writeme.com',
        to: 'tadas.zvinklys@gmail.com',
        subject: `Message from ${req.body.name} - ${req.body.email}`,
        text: req.body.message
    }

    // verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error')
        } else {
            console.log('Email sent' + info.response)
            res.send('success')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})