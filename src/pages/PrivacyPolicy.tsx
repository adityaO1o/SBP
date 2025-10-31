import React from 'react';
import { Shield, Lock, Eye, UserCheck, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Helmet } from 'react-helmet-async';


const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Helmet>
  <title>Privacy Policy | Shri Balaji Polymers</title>
  <meta name="description" content="Privacy policy for Shri Balaji Polymers website. Learn how we collect, use, and protect your personal information." />
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="https://mohitoverseas.com/privacy-policy" />
</Helmet>
      <Header />
      
      <main>
        <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                Last Updated: October 24, 2025
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-black text-secondary mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Shri Balaji Polymers ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services.
                </p>
              </div>

              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-black text-secondary">Information We Collect</h2>
                  </div>
                  <div className="pl-9 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Personal Information</h3>
                      <p className="text-muted-foreground">
                        We may collect personal information that you voluntarily provide when you:
                      </p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                        <li>Fill out contact forms on our website</li>
                        <li>Request product information or quotes</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Contact us via email or phone</li>
                        <li>Create an account on our website</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">
                        This information may include: name, email address, phone number, company name, 
                        postal address, and any other information you choose to provide.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Automatically Collected Information</h3>
                      <p className="text-muted-foreground">
                        When you visit our website, we may automatically collect certain information about 
                        your device, including:
                      </p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Referral source</li>
                        <li>Pages visited and time spent on pages</li>
                        <li>Device identifiers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-black text-secondary">How We Use Your Information</h2>
                  </div>
                  <div className="pl-9">
                    <p className="text-muted-foreground mb-4">
                      We use the collected information for various purposes:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>To respond to your inquiries and provide customer service</li>
                      <li>To process your orders and transactions</li>
                      <li>To send you product information, quotes, and updates</li>
                      <li>To improve our website and services</li>
                      <li>To send marketing communications (with your consent)</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect our rights and prevent fraud</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-black text-secondary">Data Security</h2>
                  </div>
                  <div className="pl-9">
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational security measures to protect 
                      your personal information against unauthorized access, alteration, disclosure, or 
                      destruction. However, no method of transmission over the Internet or electronic storage 
                      is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-black text-secondary">Information Sharing</h2>
                  </div>
                  <div className="pl-9">
                    <p className="text-muted-foreground mb-4">
                      We do not sell, trade, or rent your personal information to third parties. We may share 
                      your information with:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Service providers who assist in our business operations</li>
                      <li>Our sister companies (Mohit Overseas, Aanya International, Nyra Polyrub)</li>
                      <li>Legal authorities when required by law</li>
                      <li>Business partners with your explicit consent</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-secondary mb-4">Your Rights</h2>
                  <div className="pl-0">
                    <p className="text-muted-foreground mb-4">
                      You have the right to:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Withdraw consent at any time</li>
                      <li>Lodge a complaint with supervisory authorities</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-secondary mb-4">Cookies</h2>
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to enhance your experience on our website. 
                    You can control cookie preferences through your browser settings. Disabling cookies may affect 
                    some website functionality.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-secondary mb-4">Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our services are not directed to individuals under 18 years of age. We do not knowingly 
                    collect personal information from children. If you become aware that a child has provided 
                    us with personal information, please contact us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-secondary mb-4">Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-black text-secondary mb-4">Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="text-muted-foreground space-y-2">
                    <p><strong>Email:</strong> info@shribalajipolymers.com</p>
                    <p><strong>Phone (Delhi):</strong> +91 9999993433, +91 9899211990</p>
                    <p><strong>Phone (Haryana):</strong> +91 9999990591, +91 9999698591</p>
                  </div>
                </div>
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

export default PrivacyPolicy;
