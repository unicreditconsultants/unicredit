import PageHeader from "../../components/PageHeader";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | Unicredit",
};

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumb="Contact" />
      
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap lg:flex-nowrap gap-12 lg:gap-16 mb-20 bg-white rounded-3xl shadow-xl shadow-blue-900/5 p-8 md:p-12 border border-slate-100">
            {/* Form Section */}
            <div className="w-full lg:w-7/12">
              <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Let's Get in Touch</h2>
                <p className="text-slate-500 leading-relaxed max-w-xl">
                  Whether you need more support with your business loans or personal finances, our team is here. Send us a message today.
                </p>
              </div>
              
              <form action="/api/contact" method="POST" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2 group">
                    <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Name</label>
                    <input type="text" name="name" required className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 placeholder-slate-400" placeholder="Name" />
                  </div>
                  <div className="w-full md:w-1/2 group">
                    <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Phone</label>
                    <input type="tel" name="phone" required className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 placeholder-slate-400" placeholder="+91 XXXXXXXXXX" />
                  </div>
                </div>
                <div className="w-full group">
                  <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Email</label>
                  <input type="email" name="email" required className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 placeholder-slate-400" placeholder="Email" />
                </div>
                <div className="w-full group">
                  <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Message</label>
                  <textarea name="message" required rows={5} className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 placeholder-slate-400 resize-y" placeholder="How can we help you?"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full md:w-auto bg-blue-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95 transition-all text-sm tracking-wide">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
            
            {/* Image / Banner */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <div className="h-full min-h-[320px] w-full rounded-2xl shadow-inner bg-slate-50 overflow-hidden relative">
                <Image
                  src="/asset/img/ceo.png"
                  alt="Get in Touch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          
          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-blue-50 text-blue-600 border border-blue-100/50 rounded-2xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-slate-600 text-sm leading-relaxed">
                <p>
                  <strong className="text-slate-900 block mb-1 text-base">Unicredit Consultants LLP</strong>
                  7/431-CB1, Narayana Apartments<br />
                  Kunnumpuram - Civil Station Road<br />
                  Thazhvaram Lane, Kakkanad<br />
                  Ernakulam - 682030, Kerala India
                </p>
              </div>
            </div>

            <div className="flex gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-blue-50 text-blue-600 border border-blue-100/50 rounded-2xl">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-slate-600 flex flex-col justify-center">
                <strong className="text-slate-900 block mb-1 text-base">Email Us</strong>
                <a href="mailto:info@unicredit.co.in" className="hover:text-blue-600 transition-colors">info@unicredit.co.in</a>
              </div>
            </div>

            <div className="flex gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-blue-50 text-blue-600 border border-blue-100/50 rounded-2xl">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-slate-600 flex flex-col justify-center">
                <strong className="text-slate-900 block mb-1 text-base">Call Us</strong>
                <a href="tel:8547726755" className="hover:text-blue-600 transition-colors">8547726755</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
