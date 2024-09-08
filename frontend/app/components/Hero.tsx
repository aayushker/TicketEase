"use client";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

const carouselImages = [
  "/images/heroImage1.jpeg",
  "/images/heroImage2.jpeg",
  "/images/heroImage3.jpeg",
];

const carouselTexts = [
  "Discover Art Through Time",
  "Immerse in History",
  "Book Your Cultural Journey",
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md"></header>

      <main className="flex-grow">
        <section className="relative h-[calc(100vh-4rem)] overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-500 transform translate-y-0">
                    {carouselTexts[index]}
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 transition-all duration-500 delay-100 transform translate-y-0">
                    Experience the world's finest art and history
                  </p>
                  <Button size="lg" className="animate-bounce">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </section>
      </main>
    </div>
  );
}
