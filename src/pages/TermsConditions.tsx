import React from 'react';
import { FileText, AlertCircle, Scale, CheckCircle, XCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Helmet } from 'react-helmet-async';


const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Helmet>
        <title>Terms & Conditions | Shri Balaji Polymers</title>
        <meta name="description" content="Terms and conditions for using Shri Balaji Polymers website and services. Please read carefully before using our services." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://mohitoverseas.com/terms-conditions" />
      </Helmet>
      <Header />

      <main>
        <section className="py-24 bg-gradient-to-br from-secondary/10 via-primary/5 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <FileText className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                Terms & Conditions
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

              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-black text-secondary mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Shri Balaji Polymers website and services, you accept and agree
                  to be bound by these Terms and Conditions. If you do not agree to these terms, please do not
                  use our website or services.
                </p>
              </div>

              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="h-6 w-6 text-secondary" />
                    <h2 className="text-2xl font-black text-secondary">Use of Website</h2>
                  </div>
                  <div className="pl-9 space-y-4">
                    <p className="text-muted-foreground">
                      You agree to use our website only for lawful purposes and in accordance with these Terms.
                      You agree not to:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Use the website in any way that violates applicable laws or regulations</li>
                      <li>Engage in any activity that could harm, disable, or impair the website</li>
                      <li>Attempt to gain unauthorized access to any part of the website</li>
                      <li>Use automated systems to access the website without permission</li>
                      <li>Transmit viruses, malware, or any harmful code</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-6 w-6 text-secondary" />
                    <h2 className="text-2xl font-black text-secondary">Product Information</h2>
                  </div>
                  <div className="pl-9 space-y-4">
                    <p className="text-muted-foreground">
                      We strive to provide accurate product information on our website. However:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Product specifications may change without notice</li>
                      <li>Colors and images may differ from actual products</li>
                      <li>Availability is subject to change</li>
                      <li>Prices are subject to change without notice</li>
                      <li>We reserve the right to correct errors or inaccuracies</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                    <h2 className="text-2xl font-black text-secondary">Orders and Transactions</h2>
                  </div>
                  <div className="pl-9 space-y-4">
                    <h3 className="text-xl font-bold text-secondary">Order Acceptance</h3>
                    <p className="text-muted-foreground">
                      All orders are subject to acceptance and availability. We reserve the right to refuse
                      or cancel any order for any reason, including:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Product unavailability</li>
                      <li>Errors in pricing or product information</li>
                      <li>Suspected fraudulent transactions</li>
                      <li>Credit or payment issues</li>
                    </ul>

                    <h3 className="text-xl font-bold text-secondary mt-6">Pricing</h3>
                    <p className="text-muted-foreground">
                      All prices are quoted in Indian Rupees (INR) unless otherwise stated. Prices do not
                      include shipping, handling, or applicable taxes unless specified.
                    </p>

                    <h3 className="text-xl font-bold text-secondary mt-6">Payment Terms</h3>
                    <p className="text-muted-foreground">
                      Payment terms will be agreed upon for each order. We accept various payment methods
                      as specified in individual quotations.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="h-6 w-6 text-secondary" />
                    <h2 className="text-2xl font-black text-secondary">Intellectual Property</h2>
                  </div>
                  <div className="pl-9">
                    <p className="text-muted-foreground mb-4">
                      All content on this website, including text, graphics, logos, images, and software,
                      is the property of Shri Balaji Polymers and protected by copyright and other intellectual
                      property laws.
                    </p>
                    <p className="text-muted-foreground">
                      You may not reproduce, distribute, modify, or create derivative works without our
                      express written permission.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="h-6 w-6 text-secondary" />
                    <h2 className="text-2xl font-black text-secondary">Limitation of Liability</h2>
                  </div>
                  <div className="pl-9">
                    <p className="text-muted-foreground mb-4">
                      To the fullest extent permitted by law, Shri Balaji Polymers shall not be liable for:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Indirect, incidental, or consequential damages</li>
                      <li>Loss of profits or revenue</li>
                      <li>Loss of data or business opportunities</li>
                      <li>Interruption of business operations</li>
                      <li>Any damages arising from use of our website or products</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-secondary mb-4">Warranty Disclaimer</h2>
                  <div className="pl-0">
                    <p className="text-muted-foreground mb-4">
                      The website and all information, products, and services are provided "as is" without
                      warranty of any kind. We disclaim all warranties, express or implied, including:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Merchantability</li>
                      <li>Fitness for a particular purpose</li>
                      <li>Non-infringement</li>
                      <li>Accuracy or completeness of information</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-secondary mb-4">Shipping and Delivery</h2>
                  <p className="text-muted-foreground">
                    Shipping terms, delivery times, and costs will be specified in individual quotations.
                    We are not responsible for delays caused by shipping carriers or circumstances beyond
                    our control.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-secondary mb-4">Returns and Cancellations</h2>
                  <p className="text-muted-foreground">
                    Return and cancellation policies will be specified in individual sales agreements.
                    Generally, custom-manufactured products cannot be returned or cancelled once production
                    has commenced.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-secondary mb-4">Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms shall be governed by and construed in accordance with the laws of India.
                    Any disputes shall be subject to the exclusive jurisdiction of courts in Delhi/Haryana, India.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-secondary mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these Terms at any time. Changes will be effective
                    immediately upon posting. Your continued use of the website constitutes acceptance
                    of modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-secondary mb-4">Severability</h2>
                  <p className="text-muted-foreground">
                    If any provision of these Terms is found to be invalid or unenforceable, the remaining
                    provisions shall continue in full force and effect.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-black text-secondary mb-4">Contact Information</h2>
                  <p className="text-muted-foreground mb-4">
                    For questions about these Terms & Conditions, please contact us:
                  </p>
                  <div className="text-muted-foreground space-y-2">
                    <p><strong>Shri Balaji Polymers</strong></p>
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

export default TermsConditions;
