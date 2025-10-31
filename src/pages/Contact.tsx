import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/components/ui/use-toast'; // Import toast hook

const Contact = () => {
  const { toast } = useToast(); // Toast hook
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  // Google Form Entry IDs
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScw4HENB4HUM92efgnFc-BWEyt8fXp_E_q250biwNrVPse8zw/formResponse';
  
  const FORM_FIELDS = {
    firstName: 'entry.742056413',
    lastName: 'entry.645714393',
    email: 'entry.1538744049',
    phone: 'entry.375793816',
    company: 'entry.29402941',
    subject: 'entry.479066407',
    message: 'entry.75483921'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // FormData बनाओ
      const data = new FormData();
      data.append(FORM_FIELDS.firstName, formData.firstName);
      data.append(FORM_FIELDS.lastName, formData.lastName);
      data.append(FORM_FIELDS.email, formData.email);
      data.append(FORM_FIELDS.phone, formData.phone);
      data.append(FORM_FIELDS.company, formData.company);
      data.append(FORM_FIELDS.subject, formData.subject);
      data.append(FORM_FIELDS.message, formData.message);

      // Google Form को submit करो
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      });

      // Form reset करो
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });

      // Success Toast show करो
      toast({
        title: "✓ Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
        duration: 5000,
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Error Toast show करो
      toast({
        title: "✗ Error Sending Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Helmet>
        <title>Contact Us | Get in Touch - Shri Balaji Polymers</title>
        <meta name="description" content="Contact Shri Balaji Polymers for product inquiries, quotes, and technical support. Delhi: +91 9999993433, Haryana: +91 9999990591. Email: info@shribalajipolymers.com" />
        <meta name="keywords" content="contact Shri Balaji Polymers, polymer inquiry, request quote, technical support, Delhi office, Haryana office" />
        <link rel="canonical" href="https://mohitoverseas.com/contact" />
      </Helmet>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                GET IN TOUCH • WE'RE HERE TO HELP
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-tight">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Have questions about our products or services? Our team is ready to assist you with
                expert guidance and support
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-white to-primary/5 rounded-3xl shadow-xl p-10 border-2 border-primary/20">
                <h2 className="text-3xl font-black text-secondary mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your Company Ltd."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Request Quote">Request Quote</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Business Partnership">Business Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-primary/20">
                  <h3 className="text-2xl font-black text-secondary mb-6">Contact Information</h3>

                  {/* Delhi Office */}
                  <div className="mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-primary to-accent rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-secondary mb-2">Delhi Office</h4>
                        <p className="text-muted-foreground">Delhi, India</p>
                      </div>
                    </div>
                    <div className="space-y-3 ml-16">
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
                  <div className="mb-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-accent to-secondary rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-secondary mb-2">Haryana Office</h4>
                        <p className="text-muted-foreground">Haryana, India</p>
                      </div>
                    </div>
                    <div className="space-y-3 ml-16">
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

                  {/* Email */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-br from-primary to-accent rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-secondary mb-2">Email</h4>
                      <a href="mailto:info@shribalajipolymers.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@shribalajipolymers.com
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-primary to-accent rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-secondary mb-2">Business Hours</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border-2 border-primary/20">
                  <h3 className="text-xl font-black text-secondary mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Expert guidance on product selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Custom formulation development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Technical specifications and support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Bulk order inquiries and pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Partnership opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-secondary mb-6">Visit Our Facilities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We welcome visits to our manufacturing facilities. Schedule an appointment to see our operations
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-secondary">Google Maps Integration</p>
                  <p className="text-sm text-muted-foreground">Add your location coordinates here</p>
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

export default Contact;
