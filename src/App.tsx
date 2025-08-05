import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookie from "./pages/Cookie";
import Disclaimer from "./pages/Disclaimer";
import Immigration from "./pages/services/Immigration";
import Education from "./pages/services/Education";
import Consulting from "./pages/services/Consulting";
import Registration from "./pages/services/Registration";
import Finance from "./pages/services/Finance";
import Ecommerce from "./pages/services/Ecommerce";
import Development from "./pages/services/Development";
import Business from "./pages/services/Business";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/services/immigration" element={<Immigration />} />
          <Route path="/services/education" element={<Education />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/registration" element={<Registration />} />
          <Route path="/services/finance" element={<Finance />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/business" element={<Business />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
