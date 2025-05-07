import { Router } from "express";
import { getRecrutersData } from "../controllers/recruter.controller";

const router = Router();

router.get("/recruiters",getRecrutersData);

export default router;