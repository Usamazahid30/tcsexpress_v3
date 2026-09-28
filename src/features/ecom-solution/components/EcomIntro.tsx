import { Reveal } from "@/components/common";
import { ArrowRight } from "lucide-react";

export function EcomIntro() {
  return (
    <section className="bg-background py-14 sm:py-16 lg:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              No other industry is changing as rapidly and with as much effect as the e-commerce
              industry. The e-com landscape in Pakistan is at an extremely exciting stage given that
              it is still exploring and finding its own feet. The outlook for local entrepreneurs as
              well as venture capitalists remains strong in the medium to long term, which has
              helped many businesses, small and large, to operate successfully and to build a
              customer base that would have been otherwise impossible to reach.
            </p>

            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              With e-commerce industry booming and gaining momentum in Pakistan, TCS is leading the
              way, when it comes to bringing everything at the doorstep of our customers. When you
              remove the physical boundaries of a store, you offer a plethora of convenience to your
              customers, and this is where TCS can become your partner in making your customers’
              lives convenient and easy.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex justify-end">
              <a
                href="/ecom"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-hover"
              >
                Open an Account
                <ArrowRight className="h-4 w-4 rtl-flip" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
