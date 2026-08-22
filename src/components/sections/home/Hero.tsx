import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-[#FAFBFF] px-4 pt-28 pb-9 sm:pt-32 sm:pb-12 md:pt-36 md:pb-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.08),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm sm:mb-5 sm:px-4 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Free • Private • Browser-based
        </div>

        <h1 className="mb-4 text-[2.55rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
          Powerful PDF tools,
          <br />
          <span className="text-primary">without the hassle.</span>
        </h1>

        <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-slate-500 sm:mb-7 sm:text-base md:text-lg">
          Merge, split, compress, convert and edit your PDFs instantly.
          Everything runs in your browser, so your files stay on your device.
        </p>

        <div className="mb-7 flex flex-col justify-center gap-2.5 sm:flex-row sm:gap-3">
          <Link href="#tools" className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base">
            Explore PDF Tools
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/merge-pdf" className="btn-secondary inline-flex items-center justify-center px-7 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base">
            Merge PDFs
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium text-slate-500 sm:text-xs">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Files stay local</span>
          <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-indigo-500" /> No sign-up required</span>
        </div>
      </div>
    </section>
  );
};
