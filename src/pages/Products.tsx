import React from 'react';
import { CheckCircle, TrendingUp, Zap, Shield, Factory, Globe, Recycle, Leaf } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import pvcCompounds from '@/assets/pvc-compounds.jpg';
import pvcPellets from '@/assets/pvc-pellets.png';
import absCompound from '@/assets/abs-compound.jpg';
import pbtCompound from '@/assets/pbt-compound.jpg';
import pcCompound from '@/assets/pc-compound.jpg';
import { Helmet } from 'react-helmet-async';


const products = [
  {
    title: "PVC Compounds",
    description: "High-performance PVC compounds engineered for durability and versatility across multiple industrial applications. Our PVC compounds offer excellent weather resistance, chemical stability, and superior processing characteristics.",
    icon: <Zap className="h-8 w-8" />,
    image: pvcCompounds,
    features: ["Weather Resistant", "Chemical Stable", "Easy Processing", "Flame Retardant Options"],
    category: "Shri Balaji Polymers"
  },
  {
    title: "S-GLON (Nylon 6 & 66)",
    description: "Premium nylon compounds offering exceptional strength, heat resistance, and chemical stability for demanding applications. Ideal for automotive, electrical, and precision engineering components.",
    icon: <Shield className="h-8 w-8" />,
    image: pvcPellets,
    features: ["High Strength", "Heat Resistant", "Chemical Stable", "Precision Engineering"],
    category: "Shri Balaji Polymers"
  },
  {
    title: "S-STAR (PBT Compounds)",
    description: "Advanced PBT compounds providing superior electrical properties and dimensional stability for precision components. Perfect for electronic housings and automotive applications.",
    icon: <Factory className="h-8 w-8" />,
    image: pbtCompound,
    features: ["Electrical Properties", "Dimensional Stable", "Automotive Grade", "Precision Components"],
    category: "Shri Balaji Polymers"
  },
  {
    title: "S-CARNATE (PC Compounds)",
    description: "Premium polycarbonate compounds delivering outstanding clarity, impact resistance, and thermal performance. Ideal for optical applications and safety equipment.",
    icon: <Globe className="h-8 w-8" />,
    image: pcCompound,
    features: ["Crystal Clear", "Impact Resistant", "Thermal Stable", "Optical Grade"],
    category: "Shri Balaji Polymers"
  },
  {
    title: "S-PRON (ABS)",
    description: "High-quality ABS compounds combining strength, flexibility, and excellent surface finish for diverse applications. Perfect for consumer goods and automotive interior parts.",
    icon: <Recycle className="h-8 w-8" />,
    image: absCompound,
    features: ["Flexible Strength", "Surface Finish", "Consumer Grade", "Interior Parts"],
    category: "Shri Balaji Polymers"
  },
  {
    title: "S-PROFIL (PP Compounds)",
    description: "Engineered polypropylene compounds offering lightweight solutions with excellent chemical resistance and processability. Ideal for packaging and automotive applications.",
    icon: <Leaf className="h-8 w-8" />,
    image: pvcPellets,
    features: ["Lightweight", "Chemical Resistant", "Processable", "Packaging Grade"],
    category: "Shri Balaji Polymers"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Helmet>
        <title>Premium Polymer Products | Shri Balaji Polymers</title>
        <meta name="description" content="Complete range of polymer compounds including PVC, EVA, Nylon, ABS, PP, and PBT. Custom formulations for automotive, electronics, and industrial applications." />
        <meta name="keywords" content="polymer products, PVC compounds, EVA compounds, nylon compounds, ABS compounds, polymer catalog" />
        <link rel="canonical" href="https://mohitoverseas.com/products" />
      </Helmet>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                OUR PRODUCTS • PREMIUM QUALITY
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                Complete Range of Polymer Solutions
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
                Comprehensive polymer compounds engineered for diverse industries with unmatched quality and performance
              </p>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/bavana-factory">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-bold rounded-xl">
                    Bavana Factory Products
                  </Button>
                </Link>
                <Link to="/kundli-factory">
                  <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold rounded-xl">
                    Kundli Factory Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shri Balaji Polymers Products */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-secondary mb-6">Shri Balaji Polymers Products</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Premium polymer compounds for automotive, electronics, and industrial applications
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group border-2 border-transparent hover:border-primary/20"
                >
                  <div className="relative h-56 sm:h-60 lg:h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.title} - High-quality polymer compounds`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-14 h-14 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {product.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-black text-secondary mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {product.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-secondary/80 font-medium truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base">
                      Request Quote
                      <TrendingUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mohit Overseas Products Showcase */}
        <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 border border-primary/20">
                MOHIT OVERSEAS
              </div>
              <h2 className="text-4xl font-black text-secondary mb-6">Specialized Manufacturing Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced facilities in Bavana and Kundli producing premium quality materials for footwear,
                toys, and industrial applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Bavana Factory Card */}
              <Link to="/bavana-factory" className="group">
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-10 border-2 border-transparent hover:border-primary/20">
                  <div className="bg-gradient-to-br from-primary to-accent rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Factory className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-secondary mb-4 group-hover:text-primary transition-colors">
                    Bavana Factory
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Specializing in EVA compounds, modifiers, functional polymers, automobile toys, and bicycle tyres
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-secondary/80">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="font-medium">EVA Compounds & Modifiers</span>
                    </li>
                    <li className="flex items-center text-secondary/80">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="font-medium">Functional Polymers</span>
                    </li>
                    <li className="flex items-center text-secondary/80">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="font-medium">Automobile Toys & Bicycle Tyres</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl">
                    View Bavana Products
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Link>

              {/* Kundli Factory Card */}
              <Link to="/kundli-factory" className="group">
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-10 border-2 border-transparent hover:border-accent/20">
                  <div className="bg-gradient-to-br from-accent to-secondary rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Factory className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-secondary mb-4 group-hover:text-accent transition-colors">
                    Kundli Factory
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Premium hawai sheets, EVA blocks, sole materials for footwear, bags, toys, and components
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-secondary/80">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      <span className="font-medium">Hawai Sheets (Multiple Variants)</span>
                    </li>
                    <li className="flex items-center text-secondary/80">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      <span className="font-medium">EVA Blocks & Sole Sheets</span>
                    </li>
                    <li className="flex items-center text-secondary/80">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      <span className="font-medium">Toughline & Health Blocks</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl">
                    View Kundli Products
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Need Custom Polymer Solutions?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Our experts are ready to help you find the perfect compound for your application
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                  Request Quote
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-primary px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Products;
