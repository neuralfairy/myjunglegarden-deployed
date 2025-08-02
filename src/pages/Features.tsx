import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Globe,
  Shield,
  Zap,
  Users,
  BarChart3,
  Settings,
  Headphones,
  Cloud,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Smart Global Call Routing",
      description: "Intelligent routing across 180+ countries with failover protection",
      benefits: [
        "Automatic least-cost routing",
        "99.9% uptime guarantee",
        "Sub-second call connection",
        "Global redundancy"
      ]
    },
    {
      icon: Phone,
      title: "Advanced IVR Automation",
      description: "Build sophisticated call flows with drag-and-drop simplicity",
      benefits: [
        "Visual flow builder",
        "Multi-language support",
        "Voice recognition",
        "Custom prompts"
      ]
    },
    {
      icon: BarChart3,
      title: "Real-time Call Analytics",
      description: "Comprehensive insights into call performance and customer behavior",
      benefits: [
        "Live call monitoring",
        "Detailed reporting",
        "Performance metrics",
        "Custom dashboards"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "SOC 2, GDPR, and ISO certified infrastructure with end-to-end encryption",
      benefits: [
        "SOC 2 Type II certified",
        "GDPR compliant",
        "ISO 27001 certified",
        "End-to-end encryption"
      ]
    },
    {
      icon: Users,
      title: "CRM Integration Suite",
      description: "Seamless synchronization with leading CRM platforms",
      benefits: [
        "Salesforce integration",
        "HubSpot connector",
        "Zoho compatibility",
        "Custom API access"
      ]
    },
    {
      icon: Cloud,
      title: "Auto-Scaling Infrastructure",
      description: "Elastic cloud infrastructure that scales with your business needs",
      benefits: [
        "Instant capacity scaling",
        "Pay-as-you-grow pricing",
        "Global edge locations",
        "Zero hardware maintenance"
      ]
    }
  ];

  const integrations = [
    "Salesforce",
    "HubSpot", 
    "Zoho CRM",
    "Microsoft Dynamics",
    "Pipedrive",
    "Freshworks",
    "Slack",
    "Microsoft Teams"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-telecom-blue/10 text-telecom-blue">
              ⚡ Enterprise-Grade Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-gray mb-6">
              Powerful iGCT Features
              <span className="block text-telecom-blue">Built for Modern Business</span>
            </h1>
            <p className="text-xl text-telecom-gray-light mb-8 max-w-3xl mx-auto">
              Discover the comprehensive telephony capabilities that make iGCT the preferred choice for global enterprises
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a
                  href="https://salescentri.com/solutions/use-case-navigator/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline-cta" size="lg" asChild>
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-telecom-blue/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-telecom-blue/20 transition-colors">
                        <Icon className="h-8 w-8 text-telecom-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-telecom-gray mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-telecom-gray-light mb-4 text-lg">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-telecom-gray">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CRM Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Seamless CRM Integration
            </h2>
            <p className="text-xl text-telecom-gray-light max-w-3xl mx-auto">
              Connect iGCT with your existing workflow through our comprehensive integration suite
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-lg font-semibold text-telecom-gray">
                    {integration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <a
                href="https://salescentri.com/solutions/psa-suite/integrations"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Integrations
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-6">
                Enterprise-Grade Infrastructure
              </h2>
              <p className="text-xl text-telecom-gray-light mb-8">
                Built on carrier-grade infrastructure with global redundancy and 24/7 monitoring
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-telecom-blue/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Settings className="h-6 w-6 text-telecom-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-telecom-gray">API-First Architecture</h3>
                    <p className="text-telecom-gray-light">RESTful APIs and webhooks for custom integrations</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-telecom-blue/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Headphones className="h-6 w-6 text-telecom-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-telecom-gray">24/7 Expert Support</h3>
                    <p className="text-telecom-gray-light">Round-the-clock technical support and monitoring</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-telecom-blue/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-telecom-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-telecom-gray">Lightning Fast Setup</h3>
                    <p className="text-telecom-gray-light">Get started in minutes with our guided setup wizard</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-telecom-blue mb-2">99.9%</div>
                  <div className="text-telecom-gray-light">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-telecom-blue mb-2">&lt;100ms</div>
                  <div className="text-telecom-gray-light">Latency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-telecom-blue mb-2">180+</div>
                  <div className="text-telecom-gray-light">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-telecom-blue mb-2">50+</div>
                  <div className="text-telecom-gray-light">Data Centers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-telecom-blue to-telecom-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience iGCT in Action
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            See how our features can transform your business communications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-telecom-blue"
              asChild
            >
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interactive Demo
                <ExternalLink className="ml-2 h-4 w-4" />
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
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;