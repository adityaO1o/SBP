import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = "" }) => {
  return (
    <div className={`text-center group animate-scale-in ${className}`}>
      <div className="bg-gradient-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-industrial">
        <div className="text-white text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-industrial leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;