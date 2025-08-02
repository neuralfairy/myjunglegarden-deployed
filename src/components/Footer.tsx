import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-telecom-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-6 w-6 text-telecom-green" />
              <span className="text-lg font-bold">MyJungleGarden</span>
            </div>
            <p className="text-gray-300 text-sm">
              Global Cloud Telephony solutions that power your business communications.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Charlotte, NC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@myjunglegarden.com" className="hover:text-telecom-green transition-colors">
                  info@myjunglegarden.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="hover:text-telecom-green transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/features" className="hover:text-telecom-green transition-colors">
                  iGCT Platform
                </Link>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/use-case-navigator/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-telecom-green transition-colors flex items-center space-x-1"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/psa-suite/integrations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-telecom-green transition-colors flex items-center space-x-1"
                >
                  <span>CRM Integrations</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/platforms/lead-management/lead-generation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-telecom-green transition-colors flex items-center space-x-1"
                >
                  <span>ROI Calculator</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="https://salescentri.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-telecom-green transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/resources/case-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-telecom-green transition-colors flex items-center space-x-1"
                >
                  <span>Case Studies</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/resources/whitepapers-ebooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-telecom-green transition-colors flex items-center space-x-1"
                >
                  <span>Whitepapers</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link to="/faq" className="hover:text-telecom-green transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-telecom-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://salescentri.com/company/about-us/leadership-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-telecom-green transition-colors flex items-center space-x-1"
                >
                  <span>Leadership</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-telecom-green transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-telecom-green transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 MyJungleGarden Solutions. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a
              href="https://salescentri.com/trust/security-privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-telecom-green transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://salescentri.com/trust/compliance-certifications"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-telecom-green transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="https://salescentri.com?utm_source=myjunglegarden.com&utm_medium=footer&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-telecom-green transition-colors flex items-center space-x-1"
            >
              <span>Powered by Sales Intelligence Platform</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;