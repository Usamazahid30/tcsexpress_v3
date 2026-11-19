import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { SAMPLE_JOBS } from "../data/sampleJobs";
import { CareersPortalProps, JobFilters, JobPosting } from "../types/careers";
import { ApplyModal, CvModal, StoryModal } from "./CareerModals";
import { CareersHeroSection } from "./CareersHeroSection";
import { JobDetailView } from "./JobDetailView";
import { JobSearchFilterBar } from "./JobSearchFilterBar";
import { OpenRolesSection } from "./OpenRolesSection";

const INITIAL_VISIBLE_COUNT = 9;
const LOAD_MORE_STEP = 6;

const DEFAULT_FILTERS: JobFilters = {
  keyword: "",
  location: "ALL",
  department: "ALL",
};

export const CareersPortal: React.FC<CareersPortalProps> = ({
  bannerImageUrl,
  jobs = SAMPLE_JOBS,
  onApplySubmit,
  onCvSubmit,
  className = "",
}) => {
  const { jobId } = useParams<{ jobId?: string }>();
  const navigate = useNavigate();

  const [filters, setFilters] = useState<JobFilters>(DEFAULT_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<JobFilters>(DEFAULT_FILTERS);
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);
  const [storyOpen, setStoryOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [applyingJob, setApplyingJob] = useState<JobPosting | null>(null);

  const locations = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.location))).sort(),
    [jobs],
  );

  const departments = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.department))).sort(),
    [jobs],
  );

  const filteredJobs = useMemo(() => {
    const q = appliedFilters.keyword.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchesKeyword =
        !q ||
        job.title.toLowerCase().includes(q) ||
        (job.subtitle?.toLowerCase().includes(q) ?? false) ||
        job.department.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q);

      const matchesLocation =
        appliedFilters.location === "ALL" || job.location === appliedFilters.location;

      const matchesDepartment =
        appliedFilters.department === "ALL" || job.department === appliedFilters.department;

      return matchesKeyword && matchesLocation && matchesDepartment;
    });
  }, [jobs, appliedFilters]);

  const selectedJob = useMemo(
    () => (jobId ? (jobs.find((job) => job.id === jobId) ?? null) : null),
    [jobs, jobId],
  );

  const visibleJobs = filteredJobs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredJobs.length;
  const hasActiveFilters =
    filters.keyword.trim() !== "" ||
    filters.location !== "ALL" ||
    filters.department !== "ALL" ||
    appliedFilters.keyword.trim() !== "" ||
    appliedFilters.location !== "ALL" ||
    appliedFilters.department !== "ALL";

  const handleSelectJob = (job: JobPosting) => {
    navigate(`/career/${job.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToRoles = () => {
    navigate("/career");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedFilters(filters);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setAppliedFilters(DEFAULT_FILTERS);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleViewAllJobs = () => {
    setFilters(DEFAULT_FILTERS);
    setAppliedFilters(DEFAULT_FILTERS);
    setVisibleCount(jobs.length);
  };

  const handleToggleSave = (targetJobId: string) => {
    setSavedJobIds((prev) => {
      const exists = prev.includes(targetJobId);
      const next = exists ? prev.filter((id) => id !== targetJobId) : [...prev, targetJobId];
      toast.info(exists ? "Removed from saved jobs" : "Job saved to your list");
      return next;
    });
  };

  const scrollToExplore = () => {
    document.getElementById("explore-opportunities")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`w-full overflow-x-clip ${className}`}>
      {selectedJob ? (
        <JobDetailView
          job={selectedJob}
          isSaved={savedJobIds.includes(selectedJob.id)}
          onBackToRoles={handleBackToRoles}
          onToggleSave={handleToggleSave}
          onApplyClick={(job) => setApplyingJob(job)}
        />
      ) : (
        <main className="min-h-screen">
          <CareersHeroSection
            bannerImageUrl={bannerImageUrl}
            onExploreClick={scrollToExplore}
            onWatchStoryClick={() => setStoryOpen(true)}
          />

          <JobSearchFilterBar
            filters={filters}
            locations={locations}
            departments={departments}
            hasActiveFilters={hasActiveFilters}
            onChangeFilters={setFilters}
            onSearchSubmit={handleSearchSubmit}
            onResetFilters={handleResetFilters}
          />

          <OpenRolesSection
            jobs={visibleJobs}
            totalMatchingCount={filteredJobs.length}
            hasMore={hasMore}
            onSelectJob={handleSelectJob}
            onViewAllJobs={handleViewAllJobs}
            onLoadMore={() => setVisibleCount((prev) => prev + LOAD_MORE_STEP)}
            onResetFilters={handleResetFilters}
            onOpenCvModal={() => setCvModalOpen(true)}
          />
        </main>
      )}

      <StoryModal open={storyOpen} onOpenChange={setStoryOpen} />
      <CvModal
        open={cvModalOpen}
        onOpenChange={setCvModalOpen}
        departments={departments}
        onCvSubmit={onCvSubmit}
      />
      <ApplyModal
        job={applyingJob}
        onClose={() => setApplyingJob(null)}
        onApplySubmit={onApplySubmit}
      />
    </div>
  );
};
