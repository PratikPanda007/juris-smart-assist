
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContractDrafting from "./pages/ContractDrafting";
import LegalSummary from "./pages/LegalSummary";
import LegalAdvice from "./pages/LegalAdvice";
import NotFound from "./pages/NotFound";
import "./index.css";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contract-drafting" element={<ContractDrafting />} />
          <Route path="/legal-summary" element={<LegalSummary />} />
          <Route path="/legal-advice" element={<LegalAdvice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
