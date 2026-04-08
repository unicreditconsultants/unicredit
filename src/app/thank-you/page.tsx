import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Thank You | Unicredit",
};

export default function ThankYou() {
  return (
    <>
      <PageHeader title="Thank You" breadcrumb="Confirmation" />
      
      <section className="py-32 bg-slate-50 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-white p-12 md:p-16 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 flex flex-col items-center">
            
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl scale-150"></div>
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full shadow-lg shadow-green-500/30">
                <CheckCircle2 className="w-12 h-12" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Submission Completed!</h2>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Thank you for reaching out to Unicredit. We have securely received your details. One of our specialized financial advisors will be analyzing your request and will contact you shortly to formulate the next best steps.
            </p>
            
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-extrabold py-5 px-10 rounded-2xl hover:bg-slate-800 active:scale-95 transition-all shadow-xl shadow-slate-900/20 text-sm uppercase tracking-widest w-full sm:w-auto">
              Return to Homepage <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
