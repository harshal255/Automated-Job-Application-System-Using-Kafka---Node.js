import { NextFunction, Request, Response } from "express";
import { parseCSV } from "../helpers";
import path from "path";
import { TalentAcquisition } from "../types";


const projectRoot = process.cwd();
const CSV_PATH = path.join(projectRoot, '/data/talent_acquisition_database.csv');


export const getTalentAcquisitionData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { limit = 461 } = req.query;
        const recruiters = await parseCSV<TalentAcquisition>(CSV_PATH);

        res.status(200).json({
            status: 'success',
            count: recruiters.length,
            data: recruiters.slice(0, Number(limit))
        });
    } catch (error) {
        next(error);
    }
}