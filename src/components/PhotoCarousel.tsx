import { useState, useEffect } from 'react';

interface PhotoCarouselProps {
  images: string[];
  title?: string;
  subtitle?: string;
  autoPlayInterval?: number;
}

export default function PhotoCarousel({ 
  images, 
  title = "Our Chapter in Action",
  subtitle = "See our team making an impact in the community",
  autoPlayInterval = 5000 
}: PhotoCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    if (autoPlayInterval > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [images.length, autoPlayInterval, lastInteraction]); // Re-create timer when lastInteraction changes

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setLastInteraction(Date.now()); // Reset timer
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setLastInteraction(Date.now()); // Reset timer
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setLastInteraction(Date.now()); // Reset timer
  };

  return (
    <div className="py-8 sm:py-12 bg-gradient-to-b from-red-50/30 to-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            {/* Images */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
              aria-label="Next image"
            >
              <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
