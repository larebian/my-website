import { FaLaptopCode, FaServer, FaWifi, FaDesktop, FaCheckCircle, FaProjectDiagram } from "react-icons/fa";

function ComputerLab() {
  const specs = [
    "High-Speed Fiber BroadBand Connection (100 Mbps)",
    "Modern Core i7 Workstations with Dual Monitors",
    "Smart Interactive Board & Overhead Projectors",
    "Python, C++, HTML/CSS, Web Dev Software Pre-installed",
    "Dedicated Cybersecurity & Network Security Modules",
    "Uninterrupted Power Supply (UPS & Generator Backup)"
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-8 sm:p-14 rounded-3xl text-white shadow-2xl space-y-3">
          <span className="bg-cyan-500/20 text-cyan-300 text-xs font-bold px-4 py-1.5 rounded-full border border-cyan-400/30">
            💻 Digital Campus Innovation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Advanced ICT & Computer Lab</h1>
          <p className="text-xs sm:text-sm text-cyan-100 max-w-2xl">
            Empowering students with coding, software engineering skills, and AI exposure in a futuristic environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-2xl font-extrabold text-gray-900">State-of-the-Art Computing Facilities</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              At <strong className="text-gray-900">The Lareb Public School</strong>, our Computer Lab is equipped with over 60 high-performance workstations. Students receive practical training in programming, web development, office productivity tools, and graphic design under expert instructor guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {specs.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3 text-xs font-semibold text-gray-800">
                  <FaCheckCircle className="text-cyan-600 shrink-0 size-4" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-indigo-900 to-blue-900 p-6 rounded-3xl text-white space-y-4 shadow-lg">
              <FaServer className="size-10 text-cyan-400" />
              <h3 className="font-extrabold text-lg">Coding & Robotics Club</h3>
              <p className="text-xs text-indigo-100 leading-relaxed">
                After-school workshops on Scratch, Python coding, and Arduino robotics for tech-enthusiast students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerLab;