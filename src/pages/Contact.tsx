import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  ExternalLink,
  Send
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "MyJungleGarden Solutions",
        "123 Technology Drive",
        "Charlotte, NC 28202"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Sales: +1 (704) 555-0123",
        "Support: +1 (704) 555-0124",
        "Main: +1 (704) 555-0125"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@myjunglegarden.com",
        "sales@myjunglegarden.com",
        "support@myjunglegarden.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8AM - 6PM EST",
        "Saturday: 9AM - 2PM EST",
        "Sunday: Closed"
      ]
    }
  ];

  const quickActions = [
    {
      title: "Schedule a Demo",
      description: "See iGCT in action with a personalized demonstration",
      cta: "Book Demo",
      link: "https://salescentri.com/get-started/book-demo"
    },
    {
      title: "Start Free Trial",
      description: "Try iGCT risk-free for 14 days with full access",
      cta: "Start Trial",
      link: "https://salescentri.com/get-started/free-trial"
    },
    {
      title: "Enterprise Sales",
      description: "Custom solutions for large organizations",
      cta: "Contact Sales",
      link: "https://salescentri.com/contact/sales-inquiry/request-quote"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-gray mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-telecom-gray-light mb-8">
              Ready to transform your business communications? We're here to help you get started with iGCT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline-cta" size="lg" asChild>
                <a
                  href="https://salescentri.com/contact/support-request/live-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Live Chat
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-telecom-gray mb-6">
                Send Us a Message
              </h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-telecom-gray mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-telecom-blue/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-telecom-blue" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-telecom-gray mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-telecom-gray-light">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-telecom-gray-light">
              Choose the best way to get started with iGCT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-telecom-gray mb-4">
                    {action.title}
                  </h3>
                  <p className="text-telecom-gray-light mb-6">
                    {action.description}
                  </p>
                  <Button variant="cta" asChild>
                    <a
                      href={action.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {action.cta}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-telecom-gray-light">
              Located in the heart of Charlotte's technology district
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-telecom-gray mb-6">
                Charlotte Headquarters
              </h3>
              <div className="space-y-4 text-telecom-gray-light">
                <p className="text-lg">
                  Our modern office space in Charlotte provides the perfect environment for innovation and collaboration. We're easily accessible from major highways and Charlotte Douglas International Airport.
                </p>
                <div className="space-y-2">
                  <p><strong className="text-telecom-gray">Parking:</strong> Free visitor parking available</p>
                  <p><strong className="text-telecom-gray">Public Transit:</strong> LYNX Blue Line - Carson Station (0.5 miles)</p>
                  <p><strong className="text-telecom-gray">Airport:</strong> 15 minutes from CLT</p>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="outline-cta" size="lg" asChild>
                  <a
                    href="https://salescentri.com/get-started/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-telecom-gray-light">
                <MapPin className="h-16 w-16 text-telecom-blue mx-auto mb-4" />
                <p className="text-lg">
                  Interactive Google Maps<br />
                  would be embedded here
                </p>
                <p className="text-sm mt-2">
                  123 Technology Drive<br />
                  Charlotte, NC 28202
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20 bg-gradient-to-r from-telecom-blue to-telecom-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            24/7 Technical Support
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our expert support team is available around the clock to help you succeed
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-2xl font-bold mb-2">Sales Team</div>
              <div className="text-white/90">Monday - Friday<br />8AM - 6PM EST</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Technical Support</div>
              <div className="text-white/90">24/7<br />Always Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Emergency Line</div>
              <div className="text-white/90">24/7<br />Critical Issues</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;