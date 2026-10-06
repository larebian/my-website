import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaAward,
  FaUsers,
  FaTrophy,
  FaHandHoldingHeart,
  FaCheckCircle,
  FaArrowRight,
  FaQuestionCircle,
  FaChevronDown,
  FaGraduationCap,
  FaMedal,
  FaPercent,
} from "react-icons/fa";

function Scholarships() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Scholarship Programs Data
  const scholarshipPrograms = [
    {
      id: "merit",
      title: "Academic Merit Excellence",
      badge: "Up to 100% Off",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      icon: <FaTrophy className="size-7 text-amber-500" />,
      tagline: "For Outstanding Academic Performers",
      description:
        "Awarded to top performers in board examinations, internal term finals, or entrance assessment tests.",
      coverage: "50% to 100% Tuition Fee Waiver",
      eligibility: [
        "90%+ marks in previous annual/board exams",
        "Top 3 positions in school entrance assessment",
        "Consistent academic excellence maintenance",
      ],
      borderGradient: "from-amber-400 to-yellow-500",
    },
    {
      id: "sibling",
      title: "Sibling Support Concession",
      badge: "20% - 50% Off",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      icon: <FaUsers className="size-7 text-blue-600" />,
      tagline: "Financial Relief for Families",
      description:
        "Special fee concessions designed to support families having multiple children enrolled simultaneously.",
      coverage: "2nd Child: 25% | 3rd Child: 50% Fee Waiver",
      eligibility: [
        "Real brothers/sisters enrolled in same session",
        "Applied automatically upon verification",
        "Valid till both siblings remain active students",
      ],
      borderGradient: "from-blue-600 to-indigo-600",
    },
    {
      id: "need",
      title: "Need-Based Financial Assistance",
      badge: "Custom Waiver",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      icon: <FaHandHoldingHeart className="size-7 text-emerald-600" />,
      tagline: "Equal Opportunity For All",
      description:
        "Financial support dedicated to deserving students faced with genuine financial hardship or orphan status.",
      coverage: "Up to 75% Total Fee Support",
      eligibility: [
        "Income verification / Guardian CNIC review",
        "Interview with Scholarship Assessment Committee",
        "Satisfactory conduct and attendance record",
      ],
      borderGradient: "from-emerald-500 to-teal-600",
    },
    {
      id: "sports",
      title: "Sports & Co-Curricular Talent",
      badge: "Up to 50% Off",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      icon: <FaMedal className="size-7 text-purple-600" />,
      tagline: "Honoring Extraordinary Talent",
      description:
        "Recognizing students who achieve distinction in regional/national sports tournaments or debate competitions.",
      coverage: "25% to 50% Tuition Fee Waiver",
      eligibility: [
        "District/Provincial level certificate proof",
        "Active participation in school sports teams",
        "Maintained minimum 65% academic average",
      ],
      borderGradient: "from-purple-500 to-pink-600",
    },
  ];

  // Scholarship FAQs
  const scholarshipFaqs = [
    {
      q: "How can I apply for a scholarship at The Lareb Public School?",
      a: "You can apply by filling out the Scholarship Application Form during the admission process or by visiting our administrative office with academic transcripts and income proof.",
    },
    {
      q: "Can a student avail multiple scholarship programs simultaneously?",
      a: "No. A student can only avail one primary scholarship scheme (whichever offers the highest waiver percentage) at a time.",
    },
    {
      q: "Is the merit scholarship renewed automatically every academic year?",
      a: "Merit scholarships are reviewed annually. Students must maintain at least 85% marks and good behavioral standing to continue their waiver.",
    },
    {
      q: "What documents are required for Need-Based Financial Assistance?",
      a: "Requirements include Father/Guardian Income Slip/Salary Certificate, copy of recent utility bills, and CNIC copies of parents.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Modern Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          {/* Background Decorative Glows */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
              <FaAward className="text-amber-400" /> Academic Empowerment Program
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Scholarships & Financial Aid
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              At <span className="font-semibold text-white">The Lareb Public School</span>, we believe financial constraints should never stand in the way of brilliance. We reward merit and support deserving families through comprehensive fee waivers.
            </p>

            {/* Stats Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-blue-700/50">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-400">PKR 2.5M+</p>
                <p className="text-xs text-blue-200 font-medium">Annual Aid Distributed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-400">30%+</p>
                <p className="text-xs text-blue-200 font-medium">Students Benefited</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl sm:text-3xl font-black text-amber-400">Up to 100%</p>
                <p className="text-xs text-blue-200 font-medium">Tuition Waiver</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scholarship Categories Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
              Our Scholarship Programs
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Explore our range of merit-based awards, sibling discounts, and need-based financial aid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarshipPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1.5 rounded-b-full bg-gradient-to-r ${program.borderGradient}`}
                />

                <div className="space-y-6 pt-2">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3.5 bg-slate-50 rounded-2xl border border-gray-100 group-hover:scale-105 transition-transform">
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {program.title}
                        </h3>
                        <p className="text-xs font-semibold text-blue-600">
                          {program.tagline}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-extrabold px-3 py-1 rounded-full border shrink-0 ${program.badgeColor}`}
                    >
                      {program.badge}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Coverage Highlight Box */}
                  <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3.5 flex items-center gap-3">
                    <FaPercent className="text-blue-700 size-4 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-blue-900 tracking-wider">
                        Coverage Breakdown
                      </p>
                      <p className="text-xs font-extrabold text-blue-700">
                        {program.coverage}
                      </p>
                    </div>
                  </div>

                  {/* Eligibility Checklist */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-gray-800">Key Criteria:</p>
                    <ul className="space-y-2">
                      {program.eligibility.map((criterion, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2.5 text-xs text-gray-600"
                        >
                          <FaCheckCircle className="text-emerald-500 size-3.5 shrink-0" />
                          <span>{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">
                    Session 2026-27 Open
                  </span>
                  <Link
                    to="/admission"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    Apply For Scholarship <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-blue-950">
              Scholarship Application Process
            </h3>
            <p className="text-xs text-gray-500">
              Follow these simple steps to request financial assistance or merit grants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            <div className="bg-slate-50 rounded-2xl p-6 text-center space-y-3 relative z-10 border border-gray-100">
              <div className="w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center font-black mx-auto shadow-md">
                1
              </div>
              <h4 className="font-bold text-sm text-gray-900">Submit Application</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Fill the online admission form and tick the "Apply for Scholarship" checkbox.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 text-center space-y-3 relative z-10 border border-gray-100">
              <div className="w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center font-black mx-auto shadow-md">
                2
              </div>
              <h4 className="font-bold text-sm text-gray-900">Document Verification</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Submit marksheets, certificates, or income proofs to the admission desk.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 text-center space-y-3 relative z-10 border border-gray-100">
              <div className="w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center font-black mx-auto shadow-md">
                3
              </div>
              <h4 className="font-bold text-sm text-gray-900">Committee Approval</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The evaluation board reviews the request and awards the appropriate fee waiver.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 text-blue-700 rounded-2xl">
              <FaQuestionCircle className="size-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-950">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-gray-500">
                Common queries regarding our scholarship policies
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {scholarshipFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 hover:text-blue-700 text-sm focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <FaChevronDown
                    className={`size-3 text-gray-400 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180 text-blue-700" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 text-xs text-gray-600 border-t border-gray-50 pt-2 bg-slate-50/50 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">Ready to Start Your Journey?</h4>
            <p className="text-xs text-blue-200">
              Apply online today and secure your scholarship for the upcoming 2026-27 session.
            </p>
          </div>
          <Link
            to="/admission"
            className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-xs px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-amber-400/20 shrink-0"
          >
            Apply For Admission Now
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Scholarships;