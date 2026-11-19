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
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#EFE6DA] bg-white p-6 shadow-xl focus:outline-none">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-lg font-bold text-[#111827]">
                Life &amp; Purpose at TCS
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-xs text-[#4B5563]">
                Connecting communities, businesses, and careers across Pakistan.
              </Dialog.Description>
            </div>
            <Dialog.Close
              aria-label="Close story modal"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[#6B7280] transition hover:bg-[#F3F4F6] hover:text-[#111827]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Dialog.Close>
          </div>

          {/* <div className="mt-4 rounded-xl bg-[#FAF4EC] p-4 text-sm leading-relaxed text-[#374151]">
            From sorting hubs and long-haul fleet corridors to enterprise engineering and customer
            operations, every role at TCS helps keep commerce and households connected nationwide.
          </div> */}

          <div className="mt-5 flex justify-end">
            <Dialog.Close className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg bg-[#D90416] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#B80312]">
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
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#EFE6DA] bg-white p-6 shadow-xl focus:outline-none">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-lg font-bold text-[#111827]">
                Submit Your CV
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-xs text-[#4B5563]">
                Share your details so we can reach out when a matching role opens.
              </Dialog.Description>
            </div>
            <Dialog.Close
              aria-label="Close CV modal"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[#6B7280] transition hover:bg-[#F3F4F6] hover:text-[#111827]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            <div>
              <label htmlFor="cv-fullname" className="block text-xs font-semibold text-[#1F2937]">
                Full Name *
              </label>
              <input
                id="cv-fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Ayesha Tariq"
                className="mt-1 h-10 w-full rounded-lg border border-[#D1D5DB] px-3 text-sm text-[#111827] focus:border-[#D90416] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="cv-email" className="block text-xs font-semibold text-[#1F2937]">
                Email Address *
              </label>
              <input
                id="cv-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ayesha@example.com"
                className="mt-1 h-10 w-full rounded-lg border border-[#D1D5DB] px-3 text-sm text-[#111827] focus:border-[#D90416] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="cv-department" className="block text-xs font-semibold text-[#1F2937]">
                Preferred Department
              </label>
              <select
                id="cv-department"
                value={preferredDepartment}
                onChange={(e) => setPreferredDepartment(e.target.value)}
                className="mt-1 h-10 w-full rounded-lg border border-[#D1D5DB] bg-white px-3 text-sm text-[#111827] focus:border-[#D90416] focus:outline-none"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="cv-summary" className="block text-xs font-semibold text-[#1F2937]">
                LinkedIn / Portfolio or Experience Summary
              </label>
              <textarea
                id="cv-summary"
                rows={3}
                value={portfolioOrSummary}
                onChange={(e) => setPortfolioOrSummary(e.target.value)}
                placeholder="Briefly share your background, city preference, or profile link..."
                className="mt-1 w-full rounded-lg border border-[#D1D5DB] p-3 text-sm text-[#111827] focus:border-[#D90416] focus:outline-none"
              />
            </div>

            {error && (
              <p role="alert" className="text-xs font-medium text-[#D90416]">
                {error}
              </p>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <Dialog.Close className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg border border-[#D1D5DB] px-4 py-2 text-xs font-semibold text-[#374151] hover:bg-[#F9FAFB]">
                Cancel
              </Dialog.Close>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg bg-[#D90416] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#B80312] disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Profile"}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
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
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#EFE6DA] bg-white p-6 shadow-xl focus:outline-none">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D90416]">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{job.location}</span>
              </div>
              <Dialog.Title className="mt-1 text-lg font-bold text-[#111827]">
                Apply for {job.title}
              </Dialog.Title>
              <Dialog.Description className="mt-0.5 text-xs text-[#4B5563]">
                {job.subtitle ?? job.department} · {job.jobType}
              </Dialog.Description>
            </div>
            <Dialog.Close
              aria-label="Close application modal"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[#6B7280] transition hover:bg-[#F3F4F6] hover:text-[#111827]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            <div>
              <label
                htmlFor="apply-fullname"
                className="block text-xs font-semibold text-[#1F2937]"
              >
                Full Name *
              </label>
              <input
                id="apply-fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
                className="mt-1 h-10 w-full rounded-lg border border-[#D1D5DB] px-3 text-sm text-[#111827] focus:border-[#D90416] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="apply-email" className="block text-xs font-semibold text-[#1F2937]">
                Email Address *
              </label>
              <input
                id="apply-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 h-10 w-full rounded-lg border border-[#D1D5DB] px-3 text-sm text-[#111827] focus:border-[#D90416] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="apply-phone" className="block text-xs font-semibold text-[#1F2937]">
                Phone Number
              </label>
              <input
                id="apply-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="03XX-XXXXXXX"
                className="mt-1 h-10 w-full rounded-lg border border-[#D1D5DB] px-3 text-sm text-[#111827] focus:border-[#D90416] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="apply-notes" className="block text-xs font-semibold text-[#1F2937]">
                Relevant Experience / Note
              </label>
              <textarea
                id="apply-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share a quick note on why you're a fit for this role..."
                className="mt-1 w-full rounded-lg border border-[#D1D5DB] p-3 text-sm text-[#111827] focus:border-[#D90416] focus:outline-none"
              />
            </div>

            {error && (
              <p role="alert" className="text-xs font-medium text-[#D90416]">
                {error}
              </p>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <Dialog.Close className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg border border-[#D1D5DB] px-4 py-2 text-xs font-semibold text-[#374151] hover:bg-[#F9FAFB]">
                Cancel
              </Dialog.Close>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg bg-[#D90416] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#B80312] disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
