import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaFileAlt,
  FaCheckCircle,
  FaUserCheck,
  FaClipboardList,
  FaCalendarAlt,
  FaDownload,
  FaQuestionCircle,
  FaChevronDown,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

function AdmissionPolicy() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Admission Steps
  const admissionSteps = [
    {
      step: "01",
      title: "Online Application",
      desc: "Fill out the online application form or download the PDF form and submit it to the campus.",
      icon: <FaFileAlt className="size-6 text-blue-700" />,
    },
    {
      step: "02",
      title: "Assessment & Observation",
      desc: "Informal assessment for Playgroup/KG, and basic proficiency test in English, Urdu & Math for Class 1+.",
      icon: <FaClipboardList className="size-6 text-blue-700" />,
    },
    {
      step: "03",
      title: "Parent Interaction",
      desc: "A brief, welcoming interaction session with the Principal/Management to align on educational goals.",
      icon: <FaUserCheck className="size-6 text-blue-700" />,
    },
    {
      step: "04",
      title: "Fee Deposit & Enrolment",
      desc: "Upon selection, submit required documents and fee voucher to secure official admission.",
      icon: <FaCheckCircle className="size-6 text-blue-700" />,
    },
  ];

  // Age Criteria Matrix
  const ageCriteria = [
    { grade: "Playgroup", age: "2.5 - 3.5 Years", maxAge: "3.5 Years" },
    { grade: "Nursery / KG", age: "3.5 - 5.0 Years", maxAge: "5.0 Years" },
    { grade: "Primary (Class 1 - 5)", age: "5.5 - 10.5 Years", maxAge: "11 Years" },
    { grade: "Middle (Class 6 - 8)", age: "11.0 - 13.5 Years", maxAge: "14 Years" },
    { grade: "Secondary / Matric", age: "14.0+ Years", maxAge: "16 Years" },
  ];

  // Documents Required
  const documentList = [
    "Original & Copy of Student Birth Certificate / Form-B (NADRA)",
    "4 Passport-size photographs with light blue background",
    "Copies of Father / Guardian CNIC",
    "School Leaving Certificate (SLC) & Report Card from previous institution (Class 1 & above)",
    "Duly filled and signed Admission Application Form",
  ];

  // FAQs
  const faqs = [
    {
      q: "What is the age criteria for Playgroup and Nursery?",
      a: "Children entering Playgroup must be between 2.5 to 3.5 years old by April 30th of the academic session.",
    },
    {
      q: "Is there an entry test for preschool admissions?",
      a: "No formal written test is conducted for Preschool. Only an informal observation and interaction session with parents is organized.",
    },
    {
      q: "When does the academic session begin?",
      a: "Our annual academic session 2026-27 starts in April. Admissions remain open subject to seat availability.",
    },
    {
      q: "Are sibling discounts or scholarships available?",
      a: "Yes! We offer sibling concessions and merit/need-based scholarships. Please visit our Scholarships page for details.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-blue-700/50 border border-blue-400/30 text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-md">
              <FaShieldAlt /> Academic Session 2026-27
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Admission Policy & Guidelines
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Welcome to <span className="font-semibold text-white">The Lareb Public School</span>. We offer a transparent, merit-driven, and supportive admission process designed to help your child excel.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/admission"
                className="bg-white text-blue-900 hover:bg-blue-50 font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2"
              >
                Apply Online <FaArrowRight size={12} />
              </Link>
              <a
                href="/admission-form.pdf"
                download
                className="bg-blue-700/60 hover:bg-blue-700 text-white border border-blue-400/30 font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2"
              >
                Download Form (PDF) <FaDownload size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Admission Steps (4-Card Process Grid) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900">
              Four Steps to Enrolment
            </h2>
            <p className="text-gray-600 text-sm">
              Our hassle-free 4-step enrolment process ensures a smooth onboarding experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-between items-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-xl">{s.icon}</div>
                  <span className="text-2xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Section: Age Eligibility & Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Age Eligibility Table */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl">
                <FaCalendarAlt className="size-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-950">Age Eligibility Criteria</h3>
                <p className="text-xs text-gray-500">Calculated as of April 30, 2026</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-100">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-blue-50/70 text-blue-900 text-xs uppercase font-extrabold">
                  <tr>
                    <th className="px-4 py-3.5">Grade / Section</th>
                    <th className="px-4 py-3.5">Recommended Age</th>
                    <th className="px-4 py-3.5">Max Cut-Off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs">
                  {ageCriteria.map((row, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-4 py-3.5 font-bold text-gray-900">{row.grade}</td>
                      <td className="px-4 py-3.5 text-blue-700 font-semibold">{row.age}</td>
                      <td className="px-4 py-3.5 text-gray-500">{row.maxAge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-[11px] text-gray-400 italic">
              * Minor relaxations in age limits may be granted subject to academic evaluation and Principal approval.
            </p>
          </div>

          {/* Documents Required Checklist */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                  <FaGraduationCap className="size-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Required Documents</h3>
                  <p className="text-xs text-blue-200">Submit along with the application form</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs text-blue-100">
                {documentList.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-emerald-400 size-4 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                to="/fee-structure"
                className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                View Complete Fee Structure <FaArrowRight size={10} />
              </Link>
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
              <h3 className="text-2xl font-bold text-blue-950">Frequently Asked Questions</h3>
              <p className="text-xs text-gray-500">Quick answers regarding our admissions process</p>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
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
        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-blue-900">Have more questions about admissions?</h4>
            <p className="text-xs text-gray-600">Our administrative desk is ready to assist you during working hours.</p>
          </div>
          <Link
            to="/contact"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md shrink-0"
          >
            Contact Admission Desk
          </Link>
        </div>

      </div>
    </div>
  );
}

export default AdmissionPolicy;