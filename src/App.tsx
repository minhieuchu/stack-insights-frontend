import { Footer } from "@/components/Footer";
import { LeftBar } from "@/components/LeftBar";
import { TopBar } from "@/components/TopBar";
import ThemeProvider from "@/providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <TopBar />
      <LeftBar />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
