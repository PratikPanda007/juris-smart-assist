
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, AlertTriangle, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LegalSummary = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [risks, setRisks] = useState<string[]>([]);
  const [fileName, setFileName] = useState("");
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check file type (PDF or DOCX)
    if (!file.name.endsWith(".pdf") && !file.name.endsWith(".docx")) {
      toast({
        title: "Invalid file format",
        description: "Please upload a PDF or DOCX file.",
        variant: "destructive",
      });
      return;
    }

    setFile(file);
    setFileName(file.name);
    toast({
      title: "File uploaded",
      description: `"${file.name}" has been uploaded successfully.`,
    });
  };

  const handleAnalyze = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a document to analyze.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Simulate analysis delay
    setTimeout(() => {
      // Mock summary and risks
      const mockSummary = `This is a Service Agreement between ABC Tech Solutions (Provider) and XYZ Corporation (Client) dated January 15, 2023. 

The agreement covers software development services to be provided over a 12-month period for a total fee of $120,000, payable in monthly installments of $10,000.

Key provisions include:
- Development of a custom CRM system with specified features
- Delivery timeline of 6 months for initial version
- Maintenance and support for 6 months after delivery
- Client owns all intellectual property in the deliverables
- Provider maintains ownership of pre-existing materials
- Confidentiality obligations extending 3 years beyond termination
- Limited liability capped at total contract value
- Governing law is the State of California`;

      const mockRisks = [
        "No clear acceptance criteria for deliverables",
        "Vague termination provisions without clear notice period",
        "No force majeure clause to address unforeseen circumstances",
        "Indemnification clause heavily favors the Client",
        "No defined dispute resolution process",
      ];

      setSummary(mockSummary);
      setRisks(mockRisks);
      setLoading(false);

      toast({
        title: "Analysis complete",
        description: "Your document has been analyzed successfully.",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="legal-container py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-legal-navy mb-4">
              Legal Document Analysis
            </h1>
            <p className="text-gray-600">
              Upload legal documents to get instant summaries, key insights, and risk assessments.
              Our AI analyzes contracts to help you understand complex legal language.
            </p>
          </div>

          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 ${
              dragging
                ? "border-legal-navy bg-legal-lightblue"
                : "border-gray-300 hover:border-legal-navy"
            } transition-colors`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Drag and drop your document here
              </h3>
              <p className="text-gray-500 mb-4">
                Supported formats: PDF, DOCX
              </p>

              <div className="relative">
                <Button
                  variant="outline"
                  className="border-legal-navy text-legal-navy hover:bg-legal-lightblue"
                >
                  Browse Files
                </Button>
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileInput}
                  accept=".pdf,.docx"
                />
              </div>
            </div>
          </div>

          {fileName && (
            <div className="mb-6 bg-legal-lightblue rounded-lg p-4 flex items-center">
              <FileText className="h-5 w-5 text-legal-navy mr-2" />
              <span className="text-legal-navy font-medium">{fileName}</span>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto text-legal-navy hover:bg-legal-lightblue/50"
                onClick={handleAnalyze}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Document"
                )}
              </Button>
            </div>
          )}

          {summary && (
            <Tabs defaultValue="summary">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="summary">Document Summary</TabsTrigger>
                <TabsTrigger value="risks">Risk Assessment</TabsTrigger>
              </TabsList>

              <TabsContent value="summary">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-serif font-semibold text-legal-navy mb-4">
                      Document Summary
                    </h2>
                    <div className="bg-white rounded-lg p-4 whitespace-pre-wrap">
                      {summary}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="risks">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-serif font-semibold text-legal-navy mb-4">
                      Identified Risks
                    </h2>
                    <ul className="space-y-3">
                      {risks.map((risk, index) => (
                        <li
                          key={index}
                          className="flex items-start p-3 bg-red-50 border border-red-100 rounded-md"
                        >
                          <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                    {risks.length === 0 ? (
                      <div className="flex items-center justify-center p-4 bg-green-50 border border-green-100 rounded-md">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>No significant risks detected.</span>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}

          {/* Sample documents section */}
          {!summary && (
            <div className="mt-12">
              <h2 className="text-xl font-serif font-semibold text-legal-navy mb-4">
                Try with a Sample Document
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="p-6 h-auto flex items-start justify-start text-left"
                  onClick={() => {
                    setFileName("Sample-NDA.pdf");
                    toast({
                      title: "Sample document selected",
                      description: "Sample NDA has been loaded for analysis.",
                    });
                  }}
                >
                  <div>
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 text-legal-navy mr-2" />
                      <span className="font-medium">Sample NDA</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      A standard non-disclosure agreement between two parties.
                    </p>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="p-6 h-auto flex items-start justify-start text-left"
                  onClick={() => {
                    setFileName("Sample-Employment-Contract.pdf");
                    toast({
                      title: "Sample document selected",
                      description: "Sample Employment Contract has been loaded for analysis.",
                    });
                  }}
                >
                  <div>
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 text-legal-navy mr-2" />
                      <span className="font-medium">Sample Employment Contract</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      A standard employment agreement with common clauses.
                    </p>
                  </div>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalSummary;
