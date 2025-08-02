import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Globe, Award, ArrowRight, ExternalLink } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously pushing the boundaries of cloud telephony technology"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Dedicated to delivering exceptional results for every client"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting businesses worldwide with reliable infrastructure"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in everything we do"
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      bio: "15+ years in telecommunications and cloud infrastructure. Former VP at Twilio.",
      expertise: "Strategic Leadership, Cloud Infrastructure"
    },
    {
      name: "David Chen",
      role: "CTO",
      bio: "Tech visionary with 12 years building scalable telephony platforms. Ex-Amazon Web Services.",
      expertise: "System Architecture, API Development"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Sales",
      bio: "Sales leader with proven track record in B2B SaaS growth. Former Director at HubSpot.",
      expertise: "Sales Strategy, Customer Success"
    },
    {
      name: "Michael Thompson",
      role: "Head of Security",
      bio: "Cybersecurity expert ensuring enterprise-grade protection. Former CISO at Fortune 500.",
      expertise: "Information Security, Compliance"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "MyJungleGarden Solutions established with a mission to revolutionize global telephony"
    },
    {
      year: "2020",
      title: "iGCT Platform Launch",
      description: "First commercial release of our Global Cloud Telephony platform"
    },
    {
      year: "2021",
      title: "Enterprise Expansion",
      description: "Secured major enterprise clients and achieved SOC 2 certification"
    },
    {
      year: "2022",
      title: "Global Scale",
      description: "Expanded to 180+ countries with 99.9% uptime achievement"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Named 'Best Cloud Telephony Provider' by TechReview Magazine"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Launched AI-powered analytics and intelligent call routing features"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-telecom-blue/10 text-telecom-blue">
              🚀 Established 2019
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-gray mb-6">
              About MyJungleGarden Solutions
            </h1>
            <p className="text-xl text-telecom-gray-light mb-8">
              Global voice infrastructure for tomorrow's B2B sales teams. We're building the future of business communications through innovative cloud telephony solutions.
            </p>
            <Button variant="cta" size="lg" asChild>
              <a
                href="https://salescentri.com/company/about-us/leadership-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meet Our Leadership
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-telecom-gray-light mb-6">
                To empower businesses worldwide with reliable, scalable, and intelligent cloud telephony infrastructure that breaks down communication barriers and drives global growth.
              </p>
              <p className="text-lg text-telecom-gray-light mb-8">
                We believe that every business, regardless of size or location, should have access to enterprise-grade communication tools that enable them to connect with customers anywhere in the world.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-telecom-blue rounded-full"></div>
                  <span className="text-telecom-gray">Connecting 1000+ businesses globally</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-telecom-blue rounded-full"></div>
                  <span className="text-telecom-gray">Processing 50M+ calls annually</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-telecom-blue rounded-full"></div>
                  <span className="text-telecom-gray">Supporting 180+ countries</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-telecom-blue mb-2">1000+</div>
                  <div className="text-telecom-gray-light">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-telecom-blue mb-2">99.9%</div>
                  <div className="text-telecom-gray-light">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-telecom-blue mb-2">180+</div>
                  <div className="text-telecom-gray-light">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-telecom-blue mb-2">24/7</div>
                  <div className="text-telecom-gray-light">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Our Values
            </h2>
            <p className="text-xl text-telecom-gray-light">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-telecom-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-telecom-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-telecom-gray mb-3">
                      {value.title}
                    </h3>
                    <p className="text-telecom-gray-light">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-telecom-gray-light">
              Meet the experts driving innovation in cloud telephony
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-telecom-blue/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-telecom-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-telecom-gray mb-1">
                        {member.name}
                      </h3>
                      <p className="text-telecom-blue font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-telecom-gray-light mb-3">
                        {member.bio}
                      </p>
                      <Badge variant="secondary" className="bg-telecom-blue/10 text-telecom-blue">
                        {member.expertise}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-telecom-gray-light">
              Key milestones in our mission to transform global communications
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-telecom-blue/30 transform md:-translate-x-0.5"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-telecom-blue rounded-full transform md:-translate-x-2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-3 bg-telecom-blue/10 text-telecom-blue">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-telecom-gray mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-telecom-gray-light">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Our Headquarters
            </h2>
            <p className="text-xl text-telecom-gray-light">
              Based in Charlotte, NC with a global perspective
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-telecom-gray mb-6">
                Charlotte Office
              </h3>
              <div className="space-y-4 text-telecom-gray-light">
                <p>
                  <strong className="text-telecom-gray">Address:</strong><br />
                  MyJungleGarden Solutions<br />
                  123 Technology Drive<br />
                  Charlotte, NC 28202
                </p>
                <p>
                  <strong className="text-telecom-gray">Phone:</strong> +1 (704) 555-0123
                </p>
                <p>
                  <strong className="text-telecom-gray">Email:</strong> info@myjunglegarden.com
                </p>
              </div>
              <div className="mt-8">
                <Button variant="cta" size="lg" asChild>
                  <a
                    href="https://salescentri.com/get-started/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Our Office
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center text-telecom-gray-light">
                <Globe className="h-16 w-16 text-telecom-blue mx-auto mb-4" />
                <p className="text-lg">
                  Interactive office map would be embedded here<br />
                  (Google Maps integration)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-telecom-blue to-telecom-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Discover how iGCT can transform your business communications
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

export default About;