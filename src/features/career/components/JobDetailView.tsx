import React from "react";
import {
  ArrowLeft,
  Bookmark,
  Briefcase,
  Building2,
  Calendar,
  ChevronRight,
  Code2,
  ExternalLink,
  Gift,
  Layers,
  MapPin,
  Monitor,
  Network,
  Package,
  Truck,
  UserCheck,
  Users,
} from "lucide-react";
import { JobIconKey, JobPosting } from "../types/careers";

interface JobDetailViewProps {
  job: JobPosting;
  isSaved: boolean;
  onBackToRoles: () => void;
  onToggleSave: (jobId: string) => void;
  onApplyClick: (job: JobPosting) => void;
}

function renderDetailIcon(iconKey: JobIconKey) {
  const iconClass = "h-7 w-7 text-[#D90416] stroke-[1.75]";
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

export const JobDetailView: React.FC<JobDetailViewProps> = ({
  job,
  isSaved,
  onBackToRoles,
  onToggleSave,
  onApplyClick,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="border-b border-[#EFEFEF] pb-4 text-xs text-[#6B7280]"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <button
                type="button"
                onClick={onBackToRoles}
                className="cursor-pointer transition hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90416]"
              >
                Careers
              </button>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5 text-[#9CA3AF]" />
            </li>
            <li>
              <button
                type="button"
                onClick={onBackToRoles}
                className="cursor-pointer transition hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90416]"
              >
                Open Roles
              </button>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5 text-[#9CA3AF]" />
            </li>
            <li aria-current="page" className="font-semibold text-[#111827]">
              {job.title}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mt-5">
          <button
            type="button"
            onClick={onBackToRoles}
            className="inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-md text-xs font-semibold text-[#D90416] transition hover:text-[#A80210] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90416]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Open Roles</span>
          </button>
        </div>

        {/* Role Header */}
        <div className="mt-5 flex flex-col justify-between gap-6 border-b border-[#EFEFEF] pb-7 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#FDECEC] sm:h-20 sm:w-20">
              {renderDetailIcon(job.iconKey)}
            </div>

            <div className="hidden h-16 w-px bg-[#E5E7EB] sm:block" aria-hidden="true" />

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">
                {job.title}
              </h1>
              <p className="mt-1 text-sm font-medium text-[#4B5563]">
                {job.subtitle ?? job.department}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#4B5563]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#6B7280]" aria-hidden="true" />
                  <span>{job.location}</span>
                </span>
                <span className="h-3.5 w-px bg-[#D1D5DB]" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-[#6B7280]" aria-hidden="true" />
                  <span>{job.jobType}</span>
                </span>
                <span className="h-3.5 w-px bg-[#D1D5DB]" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[#6B7280]" aria-hidden="true" />
                  <span>Apply by {job.deadline}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-56">
            <button
              type="button"
              onClick={() => onApplyClick(job)}
              className="inline-flex min-h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#D90416] px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-[#B80312] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90416]"
            >
              <span>Apply Now</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => onToggleSave(job.id)}
              aria-pressed={isSaved}
              className={`inline-flex min-h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90416] ${
                isSaved
                  ? "border-[#D90416] bg-[#FDECEC] text-[#D90416]"
                  : "border-[#E6B8BC] bg-white text-[#D90416] hover:border-[#D90416] hover:bg-[#FFF5F5]"
              }`}
            >
              <Bookmark
                className={`h-3.5 w-3.5 ${isSaved ? "fill-current" : ""}`}
                aria-hidden="true"
              />
              <span>{isSaved ? "Saved Job" : "Save Job"}</span>
            </button>
          </div>
        </div>

        {/* Body Two-Column Layout */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="space-y-8 lg:col-span-8">
            <section aria-labelledby="job-overview-heading">
              <h2 id="job-overview-heading" className="text-lg font-bold text-[#111827]">
                Job Overview
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#374151]">{job.overview}</p>
            </section>

            <section aria-labelledby="job-responsibilities-heading">
              <h2 id="job-responsibilities-heading" className="text-lg font-bold text-[#111827]">
                Key Responsibilities
              </h2>
              <ul className="mt-3 space-y-2.5">
                {job.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#374151]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D90416]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="job-requirements-heading">
              <h2 id="job-requirements-heading" className="text-lg font-bold text-[#111827]">
                What We&apos;re Looking For
              </h2>
              <ul className="mt-3 space-y-2.5">
                {job.requirements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#374151]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D90416]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Job at a Glance Sidebar */}
          <aside
            aria-label="Job at a Glance"
            className="rounded-2xl bg-[#F4F4F6] p-6 lg:col-span-4"
          >
            <h2 className="text-base font-bold text-[#111827]">Job at a Glance</h2>

            <dl className="mt-5 space-y-5">
              <div className="flex items-start gap-3.5">
                <Building2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D90416] stroke-[1.75]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-[#6B7280]">Department</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-[#111827]">{job.department}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Users
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D90416] stroke-[1.75]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-[#6B7280]">Job Type</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-[#111827]">{job.jobType}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D90416] stroke-[1.75]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-[#6B7280]">Location</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-[#111827]">{job.location}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Calendar
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D90416] stroke-[1.75]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-[#6B7280]">Application Deadline</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-[#111827]">{job.deadline}</dd>
                </div>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </div>
  );
};
