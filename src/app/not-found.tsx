import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "404 - Page Not Found | Unicredit",
};

export default function NotFound() {
  return (
    <>
      <PageHeader title="404 - Not Found" breadcrumb="404" />
      
      <div className="flex flex-col items-center justify-center py-24 px-4 text-center bg-slate-50 min-h-[40vh]">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8 max-w-md">
          Sorry, we could not find the page you are looking for. It might have been removed or the link might be broken.
        </p>
        <Link 
          href="/"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-bold shadow-md shadow-blue-600/20"
        >
          Return Home
        </Link>
      </div>
    </>
  );
}
