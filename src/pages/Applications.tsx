import React from 'react';
import { CheckCircle, Car, Smartphone, Home as HomeIcon, Footprints, Zap, Package, Factory as FactoryIcon, Layers } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const markets = [
  {
    name: "Automotive Industry",
    icon: <Car className="h-12 w-12" />,
    description: "High-performance polymer compounds for automotive components, interiors, and under-the-hood applications. Our materials meet stringent automotive industry standards.",
    applications: ["Dashboard Components", "Interior Trim Parts", "Engine Components", "Safety Equipment", "Wire & Cable Insulation", "Sealing Systems"],
    products: ["PVC Compounds", "ABS Compounds", "PP Compounds", "Nylon Compounds"]
  },
  {
    name: "Electronics & Electrical",
    icon: <Smartphone className="h-12 w-12" />,
    description: "Precision polymer compounds for electronic housings, connectors, and electrical components requiring superior electrical properties and dimensional stability.",
    applications: ["Device Housings", "Connectors & Terminals", "Circuit Protection", "LED Components", "Power Adapters", "Cable Sheathing"],
    products: ["PC Compounds", "PBT Compounds", "Flame Retardant Materials", "ESD Protection Materials"]
  },
  {
    name: "Home Appliances",
    icon: <HomeIcon className="h-12 w-12" />,
    description: "Durable and aesthetically pleasing polymer compounds for appliance housings, components, and consumer goods requiring excellent surface finish.",
    applications: ["Appliance Housings", "Control Panels", "Interior Components", "Safety Parts", "Handle & Knobs", "Structural Parts"],
    products: ["ABS Compounds", "PP Compounds", "Modified Materials", "Custom Blends"]
  },
  {
    name: "Footwear Industry",
    icon: <Footprints className="h-12 w-12" />,
    description: "Flexible, durable, and comfortable materials for footwear manufacturing including soles, components, and accessories from our Kundli factory.",
    applications: ["Shoe Soles", "Heel Components", "Insoles & Midsoles", "Shoe Accessories", "Sports Footwear", "Casual & Formal Footwear"],
    products: ["EVA Blocks", "Sole Sheets", "Hawai Sheets", "Health Blocks", "Toughline Materials"]
  },
  {
    name: "Toys & Recreation",
    icon: <Package className="h-12 w-12" />,
    description: "Safe, colorful, and durable polymer materials for toy manufacturing meeting international safety standards for children's products.",
    applications: ["Toy Manufacturing", "Educational Toys", "Outdoor Play Equipment", "Indoor Games", "Model Kits", "Sporting Goods"],
    products: ["EVA Compounds", "PP Compounds", "ABS Materials", "Safe & Non-toxic Materials"]
  },
  {
    name: "Bags & Accessories",
    icon: <Layers className="h-12 w-12" />,
    description: "Lightweight yet durable materials for bag manufacturing and fashion accessories with excellent aesthetic properties.",
    applications: ["Bags & Luggage", "Fashion Accessories", "Protective Cases", "Storage Solutions", "Travel Goods", "School Bags"],
    products: ["EVA Blocks", "PP Materials", "Modified Polymers", "Decorative Materials"]
  },
  {
    name: "Industrial Components",
    icon: <FactoryIcon className="h-12 w-12" />,
    description: "Engineering-grade polymer compounds for industrial machinery, equipment, and specialized applications requiring high performance.",
    applications: ["Machine Components", "Industrial Parts", "Protective Equipment", "Sealing Solutions", "Bearings & Bushings", "Custom Components"],
    products: ["Nylon Compounds", "PBT Materials", "Engineering Plastics", "Custom Formulations"]
  },
  {
    name: "Wire & Cable",
    icon: <Zap className="h-12 w-12" />,
    description: "Specialized compounds for wire and cable insulation with excellent electrical properties and flame resistance.",
    applications: ["Wire Insulation", "Cable Sheathing", "Power Cables", "Communication Cables", "Specialty Cables", "Industrial Wiring"],
    products: ["PVC Compounds", "Flame Retardant Materials", "Low Smoke Zero Halogen", "Specialty Insulation"]
  }
];

const Applications = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Helmet>
  <title>Industries We Serve | Applications - Shri Balaji Polymers</title>
  <meta name="description" content="Serving automotive, electronics, home appliances, footwear, toys, bags, industrial components, and wire & cable industries with specialized polymer solutions." />
  <meta name="keywords" content="polymer applications, automotive polymers, electronics polymers, footwear industry, industrial polymers, polymer solutions" />
  <link rel="canonical" href="https://mohitoverseas.com/applications" />
</Helmet>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                GLOBAL REACH • DIVERSE INDUSTRIES
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                Industries We Serve
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We cater to a diverse range of industries, delivering specialized polymer solutions 
                that meet the unique demands of each sector
              </p>
            </div>
          </div>
        </section>

        {/* Markets Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="space-y-16">
              {markets.map((market, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="bg-gradient-to-br from-white to-primary/5 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-primary/20">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg">
                          <div className="text-white">{market.icon}</div>
                        </div>
                        <div>
                          <h2 className="text-3xl font-black text-secondary">{market.name}</h2>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {market.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="font-bold text-lg text-secondary mb-4">Our Products:</h3>
                        <div className="flex flex-wrap gap-2">
                          {market.products.map((product, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-semibold border border-primary/20">
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-white rounded-3xl shadow-xl p-10">
                      <h3 className="text-2xl font-black text-secondary mb-6">Key Applications</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {market.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-secondary font-semibold">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-secondary mb-6">Why Industries Choose Us</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Trusted partner for polymer solutions across diverse sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 text-center">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">
                  ISO certified manufacturing with rigorous quality control at every stage
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 text-center">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Efficient production and logistics for timely delivery of bulk orders
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 text-center">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Custom Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored formulations to meet specific application requirements
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 text-center">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FactoryIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Large Capacity</h3>
                <p className="text-sm text-muted-foreground">
                  10,000+ tons annual production capacity for bulk requirements
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Need Polymer Solutions for Your Industry?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Our experts are ready to help you find the perfect materials for your application
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                  Contact Our Experts
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-primary px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm">
                  View Products
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

export default Applications;
