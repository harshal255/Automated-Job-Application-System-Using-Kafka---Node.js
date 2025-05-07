import express, { Request, Response, NextFunction } from 'express';
import recruterRoute from "./routes/recruters.routes";
import talentAcquisitionRoute from "./routes/talentAcquisition.route";
import emailRouter from "./routes/send-email.routes";
import { disconnectProducer, initializeProducer } from './utils/kafkaProducer';
import { startEmailConsumer } from './utils/kafkaConsumer';
import config from './config';


// Initialize Express app
const app = express();
const PORT = config.port;


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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


// Central Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('[ERROR]', err.stack);

    res.status(500).json({
        status: 'error',
        message: process.env.NODE_ENV === 'production'
            ? 'Something went wrong!'
            : err.message
    });
});



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