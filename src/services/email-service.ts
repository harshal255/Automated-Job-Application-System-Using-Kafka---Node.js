import nodemailer from 'nodemailer';
import config from '../config';
import { getJobApplicationTemplate } from '../templates/email.template';
import path from 'path';
const template = getJobApplicationTemplate();
const projectRoot = process.cwd();
const resumePath = path.join(projectRoot, '/data/Harshal_Resume.pdf');

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
        html,
        //Kafka's default maximum message size is 1 MB (1,048,576 bytes) so you do not send attachment with mail
        // attachments: [
        //     {
        //         filename: 'Harshal_Resume.pdf',
        //         path: resumePath,
        //         contentType: 'application/pdf'
        //     }
        // ]
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


