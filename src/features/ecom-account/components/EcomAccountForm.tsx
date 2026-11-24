import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  UserRound,
  FileText,
  UploadCloud,
  MapPin,
  Weight,
  Layers3,
  Truck,
  Check,
  ExternalLink,
  CreditCard,
} from "lucide-react";

const businessFields = [
  { placeholder: "Company Name / Account Title *", required: true },
  { placeholder: "Owner Name *", required: true },
  {
    placeholder: "Business Category *",
    required: true,
    options: ["Retail", "E-commerce", "Other"],
  },
  { placeholder: "NTN Number *", required: true },
  { placeholder: "Sales Tax", options: ["Yes", "No"] },
  {
    placeholder: "Origin (City) *",
    required: true,
    options: ["Karachi", "Lahore", "Islamabad", "Other"],
  },
  {
    placeholder: "Area",
    options: ["North", "South", "East", "West", "Other"],
  },
  { placeholder: "Pickup Address *", required: true },
  { placeholder: "Billing Address *", required: true },
  { placeholder: "Company Phone Number" },
  { placeholder: "Mobile Number *", required: true },
  { placeholder: "Company Email *", required: true, type: "email" },
];

const contactFields = [
  { placeholder: "Name *", required: true },
  { placeholder: "Phone Number" },
  { placeholder: "Designation *", required: true },
  { placeholder: "CNIC *", required: true },
];

const inputClass =
  "h-10 w-full rounded-lg border border-[var(--ecom-input-border)] bg-[var(--ecom-input-bg)] px-3 text-sm text-white outline-none placeholder:text-white/90 focus:border-primary focus:bg-white/10";

const steps = ["Business Details", "Document Submission", "Review & Submit"];

export function EcomAccountForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [cnicFront, setCnicFront] = useState<File | null>(null);
  const [cnicBack, setCnicBack] = useState<File | null>(null);
  const [accepted, setAccepted] = useState(false);
  const [showRates, setShowRates] = useState(false);
  const [error, setError] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const updateField = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setError("");

    if (currentStep === 1) {
      if (!formRef.current?.reportValidity()) return;
    }

    if (currentStep === 2) {
      if (!cnicFront || !cnicBack) {
        setError("Please upload both CNIC Front and CNIC Back.");
        return;
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const previousStep = () => {
    setError("");
    setSubmitAttempted(false);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);
    if (!accepted) {
      return;
    }

    setError("");
  };

  const uploadCard = (title: string, file: File | null, setFile: (file: File | null) => void) => (
    <label className="group relative flex min-h-[145px] cursor-pointer items-center justify-center rounded-2xl border border-dashed border-[#b78aff] bg-white/[0.03] px-4 py-5 transition hover:bg-white/[0.08]">
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        className="hidden"
        onChange={(e) => {
          const selectedFile = e.target.files?.[0] ?? null;
          setFile(selectedFile);

          const frontUploaded = title === "CNIC Front" ? selectedFile : cnicFront;

          const backUploaded = title === "CNIC Back" ? selectedFile : cnicBack;

          if (frontUploaded && backUploaded) {
            setError("");
          }
        }}
      />

      <div className="flex w-full items-center justify-center gap-4">
        <div className="flex sm:h-28 sm:w-46 h-28 w-36 rotate-[-8deg] items-end justify-between pr-8">
          <img
            src={
              title === "CNIC Front"
                ? "/ecom-solution/cnic-front.png"
                : "/ecom-solution/cnic-back.png"
            }
            alt={title}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <UploadCloud size={38} className="text-[#ff456f] drop-shadow-[0_0_8px_#ff1744]" />

          <span className="text-sm font-semibold text-white">{title}</span>

          <span className="max-w-[180px] truncate text-xs text-white/70">
            {file ? file.name : "JPG, PNG, JPEG (Max 1MB)"}
          </span>
        </div>
      </div>
    </label>
  );

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-10">
      <div className="rounded-[30px] border border-white/50 bg-white/[0.10] p-5 text-white shadow-[0_0_35px_rgba(174,72,255,0.25)] backdrop-blur-2xl md:p-10">
        {/* Breadcrumb / Stepper */}
        <div className="mb-8 flex items-center justify-center gap-2 sm:gap-4">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const completed = currentStep > stepNumber;
            const active = currentStep === stepNumber;

            return (
              <div key={step} className="flex min-w-0 flex-1 items-center gap-2">
                <div className="flex shrink-0 items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      completed
                        ? "bg-[#ed174c] text-white"
                        : active
                          ? "border-2 border-white bg-[#ed174c] text-white shadow-[0_0_15px_#ff1744]"
                          : "bg-[#8c79c9] text-white"
                    }`}
                  >
                    {completed ? <Check size={19} strokeWidth={5} /> : stepNumber}
                  </div>

                  <span
                    className={`hidden text-xs sm:block ${
                      active ? "font-bold text-white" : "text-white/80"
                    }`}
                  >
                    {step}
                  </span>
                </div>

                {index !== steps.length - 1 && <div className="h-px min-w-2 flex-1 bg-white/20" />}
              </div>
            );
          })}
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          {/* STEP 1: BUSINESS DETAILS */}
          {currentStep === 1 && (
            <>
              <div className="mb-5 flex items-center gap-3">
                <Building2 size={23} />
                <h3 className="font-semibold">Business Information</h3>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {businessFields.map((field) => (
                  <div key={field.placeholder} className="relative">
                    {field.options ? (
                      <select
                        required={field.required}
                        value={formData[field.placeholder] || ""}
                        onChange={(e) => updateField(field.placeholder, e.target.value)}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" disabled className="text-gray-700">
                          {field.placeholder}
                        </option>
                        {field.options.map((option) => (
                          <option key={option} value={option} className="text-gray-900">
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type || "text"}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.placeholder] || ""}
                        onChange={(e) => updateField(field.placeholder, e.target.value)}
                        className={inputClass}
                      />
                    )}
                    {field.options && (
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                        ▾
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mb-5 mt-8 flex items-center gap-3">
                <UserRound size={23} />
                <h3 className="font-semibold">Contact Person</h3>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {contactFields.map((field) => (
                  <input
                    key={field.placeholder}
                    type="text"
                    required={field.required}
                    placeholder={field.placeholder}
                    value={formData[field.placeholder] || ""}
                    onChange={(e) => updateField(field.placeholder, e.target.value)}
                    className={inputClass}
                  />
                ))}
              </div>
            </>
          )}

          {/* STEP 2: DOCUMENT SUBMISSION */}
          {currentStep === 2 && (
            <>
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-3">
                  <FileText size={25} className="text-[#ff456f] drop-shadow-[0_0_8px_#ff1744]" />
                  <h2 className="text-xl font-bold">Document Submission</h2>
                </div>
                <p className="text-sm text-white/80">
                  Upload the required documents to verify your business.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {uploadCard("CNIC Front", cnicFront, setCnicFront)}
                {uploadCard("CNIC Back", cnicBack, setCnicBack)}
              </div>
            </>
          )}

          {/* STEP 3: REVIEW & SUBMIT */}
          {currentStep === 3 && (
            <>
              <div className="mb-7">
                <div className="mb-2 flex items-center gap-3">
                  <FileText size={32} className="text-[#ff456f] drop-shadow-[0_0_8px_#ff1744]" />
                  <h2 className="text-xl font-bold">Review & Submit</h2>
                </div>
                <p className="text-sm text-white/90">
                  Please review your details, rates and accept the terms to complete your account
                  setup.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#b78aff]/70 bg-[#171c50]/50 p-4 md:p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold">Rates & Acceptance</h3>
                  <button
                    type="button"
                    onClick={() => setShowRates(!showRates)}
                    className="flex items-center gap-2 text-sm text-white hover:text-[#65caff]"
                  >
                    {showRates ? "Hide Details" : "View Details"}
                    <ExternalLink size={16} />
                  </button>
                </div>

                {/* Original Rates Table */}

                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] overflow-hidden rounded-2xl border border-[#a78bfa]/40">
                  {/* Economy Express */}
                  <div className="row-span-2 flex flex-col items-center justify-center gap-3 border-r border-[#a78bfa]/30 bg-gradient-to-r from-[#a51b50] via-[#681b50] to-[#29245f] p-3 text-center">
                    <Truck size={42} className="text-white drop-shadow-[0_0_5px_#ff315d]" />
                    <span className="font-semibold leading-6 text-white">
                      Economy Express
                      <br />
                      <span className="font-normal">(48–72 Hrs)</span>
                    </span>
                  </div>

                  {/* Nationwide */}
                  <div className="flex flex-col items-center justify-center gap-2 border-r border-b border-[#a78bfa]/30 p-3">
                    <MapPin size={27} className="text-[#ff456f] drop-shadow-[0_0_5px_#ff1744]" />
                    <span className="text-sm font-semibold text-white">Nationwide</span>
                  </div>

                  {/* Upto 3 kg */}
                  <div className="flex flex-col items-center justify-center gap-2 border-r border-b border-[#a78bfa]/30 p-3">
                    <Weight size={27} className="text-[#ff456f] drop-shadow-[0_0_5px_#ff1744]" />
                    <span className="text-sm font-semibold text-white">Upto 3 kg</span>
                  </div>

                  {/* Each Add kg */}
                  <div className="flex flex-col items-center justify-center gap-2 border-b border-[#a78bfa]/30 p-3">
                    <Layers3 size={27} className="text-[#ff456f] drop-shadow-[0_0_5px_#ff1744]" />
                    <span className="text-sm font-semibold text-white">Each Add kg</span>
                  </div>

                  {/* Rs. 450 */}
                  <div className="col-span-2 flex items-center justify-center border-r border-[#a78bfa]/30 p-4">
                    <span className="text-2xl font-bold text-white">Rs. 450</span>
                  </div>

                  {/* Rs. 150 */}
                  <div className="flex items-center justify-center p-4">
                    <span className="text-2xl font-bold text-white">Rs. 150</span>
                  </div>
                </div>
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => {
                    setAccepted(e.target.checked);

                    if (e.target.checked) {
                      setSubmitAttempted(false);
                    }
                  }}
                  className="mt-0.5 h-6 w-6 shrink-0 accent-[#ed174c]"
                />
                <span>
                  I have read and hereby accept the{" "}
                  <a href="#" className="font-semibold text-[#65caff]">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-semibold text-[#65caff]">
                    Undertaking
                  </a>
                </span>
              </label>
            </>
          )}
          {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

          {/* {currentStep === 3 && submitAttempted && !accepted && (
            <p className="mt-4 text-sm text-red-400">Please accept the Terms and Conditions.</p>
          )} */}
          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between gap-3">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={previousStep}
                className="press flex min-w-28 items-center justify-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <ArrowLeft size={18} />
                Back
              </button>
            ) : (
              <span />
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="press flex min-w-44 items-center justify-center gap-3 rounded-full bg-[#ed174c] px-8 py-3 text-sm font-bold text-white shadow-[0_0_18px_rgba(255,23,68,0.65)] transition hover:bg-[#ff1744]"
              >
                Next
                <ArrowRight size={19} />
              </button>
            ) : (
              <button
                type="submit"
                className="press flex min-w-52 items-center justify-center gap-3 rounded-full bg-[#ed174c] px-8 py-3 text-sm font-bold text-white shadow-[0_0_22px_rgba(199,35,66,0.7)] transition hover:bg-[#ff1744]"
              >
                Submit Account
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
