const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (payload, options) => {
    const data = await resend.emails.send(payload, options);

    console.log("Email sent successfully");

    return data;
};

module.exports = { sendEmail };
