import { FaQuoteLeft, FaGraduationCap, FaAward, FaHeart, FaLightbulb } from "react-icons/fa";

function PrincipalMessage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Header */}
        <div className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
              <FaGraduationCap /> School Leadership
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Principal's Message</h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Inspiring academic mastery, integrity, and future leadership at <span className="font-semibold text-white">The Lareb Public School</span>.
            </p>
          </div>
        </div>

        {/* Principal Profile & Message Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 text-center space-y-4">
            <div className="relative inline-block">
              <div className="size-48 sm:size-56 rounded-3xl bg-gradient-to-tr from-blue-900 to-indigo-600 p-1.5 shadow-xl mx-auto">
                <div className="w-full h-full bg-slate-200 rounded-[22px] overflow-hidden flex items-center justify-center text-slate-400">
                  <FaGraduationCap className="size-24 text-slate-400" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-gray-900">Prof. Muhammad Lareb</h3>
              <p className="text-xs font-semibold text-blue-900">Principal & Academic Director</p>
              <p className="text-[11px] text-gray-500 mt-1">M.Sc. Education | 20+ Years Leadership</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
            <FaQuoteLeft className="text-blue-900/20 size-10" />
            <p className="font-medium italic text-gray-900 text-sm sm:text-base">
              "Education is not merely the transmission of information; it is the ignition of character, critical thinking, and compassionate leadership."
            </p>
            <p>
              Welcome to <strong className="text-gray-900">The Lareb Public School</strong>. Our institution stands on the dual pillars of modern scientific inquiry and strong ethical values. We believe that every child possesses unique talents waiting to be cultivated.
            </p>
            <p>
              Our dedicated faculty ensures state-of-the-art interactive teaching, robust STEM programs, and a safe, inclusive campus. We aim to graduate students who are not only academically top-tier but also responsible global citizens equipped for 21st-century challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalMessage;