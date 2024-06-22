const { adminMail } = require("./adminmail")
const { contactUsEmail } = require("./contactFormRes")
const mailSender = require("./mailSender")

exports.contactUsController = async (req, res) => {
  console.log(req.body)
  const { email, name , message} = req.body
  try {
    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, name, message),
      adminMail(email,name,message)
    )
    console.log("Email Res ", emailRes)
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}

