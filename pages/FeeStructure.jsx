import React, { useState } from "react";
import { FaGraduationCap, FaCheckCircle, FaDownload, FaInfoCircle } from "react-icons/fa";

function FeeStructure() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const feeData = [
    {
      grade: "Pre-School (PG / Nursery / KG)",
      admissionFee: "PKR 5,000",
      monthlyFee: "PKR 3,500",
      annualFee: "PKR 38,500",
      features: ["Activity Based Learning", "Free Stationery Kit", "Montessori Trained Teachers"],
      popular: false,
    },
    {
      grade: "Primary Section (Class 1 - 5)",
      admissionFee: "PKR 6,000",
      monthlyFee: "PKR 4,200",
      annualFee: "PKR 46,200",
      features: ["Computer Lab Access", "Co-Curricular Activities", "Weekly Worksheets"],
      popular: true,
    },
    {
      grade: "Middle Section (Class 6 - 8)",
      admissionFee: "PKR 7,000",
      monthlyFee: "PKR 4,800",
      annualFee: "PKR 52,800",
      features: ["Science Lab Practical", "Robotics & Tech Intro", "Library Access"],
      popular: false,
    },
    {
      grade: "Secondary / Matric (Class 9 - 10)",
      admissionFee: "PKR 8,000",
      monthlyFee: "PKR 5,500",
      annualFee: "PKR 60,500",
      features: ["Board Exam Preparation", "Full Science Lab Access", "Career Counseling"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
          Transparent Pricing
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mt-3 tracking-tight">
          Fee Structure - Academic Session 2026-27
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
          Quality education made accessible. Choose the academic grade to view detailed monthly and annual fee breakdowns.
        </p>

        {/* Toggle Switch */}
        <div className="mt-8 flex justify-center items-center gap-3">
          <span className={`text-sm font-semibold ${billingCycle === "monthly" ? "text-blue-900" : "text-gray-500"}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
            className="w-14 h-8 bg-blue-700 rounded-full p-1 transition-colors duration-200 focus:outline-none"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
                billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${billingCycle === "annual" ? "text-blue-900" : "text-gray-500"}`}>
            Annual Package <span className="text-xs text-green-600 font-bold">(Save 10%)</span>
          </span>
        </div>
      </div>

      {/* Modern Fee Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {feeData.map((item, idx) => (
          <div
            key={idx}
            className={`relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border ${
              item.popular ? "border-2 border-blue-600 ring-2 ring-blue-600/10" : "border-gray-100"
            } flex flex-col justify-between`}
          >
            {item.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                Most Popular
              </span>
            )}

            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaGraduationCap className="text-blue-700 size-5" />
                <h3 className="font-bold text-gray-800 text-base leading-snug">{item.grade}</h3>
              </div>

              <div className="my-4 pb-4 border-b border-gray-100">
                <p className="text-3xl font-extrabold text-blue-900">
                  {billingCycle === "monthly" ? item.monthlyFee : item.annualFee}
                </p>
                <p className="text-xs text-gray-500 font-medium mt-1">
                  {billingCycle === "monthly" ? "per month" : "per year (discounted)"}
                </p>
              </div>

              <div className="text-xs text-gray-600 space-y-2 mb-6">
                <p className="flex justify-between font-semibold text-gray-700">
                  <span>One-time Admission Fee:</span>
                  <span className="text-blue-700">{item.admissionFee}</span>
                </p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {item.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-600">
                    <FaCheckCircle className="text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => window.print()}
              className="w-full bg-blue-50 hover:bg-blue-700 text-blue-700 hover:text-white font-bold text-xs py-2.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FaDownload size={12} />
              Print / Save Notice
            </button>
          </div>
        ))}
      </div>

      {/* Additional Terms Notice */}
      <div className="max-w-6xl mx-auto mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-start gap-4">
        <FaInfoCircle className="text-blue-700 size-6 shrink-0 mt-0.5" />
        <div className="text-xs text-blue-900 space-y-1">
          <p className="font-bold text-sm">Important Fee Policy Notes:</p>
          <ul className="list-disc pl-4 space-y-1 text-blue-800">
            <li>Fee is payable before the 10th of every month.</li>
            <li>10% Sibling concession is applicable for the 2nd child onwards.</li>
            <li>Admission fee is non-refundable upon registration completion.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeeStructure;