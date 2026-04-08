"use client";
import { useState } from "react";
import PageHeader from "../../components/PageHeader";

export default function Calculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [months, setMonths] = useState(120);
  const [rate, setRate] = useState(8.5);

  let emi = 0;
  let totalInterest = 0;
  let totalPayment = 0;

  const p = principal;
  const r = rate / 12 / 100;
  const n = months;
  
  if (r === 0) {
    if (n > 0) {
      emi = Math.round(p / n);
      totalPayment = p;
      totalInterest = 0;
    }
  } else if (n > 0) {
    const emiCalc = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emiCalc * n;
    const totalInt = totalAmount - p;
    
    emi = Math.round(emiCalc);
    totalPayment = Math.round(totalAmount);
    totalInterest = Math.round(totalInt);
  }

  return (
    <>
      <PageHeader title="EMI Calculator" breadcrumb="EMI Calculator" />
      
      <section className="py-24 bg-slate-50 min-h-[70vh]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Plan Your Finances Masterfully</h2>
            <p className="text-slate-600 text-lg">Use our advanced EMI calculator to accurately predict your monthly commitments and total interest payable before you apply.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-slate-100">
            
            {/* Input Section */}
            <div className="w-full lg:w-3/5 space-y-12 py-4 px-2 md:px-6">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h4 className="text-lg font-bold text-slate-900">Required Loan Amount</h4>
                  <div className="bg-slate-100 text-slate-900 font-extrabold px-6 py-3 rounded-xl border border-slate-200 shadow-sm text-lg w-full sm:w-auto text-center">
                    ₹ {principal.toLocaleString("en-IN")}
                  </div>
                </div>
                <input 
                  type="range" 
                  min="100000" 
                  max="10000000" 
                  step="50000"
                  value={principal} 
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                />
                <div className="flex justify-between text-sm font-medium text-slate-400 mt-3">
                  <span>₹ 1L</span>
                  <span>₹ 1Cr</span>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h4 className="text-lg font-bold text-slate-900">Loan Tenure (Months)</h4>
                  <div className="bg-slate-100 text-slate-900 font-extrabold px-6 py-3 rounded-xl border border-slate-200 shadow-sm text-lg w-full sm:w-auto text-center">
                    {months} Months
                  </div>
                </div>
                <input 
                  type="range" 
                  min="12" 
                  max="360" 
                  step="1"
                  value={months} 
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                />
                <div className="flex justify-between text-sm font-medium text-slate-400 mt-3">
                  <span>12 Months (1 Yr)</span>
                  <span>360 Months (30 Yrs)</span>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h4 className="text-lg font-bold text-slate-900">Annual Interest Rate</h4>
                  <div className="bg-slate-100 text-slate-900 font-extrabold px-6 py-3 rounded-xl border border-slate-200 shadow-sm text-lg w-full sm:w-auto text-center">
                    {rate} %
                  </div>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="20" 
                  step="0.1"
                  value={rate} 
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                />
                <div className="flex justify-between text-sm font-medium text-slate-400 mt-3">
                  <span>5.0%</span>
                  <span>20.0%</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="w-full lg:w-2/5 bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 md:p-12 rounded-3xl text-center flex flex-col justify-center relative overflow-hidden shadow-xl shadow-blue-900/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="relative z-10 mb-10">
                <h5 className="text-blue-200 font-medium mb-3 uppercase tracking-widest text-sm">Monthly EMI</h5>
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">₹ {emi.toLocaleString("en-IN")}</h2>
              </div>
              
              <div className="relative z-10 mb-8 border-t border-blue-500/50 pt-8">
                <h5 className="text-blue-200 font-medium mb-2 uppercase tracking-wider text-xs">Total Interest Payable</h5>
                <h2 className="text-3xl font-bold">₹ {totalInterest.toLocaleString("en-IN")}</h2>
              </div>
              
              <div className="relative z-10 mb-12">
                <h5 className="text-blue-200 font-medium mb-2 uppercase tracking-wider text-xs">Total Payment (Principal + Interest)</h5>
                <h2 className="text-3xl font-bold">₹ {totalPayment.toLocaleString("en-IN")}</h2>
              </div>
              
              <button className="relative z-10 bg-white text-blue-800 font-extrabold py-5 px-8 rounded-2xl hover:bg-slate-50 active:scale-95 transition-all shadow-xl shadow-blue-900/50 w-full tracking-widest uppercase mb-2">
                Apply for this Loan
              </button>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
