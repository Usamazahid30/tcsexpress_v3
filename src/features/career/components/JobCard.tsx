import React from "react";
import {
  ArrowRight,
  Code2,
  Gift,
  Layers,
  Monitor,
  Network,
  Package,
  Truck,
  UserCheck,
} from "lucide-react";
import { JobIconKey, JobPosting } from "../types/careers";

interface JobCardProps {
  job: JobPosting;
  onSelectJob: (job: JobPosting) => void;
}

function renderJobIcon(iconKey: JobIconKey) {
  const iconClass = "h-6 w-6 text-[#D90416] stroke-[1.75]";
  switch (iconKey) {
    case "code":
      return <Code2 className={iconClass} aria-hidden="true" />;
    case "monitor":
      return <Monitor className={iconClass} aria-hidden="true" />;
    case "package":
      return <Package className={iconClass} aria-hidden="true" />;
    case "user":
      return <UserCheck className={iconClass} aria-hidden="true" />;
    case "network":
      return <Network className={iconClass} aria-hidden="true" />;
    case "layers":
      return <Layers className={iconClass} aria-hidden="true" />;
    case "truck":
      return <Truck className={iconClass} aria-hidden="true" />;
    case "gift":
      return <Gift className={iconClass} aria-hidden="true" />;
  }
}

export const JobCard: React.FC<JobCardProps> = ({ job, onSelectJob }) => {
  return (
    <article className="group relative flex min-h-[116px] flex-col justify-between rounded-xl border border-[#F1E6DA] bg-white p-4 shadow-[0_2px_10px_rgba(24,24,27,0.03)] transition duration-200 hover:-translate-y-0.5 hover:border-[#F5C2C7] hover:shadow-[0_8px_20px_rgba(217,4,22,0.08)] sm:p-5">
      <div className="flex items-start gap-3.5 pr-9">
        <div className="mt-0.5 shrink-0">{renderJobIcon(job.iconKey)}</div>
        <div className="min-w-0">
          <h3 className="text-[15px] font-bold leading-snug text-[#111827] sm:text-base">
            {job.title}
          </h3>
          {job.subtitle && (
            <p className="mt-0.5 text-xs font-normal text-[#4B5563]">{job.subtitle}</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between pl-9.5">
        <button
          type="button"
          onClick={() => onSelectJob(job)}
          className="inline-flex min-h-8 cursor-pointer items-center gap-1 text-xs font-semibold text-[#D90416] transition hover:text-[#A80210] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90416]"
        >
          <span>More Details</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => onSelectJob(job)}
          aria-label={`View details for ${job.title}${job.subtitle ? ` (${job.subtitle})` : ""}`}
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[#FDECEC] text-[#D90416] transition group-hover:bg-[#D90416] group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90416]"
        >
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};
