export type JobIconKey =
  "code" | "monitor" | "package" | "user" | "network" | "layers" | "truck" | "gift";

export type ValuePillarIconKey = "purpose" | "growth" | "culture" | "health" | "rewards";

export interface JobPosting {
  id: string;
  title: string;
  subtitle?: string;
  department: string;
  jobType: string;
  location: string;
  deadline: string;
  iconKey: JobIconKey;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

export interface JobFilters {
  keyword: string;
  location: string;
  department: string;
}

export interface ValuePillar {
  id: string;
  label: string;
  iconKey: ValuePillarIconKey;
}

export interface ApplyJobPayload {
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

export interface SubmitCvPayload {
  fullName: string;
  email: string;
  preferredDepartment: string;
  portfolioOrSummary: string;
}

export interface CareersPortalProps {
  bannerImageUrl?: string;
  jobs?: JobPosting[];
  onApplySubmit?: (payload: ApplyJobPayload) => Promise<void> | void;
  onCvSubmit?: (payload: SubmitCvPayload) => Promise<void> | void;
  className?: string;
}
