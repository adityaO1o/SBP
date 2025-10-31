import React from 'react';
import { CheckCircle, Package, Layers, Zap, Car, Recycle, TrendingUp, Factory as FactoryIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const bavanaProducts = [
  {
    title: "EVA Compounds",
    description: "High-quality EVA (Ethylene-Vinyl Acetate) compounds engineered for diverse industrial applications including automotive components and toys manufacturing. Our EVA compounds offer excellent flexibility, durability, and heat resistance.",
    icon: <Package className="h-8 w-8" />,
    features: ["Flexible & Durable", "Heat Resistant", "Non-toxic", "Weather Resistant"],
    applications: ["Automotive Parts", "Toys Manufacturing", "Footwear Components", "Industrial Applications"]
  },
  {
    title: "Modifiers",
    description: "Advanced polymer modifiers designed to enhance material properties and performance characteristics. Our modifiers improve impact resistance, processing, and overall product quality.",
    icon: <Layers className="h-8 w-8" />,
    features: ["Property Enhancement", "Quality Improvement", "Cost Effective", "Easy Integration"],
    applications: ["Polymer Enhancement", "Processing Aid", "Impact Modification", "Compatibility Improvement"]
  },
  {
    title: "Functional Polymers",
    description: "Specialized functional polymers designed for specific industrial and automotive applications. These high-performance materials meet stringent industry requirements.",
    icon: <Zap className="h-8 w-8" />,
    features: ["Application Specific", "High Performance", "Reliable Quality", "Industry Standard"],
    applications: ["Industrial Components", "Automotive Parts", "Specialized Applications", "Custom Solutions"]
  },
  {
    title: "Automobile Toys",
    description: "Safe and durable polymer compounds specifically formulated for automobile toy manufacturing. Our materials meet international safety standards for children's products.",
    icon: <Car className="h-8 w-8" />,
    features: ["Child Safe", "Durable Construction", "Colorfast", "Quality Assured"],
    applications: ["Toy Cars", "Vehicle Models", "Educational Toys", "Play Equipment"]
  },
  {
    title: "Bicycle Tyres Components",
    description: "High-performance rubber and polymer compounds for bicycle tyre manufacturing. Our materials provide excellent grip, durability, and weather resistance.",
    icon: <Recycle className="h-8 w-8" />,
    features: ["Grip Excellence", "Weather Resistant", "Long Lasting", "Puncture Resistant"],
    applications: ["Bicycle Tyres", "Tyre Components", "Sports Equipment", "Outdoor Gear"]
  }
];

const BavanaFactory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Helmet>
  <title>Bavana Factory Products | Mohit Overseas - EVA Compounds & Modifiers</title>
  <meta name="description" content="Bavana factory specializes in EVA compounds, modifiers, functional polymers, automobile toys, and bicycle tyre components. Premium quality manufacturing by Mohit Overseas." />
  <meta name="keywords" content="Bavana factory, EVA compounds, polymer modifiers, functional polymers, Mohit Overseas, automobile toys" />
  <link rel="canonical" href="https://mohitoverseas.com/bavana-factory" />
</Helmet>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 border border-primary/20">
                MOHIT OVERSEAS • BAVANA FACTORY
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                Bavana Factory Products
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
                Specialized manufacturing of EVA compounds, modifiers, functional polymers, automobile toys, 
                and bicycle tyre components with premium quality standards
              </p>
              
              {/* Factory Info */}
              <div className="bg-white rounded-3xl shadow-xl p-8 inline-block">
                <div className="flex items-center gap-4 justify-center">
                  <FactoryIcon className="h-12 w-12 text-primary" />
                  <div className="text-left">
                    <div className="text-2xl font-black text-secondary">Bavana Manufacturing Unit</div>
                    <div className="text-sm text-muted-foreground">Part of Mohit Overseas Group</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-secondary mb-6">Our Product Range</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions for automotive, toys, and industrial applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bavanaProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-primary/5 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 border-2 border-transparent hover:border-primary/20"
                >
                  <div className="bg-gradient-to-br from-primary to-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                    <div className="text-white">{product.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-secondary mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-secondary/70 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-secondary/80 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-secondary/70 mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Excellence Section */}
        <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                  MANUFACTURING EXCELLENCE
                </div>
                <h2 className="text-4xl font-black text-secondary mb-6">
                  State-of-the-Art Facilities
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our Bavana factory is equipped with modern machinery and quality control systems to ensure 
                    consistent production of high-grade polymer compounds and components.
                  </p>
                  <p>
                    We maintain strict quality standards throughout the manufacturing process, from raw material 
                    selection to final product inspection, ensuring every batch meets international specifications.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 py-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-primary mb-2">100%</div>
                      <div className="text-sm font-medium text-secondary">Quality Tested</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm font-medium text-secondary">Production</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-2xl font-black text-secondary mb-6">Why Choose Bavana Products?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Premium Quality</div>
                      <div className="text-sm text-muted-foreground">Rigorous quality control at every stage</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Consistent Supply</div>
                      <div className="text-sm text-muted-foreground">Reliable production and delivery schedules</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Custom Solutions</div>
                      <div className="text-sm text-muted-foreground">Tailored formulations for specific needs</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Competitive Pricing</div>
                      <div className="text-sm text-muted-foreground">Best value without compromising quality</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Technical Support</div>
                      <div className="text-sm text-muted-foreground">Expert guidance and after-sales service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Ready to Order Bavana Products?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Contact us today for pricing, samples, or technical specifications
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                  Request Quote
                </Button>
              </Link>
              <Link to="/kundli-factory">
                <Button variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-primary px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm">
                  View Kundli Products
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

export default BavanaFactory;
