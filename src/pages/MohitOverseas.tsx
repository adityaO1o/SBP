import React from 'react';
import { Factory, Package, CheckCircle, TrendingUp, Building2, MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const MohitOverseas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Helmet>
  <title>Mohit Overseas | Specialized Polymer Manufacturing - Sister Company</title>
  <meta name="description" content="Mohit Overseas operates Bavana and Kundli factories, manufacturing EVA compounds, modifiers, hawai sheets, and footwear materials. Part of Shri Balaji Polymers group." />
  <meta name="keywords" content="Mohit Overseas, sister company, Bavana factory, Kundli factory, EVA compounds, polymer manufacturer" />
  <link rel="canonical" href="https://mohitoverseas.com/mohit-overseas" />
</Helmet>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 border border-primary/20">
                SISTER COMPANY • MOHIT OVERSEAS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                Mohit Overseas
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Specialized manufacturer of EVA compounds, modifiers, functional polymers, and components 
                for footwear, bags, toys, and industrial applications
              </p>
            </div>
          </div>
        </section>

        {/* About Mohit Overseas */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                  ABOUT US
                </div>
                <h2 className="text-4xl font-black text-secondary mb-6">
                  Leading Manufacturer of Specialized Polymer Products
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Mohit Overseas is a prominent name in the polymer manufacturing industry, specializing 
                    in high-quality EVA compounds, modifiers, and functional polymers. With advanced 
                    manufacturing facilities in Bavana and Kundli, we serve diverse industries including 
                    footwear, bags, toys, and industrial components.
                  </p>
                  <p>
                    Our commitment to quality, innovation, and customer satisfaction has made us a 
                    trusted partner for manufacturers across India. We combine traditional expertise 
                    with modern technology to deliver products that meet international standards.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-10">
                <h3 className="text-2xl font-black text-secondary mb-6">Our Strengths</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Two Manufacturing Units</div>
                      <div className="text-sm text-muted-foreground">Bavana and Kundli factories with specialized production</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Wide Product Range</div>
                      <div className="text-sm text-muted-foreground">Comprehensive solutions for diverse applications</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Quality Assurance</div>
                      <div className="text-sm text-muted-foreground">Strict quality control and testing procedures</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Competitive Pricing</div>
                      <div className="text-sm text-muted-foreground">Best market rates without quality compromise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Facilities */}
        <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-secondary mb-6">Our Manufacturing Facilities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                State-of-the-art facilities equipped with modern machinery and technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Bavana Factory Card */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-10 border-2 border-primary/20">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
                  <Factory className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-secondary mb-4">Bavana Factory</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Specialized in EVA compounds, modifiers, functional polymers, automobile toys, and bicycle tyre components.
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
                    <span className="font-medium">Automobile Toys & Bicycle Components</span>
                  </li>
                </ul>
                <Link to="/bavana-factory">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl">
                    View Bavana Products
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Kundli Factory Card */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-10 border-2 border-accent/20">
                <div className="bg-gradient-to-br from-accent to-secondary rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
                  <Factory className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-secondary mb-4">Kundli Factory</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Premium hawai sheets, EVA blocks, sole materials for footwear, bags, toys, and industrial components.
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
                <Link to="/kundli-factory">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl">
                    View Kundli Products
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-secondary mb-6">Get in Touch</h2>
                <p className="text-xl text-muted-foreground">
                  Contact us for product inquiries, bulk orders, or technical specifications
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Delhi Office */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border-2 border-primary/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-primary to-accent rounded-xl w-12 h-12 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-secondary">Delhi Office</h3>
                      <p className="text-sm text-muted-foreground">Delhi, India</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a href="tel:+919999993433" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>+91 9999993433</span>
                    </a>
                    <a href="tel:+919899211990" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>+91 9899211990</span>
                    </a>
                  </div>
                </div>

                {/* Haryana Office */}
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border-2 border-accent/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-accent to-secondary rounded-xl w-12 h-12 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-secondary">Haryana Office</h3>
                      <p className="text-sm text-muted-foreground">Haryana, India</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a href="tel:+919999990591" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>+91 9999990591</span>
                    </a>
                    <a href="tel:+919999698591" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>+91 9999698591</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-xl hover:scale-105 transition-all duration-300">
                    Contact Us Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default MohitOverseas;
