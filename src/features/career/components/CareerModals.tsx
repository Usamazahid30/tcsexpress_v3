import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle2, X } from "lucide-react";
import { toast } from "sonner";
import { ApplyJobPayload, JobPosting, SubmitCvPayload } from "../types/careers";

interface StoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-xl focus:outline-none">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-lg font-bold text-foreground">
                Life &amp; Purpose at TCS
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-xs text-muted-foreground">
                Connecting communities, businesses, and careers across Pakistan.
              </Dialog.Description>
            </div>
            <Dialog.Close
              aria-label="Close story modal"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Dialog.Close>
          </div>

          <div className="mt-4 rounded-xl border border-border bg-muted/50 dark:bg-muted/20 p-4 text-sm leading-relaxed text-foreground/90">
            From sorting hubs and long-haul fleet corridors to enterprise engineering and customer
            operations, every role at TCS helps keep commerce and households connected nationwide.
          </div>

          <div className="mt-5 flex justify-end">
            <Dialog.Close className="press inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary-hover">
              Got It
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

interface CvModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  departments: string[];
  onCvSubmit?: (payload: SubmitCvPayload) => Promise<void> | void;
}

export const CvModal: React.FC<CvModalProps> = ({
  open,
  onOpenChange,
  departments,
  onCvSubmit,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDepartment, setPreferredDepartment] = useState(
    departments[0] ?? "Information Technology",
  );
  const [portfolioOrSummary, setPortfolioOrSummary] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setError("Please provide your full name and email address.");
      return;
    }

    setError(null);
    setSubmitting(true);
    try {
      await onCvSubmit?.({
        fullName: fullName.trim(),
        email: email.trim(),
        preferredDepartment,
        portfolioOrSummary: portfolioOrSummary.trim(),
      });
      toast.success("Profile submitted. Our talent team will keep you posted.");
      setFullName("");
      setEmail("");
      setPortfolioOrSummary("");
      onOpenChange(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {/* <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-xl focus:outline-none">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-lg font-bold text-foreground">
                Submit Your CV
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-xs text-muted-foreground">
                Share your details so we can reach out when a matching role opens.
              </Dialog.Description>
            </div>
            <Dialog.Close
              aria-label="Close CV modal"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            <div>
              <label htmlFor="cv-fullname" className="block text-xs font-semibold text-foreground">
                Full Name *
              </label>
              <input
                id="cv-fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Ayesha Tariq"
                className="mt-1 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="cv-email" className="block text-xs font-semibold text-foreground">
                Email Address *
              </label>
              <input
                id="cv-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ayesha@example.com"
                className="mt-1 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="cv-department"
                className="block text-xs font-semibold text-foreground"
              >
                Preferred Department
              </label>
              <select
                id="cv-department"
                value={preferredDepartment}
                onChange={(e) => setPreferredDepartment(e.target.value)}
                className="mt-1 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="cv-summary" className="block text-xs font-semibold text-foreground">
                LinkedIn / Portfolio or Experience Summary
              </label>
              <textarea
                id="cv-summary"
                rows={3}
                value={portfolioOrSummary}
                onChange={(e) => setPortfolioOrSummary(e.target.value)}
                placeholder="Briefly share your background, city preference, or profile link..."
                className="mt-1 w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            {error && (
              <p role="alert" className="text-xs font-medium text-destructive">
                {error}
              </p>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <Dialog.Close className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted">
                Cancel
              </Dialog.Close>
              <button
                type="submit"
                disabled={submitting}
                className="press inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary-hover disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Profile"}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal> */}
    </Dialog.Root>
  );
};

interface ApplyModalProps {
  job: JobPosting | null;
  onClose: () => void;
  onApplySubmit?: (payload: ApplyJobPayload) => Promise<void> | void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ job, onClose, onApplySubmit }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (!job) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setError("Please enter your full name and email address.");
      return;
    }

    setError(null);
    setSubmitting(true);
    try {
      await onApplySubmit?.({
        jobId: job.id,
        jobTitle: job.title,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        notes: notes.trim(),
      });
      toast.success(`Application submitted for ${job.title}`);
      setFullName("");
      setEmail("");
      setPhone("");
      setNotes("");
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={Boolean(job)} onOpenChange={(open) => !open && onClose()}>
      {/* <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-xl focus:outline-none">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{job.location}</span>
              </div>
              <Dialog.Title className="mt-1 text-lg font-bold text-foreground">
                Apply for {job.title}
              </Dialog.Title>
              <Dialog.Description className="mt-0.5 text-xs text-muted-foreground">
                {job.subtitle ?? job.department} · {job.jobType}
              </Dialog.Description>
            </div>
            <Dialog.Close
              aria-label="Close application modal"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            <div>
              <label
                htmlFor="apply-fullname"
                className="block text-xs font-semibold text-foreground"
              >
                Full Name *
              </label>
              <input
                id="apply-fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
                className="mt-1 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="apply-email" className="block text-xs font-semibold text-foreground">
                Email Address *
              </label>
              <input
                id="apply-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="apply-phone" className="block text-xs font-semibold text-foreground">
                Phone Number
              </label>
              <input
                id="apply-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="03XX-XXXXXXX"
                className="mt-1 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="apply-notes" className="block text-xs font-semibold text-foreground">
                Relevant Experience / Note
              </label>
              <textarea
                id="apply-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share a quick note on why you're a fit for this role..."
                className="mt-1 w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            {error && (
              <p role="alert" className="text-xs font-medium text-destructive">
                {error}
              </p>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <Dialog.Close className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted">
                Cancel
              </Dialog.Close>
              <button
                type="submit"
                disabled={submitting}
                className="press inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary-hover disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal> */}
    </Dialog.Root>
  );
};
