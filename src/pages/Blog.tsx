import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight, ExternalLink } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Future of Global Cloud Telephony: Trends Shaping 2024",
    excerpt: "Discover the key trends driving cloud telephony adoption and how iGCT is positioned to lead the transformation in global business communications.",
    author: "Sarah Mitchell",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Industry Insights",
    slug: "future-global-cloud-telephony-2024"
  };

  const blogPosts = [
    {
      id: 2,
      title: "How to Reduce Telecom Costs by 50% with Smart Call Routing",
      excerpt: "Learn proven strategies to optimize your telecommunication expenses using intelligent routing algorithms and global infrastructure.",
      author: "David Chen",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Cost Optimization",
      slug: "reduce-telecom-costs-smart-routing"
    },
    {
      id: 3,
      title: "CRM Integration Best Practices for Sales Teams",
      excerpt: "Maximize your sales productivity with seamless CRM integration strategies that connect your telephony and customer data.",
      author: "Emily Rodriguez",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Sales Strategy",
      slug: "crm-integration-best-practices"
    },
    {
      id: 4,
      title: "Security and Compliance in Cloud Telephony: A Complete Guide",
      excerpt: "Understanding SOC 2, GDPR, and ISO certifications in cloud telephony platforms and their importance for enterprise security.",
      author: "Michael Thompson",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Security",
      slug: "security-compliance-cloud-telephony"
    },
    {
      id: 5,
      title: "Remote Sales Teams: Maximizing Productivity with Cloud Technology",
      excerpt: "Discover how distributed sales teams leverage cloud telephony to maintain high performance and customer engagement.",
      author: "Lisa Parker",
      date: "2024-01-03",
      readTime: "5 min read",
      category: "Remote Work",
      slug: "remote-sales-teams-productivity"
    },
    {
      id: 6,
      title: "Real-time Analytics: Turning Call Data into Business Intelligence",
      excerpt: "Transform your telephony data into actionable insights that drive better business decisions and improved customer experiences.",
      author: "James Wilson",
      date: "2024-01-01",
      readTime: "9 min read",
      category: "Analytics",
      slug: "real-time-analytics-business-intelligence"
    },
    {
      id: 7,
      title: "IVR Automation: Creating Seamless Customer Journeys",
      excerpt: "Design intelligent Interactive Voice Response systems that enhance customer experience while reducing operational costs.",
      author: "Rachel Kim",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Customer Experience",
      slug: "ivr-automation-customer-journeys"
    },
    {
      id: 8,
      title: "Global Expansion Made Easy: Telephony for International Business",
      excerpt: "Navigate the complexities of international business communications with scalable cloud telephony solutions.",
      author: "Marco Santini",
      date: "2023-12-25",
      readTime: "8 min read",
      category: "Global Business",
      slug: "global-expansion-international-telephony"
    },
    {
      id: 9,
      title: "The ROI of Cloud Telephony: Measuring Success Metrics",
      excerpt: "Learn how to calculate and demonstrate the return on investment for your cloud telephony implementation.",
      author: "Jennifer Davis",
      date: "2023-12-22",
      readTime: "7 min read",
      category: "ROI Analysis",
      slug: "roi-cloud-telephony-metrics"
    }
  ];

  const categories = [
    "All Posts",
    "Industry Insights", 
    "Cost Optimization",
    "Sales Strategy",
    "Security",
    "Remote Work",
    "Analytics",
    "Customer Experience",
    "Global Business",
    "ROI Analysis"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-gray mb-6">
              iGCT Blog & Insights
            </h1>
            <p className="text-xl text-telecom-gray-light mb-8">
              Stay ahead with the latest trends, best practices, and expert insights in cloud telephony and business communications
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-telecom-gray mb-8">Featured Article</h2>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-16">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Badge variant="secondary" className="mb-4 bg-telecom-blue/10 text-telecom-blue">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-telecom-gray mb-4 hover:text-telecom-blue transition-colors">
                    <a
                      href="https://salescentri.com/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {featuredPost.title}
                    </a>
                  </h3>
                  <p className="text-telecom-gray-light mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-telecom-gray-light mb-6">
                    <div className="flex items-center space-x-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button variant="cta" asChild>
                    <a
                      href="https://salescentri.com/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 rounded-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-telecom-blue text-4xl font-bold mb-2">Latest</div>
                    <div className="text-telecom-gray font-semibold">Industry Insights</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className={`cursor-pointer hover:bg-telecom-blue hover:text-white transition-colors ${
                  index === 0 ? "bg-telecom-blue text-white" : ""
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-telecom-blue/10 text-telecom-blue">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-telecom-gray mb-3 group-hover:text-telecom-blue transition-colors">
                    <a
                      href="https://salescentri.com/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-telecom-gray-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-telecom-gray-light mb-4">
                    <span>{post.author}</span>
                    <div className="flex items-center space-x-4">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline-cta" size="sm" asChild>
                    <a
                      href="https://salescentri.com/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <a
                href="https://salescentri.com/blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Load More Articles
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-telecom-blue to-telecom-blue-dark rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with iGCT Insights
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Get the latest articles, industry trends, and expert tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-telecom-gray flex-1"
              />
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-telecom-blue"
                asChild
              >
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-telecom-gray mb-4">
            Explore More Resources
          </h3>
          <p className="text-xl text-telecom-gray-light mb-8">
            Dive deeper into cloud telephony with our comprehensive resource library
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a
                href="https://salescentri.com/resources/case-studies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Case Studies
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline-cta" size="lg" asChild>
              <a
                href="https://salescentri.com/resources/whitepapers-ebooks"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whitepapers & eBooks
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;