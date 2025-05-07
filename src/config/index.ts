import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: process.env.PORT || 5000,
    email_user: process.env.EMAIL_USER,
    email_password: process.env.EMAIL_PASSWORD,
    kafka_broker: process.env.KAFKA_BROKER || 'localhost:9092',
    node_mailer_service: process.env.NODE_MAILER_SERVICE || 'gmail'
}

export default config;