
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="legal-gradient text-white py-20 sm:py-24">
      <div className="legal-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-shadow mb-6">
            AI-Powered Legal Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-8">
            Streamline your legal workflow with smart contract drafting, document analysis,
            and AI-driven legal advice. Save time and reduce costs with JurisSmart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contract-drafting">
              <Button
                className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold text-lg px-8 py-6"
                size="lg"
              >
                Draft a Contract
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/legal-advice">
              <Button
                className="bg-white hover:bg-gray-100 text-legal-navy font-semibold text-lg px-8 py-6"
                variant="outline"
                size="lg"
              >
                Get Legal Advice
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Abstract shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
