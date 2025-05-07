import { Router } from "express";
import { getTalentAcquisitionData } from "../controllers/talentAcquisition.controller";

const router = Router();

router.get("/talent-acquisition",getTalentAcquisitionData);

export default router;