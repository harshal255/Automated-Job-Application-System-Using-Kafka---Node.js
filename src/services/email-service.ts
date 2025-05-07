import nodemailer from 'nodemailer';
import config from '../config';
import { getJobApplicationTemplate } from '../templates/email.template';
const template = getJobApplicationTemplate();

const transporter = nodemailer.createTransport({
    service: config.node_mailer_service,
    auth: {
        user: config.email_user,
        pass: config.email_password
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('Email configuration error:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

const sendEmail = async (email: string) => {
    const { subject, html } = template;
    // Email content
    const mailOptions = {
        from: `"Harshal Kahar" <${config.email_user}>`,
        to: email,
        subject,
        html
    };

    // Send email
    await transporter.sendMail(mailOptions).then(() => {
        console.log(`Mail sent Successfully to ${email}`);
    }).catch(e => {
        console.log(`error while sending the mail`, e);
        return e;
    });
}

export default sendEmail;


