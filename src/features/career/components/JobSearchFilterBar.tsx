import React from "react";
import { Briefcase, ChevronDown, MapPin, Search, X } from "lucide-react";
import { JobFilters } from "../types/careers";

interface JobSearchFilterBarProps {
  filters: JobFilters;
  locations: string[];
  departments: string[];
  hasActiveFilters: boolean;
  onChangeFilters: (next: JobFilters) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onResetFilters: () => void;
}

export const JobSearchFilterBar: React.FC<JobSearchFilterBarProps> = ({
  filters,
  locations,
  departments,
  hasActiveFilters,
  onChangeFilters,
  onSearchSubmit,
  onResetFilters,
}) => {
  return (
    <section
      id="explore-opportunities"
      aria-labelledby="explore-jobs-heading"
      className="container-page pt-2"
    >
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2
            id="explore-jobs-heading"
            className="text-2xl font-extrabold tracking-tight text-foreground sm:text-[28px]"
          >
            Explore Job Opportunities
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Find a role that matches your skills, interests and career goals.
          </p>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Clear filters</span>
          </button>
        )}
      </div>

      <form
        onSubmit={onSearchSubmit}
        className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-12 md:items-center"
      >
        {/* Keyword Input */}
        <div className="relative md:col-span-5">
          <label htmlFor="job-keyword-input" className="sr-only">
            Search by job title, keyword or team
          </label>
          <Search
            className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="job-keyword-input"
            type="text"
            value={filters.keyword}
            onChange={(e) => onChangeFilters({ ...filters, keyword: e.target.value })}
            placeholder="Search by job title, keyword or team"
            className="h-11 w-full rounded-[8px] border border-border bg-card pr-4 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary  focus:outline-none shadow-md"
          />
        </div>

        {/* Location Select */}
        <div className="relative md:col-span-3">
          <label htmlFor="job-location-select" className="sr-only">
            Filter by location
          </label>
          <MapPin
            className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <select
            id="job-location-select"
            value={filters.location}
            onChange={(e) => onChangeFilters({ ...filters, location: e.target.value })}
            className="h-11 w-full appearance-none rounded-[8px] border border-border bg-card pr-9 pl-10 text-sm font-medium text-foreground focus:border-primary focus:outline-none shadow-md"
          >
            <option value="ALL">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
        </div>

        {/* Department Select */}
        <div className="relative md:col-span-2">
          <label htmlFor="job-department-select" className="sr-only">
            Filter by department
          </label>
          <Briefcase
            className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <select
            id="job-department-select"
            value={filters.department}
            onChange={(e) => onChangeFilters({ ...filters, department: e.target.value })}
            className="h-11 w-full appearance-none rounded-[8px] border border-border bg-card pr-8 pl-10 text-sm font-medium text-foreground focus:border-primary  shadow-md focus:outline-none"
          >
            <option value="ALL">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-2.5 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
        </div>

        {/* Search Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="press h-11 w-full cursor-pointer rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Search Jobs
          </button>
        </div>
      </form>
    </section>
  );
};
