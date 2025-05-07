import { Request, Response, NextFunction } from 'express';
import { initializeProducer, sendApplicationMessage } from '../utils/kafkaProducer';
import sendEmail from '../services/email-service';

export const sendJobApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const email = "restartmyself@yopmail.com";
        await sendEmail(email);
        res.status(200).json({
            success: true,
            message: 'Job application email sent successfully'
        });
    } catch (error) {
        next(error);
    }
};

const RECIPIENTS = [
    'restartmyself1@yopmail.com',
    'restartmyself2@yopmail.com',
    'restartmyself3@yopmail.com',
    'restartmyself4@yopmail.com',
    'restartmyself5@yopmail.com',
    'restartmyself6@yopmail.com',
];

export const sendBulkApplications = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Initialize producer once before sending messages
        await initializeProducer();

        // Send messages sequentially instead of parallel to avoid overloading
        for (const email of RECIPIENTS) {
            try {
                await sendApplicationMessage(email);
            } catch (error) {
                console.error(`Failed to send to ${email}:`, error);
                // Continue with next email even if one fails
            }
        }

        res.status(202).json({
            success: true,
            message: 'Job applications are being processed',
            recipients: RECIPIENTS.length
        });

        // Don't disconnect immediately - keep connection for subsequent requests
    } catch (error) {
        next(error);
    }
};