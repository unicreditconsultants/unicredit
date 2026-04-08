"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    image: "/asset/img/slider-1.jpg",
    title: "Looking for business enhancement loan?",
    subtitle: "Leading bank loan consultants in the market",
  },
  {
    id: 2,
    image: "/asset/img/slider-2.jpg",
    title: "Secure your dream home today",
    subtitle: "Fast approval & low interest rates",
  },
  {
    id: 3,
    image: "/asset/img/slider-3.jpg",
    title: "Personal loans for all your needs",
    subtitle: "Flexible repayment options available",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative bg-slate-900 text-white min-h-[calc(100dvh-80px)] flex items-center overflow-hidden">
      {/* Slide images — z-index 0 */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: 0 }}
        >
          {/* Dark overlay — above image, below interactive elements */}
          <div className="absolute inset-0 bg-slate-950/60" style={{ zIndex: 1 }} />
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-out ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Slide content — z-index 10 */}
      <div className="container mx-auto px-4 relative text-center" style={{ zIndex: 10 }}>
        <p className="text-sm md:text-lg font-bold mb-3 tracking-widest uppercase text-blue-300 drop-shadow-md">
          {SLIDES[currentSlide].subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 drop-shadow-lg leading-tight text-white max-w-4xl mx-auto">
          {SLIDES[currentSlide].title}
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/apply-now"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:-translate-y-1 transition duration-300"
          >
            Apply Now
          </Link>
          <Link
            href="/services"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full shadow-lg border border-white/30 hover:-translate-y-1 transition duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Prev button — z-index 20 (above content + overlay) */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/30 hover:bg-black/60 active:bg-black/70 text-white rounded-full backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        style={{ zIndex: 20 }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={2} />
      </button>

      {/* Next button — z-index 20 */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/30 hover:bg-black/60 active:bg-black/70 text-white rounded-full backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        style={{ zIndex: 20 }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={2} />
      </button>

      {/* Dot indicators — z-index 20 */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2"
        style={{ zIndex: 20 }}
      >
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentSlide
                ? "bg-blue-500 w-8"
                : "bg-white/50 hover:bg-white w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}