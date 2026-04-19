"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string, isDropdown: boolean = false) => {
    const isActive = path === '/' ? pathname === path : pathname?.startsWith(path);
    const baseClasses = `relative group font-semibold transition-colors duration-200 ${isDropdown ? "flex items-center gap-1" : ""}`;

    if (scrolled) {
      return `${baseClasses} ${isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}`;
    }
    return `${baseClasses} ${isActive ? "text-blue-600" : "text-white hover:text-blue-600"}`;
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = path === '/' ? pathname === path : pathname?.startsWith(path);
    return `block py-4 text-xl border-b border-slate-100 font-medium ${isActive ? "text-blue-600" : "text-slate-800"}`;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { name: "Business Loan", path: "/business-loan" },
    { name: "Overdraft", path: "/overdraft" },
    { name: "Car Loan", path: "/car-loan" },
    { name: "Home Loan", path: "/home-loan" },
    { name: "Personal Loan", path: "/personal-loan" },
    { name: "Loan Against Property", path: "/loanagainstproperty" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
          : `bg-transparent border-transparent ${isMobileMenuOpen ? "bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm" : ""}`
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/asset/img/logo.svg"
                alt="Unicredit"
                width={150}
                height={40}
                className={`h-10 w-auto group-hover:scale-105 transition-all duration-300`}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`lg:hidden focus:outline-none p-2 rounded-md transition-colors ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-white hover:text-slate-200"}`}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex lg:space-x-6 xl:space-x-8 items-center">
              {[
                { name: "Home", path: "/" },
                { name: "About us", path: "/about" }
              ].map((link) => {
                const isActive = link.path === '/' ? pathname === link.path : pathname?.startsWith(link.path);
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={getLinkClass(link.path)}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} bg-blue-600`} />
                    </Link>
                  </li>
                );
              })}
              {/* Desktop Services Dropdown */}
              <li className="relative group py-6">
                <Link
                  href="/services"
                  className={getLinkClass("/services", true)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-colors ${scrolled ? "text-slate-400 group-hover:text-blue-600" : "text-white/70 group-hover:text-white"}`} />
                </Link>
                <ul className="absolute left-0 top-full mt-2 w-64 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                  {serviceLinks.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className={`block px-5 py-3 text-sm font-medium transition-colors hover:bg-slate-50 ${pathname === item.path ? "text-blue-600 bg-blue-50/50" : "text-slate-600 hover:text-blue-600"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {[
                { name: "EMI Calculator", path: "/calculator" },
                { name: "Contact us", path: "/contact" }
              ].map((link) => {
                const isActive = pathname?.startsWith(link.path);
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={getLinkClass(link.path)}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} bg-blue-600`} />
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/apply-now"
                  className="bg-blue-600 outline outline-2 outline-offset-2 outline-transparent hover:outline-blue-200 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-[80px] h-[calc(100dvh-80px)] bg-white z-50 flex flex-col transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        {/* Scrollable Links Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="container mx-auto flex flex-col space-y-2">
            <Link
              href="/"
              className={getMobileLinkClass("/")}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={getMobileLinkClass("/about")}
              onClick={closeMobileMenu}
            >
              About us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between py-4 text-xl font-medium transition-colors focus:outline-none ${pathname?.startsWith("/services") ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
                  }`}
              >
                Services
                <ChevronDown
                  className={`w-6 h-6 text-slate-400 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {isServicesOpen && (
                <div className="flex flex-col space-y-2 mt-2 pl-4 pb-4 border-l-2 border-slate-100 ml-2">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`block py-3 text-lg transition-colors ${pathname === item.path ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600"
                        }`}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/calculator"
              className={getMobileLinkClass("/calculator")}
              onClick={closeMobileMenu}
            >
              EMI Calculator
            </Link>
            <Link
              href="/contact"
              className={getMobileLinkClass("/contact")}
              onClick={closeMobileMenu}
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Sticky Bottom Button */}
        <div className="p-6 bg-white border-t border-slate-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <Link
            href="/apply-now"
            className="block text-center bg-blue-600 text-white px-4 py-4 rounded-xl text-xl font-bold hover:bg-blue-700 shadow-md transition-all active:scale-95"
            onClick={closeMobileMenu}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}