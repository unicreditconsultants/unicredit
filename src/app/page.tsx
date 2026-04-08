import Link from "next/link";
import Image from "next/image";
import HeroSlider from "../components/HeroSlider";
import { 
  Clock, Users, Headset, 
  Wallet, Car, Briefcase, Home as HomeIcon, CreditCard, Landmark,
  MousePointerClick, FileText, CheckCircle, DollarSign, ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Trust & Features Banner */}
      <section className="relative z-20 pt-12 md:pt-16 pb-8 px-4 md:px-8">
        <div className="bg-white/90 backdrop-blur-xl shadow-2xl shadow-blue-900/5 border border-slate-100 mx-auto md:max-w-6xl rounded-3xl overflow-hidden transition-all">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100/80">
            <div className="p-8 md:p-10 flex items-center gap-6 group hover:bg-slate-50/50 transition-colors">
              <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shadow-sm border border-blue-100/50 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Clock className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg md:text-xl leading-tight mb-1">Quick &amp; Easy<br />Approvals</h3>
                <p className="text-slate-500 text-sm">Experience seamless processing.</p>
              </div>
            </div>
            <div className="p-8 md:p-10 flex items-center gap-6 group hover:bg-slate-50/50 transition-colors">
              <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shadow-sm border border-blue-100/50 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Users className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg md:text-xl leading-tight mb-1">10k+ Satisfied<br />Customers</h3>
                <p className="text-slate-500 text-sm">Trusted globally since 2010.</p>
              </div>
            </div>
            <div className="p-8 md:p-10 flex items-center gap-6 group hover:bg-slate-50/50 transition-colors">
              <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shadow-sm border border-blue-100/50 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Headset className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg md:text-xl leading-tight mb-1">Personalized<br />Consultations</h3>
                <p className="text-slate-500 text-sm">Expert guidance, anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Loan Types */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Financial solutions for your life</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              We offer a comprehensive portfolio of tailored financial products designed to craft the perfect solution for your unique ambitions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Loan",
                desc: "Unsecured personal loans with flexible terms tailored to your individual needs.",
                icon: Wallet,
                link: "/personal-loan"
              },
              {
                title: "Car Loan",
                desc: "Get behind the wheel faster using our competitive automotive financing options.",
                icon: Car,
                link: "/car-loan"
              },
              {
                title: "Business Loan",
                desc: "Strategic capital designed to help expand your enterprise or launch your next venture.",
                icon: Briefcase,
                link: "/business-loan"
              },
              {
                title: "Home Loan",
                desc: "Make your dream home a reality with stress-free and reliable property financing.",
                icon: HomeIcon,
                link: "/home-loan"
              },
              {
                title: "Overdraft Facility",
                desc: "Navigate business cash flows smoothly with our flexible business credit limits.",
                icon: CreditCard,
                link: "/overdraft"
              },
              {
                title: "Loan Against Property",
                desc: "Unlock the value of your real estate to secure substantial corporate or personal funds.",
                icon: Landmark,
                link: "/loanagainstproperty"
              }
            ].map((loan, idx) => {
              const Icon = loan.icon;
              return (
                <div key={idx} className="group bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300">
                  <div className="mb-8 w-16 h-16 bg-blue-50 border border-blue-100/50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{loan.title}</h4>
                  <p className="text-slate-500 mb-8 line-clamp-3 leading-relaxed">{loan.desc}</p>
                  <Link href={loan.link} className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center group/link">
                    Explore Option
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-slate-950 text-white text-center relative overflow-hidden">
        {/* Dynamic Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h4 className="text-blue-400 font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base">Secure Your Future</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 max-w-4xl mx-auto leading-tight tracking-tight">
            Checking your loan options <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">does not affect</span> your credit score.
          </h2>
          <Link href="/apply-now" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300 text-lg">
            Apply For a Free Consultation
          </Link>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Choose Unicredit</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
            {[
              { img: "choose-1.jpg", title: "Transparent Pricing", subtitle: "Zero hidden fees" },
              { img: "choose-2.jpg", title: "Minimal Paperwork", subtitle: "Streamlined process" },
              { img: "choose-3.jpg", title: "Elite Specialists", subtitle: "Dedicated support team" }
            ].map((prop, i) => (
              <div key={i} className="group cursor-pointer text-center relative">
                <div className="rounded-[2.5rem] overflow-hidden mb-8 relative shadow-lg shadow-slate-200/50 group-hover:shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-500 transform aspect-[4/5]">
                  <Image src={`/asset/img/${prop.img}`} alt={prop.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-blue-300 font-bold text-sm tracking-widest uppercase mb-2">{prop.subtitle}</p>
                    <h4 className="text-2xl md:text-3xl font-bold text-white">{prop.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Process Steps */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">A Seamless Journey</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Acquire your funding rapidly in four straightforward steps.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center relative">
            <div className="hidden lg:block absolute top-[48px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-slate-300 z-0"></div>
            
            {[
              { step: "1. Select Plan", icon: MousePointerClick, desc: "Determine your desired amount and customized repayment terms." },
              { step: "2. Submit Info", icon: FileText, desc: "Provide basic documentation securely through our digital portal." },
              { step: "3. Verification", icon: CheckCircle, desc: "Our analysts perform a rapid review to authorize your application." },
              { step: "4. Get Funded", icon: DollarSign, desc: "Capital is disbursed directly to your designated account." }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative z-10">
                  <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center mb-8 text-blue-600 group hover:border-blue-100 hover:bg-blue-600 hover:text-white hover:shadow-blue-600/20 transition-all duration-300 cursor-pointer">
                    <Icon className="w-10 h-10 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{item.step}</h4>
                  <p className="text-slate-500 leading-relaxed px-4">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

