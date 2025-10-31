import React from 'react';
import { Factory, Package, CheckCircle, TrendingUp, Settings, Zap, Award, Car } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const NyraPolyrub = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Helmet>
  <title>Nyra Polyrub | Rubber Compound Manufacturer - Sister Company</title>
  <meta name="description" content="Nyra Polyrub specializes in high-performance rubber compounds for automotive and industrial applications. Custom formulations and technical expertise." />
  <meta name="keywords" content="Nyra Polyrub, rubber compounds, automotive rubber, industrial rubber, custom formulations, sister company" />
  <link rel="canonical" href="https://mohitoverseas.com/nyra-polyrub" />
</Helmet>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-secondary/10 via-primary/5 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-6 py-3 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-6 border border-secondary/20">
                SISTER COMPANY • NYRA POLYRUB
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                Nyra Polyrub
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Specialized rubber compound manufacturer focusing on high-performance industrial 
                and automotive rubber solutions
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 border border-primary/20">
                  ABOUT US
                </div>
                <h2 className="text-4xl font-black text-secondary mb-6">
                  Excellence in Rubber Compound Manufacturing
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Nyra Polyrub is a premier manufacturer of specialized rubber compounds designed for 
                    demanding industrial and automotive applications. We combine traditional rubber 
                    compounding expertise with modern technology to deliver superior products.
                  </p>
                  <p>
                    Our focus on quality, consistency, and innovation has made us a preferred supplier 
                    for manufacturers requiring high-performance rubber materials. From custom formulations 
                    to standard grades, we provide comprehensive rubber solutions.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-10">
                <h3 className="text-2xl font-black text-secondary mb-6">Our Specializations</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Rubber Compounds</div>
                      <div className="text-sm text-muted-foreground">Custom formulated compounds for diverse applications</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Automotive Solutions</div>
                      <div className="text-sm text-muted-foreground">High-performance materials for automotive industry</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Industrial Components</div>
                      <div className="text-sm text-muted-foreground">Durable rubber parts for machinery and equipment</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Custom Formulations</div>
                      <div className="text-sm text-muted-foreground">Tailored solutions for specific requirements</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-secondary mb-6">Our Product Range</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive rubber solutions for industrial and automotive sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-10">
                <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">Automotive Rubber</h3>
                <p className="text-muted-foreground mb-6">
                  High-performance rubber compounds for automotive seals, gaskets, hoses, and vibration dampeners
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Seals & Gaskets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Hoses & Tubes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Vibration Dampeners</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-10">
                <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">Industrial Rubber</h3>
                <p className="text-muted-foreground mb-6">
                  Durable compounds for industrial machinery, conveyor belts, and equipment components
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Conveyor Belts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Machine Components</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Protective Equipment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-10">
                <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">Custom Compounds</h3>
                <p className="text-muted-foreground mb-6">
                  Tailored formulations developed for specific applications and performance requirements
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Custom Formulations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Specialty Grades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Technical Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-secondary mb-6">Why Choose Nyra Polyrub?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Excellence in rubber compound manufacturing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8">
                <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Quality Standards</h3>
                <p className="text-sm text-muted-foreground">
                  Strict quality control ensuring consistent product performance
                </p>
              </div>

              <div className="text-center p-8">
                <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Technical Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Experienced team providing technical guidance and support
                </p>
              </div>

              <div className="text-center p-8">
                <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Custom Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored formulations for specific application needs
                </p>
              </div>

              <div className="text-center p-8">
                <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Production Capacity</h3>
                <p className="text-sm text-muted-foreground">
                  Large-scale manufacturing for bulk requirements
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Need High-Performance Rubber Solutions?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Contact our technical team for custom formulations and expert guidance
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

export default NyraPolyrub;
