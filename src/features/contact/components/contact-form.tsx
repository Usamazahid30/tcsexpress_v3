import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import { motion } from "motion/react";
import { Reveal } from "@/components/common";
import {
  User,
  Mail,
  Phone,
  Package,
  Calendar,
  MessageSquare,
  Paperclip,
  X,
  FileCheck,
  Check,
  Loader2,
  Send,
  HelpCircle,
} from "lucide-react";
import { ContactSuccessModal } from "./contact-success-modal";

interface FormState {
  name: string;
  consNum: string;
  email: string;
  date: string;
  phone: string;
  type: string;
  message: string;
  captchaVerified: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    consNum: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
    phone: "",
    type: "",
    message: "",
    captchaVerified: false,
  });

  const [attachment, setAttachment] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachment(file);
    }
  };

  const removeAttachment = () => {
    setAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.consNum.trim()) newErrors.consNum = "Consignment number is required";
    else if (formData.consNum.length > 12)
      newErrors.consNum = "Consignment number must not exceed 12 digits";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.phone.trim()) newErrors.phone = "Contact number is required";
    if (!formData.type || formData.type === "Please Select")
      newErrors.type = "Please select an inquiry type";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    if (!formData.captchaVerified) newErrors.captcha = "Please complete the verification check";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setSubmitting(false);
      setModalOpen(true);
      // Reset form
      setFormData({
        name: "",
        consNum: "",
        email: "",
        date: new Date().toISOString().split("T")[0],
        phone: "",
        type: "",
        message: "",
        captchaVerified: false,
      });
      setAttachment(null);
      setErrors({});
    }, 1200);
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Decorative background glows */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page">
        {/* Section Heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-section text-foreground">Contact Us Form</h2>
            {/* <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              Please provide your shipment details and contact information so our team can assist
              you efficiently.
            </p> */}
          </div>
        </Reveal>

        {/* Form Container */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-(--shadow-elevated)">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Name & Consignment # */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Your Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-wider text-foreground"
                  >
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Muhammad Usama"
                      className={`w-full rounded-xl border bg-background py-2.5 pl-10 pr-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none ${
                        errors.name
                          ? "border-destructive focus:ring-2 focus:ring-destructive/20"
                          : "border-border hover:border-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                {/* Consignment # */}
                <div className="space-y-2">
                  <label
                    htmlFor="consNum"
                    className="text-xs font-semibold uppercase tracking-wider text-foreground"
                  >
                    Consignment # <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                      <Package className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      id="consNum"
                      name="consNum"
                      maxLength={12}
                      value={formData.consNum}
                      onChange={handleInputChange}
                      placeholder="Max 12 digits (e.g. 123456789012)"
                      className={`w-full rounded-xl border bg-background py-2.5 pl-10 pr-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none ${
                        errors.consNum
                          ? "border-destructive focus:ring-2 focus:ring-destructive/20"
                          : "border-border hover:border-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                    />
                  </div>
                  {errors.consNum && <p className="text-xs text-destructive">{errors.consNum}</p>}
                </div>
              </div>

              {/* Row 2: Email & Date */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wider text-foreground"
                  >
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className={`w-full rounded-xl border bg-background py-2.5 pl-10 pr-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none ${
                        errors.email
                          ? "border-destructive focus:ring-2 focus:ring-destructive/20"
                          : "border-border hover:border-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="text-xs font-semibold uppercase tracking-wider text-foreground"
                  >
                    Date <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-3.5 text-sm text-foreground transition-all hover:border-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Phone & Inquiry Type */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Contact Number */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold uppercase tracking-wider text-foreground"
                  >
                    Your Contact Number <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 0300 1234567"
                      className={`w-full rounded-xl border bg-background py-2.5 pl-10 pr-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none ${
                        errors.phone
                          ? "border-destructive focus:ring-2 focus:ring-destructive/20"
                          : "border-border hover:border-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label
                    htmlFor="type"
                    className="text-xs font-semibold uppercase tracking-wider text-foreground"
                  >
                    Inquiry Type <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className={`w-full appearance-none rounded-xl border bg-background py-2.5 pl-10 pr-10 text-sm text-foreground transition-all focus:outline-none ${
                        errors.type
                          ? "border-destructive focus:ring-2 focus:ring-destructive/20"
                          : "border-border hover:border-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                    >
                      <option value="">Please Select</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Track">Track Shipment</option>
                      <option value="Request & General Feedback">Request & General Feedback</option>
                      <option value="Corporate Inquiry">Corporate Inquiry</option>
                    </select>
                    {/* Select indicator arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-muted-foreground">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.type && <p className="text-xs text-destructive">{errors.type}</p>}
                </div>
              </div>

              {/* Attachment Picker */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Attachment{" "}
                  <span className="text-xs font-normal text-muted-foreground">
                    (Optional - PDF, JPG, PNG)
                  </span>
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  id="attachment"
                  accept="application/pdf, image/png, image/jpeg"
                  className="hidden"
                  onChange={handleFileChange}
                />

                {attachment ? (
                  <div className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/5 p-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileCheck className="h-5 w-5 shrink-0 text-primary" />
                      <div className="min-w-0">
                        <p className="truncate text-xs sm:text-sm font-medium text-foreground">
                          {attachment.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {(attachment.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeAttachment}
                      className="ml-2 grid h-7 w-7 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                      aria-label="Remove attachment"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex w-full items-center justify-between rounded-xl border border-dashed border-border bg-surface/50 p-3.5 text-left transition-all hover:border-primary/50 hover:bg-surface"
                  >
                    <div className="flex items-center gap-2.5 text-muted-foreground">
                      <Paperclip className="h-4 w-4 rotate-45 text-primary" />
                      <span className="text-xs sm:text-sm">
                        Click to attach document or screenshot
                      </span>
                    </div>
                    <span className="rounded-lg bg-card border border-border px-2.5 py-1 text-xs font-medium text-foreground">
                      Browse
                    </span>
                  </button>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-wider text-foreground"
                >
                  Your Message <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute top-3 left-3.5 text-muted-foreground">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your query or feedback in detail..."
                    className={`w-full rounded-xl border bg-background py-2.5 pl-10 pr-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none ${
                      errors.message
                        ? "border-destructive focus:ring-2 focus:ring-destructive/20"
                        : "border-border hover:border-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    }`}
                  />
                </div>
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              {/* Security Verification (reCAPTCHA style widget) */}
              {/* <div className="pt-2">
                <div
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      captchaVerified: !prev.captchaVerified,
                    }))
                  }
                  className={`inline-flex items-center justify-between gap-6 sm:gap-10 rounded-2xl border p-3.5 sm:p-4 cursor-pointer transition-all ${
                    formData.captchaVerified
                      ? "border-success/40 bg-success/5"
                      : errors.captcha
                        ? "border-destructive bg-destructive/5"
                        : "border-border bg-surface/60 hover:bg-surface"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid h-6 w-6 place-items-center rounded-md border transition-all ${
                        formData.captchaVerified
                          ? "border-success bg-success text-white"
                          : "border-muted-foreground/40 bg-card"
                      }`}
                    >
                      {formData.captchaVerified && <Check className="h-4 w-4 stroke-[3]" />}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-foreground select-none">
                      I'm not a robot
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-[10px] text-muted-foreground/70">
                    <img
                      src="/tcs.svg"
                      alt="TCS Verified"
                      className="h-3.5 w-auto opacity-70 mb-0.5"
                    />
                    <span>reCAPTCHA</span>
                  </div>
                </div>
                {errors.captcha && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.captcha}</p>
                )}
              </div> */}

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="press group relative flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary py-3.5 px-6 text-sm sm:text-base font-semibold text-primary-foreground shadow-(--shadow-soft) transition-all hover:bg-primary-hover hover:shadow-(--shadow-glow) disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending your message...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT</span>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>

      {/* Success Confirmation Modal */}
      <ContactSuccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
