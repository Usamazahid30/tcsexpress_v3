import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout";
import { ThemeProvider } from "@/hooks/use-theme";
import { PageTransitionProvider } from "@/components/common";
import {
  HomePage,
  AboutPage,
  ContactPage,
  ServicesPage,
  EcomSolutionPage,
  LogisticsPage,
  InternationalPage,
  LeadershipPage,
  FounderPage,
  SairaPage,
  HassanRazaPage,
} from "@/pages";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <PageTransitionProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/leadership" element={<LeadershipPage />} />
              <Route path="/our-leadership" element={<LeadershipPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServicesPage />} />
              <Route path="/ecom-solution" element={<EcomSolutionPage />} />
              <Route path="/logistics" element={<LogisticsPage />} />
              <Route path="/tcslogistics" element={<LogisticsPage />} />
              <Route path="/international" element={<InternationalPage />} />
              {/* Leader profile routes */}
              <Route path="/founder" element={<FounderPage />} />
              <Route path="/saira-awan-malik" element={<SairaPage />} />
              <Route path="/HassanRaza" element={<HassanRazaPage />} />
              <Route path="/hassan-raza" element={<HassanRazaPage />} />
              <Route path="/qasim-awan" element={<LeadershipPage />} />
              <Route path="/saadia-awan" element={<LeadershipPage />} />
              <Route path="/anwaar-nizami" element={<LeadershipPage />} />
              <Route path="/abdul-qadir-aziz" element={<LeadershipPage />} />
            </Routes>
          </MainLayout>
        </PageTransitionProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
