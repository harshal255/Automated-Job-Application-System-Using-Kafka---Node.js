export interface Recruiter {
  SNo: string;
  Name: string;
  Email: string;
  Title: string;
  Company: string;
}

export interface TalentAcquisition {
  name: string;
  job_title: string;
  linkedin_url: string;
  company_name: string;
  status: string;
  applied_for: string;
  company_website: string;
  company_linkedin: string;
  company_social: string;
  company_twitter: string;
  location: string;
  company_niche: string;
}

export interface EmailJobData {
  to: string;
  subject: string;
  html: string;
}


