
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Loader2, CheckCircle, HelpCircle, BookOpen, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const LegalAdvice = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState<Message[]>([]);
  const { toast } = useToast();

  const commonQuestions = [
    "What should I include in a basic employment contract?",
    "How do I protect my intellectual property when hiring contractors?",
    "What are the key terms to include in a rental agreement?",
    "Do I need to trademark my business name?",
    "What's the difference between an LLC and a corporation?",
  ];

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      toast({
        title: "Empty Question",
        description: "Please enter a legal question.",
        variant: "destructive",
      });
      return;
    }

    askQuestion(question);
  };

  const askQuestion = (questionText: string) => {
    // Add user message to conversation
    setConversation((prev) => [
      ...prev,
      { type: "user", content: questionText, timestamp: new Date() },
    ]);
    
    setLoading(true);
    setQuestion("");

    // Simulate API delay
    setTimeout(() => {
      let response = "";
      
      // Mock responses based on questions
      if (questionText.toLowerCase().includes("employment contract")) {
        response = `An employment contract should include these key components:

1. Names and information of both parties
2. Job title and description
3. Start date and employment duration (if temporary)
4. Working hours and location
5. Compensation details (salary, bonuses, benefits)
6. Paid time off policies
7. Probation period terms
8. Termination conditions
9. Non-disclosure and confidentiality clauses
10. Non-compete provisions (where legal)
11. Intellectual property ownership
12. Dispute resolution process
13. Governing law

Remember that employment laws vary significantly by jurisdiction, so it's important to tailor your contract to comply with local regulations. I recommend having your final contract reviewed by a qualified employment attorney in your jurisdiction.`;
      } else if (questionText.toLowerCase().includes("intellectual property")) {
        response = `To protect your intellectual property when working with contractors, consider these measures:

1. Use a written independent contractor agreement that includes:
   - Clear IP assignment clauses stating that all work created belongs to your company
   - "Work made for hire" provisions (though these have limitations)
   - Waiver of moral rights (where applicable)
   - Confidentiality provisions

2. Implement additional safeguards:
   - Non-disclosure agreements (NDAs) before sharing sensitive information
   - Limited access to proprietary information
   - Proper documentation of all IP developed
   - Regular IP audits

3. Consider jurisdiction:
   - IP laws vary by country
   - Some jurisdictions limit the enforceability of certain clauses

It's advisable to consult with an IP attorney to draft contracts specific to your business needs and jurisdiction.`;
      } else {
        response = `Thank you for your legal question. This appears to be regarding ${questionText.split(' ').slice(0, 3).join(' ')}...

Based on general legal principles, here are some key points to consider:

1. Legal situations are highly fact-specific and jurisdiction-dependent
2. This area typically involves consideration of relevant statutes and case precedents
3. Documentation and written agreements are generally important for establishing legal positions
4. There may be statutory time limitations that apply to your situation
5. Different jurisdictions may treat this matter differently

For specific legal advice tailored to your situation, I recommend consulting with a qualified attorney in your jurisdiction who specializes in this area of law. They can provide guidance based on your specific circumstances and local regulations.`;
      }

      // Add assistant response to conversation
      setConversation((prev) => [
        ...prev,
        { type: "assistant", content: response, timestamp: new Date() },
      ]);
      
      setLoading(false);
      
      toast({
        title: "Response Generated",
        description: "Legal advice has been provided.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="legal-container py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-legal-navy mb-4">
              AI Legal Assistant
            </h1>
            <p className="text-gray-600">
              Get instant answers to your legal questions. Our AI assistant provides 
              guidance based on common legal principles, helping you understand your options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {conversation.length === 0 ? (
                      <div className="text-center py-12">
                        <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          No messages yet
                        </h3>
                        <p className="text-gray-500">
                          Ask a legal question to get started
                        </p>
                      </div>
                    ) : (
                      conversation.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${
                            message.type === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-4 ${
                              message.type === "user"
                                ? "bg-legal-navy text-white"
                                : "bg-legal-lightblue text-legal-charcoal"
                            }`}
                          >
                            <div className="whitespace-pre-wrap">{message.content}</div>
                            <div
                              className={`text-xs mt-1 ${
                                message.type === "user" ? "text-gray-200" : "text-gray-500"
                              }`}
                            >
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                        </div>
                      ))
                    )}

                    {loading && (
                      <div className="flex justify-start">
                        <div className="bg-legal-lightblue text-legal-charcoal max-w-[80%] rounded-lg p-4">
                          <div className="flex items-center">
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            <span>Generating legal advice...</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <Textarea
                    value={question}
                    onChange={handleQuestionChange}
                    placeholder="Ask your legal question here..."
                    className="legal-input min-h-[100px]"
                  />
                  <Button
                    type="submit"
                    className="absolute bottom-2 right-2 bg-legal-navy hover:bg-legal-navy/90"
                    size="sm"
                    disabled={loading || !question.trim()}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
                
                <div className="mt-2 text-xs text-gray-500">
                  <HelpCircle className="h-3 w-3 inline-block mr-1" />
                  This AI provides general information, not specific legal advice.
                </div>
              </form>
            </div>
            
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-legal-navy mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Common Legal Questions
                  </h3>
                  
                  <div className="space-y-3">
                    {commonQuestions.map((q, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start text-left h-auto p-3 whitespace-normal"
                        onClick={() => askQuestion(q)}
                      >
                        <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{q}</span>
                      </Button>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-serif font-semibold text-legal-navy mb-3">
                      Legal Disclaimer
                    </h3>
                    <p className="text-xs text-gray-500">
                      The information provided by this AI assistant is for general
                      informational purposes only and does not constitute legal advice.
                      It should not be relied upon for making specific legal decisions.
                      For advice tailored to your situation, please consult with a
                      qualified attorney.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LegalAdvice;
