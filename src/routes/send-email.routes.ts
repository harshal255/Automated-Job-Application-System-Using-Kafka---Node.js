import express from 'express';
import { sendBulkApplications, sendJobApplication } from '../controllers/send-email.controller';

const router = express.Router();

router.post('/send-application', sendJobApplication);
router.post('/send-bulk-application',sendBulkApplications);

export default router;