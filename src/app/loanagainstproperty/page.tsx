import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import LoanSidebar from "../../components/LoanSidebar";
import { Zap, FileText, BadgeCheck, Phone, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Loan Against Property | Unicredit",
};

export default function LoanAgainstProperty() {
  return (
    <>
      <PageHeader title="Loan Against Property" breadcrumb="Loan Against Property" />
      
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="w-full lg:w-8/12">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100">
                <div className="mb-8 rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/asset/img/services-againstpropert.jpg" alt="Loan Against Property" width={900} height={500} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Unlock Your Property's Value</h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  A Loan Against Property (LAP) allows you to leverage the value of your residential or commercial real estate to secure substantial funds. This mortgage loan lets you unlock significant capital while you continue to retain ownership and use of the property. With a Loan-to-Value (LTV) ratio typically ranging between 65% to 70%, it offers an exceptional avenue to raise funds for business expansion or critical personal needs. Interest rates are highly competitive, starting from just 8% per annum.
                </p>

                <h4 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Why Choose a Loan Against Property?</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Extended Repayment</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">Enjoy the flexibility of a long repayment tenure that can comfortably stretch up to 15 years, easing your monthly commitments.</p>
                  </div>
                  <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Aggressive Rates</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">Compared to unsecured options like Personal Loans, LAP offers significantly lower interest rates as it is a fully secured loan.</p>
                  </div>
                  <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Reduced EMIs</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">Longer tenures coupled with low interest rates dramatically reduce your Equated Monthly Installment (EMI) burden.</p>
                  </div>
                  <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Seamless Approval</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">Because the loan is secured by tangible real estate, lenders are highly confident, making approval fast and straightforward.</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 mb-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-5/12 rounded-xl overflow-hidden shadow-md">
                      <Image src="/asset/img/single-services.jpg" alt="Documents" width={400} height={300} className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-7/12">
                      <h5 className="text-xl font-bold text-slate-900 mb-4">Required Documentation:</h5>
                      <ul className="space-y-3">
                        {['Original Property Title Deeds', 'Valid Identity and Address Proof', 'Recent Bank Statements', 'Income verification (Salary Slip or IT Returns)', 'Clear Property Valuation Report'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Our Simple 3-Step Process</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-slate-900">Swift Processing</h4>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-slate-900">Expert Valuation</h4>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                      <BadgeCheck className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-slate-900">Maximized Value</h4>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                  <Link href="/apply-now" className="flex-1 text-center bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95 transition-all text-sm tracking-widest uppercase">
                    Apply for Loan
                  </Link>
                  <Link href="/contact" className="flex-1 text-center bg-slate-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-slate-800 shadow-lg shadow-slate-900/20 active:scale-95 transition-all text-sm tracking-widest uppercase flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-4/12">
              <div className="sticky top-28">
                <LoanSidebar />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
