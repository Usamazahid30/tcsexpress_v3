import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout";
import { ThemeProvider } from "@/hooks/use-theme";
import {
  HomePage,
  AboutPage,
  ContactPage,
  ServicesPage,
  EcomSolutionPage,
  LogisticsPage,
} from "@/pages";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServicesPage />} />
            <Route path="/ecom-solution" element={<EcomSolutionPage />} />
            <Route path="/logistics" element={<LogisticsPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
