var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '', //Your Email
        pass: '' //Your Auto Generated 16 digit Password
    }
});

//send out email

var mailOptions = {
    from: '', //Sender's Email
    to: 'abc@abc.com', //Recipient's Email
    subject: 'testing if nodemailer works', //Subject
    text: 'this is the body of the mail' //Text Body
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Email sent" + info.response)
    }
})