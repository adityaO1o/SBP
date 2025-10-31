import React from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import headerLogo from '@/assets/headerlogo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isProductsOpen, setIsProductsOpen] = React.useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Products', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Products', href: '/products' },
        { name: 'Bavana Factory', href: '/bavana-factory' },
        { name: 'Kundli Factory', href: '/kundli-factory' },
      ]
    },
    { 
      name: 'Sister Companies', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Mohit Overseas', href: '/mohit-overseas' },
        { name: 'Aanya International', href: '/aanya-international' },
        { name: 'Nyra Polyrub', href: '/nyra-polyrub' },
      ]
    },
    { name: 'Applications', href: '/applications' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Enhanced Pre-Header with Contact Numbers - HIDDEN ON MOBILE */}
      <div className="hidden sm:block bg-gradient-to-r from-primary via-secondary to-accent text-white py-2.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <a
                href="tel:+919999993433"
                className="flex items-center gap-2 hover:text-accent-foreground transition-colors duration-200 font-medium"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Delhi:</span> +91 9999993433
              </a>
              <a
                href="tel:+919899211990"
                className="flex items-center gap-2 hover:text-accent-foreground transition-colors duration-200 font-medium"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                +91 9899211990
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919999990591"
                className="flex items-center gap-2 hover:text-accent-foreground transition-colors duration-200 font-medium"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Haryana:</span> +91 9999990591
              </a>
              <a
                href="tel:+919999698591"
                className="flex items-center gap-2 hover:text-accent-foreground transition-colors duration-200 font-medium"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                +91 9999698591
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Dark Background for White Logo Visibility */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Dark background to make white logo visible */}
                <div className="bg-gradient-to-br from-secondary/90 to-primary/90 p-2 rounded-lg shadow-lg border-2 border-primary/20 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={headerLogo}
                    alt="Shri Balaji Polymers Logo"
                    className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg sm:text-2xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight">
                  Shri Balaji Polymers
                </span>
                <span className="text-[9px] sm:text-xs text-muted-foreground font-medium tracking-wider uppercase">
                  Excellence in Polymer Innovation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button className="px-4 py-2 text-foreground hover:text-primary font-semibold transition-all duration-300 flex items-center gap-1 relative">
                        {item.name}
                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                      </button>
                      <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-primary">
                        <div className="py-2">
                          {item.dropdownItems?.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.href}
                              className="block px-4 py-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium"
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-foreground hover:text-primary font-semibold transition-all duration-300 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/contact">
                <Button className="ml-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6">
                  Get Quote
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => {
                          if (item.name === 'Products') {
                            setIsProductsOpen(!isProductsOpen);
                            setIsCompaniesOpen(false);
                          } else {
                            setIsCompaniesOpen(!isCompaniesOpen);
                            setIsProductsOpen(false);
                          }
                        }}
                        className="w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-semibold flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          (item.name === 'Products' && isProductsOpen) || 
                          (item.name === 'Sister Companies' && isCompaniesOpen) 
                            ? 'rotate-180' 
                            : ''
                        }`} />
                      </button>
                      {((item.name === 'Products' && isProductsOpen) || 
                        (item.name === 'Sister Companies' && isCompaniesOpen)) && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems?.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg font-semibold">
                  Get Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
