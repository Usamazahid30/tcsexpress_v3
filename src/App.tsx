import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout";
import { ThemeProvider } from "@/hooks/use-theme";
import { HomePage, AboutPage, EcomSolutionPage, LogisticsPage } from "@/pages";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ecom-solution" element={<EcomSolutionPage />} />
            <Route path="/tcslogistics" element={<LogisticsPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
