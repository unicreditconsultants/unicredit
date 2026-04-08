import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import LoanSidebar from "../../components/LoanSidebar";
import { Zap, FileText, BadgeCheck, Phone, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Home Loan | Unicredit",
};

export default function HomeLoan() {
  return (
    <>
      <PageHeader title="Home Loan" breadcrumb="Home Loan" />
      
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="w-full lg:w-8/12">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100">
                <div className="mb-8 rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/asset/img/services-home.jpg" alt="Home Loan" width={900} height={500} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Your Dream Home Awaits</h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  Home loans are among the most sought-after secured loans, specifically tailored for the purchase or construction of your dream property. In this arrangement, the home acts as the primary security for the lender. As they are inherently long-term and high-ticket commitments, we offer affordable tenures ranging from 10 to 25 years, with interest rates starting as competitively as 7% to 7.5% per annum. Our Loan-to-Value (LTV) ratio typically allows you to finance up to 80% of the property value.
                </p>

                <div className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100 mb-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-5/12 rounded-xl overflow-hidden shadow-md">
                      <Image src="/asset/img/single-services.jpg" alt="Documents" width={400} height={300} className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-7/12">
                      <h5 className="text-xl font-bold text-slate-900 mb-4">Core Eligibility Criteria:</h5>
                      <ul className="space-y-3">
                        {['A healthy credit score', 'Continuous and stable flow of income', 'Applicant age between 23 to 60 years', 'Valuable collateral (e.g., FDs, property)', 'A timely debt repayment history'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Key Features & Benefits</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {[
                    "Lower upfront costs and flexible repayment",
                    "Tax benefits on interest and principal",
                    "Extremely low comparative interest rates",
                    "Choice of fixed or floating rates",
                    "Suitable for new, pre-owned, or under-construction",
                    "Easy balance transfer to another lender",
                    "Property appreciation builds your wealth",
                    "Eliminates the drain of monthly rent payments"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-3 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 text-sm font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Our Simple 3-Step Process</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-slate-900">Simple Application</h4>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-slate-900">Minimal Documents</h4>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                      <BadgeCheck className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-slate-900">Secure Financing</h4>
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
