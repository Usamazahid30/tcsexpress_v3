type BreadcrumbBarProps = {
  currentStep?: number;
};

const steps = ["Business Information", "Contact Person", "Review & Submit"];

export function BreadcrumbBar({ currentStep = 1 }: BreadcrumbBarProps) {
  return (
    <div className="w-full px-2 py-3">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const active = currentStep === stepNumber;
          const completed = currentStep > stepNumber;

          return (
            <div key={step} className="flex min-w-0 flex-1 items-center gap-2">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  active
                    ? "border border-red-400 bg-red-600 text-white shadow-[0_0_8px_3px_rgba(255,0,40,0.65)]"
                    : completed
                      ? "bg-red-500 text-white"
                      : "bg-white/20 text-white"
                }`}
              >
                {stepNumber}
              </div>

              <span
                className={`hidden whitespace-nowrap text-xs sm:block md:text-sm ${
                  active ? "font-semibold text-white" : "text-white/70"
                }`}
              >
                {step}
              </span>

              {index !== steps.length - 1 && <div className="h-px min-w-2 flex-1 bg-white/40" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
