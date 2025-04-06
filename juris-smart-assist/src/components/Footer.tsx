
import { Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-legal-navy text-white">
      <div className="legal-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-6 w-6 text-legal-gold" />
              <span className="font-serif text-xl font-bold">Juris<span className="text-legal-gold">Smart</span></span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              AI-powered legal solutions for businesses and legal professionals.
              Simplify your legal workflow with intelligent tools.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-legal-gold">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contract-drafting" className="hover:text-legal-gold transition-colors">
                  Contract Drafting
                </Link>
              </li>
              <li>
                <Link to="/legal-summary" className="hover:text-legal-gold transition-colors">
                  Legal Summaries
                </Link>
              </li>
              <li>
                <Link to="/legal-advice" className="hover:text-legal-gold transition-colors">
                  Legal Advice
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-legal-gold transition-colors">
                  Document Review
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-legal-gold transition-colors">
                  E-Signatures
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-legal-gold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="hover:text-legal-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-legal-gold transition-colors">
                  Legal Templates
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-legal-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-legal-gold transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-legal-gold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="hover:text-legal-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-legal-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-legal-gold transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-legal-gold transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} JurisSmart. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-legal-gold">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-legal-gold">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.675 3H4.325C3.593 3 3 3.593 3 4.325v15.351C3 20.407 3.593 21 4.325 21h15.351c.731 0 1.325-.593 1.325-1.325V4.325C21 3.593 20.407 3 19.675 3zM8.675 18.045h-2.66V9.78h2.66v8.265zm-1.33-9.395c-.854 0-1.545-.691-1.545-1.545 0-.854.691-1.545 1.545-1.545s1.545.691 1.545 1.545c0 .854-.691 1.545-1.545 1.545zm11.32 9.395h-2.66v-4.025c0-.992-.017-2.266-1.379-2.266-1.38 0-1.592 1.078-1.592 2.193v4.098h-2.66V9.78h2.554v1.172h.037c.355-.671 1.221-1.379 2.511-1.379 2.685 0 3.188 1.766 3.188 4.061v4.412z" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-legal-gold">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
