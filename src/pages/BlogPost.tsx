import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowLeft, ExternalLink, Share2 } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog posts data - in a real app, this would come from an API or CMS
  const blogPosts: { [key: string]: any } = {
    "future-global-cloud-telephony-2024": {
      title: "The Future of Global Cloud Telephony: Trends Shaping 2024",
      content: `
        <p>The telecommunications industry is experiencing a revolutionary transformation as cloud telephony solutions become the backbone of modern business communications. In 2024, we're witnessing unprecedented adoption rates and technological advances that are reshaping how companies connect with their customers globally.</p>

        <h2>Key Trends Driving Cloud Telephony Adoption</h2>

        <h3>1. AI-Powered Intelligence</h3>
        <p>Artificial intelligence is revolutionizing call routing, analytics, and customer experience. Modern platforms like <a href="https://salescentri.com" target="_blank" rel="noopener noreferrer">salescentri.com</a> are integrating AI to provide predictive analytics, sentiment analysis, and automated quality scoring.</p>

        <h3>2. Global Expansion Simplified</h3>
        <p>Businesses are expanding internationally faster than ever, and cloud telephony platforms are making this seamless. With support for 180+ countries and local number provisioning, companies can establish a global presence without physical infrastructure.</p>

        <h3>3. Enhanced Security and Compliance</h3>
        <p>As data privacy regulations tighten globally, cloud telephony providers are investing heavily in security. SOC 2, GDPR, and ISO certifications are becoming standard, with end-to-end encryption and advanced threat protection built-in.</p>

        <h2>The Impact on Business Communications</h2>

        <p>The shift to cloud telephony is fundamentally changing how businesses operate:</p>

        <ul>
          <li><strong>Cost Reduction:</strong> Companies are seeing 30-50% reduction in telecommunication costs</li>
          <li><strong>Scalability:</strong> Instant scaling without hardware investments</li>
          <li><strong>Remote Work Support:</strong> Seamless communication for distributed teams</li>
          <li><strong>Analytics-Driven Decisions:</strong> Real-time insights into communication patterns</li>
        </ul>

        <h2>iGCT: Leading the Transformation</h2>

        <p>At MyJungleGarden Solutions, our iGCT platform embodies these trends by providing:</p>

        <ul>
          <li>AI-powered call routing and analytics</li>
          <li>Global coverage with local presence</li>
          <li>Enterprise-grade security and compliance</li>
          <li>Seamless CRM integrations with platforms available at <a href="https://salescentri.com/solutions/psa-suite/integrations" target="_blank" rel="noopener noreferrer">salescentri.com integrations</a></li>
        </ul>

        <h2>Looking Ahead: What's Next?</h2>

        <p>The future of cloud telephony will be defined by even deeper AI integration, enhanced personalization, and seamless omnichannel experiences. Businesses that adopt these technologies now will have a significant competitive advantage.</p>

        <p>To learn more about how iGCT can transform your business communications, explore our <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">customer success stories</a> or try our platform risk-free.</p>
      `,
      author: "Sarah Mitchell",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Industry Insights"
    },
    "reduce-telecom-costs-smart-routing": {
      title: "How to Reduce Telecom Costs by 50% with Smart Call Routing",
      content: `
        <p>Telecommunication costs can be one of the largest operational expenses for businesses with global reach. However, with intelligent call routing strategies, companies can achieve dramatic cost reductions while improving call quality and customer experience.</p>

        <h2>Understanding Smart Call Routing</h2>

        <p>Smart call routing goes beyond simple geographic routing. It uses real-time data to make intelligent decisions about call paths, considering factors like:</p>

        <ul>
          <li>Network quality and latency</li>
          <li>Carrier pricing and availability</li>
          <li>Time of day and geographic constraints</li>
          <li>Historical performance data</li>
        </ul>

        <h2>Cost Optimization Strategies</h2>

        <h3>1. Least Cost Routing (LCR)</h3>
        <p>Automatically select the most cost-effective carrier for each call while maintaining quality standards. Our iGCT platform continuously monitors carrier performance and pricing to ensure optimal routing decisions.</p>

        <h3>2. Time-Based Routing</h3>
        <p>Route calls based on time zones and business hours to take advantage of off-peak pricing and local rates.</p>

        <h3>3. Quality-Based Selection</h3>
        <p>Balance cost savings with call quality by setting minimum quality thresholds and avoiding carriers with poor performance metrics.</p>

        <h2>Real-World Results</h2>

        <p>Companies using advanced routing strategies typically see:</p>

        <ul>
          <li>30-50% reduction in per-minute costs</li>
          <li>Improved call completion rates</li>
          <li>Better audio quality and reduced latency</li>
          <li>Enhanced customer satisfaction scores</li>
        </ul>

        <p>Learn more about cost optimization strategies in our <a href="https://salescentri.com/platforms/lead-management/lead-generation" target="_blank" rel="noopener noreferrer">ROI calculator</a> and see how much you could save.</p>

        <h2>Implementation Best Practices</h2>

        <p>To maximize cost savings with smart routing:</p>

        <ol>
          <li>Analyze your current calling patterns and costs</li>
          <li>Set up quality thresholds and monitoring</li>
          <li>Implement gradual rollout with testing</li>
          <li>Monitor results and adjust strategies</li>
        </ol>

        <p>For expert guidance on implementing smart routing, contact our team through <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">salescentri.com demo booking</a>.</p>
      `,
      author: "David Chen",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Cost Optimization"
    }
  };

  const post = blogPosts[slug || ""] || blogPosts["future-global-cloud-telephony-2024"];

  const relatedPosts = [
    {
      title: "CRM Integration Best Practices for Sales Teams",
      slug: "crm-integration-best-practices",
      category: "Sales Strategy"
    },
    {
      title: "Security and Compliance in Cloud Telephony",
      slug: "security-compliance-cloud-telephony",
      category: "Security"
    },
    {
      title: "Remote Sales Teams: Maximizing Productivity",
      slug: "remote-sales-teams-productivity",
      category: "Remote Work"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="outline-cta" size="sm" className="mb-6" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <Badge variant="secondary" className="mb-4 bg-telecom-blue/10 text-telecom-blue">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-telecom-gray mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-telecom-gray-light mb-6">
              <div className="flex items-center space-x-2">
                <CalendarDays className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="text-telecom-gray">By {post.author}</div>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline-cta" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
              <Button variant="cta" size="sm" asChild>
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try iGCT Free
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg prose-telecom max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    '--tw-prose-body': 'hsl(var(--telecom-gray-light))',
                    '--tw-prose-headings': 'hsl(var(--telecom-gray))',
                    '--tw-prose-links': 'hsl(var(--telecom-blue))',
                    '--tw-prose-bold': 'hsl(var(--telecom-gray))',
                    '--tw-prose-bullets': 'hsl(var(--telecom-blue))',
                  } as React.CSSProperties}
                />
                
                {/* Author Bio */}
                <Card className="border-0 shadow-lg mt-12">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-telecom-blue/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-telecom-blue">
                          {post.author.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-telecom-gray mb-2">
                          {post.author}
                        </h3>
                        <p className="text-telecom-gray-light">
                          Expert in cloud telephony and business communications with extensive experience helping companies optimize their global communication strategies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* CTA Card */}
                <Card className="border-0 shadow-lg mb-8 bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-telecom-gray mb-4">
                      Try iGCT Today
                    </h3>
                    <p className="text-telecom-gray-light mb-6">
                      Experience the power of global cloud telephony with our free trial
                    </p>
                    <Button variant="cta" className="w-full mb-3" asChild>
                      <a
                        href="https://salescentri.com/get-started/free-trial"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Start Free Trial
                      </a>
                    </Button>
                    <Button variant="outline-cta" className="w-full" asChild>
                      <a
                        href="https://salescentri.com/get-started/book-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Demo
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Related Posts */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-telecom-gray mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost, index) => (
                        <div key={index}>
                          <Link 
                            to={`/blog/${relatedPost.slug}`}
                            className="block hover:text-telecom-blue transition-colors"
                          >
                            <h4 className="font-semibold text-telecom-gray mb-1">
                              {relatedPost.title}
                            </h4>
                            <Badge variant="secondary" className="text-xs bg-telecom-blue/10 text-telecom-blue">
                              {relatedPost.category}
                            </Badge>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-telecom-gray mb-4">
              Stay Updated with iGCT Insights
            </h3>
            <p className="text-telecom-gray-light mb-8">
              Get the latest articles and industry insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-gray-300 flex-1"
              />
              <Button variant="cta">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;