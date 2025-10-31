import React from 'react';
import {
  Award,
  Beaker,
  Factory,
  Leaf,
  Zap,
  Shield,
  Globe,
  Recycle,
  Car,
  Smartphone,
  Home as HomeIcon,
  Footprints,
  CheckCircle,
  Target,
  Users,
  TrendingUp,
  Package,
  Boxes,
  Layers
} from 'lucide-react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

import aboutFacility from '@/assets/about-facility.jpg';
import rdLaboratory from '@/assets/rd-laboratory.jpg';
import patternBg from '@/assets/pattern-bg.jpg';
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
    features: ["Weather Resistant", "Chemical Stable", "Easy Processing", "Flame Retardant Options"]
  },
  {
    title: "S-GLON (Nylon 6 & 66)",
    description: "Premium nylon compounds offering exceptional strength, heat resistance, and chemical stability for demanding applications. Ideal for automotive, electrical, and precision engineering components.",
    icon: <Shield className="h-8 w-8" />,
    image: pvcPellets,
    features: ["High Strength", "Heat Resistant", "Chemical Stable", "Precision Engineering"]
  },
  {
    title: "S-STAR (PBT Compounds)",
    description: "Advanced PBT compounds providing superior electrical properties and dimensional stability for precision components. Perfect for electronic housings and automotive applications.",
    icon: <Factory className="h-8 w-8" />,
    image: pbtCompound,
    features: ["Electrical Properties", "Dimensional Stable", "Automotive Grade", "Precision Components"]
  },
  {
    title: "S-CARNATE (PC Compounds)",
    description: "Premium polycarbonate compounds delivering outstanding clarity, impact resistance, and thermal performance. Ideal for optical applications and safety equipment.",
    icon: <Globe className="h-8 w-8" />,
    image: pcCompound,
    features: ["Crystal Clear", "Impact Resistant", "Thermal Stable", "Optical Grade"]
  },
  {
    title: "S-PRON (ABS)",
    description: "High-quality ABS compounds combining strength, flexibility, and excellent surface finish for diverse applications. Perfect for consumer goods and automotive interior parts.",
    icon: <Recycle className="h-8 w-8" />,
    image: absCompound,
    features: ["Flexible Strength", "Surface Finish", "Consumer Grade", "Interior Parts"]
  },
  {
    title: "S-PROFIL (PP Compounds)",
    description: "Engineered polypropylene compounds offering lightweight solutions with excellent chemical resistance and processability. Ideal for packaging and automotive applications.",
    icon: <Leaf className="h-8 w-8" />,
    image: pvcPellets,
    features: ["Lightweight", "Chemical Resistant", "Processable", "Packaging Grade"]
  }
];

// Mohit Overseas - Bavana Factory Products
const bavanaProducts = [
  {
    title: "EVA Compounds",
    description: "High-quality EVA compounds for diverse industrial applications including automotive components and toys manufacturing.",
    icon: <Package className="h-8 w-8" />,
    features: ["Flexible", "Durable", "Heat Resistant", "Non-toxic"]
  },
  {
    title: "Modifiers",
    description: "Advanced polymer modifiers that enhance material properties and performance characteristics.",
    icon: <Layers className="h-8 w-8" />,
    features: ["Property Enhancement", "Quality Improvement", "Cost Effective", "Easy Integration"]
  },
  {
    title: "Functional Polymers",
    description: "Specialized functional polymers designed for specific industrial and automotive applications.",
    icon: <Zap className="h-8 w-8" />,
    features: ["Application Specific", "High Performance", "Reliable", "Industry Standard"]
  },
  {
    title: "Automobile Toys",
    description: "Safe and durable polymer compounds for automobile toy manufacturing.",
    icon: <Car className="h-8 w-8" />,
    features: ["Child Safe", "Durable", "Colorfast", "Quality Assured"]
  },
  {
    title: "Bicycle Tyres",
    description: "High-performance rubber compounds for bicycle tyre manufacturing.",
    icon: <Recycle className="h-8 w-8" />,
    features: ["Grip Excellence", "Weather Resistant", "Long Lasting", "Puncture Resistant"]
  }
];

// Mohit Overseas - Kundli Factory Products
const kundliProducts = [
  {
    title: "Hawai Sheets",
    description: "Premium quality hawai sheets available in multiple sizes - 15mm, 16mm, and double density foam variants for ladies, gents, and baby applications.",
    icon: <Boxes className="h-8 w-8" />,
    subcategories: ["15mm Sheets", "16mm Sheets", "Double Density Foam", "Ladies/Gents/Baby Variants"],
    features: ["Multiple Sizes", "Premium Quality", "Comfortable", "Durable"]
  },
  {
    title: "EVA Blocks - Guage Series",
    description: "High-quality EVA blocks in various guage specifications - 16mm, 21mm, 25mm, and 45mm for footwear and industrial applications.",
    icon: <Package className="h-8 w-8" />,
    subcategories: ["16mm Guage", "21mm Guage", "25mm Guage", "45mm Guage"],
    features: ["Multiple Sizes", "Industry Standard", "Quality Tested", "Versatile Use"]
  },
  {
    title: "Sole Sheets",
    description: "Premium sole sheets available in 7mm, 8mm, and 10mm thickness for footwear manufacturing.",
    icon: <Footprints className="h-8 w-8" />,
    subcategories: ["7mm Thickness", "8mm Thickness", "10mm Thickness"],
    features: ["Multiple Options", "Flexible", "Durable", "Comfort Grip"]
  },
  {
    title: "Toughline & Heel Blocks",
    description: "Specialized toughline (8.7mm) and heel blocks (45mm) for premium footwear applications.",
    icon: <Shield className="h-8 w-8" />,
    subcategories: ["Toughline 8.7mm", "Heel Block 45mm"],
    features: ["High Durability", "Premium Quality", "Impact Resistant", "Long Lasting"]
  },
  {
    title: "Health Block (Supersoft)",
    description: "Supersoft health blocks designed for comfort and therapeutic footwear applications.",
    icon: <Leaf className="h-8 w-8" />,
    features: ["Supersoft Material", "Health Focused", "Therapeutic Grade", "Maximum Comfort"]
  }
];

const features = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "ISO 9001:2015 Certified",
    description: "Quality assurance through rigorous ISO certification standards, ensuring consistent excellence in all our products. Our quality management system guarantees reliability and performance in every batch.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Beaker className="h-10 w-10" />,
    title: "State-of-the-Art R&D",
    description: "Advanced research facilities with cutting-edge technology for continuous innovation and product development. Our R&D team works 24/7 to develop next-generation polymer solutions.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <Factory className="h-10 w-10" />,
    title: "Diverse Product Range",
    description: "Comprehensive portfolio of polymer compounds meeting varied industry requirements and specifications. From automotive to electronics, we have solutions for every application.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <Leaf className="h-10 w-10" />,
    title: "Sustainable Practices",
    description: "Committed to environmental responsibility through eco-friendly manufacturing processes and sustainable materials. Building a greener future with every polymer compound we produce.",
    color: "from-emerald-500 to-emerald-600"
  }
];

const achievements = [
  { number: "50+", label: "Years of Excellence", icon: <Award className="h-8 w-8" /> },
  { number: "10,000+", label: "Tons Annual Capacity", icon: <Factory className="h-8 w-8" /> },
  { number: "500+", label: "Global Clients", icon: <Users className="h-8 w-8" /> },
  { number: "100%", label: "Custom Solutions", icon: <Target className="h-8 w-8" /> }
];

const markets = [
  {
    name: "Automotive Industry",
    icon: <Car className="h-12 w-12" />,
    description: "High-performance compounds for automotive components, interiors, and under-the-hood applications.",
    applications: ["Dashboard Components", "Interior Trim", "Engine Parts", "Safety Components"]
  },
  {
    name: "Electronics & Electrical",
    icon: <Smartphone className="h-12 w-12" />,
    description: "Precision compounds for electronic housings, connectors, and electrical components.",
    applications: ["Device Housings", "Connectors", "Circuit Protection", "LED Components"]
  },
  {
    name: "Home Appliances",
    icon: <HomeIcon className="h-12 w-12" />,
    description: "Durable compounds for appliance housings, components, and consumer goods.",
    applications: ["Appliance Housings", "Control Panels", "Interior Components", "Safety Parts"]
  },
  {
    name: "Footwear Industry",
    icon: <Footprints className="h-12 w-12" />,
    description: "Flexible and durable compounds for footwear soles, components, and accessories.",
    applications: ["Sole Materials", "Heel Components", "Shoe Accessories", "Sports Footwear"]
  }
];

const Home = () => (

  <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
    <Helmet>
      <title>Shri Balaji Polymers | Leading Polymer Manufacturer Since 1975</title>
      <meta name="description" content="ISO certified manufacturer of custom EVA compounds, rubber compounds, PVC, Nylon & masterbatches. Serving automotive, electronics & industrial sectors for 50+ years in India." />
      <meta name="keywords" content="polymer compounds manufacturer, EVA compounds India, rubber compounds, PVC compounds, nylon compounds, Shri Balaji Polymers" />
      <link rel="canonical" href="https://mohitoverseas.com/" />
    </Helmet>
    <nav style={{ display: 'none' }}>
      <a href="/about">About</a>
      <a href="/products">All Products</a>
      <a href="/bavana-factory">Bavana Factory</a>
      <a href="/kundli-factory">Kundli Factory</a>
      <a href="/mohit-overseas">Mohit Overseas</a>
      <a href="/aanya-international">Aanya International</a>
      <a href="/nyra-polyrub">Nyra Polyrub</a>
      <a href="/applications">Applications</a>
      <a href="/contact">Contact</a>
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms-conditions">Terms & Conditions</a>
    </nav>

    <Header />
    <main>
      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}
      <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-secondary/10 to-white">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${patternBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in">
              <div className="mb-10">
                <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                  ESTABLISHED 1975 • 50+ YEARS EXCELLENCE
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                  Leading Polymer Innovation Since 1975
                </h2>
              </div>
              <div className="space-y-8 mb-10">
                <p className="text-xl md:text-2xl leading-relaxed text-secondary/80 font-medium">
                  For nearly five decades, Shri Balaji Polymers has been at the forefront of polymer compound manufacturing,
                  delivering innovative solutions that power industries worldwide.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our specialization in 100% custom engineered compounds, EVA compounds, rubber compounds, and EVA masterbatches
                  has made us a trusted partner for automotive, electronics, and industrial applications globally.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With state-of-the-art manufacturing facilities and a dedicated R&D team, we continue to push the boundaries
                  of what's possible in polymer science, creating sustainable solutions for tomorrow's challenges.
                </p>

                {/* Sister Companies Badge */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                  <h3 className="font-bold text-lg text-secondary mb-3">Our Sister Companies:</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-semibold text-secondary">Mohit Overseas</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-semibold text-secondary">Aanya International</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-semibold text-secondary">Nyra Polyrub</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-primary/5 rounded-2xl border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-primary mb-2">{achievement.icon}</div>
                    <div className="text-3xl font-black text-primary mb-1">{achievement.number}</div>
                    <div className="text-sm font-semibold text-secondary/70">{achievement.label}</div>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Learn More About Us
              </Button>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <img
                  src={aboutFacility}
                  alt="Advanced polymer manufacturing facility with state-of-the-art equipment"
                  className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Products Section - Shri Balaji Polymers */}
      <section id="products" className="py-24 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
              OUR EXPERTISE • PREMIUM QUALITY
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
              What We're Offering
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Comprehensive polymer solutions engineered for diverse industries with unmatched quality and performance
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 auto-rows-fr">
            {products.map((product, index) => (
              <div
                key={index}
                className="animate-slide-up h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group border-2 border-transparent hover:border-primary/20 h-full flex flex-col">
                  <div className="relative h-56 sm:h-60 lg:h-64 overflow-hidden flex-shrink-0">
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

                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl font-black text-secondary mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {product.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg flex-grow">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 flex-shrink-0">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-secondary/80 font-medium truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex-shrink-0">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base">
                        Learn More
                        <TrendingUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mohit Overseas - Bavana Factory Section */}
      <section id="bavana-factory" className="py-24 bg-gradient-to-br from-white via-accent/5 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 border border-primary/20">
              MOHIT OVERSEAS • BAVANA FACTORY
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
              Bavana Factory Products
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Specialized EVA compounds, modifiers, functional polymers, and industrial components
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {bavanaProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 border-2 border-transparent hover:border-primary/20"
              >
                <div className="bg-gradient-to-br from-primary/80 to-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <div className="text-white">{product.icon}</div>
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">{product.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-secondary/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mohit Overseas - Kundli Factory Section */}
      <section id="kundli-factory" className="py-24 bg-gradient-to-br from-secondary/5 via-white to-accent/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 border border-primary/20">
              MOHIT OVERSEAS • KUNDLI FACTORY
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
              Kundli Factory Products
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Premium hawai sheets, EVA blocks, sole materials for footwear, bags, toys, and industrial components
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {kundliProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 border-2 border-transparent hover:border-primary/20"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-gradient-to-br from-primary/80 to-accent rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg flex-shrink-0">
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
                        <div key={idx} className="bg-primary/5 rounded-lg px-3 py-2 text-sm font-medium text-secondary">
                          {sub}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-secondary/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Applications Note */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-black text-secondary mb-4">Applications</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Footprints className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold text-secondary">Footwear Industry</p>
              </div>
              <div className="text-center">
                <Package className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold text-secondary">Bags & Accessories</p>
              </div>
              <div className="text-center">
                <Car className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold text-secondary">Toys Manufacturing</p>
              </div>
              <div className="text-center">
                <Factory className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold text-secondary">Industrial Components</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-br from-white via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
              WHY CHOOSE US • TRUSTED EXCELLENCE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
              Why Work with Shri Balaji Polymers
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Trusted excellence backed by decades of innovation and quality assurance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-fr">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-scale-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl p-6 md:p-8 text-center group h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-accent/20 flex flex-col">
                  <div className="bg-gradient-to-br from-primary/80 to-accent rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <div className="text-white">{feature.icon}</div>
                  </div>

                  <h3 className="text-lg md:text-xl font-black text-secondary mb-4 group-hover:text-primary transition-colors duration-300 leading-tight flex-shrink-0">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base flex-grow">
                    {feature.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex-shrink-0">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {index === 0 && 'Certified Quality'}
                      {index === 1 && 'Innovation Lab'}
                      {index === 2 && 'Global Solutions'}
                      {index === 3 && 'Eco-Friendly'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Stats Section */}
          <div className="mt-20 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-black">50+</div>
                <div className="text-sm md:text-base font-medium opacity-90">Years Excellence</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-black">ISO</div>
                <div className="text-sm md:text-base font-medium opacity-90">Certified Quality</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-black">24/7</div>
                <div className="text-sm md:text-base font-medium opacity-90">R&D Operations</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-black">100%</div>
                <div className="text-sm md:text-base font-medium opacity-90">Custom Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-scale-in">
              <div className="relative">
                <img
                  src={rdLaboratory}
                  alt="Advanced polymer research and development laboratory"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -top-6 -left-6 bg-accent rounded-2xl p-6 text-white shadow-lg">
                  <div className="text-4xl font-bold">R&D</div>
                  <div className="text-sm">Excellence</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="mb-8">
                <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                  INNOVATION LAB
                </div>
                <h2 className="text-4xl font-black text-secondary mb-6">
                  Research & Development Excellence
                </h2>
              </div>
              <div className="space-y-6 text-industrial">
                <p className="text-xl leading-relaxed">
                  Equipped with cutting-edge facilities, our R&D lab focuses on innovation, sustainability,
                  and meeting evolving customer needs.
                </p>
                <p>
                  From advanced formulations to new applications, we ensure the highest standards of performance and quality.
                  Our dedicated team of polymer scientists and engineers work tirelessly to develop
                  next-generation compounds that meet the demanding requirements of modern industries
                  while maintaining environmental responsibility.
                </p>
                <div className="grid grid-cols-2 gap-6 py-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                    <div className="text-sm font-medium">Lab Operations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">500+</div>
                    <div className="text-sm font-medium">Tests Monthly</div>
                  </div>
                </div>
                <Button className="btn-hero">
                  Learn More About Our R&D
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section id="applications" className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
              GLOBAL REACH • DIVERSE INDUSTRIES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
              Our Markets
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We cater to a diverse range of industries, delivering specialized polymer solutions
              that meet the unique demands of each sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {markets.map((market, index) => (
              <div
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 h-full flex flex-col p-8 border-2 border-transparent hover:border-primary/20">
                  <div className="text-primary group-hover:text-accent transition-colors duration-300 mb-6 transform group-hover:scale-110 transition-transform">
                    {market.icon}
                  </div>
                  <h3 className="text-2xl font-black text-secondary group-hover:text-primary transition-colors duration-300 mb-4">
                    {market.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {market.description}
                  </p>
                  <div className="space-y-2">
                    {market.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-secondary/80">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Get in touch with our experts to discuss your custom polymer compound requirements
              and discover how we can help elevate your products.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                Get Quote Now
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-primary hover:bg-white hover:text-primary px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>

    {/* Footer */}
    <Footer />

    {/* Floating Buttons */}
    <FloatingButtons />
  </div>
);

export default Home;
