import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ title, breadcrumb }) {
  return (
    <div className="relative bg-slate-950 py-20 text-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">{title}</h1>
        <nav aria-label="breadcrumb">
          <ol className="flex justify-center items-center space-x-3 text-sm text-blue-200/80 font-medium tracking-wide">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </li>
            <li className="text-white drop-shadow-md">{breadcrumb}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
