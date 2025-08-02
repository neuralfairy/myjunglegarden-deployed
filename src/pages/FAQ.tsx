import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ExternalLink, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is iGCT (Global Cloud Telephony)?",
          answer: "iGCT is MyJungleGarden's comprehensive cloud-based telephony platform that provides businesses with global calling capabilities, advanced IVR systems, call routing, analytics, and CRM integrations. It's designed to scale from small teams to enterprise organizations with reliable, secure infrastructure."
        },
        {
          question: "How does iGCT improve global call quality?",
          answer: "iGCT uses intelligent routing algorithms to automatically select the best path for each call based on real-time network conditions, geographic location, and carrier quality metrics. Our global infrastructure with 50+ data centers ensures optimal call quality with sub-100ms latency worldwide."
        },
        {
          question: "What makes iGCT different from other telephony providers?",
          answer: "iGCT stands out through its AI-powered routing, 99.9% uptime SLA, comprehensive CRM integrations, enterprise-grade security (SOC 2, GDPR, ISO certified), and transparent pricing. We focus specifically on B2B sales teams with features designed for modern business communications."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "What pricing plans are available?",
          answer: "We offer three main plans: Starter ($49/month for up to 1,000 minutes), Professional ($149/month for up to 5,000 minutes), and Enterprise (custom pricing for unlimited usage). All plans include a 14-day free trial with no credit card required."
        },
        {
          question: "Are there any setup fees or hidden costs?",
          answer: "No setup fees or hidden costs. Our pricing is transparent with clear per-minute rates for usage beyond plan limits. Volume discounts are available for high-usage customers, and annual billing provides up to 30% savings."
        },
        {
          question: "Can I change my plan at any time?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated. You'll receive notifications before reaching plan limits to help manage usage."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "What CRMs does iGCT integrate with?",
          answer: "iGCT integrates seamlessly with major CRM platforms including Salesforce, HubSpot, Zoho CRM, Microsoft Dynamics, Pipedrive, and Freshworks. We also provide REST APIs for custom integrations and webhook support for real-time data sync."
        },
        {
          question: "How secure is the iGCT platform?",
          answer: "Security is our top priority. iGCT is SOC 2 Type II certified, GDPR compliant, and ISO 27001 certified. All communications are encrypted end-to-end, and we maintain strict data protection protocols with regular security audits."
        },
        {
          question: "What is the platform uptime guarantee?",
          answer: "We guarantee 99.9% uptime backed by our SLA. Our redundant infrastructure across 50+ global data centers ensures maximum reliability. In the rare event of downtime, we provide service credits as outlined in our SLA agreement."
        },
        {
          question: "How quickly can I get started with iGCT?",
          answer: "You can be up and running in under 5 minutes with our guided setup wizard. The platform includes pre-configured templates for common use cases, and our support team provides onboarding assistance for enterprise customers."
        }
      ]
    },
    {
      category: "Features",
      questions: [
        {
          question: "What analytics and reporting features are available?",
          answer: "iGCT provides comprehensive real-time analytics including call volume, duration, success rates, geographic distribution, and cost analysis. Advanced features include custom dashboards, automated reports, performance scorecards, and ROI tracking."
        },
        {
          question: "Can I record calls for compliance and training?",
          answer: "Yes, iGCT includes call recording capabilities with configurable retention policies. Recordings are stored securely with encryption and can be integrated with compliance workflows. Features include selective recording, transcription, and sentiment analysis."
        },
        {
          question: "How does the IVR system work?",
          answer: "Our advanced IVR system features a visual drag-and-drop builder, multi-language support, voice recognition, and dynamic routing based on caller data. You can create sophisticated call flows without technical expertise, with templates for common scenarios."
        },
        {
          question: "What international calling capabilities does iGCT offer?",
          answer: "iGCT supports calling to 180+ countries with competitive international rates. Features include local number provisioning in key markets, compliance with local regulations, and optimized routing for international calls to ensure quality and cost-effectiveness."
        }
      ]
    },
    {
      category: "Support",
      questions: [
        {
          question: "What support options are available?",
          answer: "We provide 24/7 technical support for all customers, with priority support for Professional and Enterprise plans. Support channels include live chat, email, phone, and a comprehensive knowledge base. Enterprise customers get dedicated account management."
        },
        {
          question: "Do you provide onboarding and training?",
          answer: "Yes, we offer comprehensive onboarding including setup assistance, team training sessions, and best practices consultation. Enterprise customers receive dedicated onboarding specialists and customized training programs."
        },
        {
          question: "What happens if I need technical assistance during setup?",
          answer: "Our technical support team is available 24/7 to assist with setup, configuration, and troubleshooting. We also provide detailed documentation, video tutorials, and can schedule one-on-one setup sessions for complex requirements."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-gray mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-telecom-gray-light mb-8">
              Everything you need to know about iGCT and our cloud telephony platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Still Have Questions? Book a Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline-cta" size="lg">
                <MessageCircle className="mr-2 h-4 w-4" />
                Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-8">
                  <Badge variant="secondary" className="bg-telecom-blue/10 text-telecom-blue mr-4">
                    {category.category}
                  </Badge>
                  <h2 className="text-2xl font-bold text-telecom-gray">
                    {category.category} Questions
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex; // Unique index across all categories
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <Card key={faqIndex} className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                          >
                            <h3 className="text-lg font-semibold text-telecom-gray pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-telecom-blue flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-telecom-blue flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-6 border-t border-gray-100">
                              <p className="text-telecom-gray-light pt-4 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Need More Information?
            </h2>
            <p className="text-xl text-telecom-gray-light">
              Explore our resources or get in touch with our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-telecom-gray mb-4">
                  Product Documentation
                </h3>
                <p className="text-telecom-gray-light mb-6">
                  Comprehensive guides and API documentation
                </p>
                <Button variant="outline-cta" asChild>
                  <a
                    href="https://salescentri.com/resources/whitepapers-ebooks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Docs
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-telecom-gray mb-4">
                  Case Studies
                </h3>
                <p className="text-telecom-gray-light mb-6">
                  See how other businesses succeed with iGCT
                </p>
                <Button variant="outline-cta" asChild>
                  <a
                    href="https://salescentri.com/resources/case-studies"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Stories
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-telecom-gray mb-4">
                  Technical Support
                </h3>
                <p className="text-telecom-gray-light mb-6">
                  24/7 expert assistance for all technical questions
                </p>
                <Button variant="cta">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-telecom-blue to-telecom-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience iGCT?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start your free trial today and see why businesses choose our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-telecom-blue"
              asChild
            >
              <a
                href="https://salescentri.com/get-started/free-trial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-telecom-blue hover:bg-gray-100"
              asChild
            >
              <a
                href="https://salescentri.com/get-started/book-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;