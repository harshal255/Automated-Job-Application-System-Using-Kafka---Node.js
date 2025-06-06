import { Router } from "express";
import extractEmailsController from "../controllers/extract-email.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { extractEmailsSchema } from "../validations/extract-email";

const router = Router();

router.post("/extract-email", validateRequest(extractEmailsSchema), extractEmailsController);

export default router;