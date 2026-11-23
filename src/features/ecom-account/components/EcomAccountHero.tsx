export function EcomAccountHero() {
  return (
    <section className="px-4 pt-24 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <span
          className="inline-flex h-[34px] w-[200px] items-center justify-center rounded-full border border-[#ff263f] px-6 text-[14px] font-semibold text-white"
          style={{
            background: "linear-gradient(90deg, #4b1438 0%, #48102f 50%, #4b173b 100%)",
            boxShadow: "0 0 5px rgba(255, 25, 55, 0.65), 0 0 14px rgba(255, 25, 55, 0.35)",
          }}
        >
          TCS E-Com Solutions
        </span>

        <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
          Open Your TCS
          <br />
          E-com Account
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/80 md:text-base">
          Get faster payments, wider reach and dedicated logistics support for your business.
        </p>
      </div>
    </section>
  );
}
