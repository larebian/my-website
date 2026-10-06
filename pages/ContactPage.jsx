import { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaPaperPlane, 
  FaQuestionCircle, 
  FaCheckCircle,
  FaHeadset
} from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: "", email: "", phone: "", subject: "General Inquiry", message: "" });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="size-6 text-blue-600" />,
      title: "Main Campus Location",
      details: ["Main Campus, Education City Road", "Karachi, Pakistan"],
      badge: "Visit Us"
    },
    {
      icon: <FaPhoneAlt className="size-6 text-emerald-600" />,
      title: "Phone & WhatsApp",
      details: ["+92 300 1234567", "+92 21 3456789"],
      badge: "Call Any Time"
    },
    {
      icon: <FaEnvelope className="size-6 text-indigo-600" />,
      title: "Official Email",
      details: ["info@thelarebpublicschool.edu.pk", "admissions@thelarebpublicschool.edu.pk"],
      badge: "Quick Response"
    },
    {
      icon: <FaClock className="size-6 text-amber-500" />,
      title: "Visiting Hours",
      details: ["Monday - Saturday: 08:00 AM - 02:00 PM", "Friday: 08:00 AM - 12:30 PM"],
      badge: "Office Timing"
    }
  ];

  const faqs = [
    { q: "Admissions Office ke visiting hours kya hain?", a: "Admissions desk Monday se Saturday subah 8:00 baje se dopehar 2:00 baje tak open hota hai." },
    { q: "Kya Online Admission Form available hai?", a: "Ji bilkul, aap humare Admissions portal par ja kar online form submit kar sakte hain." },
    { q: "School Campus tour ke liye appointment lena zaroori hai?", a: "Aap working hours ke dauran direct visit kar sakte hain ya pehle phone par time fix kar sakte hain." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Modern Header Banner */}
        <div className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
              <FaHeadset /> We Are Here To Help
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Get in Touch with Us
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Have questions regarding admissions, fee structure, or campus visits? Reach out to <span className="text-white font-semibold">The Lareb Public School</span> administration team.
            </p>
          </div>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-slate-50 rounded-2xl">{info.icon}</div>
                <span className="text-[10px] font-extrabold bg-blue-50 text-blue-900 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {info.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>
              <div className="space-y-1 text-xs text-gray-600 font-medium">
                {info.details.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content: Form & Location Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-gray-900">Send Us a Direct Message</h2>
              <p className="text-xs text-gray-500">Fill out the form below and our administrative team will respond within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl flex items-center gap-4 animate-fadeIn">
                <FaCheckCircle className="size-8 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Thank You for Reaching Out!</h4>
                  <p className="text-xs">Your inquiry message has been received. Our team will contact you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-blue-900 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-blue-900 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="e.g. 0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-blue-900 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-blue-900 transition-all font-medium text-gray-700"
                    >
                      <option>General Inquiry</option>
                      <option>Admissions & Fee Information</option>
                      <option>Academic Curriculum</option>
                      <option>Transport & Facilities</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Message / Detail *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your query or question here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-blue-900 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map & Campus Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-gray-900 px-2 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-900" /> Campus Location Map
              </h3>
              
              {/* Google Map Frame */}
              <div className="w-full h-[320px] rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  title="School Campus Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14474.372482381257!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <FaQuestionCircle className="text-amber-500" /> Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-gray-100 space-y-1">
                    <h4 className="font-bold text-xs text-gray-900">{faq.q}</h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactPage;