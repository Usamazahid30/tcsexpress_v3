import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadcrumbBar } from "@/components/ui/BreadcrumbBar";
const inputClass =
  "h-10 w-full rounded-lg border border-white/30 bg-white/[0.04] px-3 text-sm text-white outline-none placeholder:text-white/90 focus:border-red-400 focus:bg-white/10";

const businessFields = [
  { placeholder: "Company Name / Account Title *", required: true },
  { placeholder: "Owner Name *", required: true },
  { placeholder: "Business Category *", required: true, select: true },
  { placeholder: "NTN Number *", required: true },
  { placeholder: "Sales Tax", select: true },
  { placeholder: "Origin (City) *", required: true, select: true },
  { placeholder: "Area", select: true },
  { placeholder: "Pickup Address *", required: true },
  { placeholder: "Billing Address *", required: true },
  { placeholder: "Company Phone Number" },
  { placeholder: "Mobile Number *", required: true },
  { placeholder: "Company Email *", required: true },
];

const contactFields = [
  { placeholder: "Name *", required: true },
  { placeholder: "Phone Number" },
  { placeholder: "Designation *", required: true },
  { placeholder: "CNIC *", required: true },
];

export function EcomAccountForm() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-7">
      <div className="rounded-[30px] border border-white/50 bg-white/[0.10] p-5 text-white shadow-[0_15px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-10">
        {/* Steps */}
        {/* Breadcrumb Steps */}
        <section className="mx-auto w-full max-w-5xl px-4 pb-3">
          <BreadcrumbBar />
        </section>

        {/* Business Information */}
        <div className="mb-5 flex items-center gap-3">
          <span className="text-2xl">▦</span>
          <h2 className="text-lg font-semibold">Business Information</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {businessFields.map((field) =>
            field.select ? (
              <div key={field.placeholder} className="relative">
                <select
                  required={field.required}
                  defaultValue=""
                  className={`${inputClass} appearance-none cursor-pointer !pr-10`}
                >
                  <option value="" disabled className="text-gray-700">
                    {field.placeholder}
                  </option>

                  {(field.placeholder === "Business Category *"
                    ? ["Retail", "E-commerce", "Other"]
                    : field.placeholder === "Origin (City) *"
                      ? ["Karachi", "Lahore", "Islamabad", "Other"]
                      : field.placeholder === "Area"
                        ? ["North", "South", "East", "West", "Other"]
                        : ["Yes", "No"]
                  ).map((option) => (
                    <option key={option} value={option} className="text-gray-900">
                      {option}
                    </option>
                  ))}
                </select>

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                  <svg
                    className="h-4 w-4 text-white/80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </div>
            ) : (
              <input
                key={field.placeholder}
                type="text"
                required={field.required}
                placeholder={field.placeholder}
                className={inputClass}
              />
            ),
          )}
        </div>

        {/* Contact Person */}
        <div className="mb-5 mt-7 flex items-center gap-3">
          <span className="text-2xl">♙</span>
          <h2 className="text-lg font-semibold">Contact Person</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactFields.map((field) => (
            <input
              key={field.placeholder}
              type="text"
              required={field.required}
              placeholder={field.placeholder}
              className={inputClass}
            />
          ))}
        </div>

        {/* Next Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="flex min-w-56 items-center justify-center gap-3 rounded-full bg-[#e90016] px-8 py-3 font-semibold text-white shadow-[0_0_22px_rgba(233,0,22,0.4)] transition hover:bg-red-700"
          >
            Next <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
