import { Request, Response, NextFunction } from 'express';
import { extractEmails } from '../helpers';

const extractEmailsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { urls } = req.body;
        const emailData: string[][] = [];

        // Process all URLs concurrently with error handling per URL
        await Promise.all(urls.map(async (url: string) => {
            try {
                const emails: string[] = await extractEmails(url);
                emailData.push(emails);
                // return {
                //     url,
                //     emails,
                //     status: emails.length > 0 ? 'success' : 'no-emails-found',
                //     error: null
                // };
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Extraction failed";
                // return {
                //     url,
                //     emails: [],
                //     status: 'error',
                //     error: errorMessage
                // };
                console.log(errorMessage);
            }
        }));

        // Calculate summary statistics
        // const successful = results.filter(r => r.status === 'success').length;
        // const failed = results.filter(r => r.status === 'error').length;
        // const empty = results.filter(r => r.status === 'no-emails-found').length;

        return res.success(emailData.flat(1), "Email extraction completed");

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return res.fails({ error: errorMessage }, "Email Extraction Failed");
    }
}

export default extractEmailsController;