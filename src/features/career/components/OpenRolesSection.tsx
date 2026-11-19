import React from "react";
import { ArrowRight, FileText, FolderOpen } from "lucide-react";
import { JobPosting } from "../types/careers";
import { JobCard } from "./JobCard";

interface OpenRolesSectionProps {
  jobs: JobPosting[];
  totalMatchingCount: number;
  hasMore: boolean;
  onSelectJob: (job: JobPosting) => void;
  onViewAllJobs: () => void;
  onLoadMore: () => void;
  onResetFilters: () => void;
  onOpenCvModal: () => void;
}

export const OpenRolesSection: React.FC<OpenRolesSectionProps> = ({
  jobs,
  totalMatchingCount,
  hasMore,
  onSelectJob,
  onViewAllJobs,
  onLoadMore,
  onResetFilters,
  onOpenCvModal,
}) => {
  return (
    <section
      aria-labelledby="open-roles-heading"
      className="container-page pt-9 pb-14 sm:pt-11 sm:pb-16"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h2
            id="open-roles-heading"
            className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl"
          >
            Open Roles
          </h2>
          <span className="h-[2px] w-7 rounded-full bg-primary" aria-hidden="true" />
        </div>

        <button
          type="button"
          onClick={onViewAllJobs}
          className="inline-flex min-h-9 cursor-pointer items-center gap-1 text-xs font-semibold text-primary transition hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-sm"
        >
          <span>View All Jobs</span>
          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
        </button>
      </div>

      {/* Roles Grid */}
      {jobs.length > 0 ? (
        <>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} onSelectJob={onSelectJob} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-7 flex justify-center">
              <button
                type="button"
                onClick={onLoadMore}
                className="press inline-flex min-h-9 cursor-pointer items-center justify-center rounded-md border-2 border-primary bg-card px-5 py-1.5 text-xs font-bold text-primary dark:text-foreground transition hover:border-primary hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Load more..
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="mt-6 rounded-2xl border border-border bg-card px-6 py-10 text-center">
          <p className="text-base font-bold text-foreground">
            No matching open roles found ({totalMatchingCount})
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search keyword, location, or department filter.
          </p>
          <button
            type="button"
            onClick={onResetFilters}
            className="press mt-4 inline-flex min-h-10 cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary-hover"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Fallback CV Banner */}
      <div className="mt-9 flex flex-col items-start justify-between gap-4 rounded-md border border-primary/20 bg-primary/5 dark:bg-primary/15 px-5 py-4 sm:flex-row sm:items-center sm:px-7 sm:py-5">
        <div className="flex items-center gap-4 sm:gap-5">
          {/* <div
            className="relative flex h-12 w-14 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs"
            aria-hidden="true"
          >
            <FolderOpen className="h-6 w-6" />
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded bg-card text-primary shadow-xs">
              <FileText className="h-3 w-3" />
            </span>
          </div> */}

          <div>
            <h3 className="text-sm font-bold text-foreground sm:text-base">
              Didn&apos;t Find the Right Role?
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-[13px]">
              Share your profile with us and we&apos;ll reach out when a suitable opportunity opens
              up.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenCvModal}
          className="press inline-flex min-h-10 w-full shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-sm border border-primary bg-card px-4 py-2 text-xs font-bold text-primary dark:text-foreground sm:w-auto "
        >
          <span>Submit Your CV</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};
