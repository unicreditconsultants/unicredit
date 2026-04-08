import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import LoanSidebar from "../../components/LoanSidebar";
import { Zap, FileText, BadgeCheck, Phone, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Overdraft | Unicredit",
};

export default function Overdraft() {
  return (
    <>
      <PageHeader title="Business Overdraft" breadcrumb="Overdraft" />
      
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="w-full lg:w-8/12">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100">
                <div className="mb-8 rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/asset/img/services-lg.jpg" alt="Overdraft Services" width={900} height={500} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" priority/>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Flexible Cash Flow Management</h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  Whether you need immediate capital to start a new business, expand an existing enterprise, or require instant cash to capitalize on a fleeting opportunity, our commercial overdraft facilities are designed to keep your business moving forward. Unicredit's expert lenders will work closely with you to determine the smartest, most efficient financial strategy tailored explicitly for your company's lifeblood.
                </p>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl mb-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                  <h4 className="text-xl font-bold mb-4 relative z-10">We're built to back your business!</h4>
                  <p className="text-slate-300 leading-relaxed text-sm relative z-10">
                    If you're in the market for a flexible financial buffer, we encourage you to schedule a consultation. We understand the market dynamics intricately and care deeply about our customers' financial health and operational agility.
                  </p>
                </div>

                <div className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100 mb-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-5/12 rounded-xl overflow-hidden shadow-md">
                      <Image src="/asset/img/single-services.jpg" alt="Commercial Solutions" width={400} height={300} className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-7/12">
                      <h5 className="text-xl font-bold text-slate-900 mb-4">Other Commercial Solutions:</h5>
                      <ul className="space-y-3">
                        {['Long & Short Term Loans', 'Commercial Real Estate Mortgages', 'Heavy Equipment & Machinery Finance', 'Construction & Development Loans', 'Unsecured Business Expansion Loans'].map((item, idx) => (
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
                    <h4 className="font-bold text-slate-900">Instant Access</h4>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-slate-900">Paperless Process</h4>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                      <BadgeCheck className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-slate-900">Custom Limits</h4>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                  <Link href="/apply-now" className="flex-1 text-center bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95 transition-all text-sm tracking-widest uppercase">
                    Apply for Limit
                  </Link>
                  <Link href="/contact" className="flex-1 text-center bg-slate-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-slate-800 shadow-lg shadow-slate-900/20 active:scale-95 transition-all text-sm tracking-widest uppercase flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Book Consultation
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
