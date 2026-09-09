import { MainLayout } from "@/components/layout";
import { ThemeProvider } from "@/hooks/use-theme";
import { HomePage } from "@/pages";

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </ThemeProvider>
  );
}
