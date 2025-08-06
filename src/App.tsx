import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { usePageTracking } from "@/hooks/use-page-tracking";
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
import ConsultationFormEnhanced from "./pages/ConsultationFormEnhanced";
import AdminDashboard from "./pages/AdminDashboard";
import WhyDutchImmigrationSimple from "./pages/WhyDutchImmigrationSimple";
import WhyDutchEducationSimple from "./pages/WhyDutchEducationSimple";
import NetherlandsImmigrationGuide from "./pages/NetherlandsImmigrationGuide";
import GermanyImmigrationGuide from "./pages/GermanyImmigrationGuide";
import IndexEn from "./pages/en/IndexEn";
import IndexNl from "./pages/nl/IndexNl";
import FAQ from "./pages/FAQ";
import GEOLandingPage from "./pages/GEOLandingPage";
import AIOptimizedContent from "./pages/AIOptimizedContent";

const queryClient = new QueryClient();

const AppRoutes = () => {
  usePageTracking(); // 自动跟踪所有页面访问
  
  return (
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
      <Route path="/consultation" element={<ConsultationFormEnhanced />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/why-dutch-immigration" element={<WhyDutchImmigrationSimple />} />
      <Route path="/why-dutch-education" element={<WhyDutchEducationSimple />} />
      <Route path="/netherlands-immigration-guide" element={<NetherlandsImmigrationGuide />} />
      <Route path="/germany-immigration-guide" element={<GermanyImmigrationGuide />} />
      
      {/* 多语言版本 */}
      <Route path="/en/" element={<IndexEn />} />
      <Route path="/nl/" element={<IndexNl />} />
      
      {/* FAQ页面 */}
      <Route path="/faq" element={<FAQ />} />
      
      {/* GEO优化页面 - 生成式引擎优化 */}
      <Route path="/ai-recommended-immigration" element={<GEOLandingPage />} />
      <Route path="/ai-optimized-immigration-guide" element={<AIOptimizedContent />} />
      
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
</HelmetProvider>
);

export default App;
