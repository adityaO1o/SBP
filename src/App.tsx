import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ScrollToTop from "./components/ScrollToTop";
import EntranceLogo from "./components/EntranceLogo";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import BavanaFactory from "./pages/BavanaFactory";
import KundliFactory from "./pages/KundliFactory";
import Applications from "./pages/Applications";
import Contact from "./pages/Contact";
import MohitOverseas from "./pages/MohitOverseas";
import AanyaInternational from "./pages/AanyaInternational";
import NyraPolyrub from "./pages/NyraPolyrub";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// नया component - सभी routes के साथ
const AppContent = () => {
  const [showLogo, setShowLogo] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Logo sirf home page "/" par hi show hona chahiye
    if (location.pathname === "/") {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
  }, [location.pathname]);

  const handleLogoFinish = () => {
    setShowLogo(false);
  };

  if (showLogo) {
    return <EntranceLogo onFinish={handleLogoFinish} />;
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bavana-factory" element={<BavanaFactory />} />
        <Route path="/kundli-factory" element={<KundliFactory />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mohit-overseas" element={<MohitOverseas />} />
        <Route path="/aanya-international" element={<AanyaInternational />} />
        <Route path="/nyra-polyrub" element={<NyraPolyrub />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

// Main App component
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
