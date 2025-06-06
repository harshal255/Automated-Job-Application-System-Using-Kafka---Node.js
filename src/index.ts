import express, { Request, Response, NextFunction } from 'express';
import recruterRoute from "./routes/recruters.routes";
import talentAcquisitionRoute from "./routes/talentAcquisition.route";
import emailRouter from "./routes/send-email.routes";
import { disconnectProducer, initializeProducer } from './utils/kafkaProducer';
import { startEmailConsumer } from './utils/kafkaConsumer';
import config from './config';
import ErrorHandler from './middlewares/errorHandler';
import responseMiddleware from './middlewares/responseMiddleware';
import cors from 'cors';
import extractEmailRouter from "./routes/extract-email.routes";


// Initialize Express app
const app = express();
const PORT = config.port;


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(responseMiddleware);

// Health check endpoint
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Server is running'
    });
});



// CSV Data endpoint
app.use("/api", recruterRoute);
app.use("/api", talentAcquisitionRoute);
app.use('/api', emailRouter);
app.use('/api', extractEmailRouter);


// ERROR HANDLER MIDDLEWARE (Last middleware to use)
app.use(ErrorHandler);



// Initialize producer when server starts
initializeProducer().catch(console.error);

// Start consumer
startEmailConsumer().catch(console.error);

// Graceful shutdown
process.on('SIGTERM', async () => {
    await disconnectProducer();
    process.exit(0);
});

process.on('SIGINT', async () => {
    await disconnectProducer();
    process.exit(0);
});




// Start Server
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
});