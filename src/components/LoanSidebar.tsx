import Link from "next/link";
import { FileText, Phone, Mail, ChevronRight, FileDown } from "lucide-react";

export default function LoanSidebar() {
  const loans = [
    { title: "Business Loan", link: "/business-loan" },
    { title: "Overdraft", link: "/overdraft" },
    { title: "Car Loan", link: "/car-loan" },
    { title: "Home Loan", link: "/home-loan" },
    { title: "Personal Loan", link: "/personal-loan" },
    { title: "Loan Against Property", link: "/loanagainstproperty" },
  ];

  return (
    <div className="space-y-6">
      {/* Services List */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-900/5 border border-slate-100">
        <h4 className="text-xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Services</h4>
        <ul className="space-y-2">
          {loans.map((loan, idx) => (
            <li key={idx}>
              <Link href={loan.link} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
                <span className="font-medium text-slate-700 group-hover:text-blue-600 transition-colors">{loan.title}</span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Brochures */}
      <div className="bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-900/10 border border-slate-800">
        <h4 className="text-xl font-extrabold text-white mb-6 tracking-tight">Brochures</h4>
        <div className="space-y-4">
          <a href="#" className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl hover:bg-slate-800 transition-colors group">
            <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
              <FileDown className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Download PDF</p>
              <p className="text-slate-400 text-xs">2.4 MB</p>
            </div>
          </a>
          <a href="#" className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl hover:bg-slate-800 transition-colors group">
            <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
              <FileText className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Download DOC</p>
              <p className="text-slate-400 text-xs">1.8 MB</p>
            </div>
          </a>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-600/20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <h4 className="text-xl font-extrabold mb-6 tracking-tight relative z-10">Need Assistance?</h4>
        <p className="text-blue-100 text-sm mb-6 leading-relaxed relative z-10">
          7/431-CB1, Narayana Apartments<br />
          Kunnumpuram - Civil Station Road<br />
          Thazhvaram Lane, Kakkanad<br />
          Ernakulam - 682030, Kerala India
        </p>
        <ul className="space-y-4 pt-4 border-t border-blue-500/50 relative z-10">
          <li>
            <a href="tel:8547726755" className="flex items-center text-sm font-medium hover:text-blue-200 transition-colors">
              <div className="w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                <Phone className="w-4 h-4" />
              </div>
              8547726755
            </a>
          </li>
          <li>
            <a href="mailto:info@unicredit.co.in" className="flex items-center text-sm font-medium hover:text-blue-200 transition-colors">
              <div className="w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                <Mail className="w-4 h-4" />
              </div>
              info@unicredit.co.in
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
