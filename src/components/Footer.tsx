import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="mb-4">
              <div style={{ position: "relative", width: "160px", height: "40px" }}>
                <Image src="/asset/img/footer-logo.png" alt="Unicredit" fill sizes="160px" style={{ objectFit: "contain", objectPosition: "left" }} />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              <strong>Unicredit Consultants LLP</strong><br />
              7/431-CB1 <br />
              Narayana Apartments <br />
              Kunnumpuram - Civil Station Road <br />
              Thazhvaram Lane, Kakkanad<br />
              Ernakulam - 682030, <br />
              Kerala India
            </p>
          </div>
          
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/business-loan" className="text-slate-400 hover:text-blue-400 transition-colors">Business Loan</Link></li>
              <li><Link href="/overdraft" className="text-slate-400 hover:text-blue-400 transition-colors">Overdraft</Link></li>
              <li><Link href="/car-loan" className="text-slate-400 hover:text-blue-400 transition-colors">Car Loan</Link></li>
              <li><Link href="/home-loan" className="text-slate-400 hover:text-blue-400 transition-colors">Home Loan</Link></li>
              <li><Link href="/personal-loan" className="text-slate-400 hover:text-blue-400 transition-colors">Personal Loan</Link></li>
              <li><Link href="/loanagainstproperty" className="text-slate-400 hover:text-blue-400 transition-colors">Loan Against Property</Link></li>
            </ul>
          </div>
          
          {/* Third column if needed, keeping symmetric or based on layout. Legacy had some commented out recent posts. We'll leave it simple. */}
          <div className="w-full md:w-1/3 px-4">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Newsletter</h4>
            <div className="mb-4">
              <p className="text-slate-400 text-sm mb-6 max-w-sm">Subscribe to our newsletter and get the latest news related to loans, interest rates, and financial advice.</p>
              <form action="#" method="get" className="flex flex-col gap-3">
                <div className="relative">
                  <input aria-label="Email address" type="email" name="email" placeholder="Email address" className="w-full px-5 py-3 bg-slate-900 border border-slate-800 text-slate-100 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-500" required />
                </div>
                <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-500 active:scale-95 transition-all w-full text-center shadow-lg shadow-blue-900/20">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-slate-900">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="w-full md:w-1/2 text-slate-500 mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Unicredit. All Rights Reserved.</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-6">
            <a href="#" aria-label="Facebook Profile" className="text-slate-500 hover:text-white transition-colors">Facebook</a>
            <a href="#" aria-label="Twitter Profile" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" aria-label="LinkedIn Profile" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
