const nodemailer = require('nodemailer')
const MailToUser = async (email, CIN,DATE,cedntre) => {
  try {
                 
    console.log('men mailer ',email, CIN,DATE,centre)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS
        }
    });

    let mailOptions = {
        from: process.env.MAIL,
        to: email,
        subject: "Vaccin",
        text: `Hello`+CIN+` your next vaccination wil be in `+DATE+` au centre `+centre+`.
                    ]`

    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('mail sent to :', email)
            return res.status(200).json({
                success: 1,
                message: 'data has sent '
            });
        }


    });
  } catch (error) {
    console.log(error)
  }
}

module.exports = MailToUser ;