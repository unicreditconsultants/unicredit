import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Services | Unicredit",
};

export default function Services() {
  const services = [
    {
      title: "Personal Loan",
      desc: "Fast, flexible financing extended without collateral to meet your personal aspirations and unexpected needs.",
      img: "portfolio-11.jpg",
      link: "/personal-loan"
    },
    {
      title: "Car Loan",
      desc: "Speedy approvals and aggressive rates to put you behind the wheel of your dream vehicle.",
      img: "portfolio-10.jpg",
      link: "/car-loan"
    },
    {
      title: "Business Loan",
      desc: "Tailored commercial financing to manage cash flow fluctuations and fuel strategic business expansion.",
      img: "portfolio-3.jpg",
      link: "/business-loan"
    },
    {
      title: "Home Loan",
      desc: "Affordable, long-term financing with flexible repayment options to secure your dream home.",
      img: "portfolio-4.jpg",
      link: "/home-loan"
    },
    {
      title: "Overdraft Facility",
      desc: "A highly flexible credit limit designed to seamlessly support aggressive business cash flow demands.",
      img: "portfolio-5.jpg",
      link: "/overdraft"
    },
    {
      title: "Loan Against Property",
      desc: "Leverage your commercial or residential real estate's equity for significant, secured business capital.",
      img: "portfolio-6.jpg",
      link: "/loanagainstproperty"
    }
  ];

  return (
    <>
      <PageHeader title="Our Services" breadcrumb="Services" />
      
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Financing Designed for You</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Explore our comprehensive suite of loan products expertly tailored to empower both your personal ambitions and commercial growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-blue-900/5 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10">
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <Image src={`/asset/img/${service.img}`} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <Link href={service.link}>
                    <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition tracking-tight">{service.title}</h4>
                  </Link>
                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">{service.desc}</p>
                  <Link href={service.link} className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center tracking-wide group/btn">
                    Read More
                    <ArrowUpRight className="w-5 h-5 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Check Rate Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-600/30 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-blue-400/20">
            <div className="w-full md:w-2/3">
              <h4 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Ready to verify your eligibility?</h4>
              <p className="text-blue-100 text-lg">Checking your loan options is completely free and does not impact your credit score.</p>
            </div>
            <div className="w-full md:w-1/3 text-left md:text-right">
              <Link href="/apply-now" className="inline-block bg-white text-blue-800 font-extrabold py-4 px-10 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all shadow-xl shadow-blue-900/50 uppercase tracking-widest text-sm">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
