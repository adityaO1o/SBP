import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, className = "" }) => {
  return (
    <div className={`card-industrial group cursor-pointer ${className}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-industrial text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Learn More Button */}
        <Button 
          variant="ghost" 
          className="text-accent hover:text-accent-foreground hover:bg-accent group-hover:scale-105 transition-all duration-300 mt-4"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;