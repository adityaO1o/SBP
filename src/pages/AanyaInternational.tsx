import React from 'react';
import { Globe2, Package, CheckCircle, TrendingUp, Truck, Shield, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

const AanyaInternational = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Helmet>
  <title>Aanya International | Global Polymer Trading - Sister Company</title>
  <meta name="description" content="Aanya International specializes in international polymer trading and distribution. Global sourcing, logistics expertise, and quality assurance for polymer materials." />
  <meta name="keywords" content="Aanya International, polymer trading, international distribution, global polymers, sister company" />
  <link rel="canonical" href="https://mohitoverseas.com/aanya-international" />
</Helmet>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-accent/10 via-primary/5 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                SISTER COMPANY • AANYA INTERNATIONAL
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                Aanya International
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Global trading and distribution partner specializing in polymer materials and 
                industrial chemicals for international markets
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
                  Your Global Polymer Trading Partner
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Aanya International is a leading trading and distribution company specializing in 
                    polymer materials, industrial chemicals, and specialty compounds for global markets. 
                    We bridge the gap between manufacturers and buyers across continents.
                  </p>
                  <p>
                    With extensive experience in international trade, logistics, and supply chain management, 
                    we ensure seamless delivery of quality products to our clients worldwide. Our commitment 
                    to excellence and customer satisfaction has made us a trusted name in the industry.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-10">
                <h3 className="text-2xl font-black text-secondary mb-6">Our Core Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">International Trading</div>
                      <div className="text-sm text-muted-foreground">Global sourcing and distribution of polymer materials</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Polymer Distribution</div>
                      <div className="text-sm text-muted-foreground">Comprehensive range of industrial polymers and compounds</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Chemical Solutions</div>
                      <div className="text-sm text-muted-foreground">Specialty chemicals and industrial raw materials</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Global Logistics</div>
                      <div className="text-sm text-muted-foreground">Efficient supply chain and delivery management</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gradient-to-br from-secondary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-secondary mb-6">What We Offer</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive trading and distribution solutions for global markets
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-10 text-center">
                <div className="bg-gradient-to-br from-accent to-primary rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Globe2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">Global Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Extensive network of suppliers and buyers across multiple continents ensuring 
                  competitive pricing and reliable supply
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-10 text-center">
                <div className="bg-gradient-to-br from-accent to-primary rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">Logistics Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Efficient supply chain management with timely delivery and complete documentation 
                  for international shipments
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-10 text-center">
                <div className="bg-gradient-to-br from-accent to-primary rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">Quality Assurance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rigorous quality checks and compliance with international standards for all 
                  traded materials
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Categories */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-secondary mb-6">Product Categories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Wide range of polymer materials and industrial chemicals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border-2 border-accent/20">
                <Package className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">Polymer Resins</h3>
                <p className="text-sm text-muted-foreground">PVC, PP, PE, ABS, and specialty polymers</p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border-2 border-accent/20">
                <Package className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">Additives</h3>
                <p className="text-sm text-muted-foreground">Stabilizers, plasticizers, and modifiers</p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border-2 border-accent/20">
                <Package className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">Chemicals</h3>
                <p className="text-sm text-muted-foreground">Industrial chemicals and raw materials</p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border-2 border-accent/20">
                <Package className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">Specialty Products</h3>
                <p className="text-sm text-muted-foreground">Custom formulations and niche materials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-24 bg-gradient-to-br from-secondary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-secondary mb-6">Why Choose Aanya International?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8">
                  <Award className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Industry Experience</h3>
                  <p className="text-muted-foreground">
                    Years of expertise in international polymer trading and distribution
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8">
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    Best market rates through our extensive global network
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8">
                  <Globe2 className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Global Reach</h3>
                  <p className="text-muted-foreground">
                    Serving clients across multiple countries with reliable service
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8">
                  <Truck className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Timely Delivery</h3>
                  <p className="text-muted-foreground">
                    Efficient logistics ensuring on-time delivery worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Ready to Trade Globally?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Partner with us for reliable international trading and distribution solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                  Get In Touch
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

export default AanyaInternational;
