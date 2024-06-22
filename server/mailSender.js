const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })


            let info = await transporter.sendMail({
                from: 'Urban webworks technologies pvt ltd',
                to:`${email}`,
                cc: "urbanwebworks@gmail.com",
                subject: `${title}`,
                html: `${body}`,
            })
            let infoAdmin = await transporter.sendMail({
                from:`${email}`,
                to:"urbanwebworks@gmail.com",
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return {info , infoAdmin};
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;