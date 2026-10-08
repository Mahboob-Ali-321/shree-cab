import { Car, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";
import { howItWorksSteps } from "../data";
import { useLanguage } from "./LanguageContext";

export default function HowItWorks() {
  const { lang } = useLanguage();

  const icons = [Car, MessageSquare, PhoneCall, ShieldCheck];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-slate-200 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600">
            Simple 4-Step Booking
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            How Booking With Us Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            No complicated apps or mandatory registrations. Fast, transparent cab booking in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {howItWorksSteps.map((step, idx) => {
            const IconComp = icons[idx];
            return (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs relative flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-400 tabular-nums">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-[#0B1F3A]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5 sm:mb-2">
                    {lang === "hi" ? step.titleHi : step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === "hi" ? step.descHi : step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Step Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
