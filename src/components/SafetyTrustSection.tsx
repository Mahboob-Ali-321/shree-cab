import { 
  UserCheck, 
  ShieldCheck, 
  Navigation, 
  PhoneCall, 
  BadgePercent, 
  FileCheck 
} from "lucide-react";
import { safetyPillars } from "../data";

export default function SafetyTrustSection() {
  const iconMap: Record<string, any> = {
    UserCheck,
    ShieldCheck,
    Navigation,
    PhoneCall,
    BadgePercent,
    FileCheck,
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-slate-200 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600">
            Uncompromising Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Why Dhanbad Families & Corporates Trust Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every journey with Shree Balajee Travels is backed by our six core safety and transparency guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {safetyPillars.map((pillar, i) => {
            const IconComp = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6 text-[#0B1F3A]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 sm:mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <span>Standard Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
