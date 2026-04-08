import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import { Eye, Target } from "lucide-react";

export const metadata = {
  title: "About Us | Unicredit",
};

export default function About() {
  return (
    <>
      <PageHeader title="About Us" breadcrumb="About Us" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="w-full lg:w-1/2">
              <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10">
                <Image src="/asset/img/about.jpg" alt="About Unicredit" width={800} height={600} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h4 className="text-blue-600 font-bold uppercase tracking-widest mb-4">Who We Are</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Your Trusted Financial Partner</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                At Unicredit, we are committed to providing you with tailored financial solutions for all your lending needs. Whether you are looking for a personal loan, mortgage, or a flexible overdraft facility, our knowledgeable and experienced lending team will explain your options in a straightforward and transparent manner.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                While we enjoy a global reach, we are deeply proud of our personal approach. Unlike large monolithic institutions, we make all our lending decisions with your individual circumstances in mind. Our decision-makers actively review your application to ensure a rapid response, making the process of securing a loan effortless and stress-free.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-slate-50 p-10 md:p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-start gap-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100/50">
                <Eye className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Our Vision</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To create a positively significant and deeply sincere impact on everyone we serve, guiding them toward lasting financial prosperity.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-10 md:p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-start gap-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100/50">
                <Target className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Our Mission</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To provide a high level of sound and meaningful financial services, ensuring our clients receive an unparalleled experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest mb-4">Trusted By</h4>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-16 tracking-tight">Our Global Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {[6, 7, 8, 9, 10].map((num) => (
              <div key={num} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-32 h-32 flex items-center justify-center">
                <Image src={`/asset/img/brand-${num}.png`} alt={`Partner ${num}`} width={120} height={48} className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
