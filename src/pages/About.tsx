import React from 'react';
import { Award, Users, Target, TrendingUp, Factory, Building2, Globe2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


import aboutFacility from '@/assets/about-facility.jpg';
import rdLaboratory from '@/assets/rd-laboratory.jpg';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Shri Balaji Polymers | 50+ Years of Excellence</title>
        <meta name="description" content="Learn about Shri Balaji Polymers - Leading polymer manufacturer since 1975. ISO certified with expertise in EVA compounds, rubber compounds, and custom polymer solutions." />
        <meta name="keywords" content="about shri balaji polymers, polymer manufacturer history, ISO certified company, mohit overseas, aanya international" />
        <link rel="canonical" href="https://mohitoverseas.com/about" />
      </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                ABOUT US • ESTABLISHED 1975
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                Leading Polymer Innovation for 50+ Years
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Shri Balaji Polymers has been at the forefront of polymer compound manufacturing since 1975, 
                delivering excellence across industries worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-secondary mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1975, Shri Balaji Polymers began with a vision to revolutionize the polymer industry 
                    in India. What started as a small manufacturing unit has grown into one of the country's most 
                    trusted names in polymer compounds.
                  </p>
                  <p>
                    Over the decades, we have consistently invested in cutting-edge technology, skilled workforce, 
                    and research & development to stay ahead of industry trends. Our commitment to quality and 
                    innovation has earned us the trust of leading manufacturers across automotive, electronics, 
                    and industrial sectors.
                  </p>
                  <p>
                    Today, we operate state-of-the-art manufacturing facilities and serve over 500 clients globally, 
                    producing 10,000+ tons of premium polymer compounds annually. Our journey of excellence continues 
                    as we push the boundaries of polymer science.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={aboutFacility}
                  alt="Manufacturing facility"
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-secondary mb-6">Our Achievements</h2>
              <p className="text-xl text-muted-foreground">Milestones that define our excellence</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-black text-primary mb-2">50+</div>
                <div className="text-sm font-semibold text-secondary/70">Years of Excellence</div>
              </div>
              <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
                <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-black text-primary mb-2">10,000+</div>
                <div className="text-sm font-semibold text-secondary/70">Tons Annual Capacity</div>
              </div>
              <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-black text-primary mb-2">500+</div>
                <div className="text-sm font-semibold text-secondary/70">Global Clients</div>
              </div>
              <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-black text-primary mb-2">100%</div>
                <div className="text-sm font-semibold text-secondary/70">Custom Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sister Companies Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                OUR NETWORK
              </div>
              <h2 className="text-4xl font-black text-secondary mb-6">Sister Companies</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our group companies extend our reach and capabilities across diverse sectors
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mohit Overseas */}
              <div className="bg-gradient-to-br from-white to-primary/5 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 border-2 border-primary/20">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">Mohit Overseas</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Specialized manufacturer of EVA compounds, modifiers, functional polymers, automobile toys, 
                  and bicycle tyres. Operating advanced facilities in Bavana and Kundli.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-sm font-semibold text-secondary">Key Products:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hawai Sheets (Multiple variants)</li>
                    <li>• EVA Blocks & Sole Sheets</li>
                    <li>• Functional Polymers</li>
                    <li>• Industrial Components</li>
                  </ul>
                </div>
                <Link to="/mohit-overseas">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Aanya International */}
              <div className="bg-gradient-to-br from-white to-accent/5 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 border-2 border-accent/20">
                <div className="bg-gradient-to-br from-accent to-secondary rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Globe2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">Aanya International</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Global trading and distribution partner specializing in polymer materials and 
                  industrial chemicals for international markets.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-sm font-semibold text-secondary">Specialization:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• International Trade</li>
                    <li>• Polymer Distribution</li>
                    <li>• Chemical Solutions</li>
                    <li>• Global Logistics</li>
                  </ul>
                </div>
                <Link to="/aanya-international">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Nyra Polyrub */}
              <div className="bg-gradient-to-br from-white to-secondary/5 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 border-2 border-secondary/20">
                <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">Nyra Polyrub</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Specialized rubber compound manufacturer focusing on high-performance industrial 
                  and automotive rubber solutions.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-sm font-semibold text-secondary">Focus Areas:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rubber Compounds</li>
                    <li>• Automotive Solutions</li>
                    <li>• Industrial Components</li>
                    <li>• Custom Formulations</li>
                  </ul>
                </div>
                <Link to="/nyra-polyrub">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-secondary mb-6">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the global leader in polymer innovation, setting industry standards for quality, 
                  sustainability, and customer satisfaction while contributing to a better tomorrow through 
                  eco-friendly manufacturing practices.
                </p>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <div className="bg-gradient-to-br from-accent to-secondary rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-secondary mb-6">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver exceptional polymer solutions that exceed customer expectations through continuous 
                  innovation, operational excellence, and unwavering commitment to quality, while fostering 
                  sustainable growth and environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Join Our Journey of Excellence</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Partner with us to experience world-class polymer solutions backed by 50+ years of expertise
            </p>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
     </>
  );
};

export default About;
