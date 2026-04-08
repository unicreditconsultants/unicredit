import PageHeader from "../../components/PageHeader";

export const metadata = {
  title: "Apply Now - Unicredit",
};

export default function ApplyNow() {
  return (
    <>
      <PageHeader title="Apply Now" breadcrumb="Apply Now" />
      
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-center">
            <div className="w-full lg:w-10/12">
              <div className="bg-white p-8 md:p-14 rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Loan Application Form</h2>
                  <p className="text-slate-500">Provide your information securely below to check your eligibility.</p>
                </div>

                <form action="/api/apply" method="POST" className="space-y-8">
                  {/* Financial Requirements Segment */}
                  <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Financial Request</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Loan Amount (₹) *</label>
                        <input type="number" name="lamount" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="e.g. 500000" />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Purpose of Loan *</label>
                        <select name="porpuse_of_loan" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-600 appearance-none">
                          <option value="">Select Purpose</option>
                          <option value="Business">Business</option>
                          <option value="Car Purchase">Car Purchase</option>
                          <option value="Holiday">Holiday</option>
                          <option value="Home Purchase">Home Purchase</option>
                          <option value="Wedding ">Wedding </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Personal Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">First Name *</label>
                        <input type="text" name="fname" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="Joseph" />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Last Name *</label>
                        <input type="text" name="lname" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="Mathew" />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Email *</label>
                        <input type="email" name="email" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="josephmathew@gmail.com" />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Phone *</label>
                        <input type="tel" name="phone" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="+91 9876543210" />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Date of Birth *</label>
                        <input type="date" name="date_of_birth" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-600" />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Marital Status *</label>
                        <select name="martial_state" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-600 appearance-none">
                          <option value="">Select Status</option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>
                          <option value="Co-habiting">Co-habiting</option>
                          <option value="Separated">Separated</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Widowed">Widowed</option>
                        </select>
                      </div>
                      <div className="group relative md:col-span-2">
                        <label className="block text-xs font-bold text-slate-500 mb-3 tracking-widest uppercase">Gender *</label>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-3 cursor-pointer text-slate-700 bg-white border border-slate-200 px-5 py-3 rounded-xl hover:border-blue-400 transition-colors">
                            <input type="radio" name="gender" value="Male" defaultChecked className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                            <span className="font-medium">Male</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer text-slate-700 bg-white border border-slate-200 px-5 py-3 rounded-xl hover:border-blue-400 transition-colors">
                            <input type="radio" name="gender" value="Female" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                            <span className="font-medium">Female</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Residence */}
                  <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Residential Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">House Name/No. *</label>
                        <input type="text" name="house_number" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="123" />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Street *</label>
                        <input type="text" name="street" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="Main St." />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Town/City *</label>
                        <input type="text" name="city" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="Kochi" />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Country *</label>
                        <input type="text" name="country" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="India" />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Homeowner Status *</label>
                        <input type="text" name="house_status" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="Owned / Rented" />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Time at Address (Years) *</label>
                        <input type="number" name="time_address" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="5" />
                      </div>
                      <div className="group relative md:col-span-2">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Dependants *</label>
                        <select name="number_of_dependants" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-600 appearance-none">
                          <option value="">Select Dependants</option>
                          <option value="0">0 Dependants</option>
                          <option value="1">1 Dependant</option>
                          <option value="2">2 Dependants</option>
                          <option value="3">3 Dependants</option>
                          <option value="4+">4+ Dependants</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Employer */}
                  <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Employment Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Employment Status *</label>
                        <select name="employment_status" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-600 appearance-none">
                          <option value="">Select Status</option>
                          <option value="Full Time Employed">Full Time Employed</option>
                          <option value="Part Time Employed">Part Time Employed</option>
                          <option value="Self Employed">Self Employed</option>
                          <option value="Student">Student</option>
                          <option value="Pension">Pension</option>
                          <option value="Unemployed">Unemployed</option>
                        </select>
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Industry *</label>
                        <input type="text" name="employment_industry" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="IT, Healthcare, etc." />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Employer Name *</label>
                        <input type="text" name="employer_name" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="Company Inc." />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Work Phone *</label>
                        <input type="tel" name="employer_work_phone" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="+91 9876543210" />
                      </div>
                      <div className="group relative md:col-span-2">
                        <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">Monthly Income (₹) *</label>
                        <input type="number" name="month_income" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 placeholder-slate-300" placeholder="e.g. 50000" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-8 border-t border-slate-100">
                    <button type="submit" className="w-full sm:w-auto bg-blue-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95 transition-all text-sm tracking-widest uppercase">
                      Submit Secure Application
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
