
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeatureHighlight from "@/components/FeatureHighlight";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      
      <FeatureHighlight
        title="Smart Contract Drafting"
        description="Create legally-sound contracts in minutes, not hours. Our AI-powered platform generates customized agreements based on your specific requirements, with industry-standard clauses and provisions tailored to your needs."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
        alt="Person working on legal contract"
        buttonText="Start Drafting"
        buttonLink="/contract-drafting"
      />
      
      <FeatureHighlight
        title="Legal Document Analysis"
        description="Upload contracts and legal documents to get instant insights. Our AI identifies key terms, potential risks, and provides plain-language summaries, helping you make informed decisions faster."
        image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
        alt="AI analyzing legal documents"
        buttonText="Analyze Documents"
        buttonLink="/legal-summary"
        reversed={true}
      />
      
      <FeatureHighlight
        title="AI Legal Assistant"
        description="Get answers to your legal questions instantly. Our legal assistant draws from a vast database of legal knowledge to provide accurate, relevant guidance for your specific situation."
        image="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=800"
        alt="AI legal assistant interface"
        buttonText="Ask a Question"
        buttonLink="/legal-advice"
      />
      
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
