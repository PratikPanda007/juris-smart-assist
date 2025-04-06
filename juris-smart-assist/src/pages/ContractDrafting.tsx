
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContractDrafting = () => {
  const [loading, setLoading] = useState(false);
  const [generatedContract, setGeneratedContract] = useState("");
  const { toast } = useToast();

  // Mock contract templates
  const contractTemplates = [
    { id: "nda", name: "Non-Disclosure Agreement" },
    { id: "service", name: "Service Agreement" },
    { id: "employment", name: "Employment Contract" },
    { id: "lease", name: "Real Estate Lease" },
    { id: "purchase", name: "Purchase Agreement" },
  ];

  const handleGenerateContract = () => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      
      const mockContract = `
# NON-DISCLOSURE AGREEMENT

THIS AGREEMENT is made and entered into as of the [Effective Date], by and between [Party A] and [Party B].

## 1. CONFIDENTIAL INFORMATION

"Confidential Information" shall mean any and all technical and non-technical information provided by either party to the other, including but not limited to patent and patent applications, trade secrets, and proprietary information, techniques, sketches, drawings, models, inventions, know-how, processes, apparatus, equipment, algorithms, software programs, software source documents, and formulae related to the current, future and proposed products and services of the parties, and includes, without limitation, information concerning research, experimental work, development, design details and specifications, engineering, financial information, procurement requirements, purchasing, manufacturing, customer lists, business forecasts, sales and merchandising, and marketing plans and information.

## 2. OBLIGATIONS OF RECEIVING PARTY

The Receiving Party shall:
a) Hold and maintain the Confidential Information in strict confidence;
b) Not disclose, reproduce, or distribute any Confidential Information to any person, firm, corporation, or entity;
c) Use the Confidential Information only for the limited purpose of evaluating and discussing potential business relationships between the parties.

## 3. TERM

This Agreement shall remain in effect for a period of [Term Duration] from the Effective Date, unless terminated earlier by mutual agreement of the parties.

## 4. GOVERNING LAW

This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction].

IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

[Party A Signature]
[Party A Name]
[Party A Title]

[Party B Signature]
[Party B Name]
[Party B Title]
      `;
      
      setGeneratedContract(mockContract);
      
      toast({
        title: "Contract Generated!",
        description: "Your contract has been successfully created.",
      });
      
    }, 2000);
  };

  const handleDownload = () => {
    // Create a blob with the contract text
    const blob = new Blob([generatedContract], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = "contract-draft.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Contract Downloaded",
      description: "Your contract has been downloaded successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="legal-container py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-legal-navy mb-4">
              AI-Powered Contract Drafting
            </h1>
            <p className="text-gray-600">
              Generate legally-sound contracts in minutes. Select a template, customize the details,
              and our AI will create a professional contract tailored to your needs.
            </p>
          </div>
          
          <Tabs defaultValue="template">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="template">Use Template</TabsTrigger>
              <TabsTrigger value="custom">Custom Contract</TabsTrigger>
            </TabsList>
            
            <TabsContent value="template">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="contract-type">Contract Type</Label>
                      <Select>
                        <SelectTrigger className="legal-input">
                          <SelectValue placeholder="Select a contract type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {contractTemplates.map((template) => (
                              <SelectItem key={template.id} value={template.id}>
                                {template.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="party-a">Party A (Your Name/Company)</Label>
                        <Input id="party-a" placeholder="Enter name or company" className="legal-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="party-b">Party B (Other Party)</Label>
                        <Input id="party-b" placeholder="Enter name or company" className="legal-input" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="term">Contract Term</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input id="term" placeholder="Duration (e.g. 1)" className="legal-input" />
                        <Select>
                          <SelectTrigger className="legal-input">
                            <SelectValue placeholder="Period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="years">Years</SelectItem>
                            <SelectItem value="months">Months</SelectItem>
                            <SelectItem value="days">Days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jurisdiction">Governing Jurisdiction</Label>
                      <Input id="jurisdiction" placeholder="e.g. State of California" className="legal-input" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additional">Additional Details</Label>
                      <Textarea 
                        id="additional" 
                        placeholder="Enter any specific details you want included in the contract" 
                        className="legal-input min-h-[100px]" 
                      />
                    </div>
                    
                    <Button 
                      onClick={handleGenerateContract} 
                      className="w-full bg-legal-navy hover:bg-legal-navy/90"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <FileText className="mr-2 h-4 w-4" />
                          Generate Contract
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="custom">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="contract-name">Contract Name</Label>
                      <Input id="contract-name" placeholder="e.g. Custom Partnership Agreement" className="legal-input" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="party-a-custom">Party A (Your Name/Company)</Label>
                        <Input id="party-a-custom" placeholder="Enter name or company" className="legal-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="party-b-custom">Party B (Other Party)</Label>
                        <Input id="party-b-custom" placeholder="Enter name or company" className="legal-input" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Contract Purpose</Label>
                      <Textarea 
                        id="purpose" 
                        placeholder="Describe what this contract is intended to accomplish" 
                        className="legal-input min-h-[80px]" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="terms">Key Terms & Conditions</Label>
                      <Textarea 
                        id="terms" 
                        placeholder="Describe the key terms and conditions you want to include" 
                        className="legal-input min-h-[150px]" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jurisdiction-custom">Governing Jurisdiction</Label>
                      <Input id="jurisdiction-custom" placeholder="e.g. State of California" className="legal-input" />
                    </div>
                    
                    <Button 
                      onClick={handleGenerateContract} 
                      className="w-full bg-legal-navy hover:bg-legal-navy/90"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <FileText className="mr-2 h-4 w-4" />
                          Generate Custom Contract
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {generatedContract && (
            <div className="mt-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-legal-navy">Generated Contract</h2>
                <Button onClick={handleDownload} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 whitespace-pre-wrap font-mono text-sm overflow-auto max-h-[600px]">
                {generatedContract}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContractDrafting;
