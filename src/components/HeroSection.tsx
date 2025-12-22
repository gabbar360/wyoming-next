"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    bgImage: "/hero-images/Gemini_Generated_Image_xq36xcxq36xcxq36.png",
  },

  {
    id: 2,
    bgImage: "/hero-images/Gemini_Generated_Image_ukra08ukra08ukra.png",
  },
  {
    id: 3,
    bgImage: "/hero-images/Gemini_Generated_Image_vznnc8vznnc8vznn.png",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Slider Wrapper */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />
            {/* Mobile Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20 sm:bg-black/10" />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-primary scale-110" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;