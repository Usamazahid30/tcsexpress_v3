import React, { useEffect } from "react";
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
  const iconClass = "h-7 w-7 text-primary stroke-[1.75]";
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [job.id]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container-page relative z-10 pt-24 pb-8 sm:pt-28">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="border-b border-border pb-4 text-xs text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <button
                type="button"
                onClick={onBackToRoles}
                className="cursor-pointer transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Careers
              </button>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            </li>
            <li>
              <button
                type="button"
                onClick={onBackToRoles}
                className="cursor-pointer transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Open Roles
              </button>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            </li>
            <li aria-current="page" className="font-semibold text-foreground">
              {job.title}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mt-5">
          <button
            type="button"
            onClick={onBackToRoles}
            className="inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-md text-xs font-semibold text-primary transition hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Open Roles</span>
          </button>
        </div>

        {/* Role Header */}
        <div className="mt-5 flex flex-col justify-between gap-6 border-b border-border pb-7 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-20 sm:w-20">
              {renderDetailIcon(job.iconKey)}
            </div>

            <div className="hidden h-16 w-px bg-border sm:block" aria-hidden="true" />

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                {job.title}
              </h1>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {job.subtitle ?? job.department}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  <span>{job.location}</span>
                </span>
                <span className="h-3.5 w-px bg-border" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  <span>{job.jobType}</span>
                </span>
                <span className="h-3.5 w-px bg-border" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
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
              className="press inline-flex min-h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span>Apply Now</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => onToggleSave(job.id)}
              aria-pressed={isSaved}
              className={`press inline-flex min-h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                isSaved
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-primary/40 bg-card text-primary hover:border-primary hover:bg-primary/5"
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
              <h2 id="job-overview-heading" className="text-lg font-bold text-foreground">
                Job Overview
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{job.overview}</p>
            </section>

            <section aria-labelledby="job-responsibilities-heading">
              <h2 id="job-responsibilities-heading" className="text-lg font-bold text-foreground">
                Key Responsibilities
              </h2>
              <ul className="mt-3 space-y-2.5">
                {job.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="job-requirements-heading">
              <h2 id="job-requirements-heading" className="text-lg font-bold text-foreground">
                What We&apos;re Looking For
              </h2>
              <ul className="mt-3 space-y-2.5">
                {job.requirements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
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
            className="rounded-2xl border border-border bg-muted/50 dark:bg-muted/20 p-6 lg:col-span-4"
          >
            <h2 className="text-base font-bold text-foreground">Job at a Glance</h2>

            <dl className="mt-5 space-y-5">
              <div className="flex items-start gap-3.5">
                <Building2
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary stroke-[1.75]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-muted-foreground">Department</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-foreground">{job.department}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Users
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary stroke-[1.75]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-muted-foreground">Job Type</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-foreground">{job.jobType}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary stroke-[1.75]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-muted-foreground">Location</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-foreground">{job.location}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Calendar
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary stroke-[1.75]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-muted-foreground">
                    Application Deadline
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-foreground">{job.deadline}</dd>
                </div>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </div>
  );
};
