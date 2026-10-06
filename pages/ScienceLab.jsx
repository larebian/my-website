import { FaFlask, FaAtom, FaDna, FaMicroscope, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

function ScienceLab() {
  const labs = [
    { title: "Physics Laboratory", icon: <FaAtom className="text-blue-600 size-6" />, desc: "Equipped with optics kits, circuit boards, mechanics tools, and digital measuring instruments." },
    { title: "Chemistry Laboratory", icon: <FaFlask className="text-emerald-600 size-6" />, desc: "Features fume hoods, precision balances, organic reagents, and safety gear for experiments." },
    { title: "Biology & Genetics Lab", icon: <FaDna className="text-purple-600 size-6" />, desc: "High-power compound microscopes, anatomical models, human skeleton, and slide banks." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 p-8 sm:p-14 rounded-3xl text-white shadow-2xl space-y-3">
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-400/30">
            🔬 Practical Inquiry
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Integrated Science Laboratories</h1>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
            Hands-on experimental learning in Physics, Chemistry, and Biological sciences under strict safety protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labs.map((lab, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <div className="p-3.5 bg-slate-50 rounded-2xl w-fit">{lab.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg">{lab.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{lab.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <FaShieldAlt className="text-emerald-600 size-16 shrink-0" />
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-extrabold text-gray-900 text-lg">Safety Standards & Supervision</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              All labs are equipped with eyewash stations, fire extinguishers, emergency showers, safety goggles, and lab coats. Practical classes are supervised by certified lab demonstrators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScienceLab;