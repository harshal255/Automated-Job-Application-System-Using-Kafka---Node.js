import { NextFunction, Request, Response } from "express";
import { parseCSV } from "../helpers";
import { Recruiter } from "../types";
import path from "path";

const projectRoot = process.cwd();
const CSV_PATH = path.join(projectRoot, '/data/company_wise_hr_contacts.csv');

export const getRecrutersData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { limit = 461 } = req.query;
        const recruiters = await parseCSV<Recruiter>(CSV_PATH);
        const emails = recruiters.slice(0, Number(limit)).map((recruter: Recruiter) => recruter.Email);

        res.status(200).json({
            status: 'success',
            count: recruiters.length,
            emails,
            // data: recruiters.slice(0, Number(limit))
        });
    } catch (error) {
        next(error);
    }
}