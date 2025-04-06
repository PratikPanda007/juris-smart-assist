
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="legal-gradient text-white py-16">
      <div className="legal-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Transform Your Legal Workflow Today
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Join thousands of businesses and legal professionals who are saving time
            and reducing costs with JurisSmart's AI-powered legal solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contract-drafting">
              <Button
                className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold w-full"
                size="lg"
              >
                Start Drafting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/legal-advice">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full"
                size="lg"
              >
                Explore Legal Advice
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
