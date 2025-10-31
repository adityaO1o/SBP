import React from 'react';
import { CheckCircle, Boxes, Package, Footprints, Shield, Leaf, TrendingUp, Factory as FactoryIcon, Car } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const kundliProducts = [
  {
    title: "Hawai Sheets",
    description: "Premium quality hawai sheets available in multiple sizes and variants. Our hawai sheets are manufactured using high-grade materials for superior comfort and durability. Available in 15mm, 16mm, and double density foam variants specially designed for ladies, gents, and baby applications.",
    icon: <Boxes className="h-8 w-8" />,
    subcategories: ["15mm Standard Sheets", "16mm Premium Sheets", "Double Density Foam", "Ladies Variant", "Gents Variant", "Baby Sheets"],
    features: ["Multiple Size Options", "Premium Quality", "Comfortable & Soft", "Durable Material"],
    applications: ["Footwear Industry", "Comfort Footwear", "Home Slippers", "Fashion Footwear"]
  },
  {
    title: "EVA Blocks - Guage Series",
    description: "High-quality EVA blocks available in various guage specifications including 16mm, 21mm, 25mm, and 45mm. Perfect for footwear manufacturing and industrial applications requiring specific thickness requirements.",
    icon: <Package className="h-8 w-8" />,
    subcategories: ["16mm Guage", "21mm Guage", "25mm Guage", "45mm Guage"],
    features: ["Multiple Thickness Options", "Industry Standard Quality", "Rigorous Testing", "Versatile Applications"],
    applications: ["Footwear Manufacturing", "Sole Production", "Industrial Components", "Custom Applications"]
  },
  {
    title: "Sole Sheets",
    description: "Premium sole sheets available in 7mm, 8mm, and 10mm thickness options. Specially designed for footwear manufacturing with excellent grip, flexibility, and durability characteristics.",
    icon: <Footprints className="h-8 w-8" />,
    subcategories: ["7mm Thickness", "8mm Thickness", "10mm Thickness"],
    features: ["Multiple Thickness Options", "Flexible Material", "Durable Construction", "Excellent Grip"],
    applications: ["Shoe Soles", "Footwear Components", "Sports Footwear", "Casual Footwear"]
  },
  {
    title: "Toughline (8.7mm)",
    description: "Specialized toughline material with 8.7mm thickness designed for premium footwear applications. Offers exceptional durability and impact resistance for high-performance footwear.",
    icon: <Shield className="h-8 w-8" />,
    features: ["High Durability", "Impact Resistant", "Premium Quality", "Long Lasting Performance"],
    applications: ["Premium Footwear", "Sports Shoes", "Heavy-Duty Footwear", "Industrial Footwear"]
  },
  {
    title: "Heel Blocks (45mm)",
    description: "High-quality heel blocks with 45mm specifications designed for heel manufacturing. Provides excellent stability and comfort for various footwear applications.",
    icon: <Shield className="h-8 w-8" />,
    features: ["Perfect Heel Height", "Stable Construction", "Comfortable Design", "Quality Material"],
    applications: ["Heel Manufacturing", "Fashion Footwear", "Formal Shoes", "Comfort Heels"]
  },
  {
    title: "Health Block (Supersoft)",
    description: "Supersoft health blocks specifically designed for comfort and therapeutic footwear applications. Provides maximum cushioning and support for health-conscious footwear solutions.",
    icon: <Leaf className="h-8 w-8" />,
    features: ["Supersoft Material", "Health Focused Design", "Therapeutic Grade", "Maximum Comfort"],
    applications: ["Therapeutic Footwear", "Comfort Shoes", "Medical Footwear", "Elderly Care Footwear"]
  }
];

const KundliFactory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      
<Helmet>
  <title>Kundli Factory Products | Mohit Overseas - Hawai Sheets & EVA Blocks</title>
  <meta name="description" content="Kundli factory manufactures premium hawai sheets, EVA blocks, sole materials, toughline, and health blocks for footwear, bags, toys, and industrial applications." />
  <meta name="keywords" content="Kundli factory, hawai sheets, EVA blocks, sole sheets, toughline, health blocks, footwear materials" />
  <link rel="canonical" href="https://mohitoverseas.com/kundli-factory" />
</Helmet>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-accent/10 via-primary/5 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                MOHIT OVERSEAS • KUNDLI FACTORY
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                Kundli Factory Products
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
                Premium hawai sheets, EVA blocks, sole materials, and specialized components for footwear, 
                bags, toys, and industrial applications
              </p>
              
              {/* Factory Info */}
              <div className="bg-white rounded-3xl shadow-xl p-8 inline-block">
                <div className="flex items-center gap-4 justify-center">
                  <FactoryIcon className="h-12 w-12 text-accent" />
                  <div className="text-left">
                    <div className="text-2xl font-black text-secondary">Kundli Manufacturing Unit</div>
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
                Comprehensive solutions for footwear industry, bags manufacturing, toys, and component production
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {kundliProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-accent/5 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 border-2 border-transparent hover:border-accent/20"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-gradient-to-br from-accent to-primary rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg flex-shrink-0">
                      <div className="text-white">{product.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-secondary mb-2">{product.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                  
                  {product.subcategories && (
                    <div className="mb-6">
                      <h4 className="font-bold text-sm text-secondary/70 mb-3">Available Variants:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.subcategories.map((sub, idx) => (
                          <div key={idx} className="bg-accent/5 rounded-lg px-3 py-2 text-sm font-medium text-secondary border border-accent/20">
                            {sub}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-secondary/70 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-secondary/80 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-secondary/70 mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span key={idx} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
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

        {/* Applications Section */}
        <section className="py-24 bg-gradient-to-br from-secondary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-secondary mb-6">Industries We Serve</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our Kundli factory products cater to diverse industries with specialized solutions
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 text-center">
                <div className="bg-gradient-to-br from-accent to-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Footprints className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Footwear Industry</h3>
                <p className="text-sm text-muted-foreground">
                  Complete range of sole materials, hawai sheets, and heel components for all types of footwear manufacturing
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 text-center">
                <div className="bg-gradient-to-br from-accent to-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Bags & Accessories</h3>
                <p className="text-sm text-muted-foreground">
                  EVA blocks and sheets for bag manufacturing, accessories, and fashion products
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 text-center">
                <div className="bg-gradient-to-br from-accent to-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Toys Manufacturing</h3>
                <p className="text-sm text-muted-foreground">
                  Safe and durable materials for toy production and children's products
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 text-center">
                <div className="bg-gradient-to-br from-accent to-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FactoryIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-3">Industrial Components</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized components and materials for various industrial applications
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-secondary mb-6">Why Choose Kundli Products?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border-2 border-accent/20">
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Wide Product Range</h3>
                  <p className="text-muted-foreground">
                    Comprehensive selection of materials in various sizes and specifications to meet diverse requirements
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border-2 border-accent/20">
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Consistent Quality</h3>
                  <p className="text-muted-foreground">
                    Stringent quality control ensures every product meets international standards
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border-2 border-accent/20">
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Reliable Supply</h3>
                  <p className="text-muted-foreground">
                    Large-scale production capacity ensures timely delivery and consistent availability
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border-2 border-accent/20">
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    Best market prices without compromising on quality or service standards
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
              Ready to Order Kundli Products?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Contact us today for bulk orders, pricing, or product samples
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                  Get Quote Now
                </Button>
              </Link>
              <Link to="/bavana-factory">
                <Button variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-primary px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm">
                  View Bavana Products
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

export default KundliFactory;
