
import { 
  FileText, 
  Search, 
  MessageSquare, 
  ShieldCheck, 
  PenTool 
} from "lucide-react";

const features = [
  {
    name: "Contract Drafting",
    description:
      "Generate legally-sound contracts and agreements based on your specific requirements with AI-powered customization.",
    icon: FileText,
  },
  {
    name: "Document Analysis",
    description:
      "Upload and analyze legal documents to extract key information, identify risks, and get clear summaries.",
    icon: Search,
  },
  {
    name: "Legal Advice",
    description:
      "Get AI-powered answers to common legal questions and scenario-based guidance for your specific situation.",
    icon: MessageSquare,
  },
  {
    name: "Compliance Checks",
    description:
      "Ensure your documents comply with relevant regulations and standards with automated compliance verification.",
    icon: ShieldCheck,
  },
  {
    name: "E-Signatures",
    description:
      "Securely sign and send contracts for signature with our integrated e-signature solution.",
    icon: PenTool,
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="legal-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-legal-navy mb-4">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform offers a suite of tools designed to streamline legal processes
            and provide expert guidance at a fraction of traditional costs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="feature-card">
              <div className="h-12 w-12 rounded-md flex items-center justify-center bg-legal-lightblue text-legal-navy mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-legal-navy mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
