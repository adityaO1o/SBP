import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroIndustrial from '@/assets/hero-industrial-1.jpg';
import heroLaboratory from '@/assets/hero-laboratory.jpg';
import heroProduction from '@/assets/hero-production.jpg';
import heroSustainable from '@/assets/hero-sustainable.jpg';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Innovating Polymers for a Better Tomorrow",
      subtitle: "Delivering high-performance polymer solutions for automotive, electronics, and industrial applications with 50+ years of expertise.",
      backgroundImage: heroIndustrial
    },
    {
      id: 2,
      title: "Advanced Laboratory Excellence",
      subtitle: "State-of-the-art R&D facilities developing next-generation polymer compounds with precision and innovation.",
      backgroundImage: heroLaboratory
    },
    {
      id: 3,
      title: "World-Class Manufacturing",
      subtitle: "ISO certified production facilities ensuring consistent quality and reliability in every polymer compound we produce.",
      backgroundImage: heroProduction
    },
    {
      id: 4,
      title: "Sustainable Polymer Solutions",
      subtitle: "Eco-friendly compounds meeting tomorrow's environmental standards while maintaining superior performance characteristics.",
      backgroundImage: heroSustainable
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <div 
      className="relative h-screen overflow-hidden" 
      id="home"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Enhanced Responsive Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/90 md:from-secondary/90 md:via-secondary/75 md:to-primary/85"></div>
          
          {/* Enhanced Responsive Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto animate-fade-in">
              {/* Responsive Typography */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mb-6 sm:mb-8 text-white">
                <span className="drop-shadow-2xl block">{slide.title}</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 sm:mb-10 text-white/95 font-medium drop-shadow-lg max-w-5xl mx-auto">
                {slide.subtitle}
              </p>
              
              {/* Responsive Button Layout */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-hero text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold transform hover:scale-105 transition-all duration-300">
                  Explore Our Products
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 sm:border-3 border-white text-white hover:bg-white hover:text-secondary px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-2xl backdrop-blur-sm bg-white/10 hover:bg-white transition-all duration-300"
                >
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Minimized Navigation Arrows at Bottom */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4 sm:space-x-6">
        {/* Previous Arrow - Minimized */}
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-lg border border-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        
        {/* Slide Progress Indicator */}
        <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
          <span className="text-white text-sm sm:text-base font-semibold">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <div className="w-8 sm:w-12 h-0.5 bg-white/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
          <span className="text-white/70 text-sm sm:text-base font-medium">
            {String(slides.length).padStart(2, '0')}
          </span>
        </div>
        
        {/* Next Arrow - Minimized */}
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-lg border border-white/30"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>


      {/* Mobile Swipe Indicator */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 block sm:hidden">
        <div className="flex items-center space-x-2 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
          <span className="text-white text-xs font-medium">Swipe to navigate</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
