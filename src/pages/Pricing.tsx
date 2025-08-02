import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, ExternalLink } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "month",
      description: "Perfect for small teams getting started with cloud telephony",
      features: [
        "Up to 1,000 minutes/month",
        "5 concurrent calls",
        "Basic IVR setup",
        "Email support",
        "CRM integration (1 platform)",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: false
    },
    {
      name: "Professional",
      price: "149",
      period: "month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 5,000 minutes/month",
        "25 concurrent calls",
        "Advanced IVR & call routing",
        "Priority support",
        "Multiple CRM integrations",
        "Advanced analytics & reporting",
        "Call recording",
        "API access"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited minutes",
        "Unlimited concurrent calls",
        "Custom IVR development",
        "24/7 dedicated support",
        "White-label options",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/contact/sales-inquiry/request-quote",
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Additional Minutes",
      price: "$0.02/minute",
      description: "Extra minutes beyond your plan limits"
    },
    {
      name: "Premium Support",
      price: "$99/month",
      description: "Priority support with 1-hour response time"
    },
    {
      name: "Advanced Analytics",
      price: "$49/month",
      description: "Enhanced reporting and business intelligence"
    },
    {
      name: "Custom Integrations",
      price: "Starting at $500",
      description: "Bespoke API integrations for your specific needs"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-gray mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-telecom-gray-light mb-8">
              Choose the perfect plan for your business. Scale up or down anytime with no hidden fees.
            </p>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              ✨ 14-day free trial • No credit card required
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  plan.popular ? 'ring-2 ring-telecom-blue transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-telecom-blue text-white">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-telecom-gray mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      {plan.price === "Custom" ? (
                        <div className="text-3xl font-bold text-telecom-blue">Custom</div>
                      ) : (
                        <div>
                          <span className="text-4xl font-bold text-telecom-blue">${plan.price}</span>
                          <span className="text-telecom-gray-light">/{plan.period}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-telecom-gray-light">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-telecom-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "cta" : "outline-cta"} 
                    className="w-full" 
                    size="lg"
                    asChild
                  >
                    <a
                      href={plan.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-telecom-gray-light">
              Enhance your plan with additional features and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-telecom-gray">
                      {addon.name}
                    </h3>
                    <Badge variant="outline" className="text-telecom-blue border-telecom-blue">
                      {addon.price}
                    </Badge>
                  </div>
                  <p className="text-telecom-gray-light">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Discounts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-6">
                Volume Discounts Available
              </h2>
              <p className="text-xl text-telecom-gray-light mb-8">
                Save more as you scale. Our enterprise pricing includes significant discounts for high-volume usage.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-telecom-gray">10% discount for 10,000+ minutes/month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-telecom-gray">20% discount for 50,000+ minutes/month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-telecom-gray">Custom pricing for enterprise volumes</span>
                </div>
              </div>
              <Button variant="cta" size="lg" asChild>
                <a
                  href="https://salescentri.com/contact/sales-inquiry/request-quote"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Enterprise Quote
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 p-8 rounded-2xl">
              <div className="text-center space-y-6">
                <div>
                  <div className="text-3xl font-bold text-telecom-blue mb-2">Save up to</div>
                  <div className="text-6xl font-bold text-telecom-blue">30%</div>
                  <div className="text-telecom-gray-light">with annual billing</div>
                </div>
                <div className="border-t pt-6">
                  <div className="text-2xl font-bold text-telecom-blue mb-2">$0.015</div>
                  <div className="text-telecom-gray-light">per minute at enterprise scale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-telecom-gray mb-4">
            Calculate Your Savings
          </h3>
          <p className="text-xl text-telecom-gray-light mb-8 max-w-2xl mx-auto">
            Use our ROI calculator to see how much you can save by switching to iGCT
          </p>
          <Button variant="cta" size="lg" asChild>
            <a
              href="https://salescentri.com/platforms/lead-management/lead-generation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try ROI Calculator
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Pricing FAQ
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-telecom-gray mb-2">
                Can I change plans anytime?
              </h3>
              <p className="text-telecom-gray-light">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-telecom-gray mb-2">
                What happens if I exceed my plan limits?
              </h3>
              <p className="text-telecom-gray-light">
                Additional usage is billed at our standard overage rates. You'll receive notifications before reaching your limits.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-telecom-gray mb-2">
                Do you offer annual discounts?
              </h3>
              <p className="text-telecom-gray-light">
                Yes, annual plans receive up to 30% discount compared to monthly billing. Contact sales for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-telecom-blue to-telecom-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of businesses using iGCT to power their communications
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

export default Pricing;