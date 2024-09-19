import { Footer } from "@/components/Footer";
import { SearchBox } from "@/components/SearchBox";
import { TopBar } from "@/components/TopBar";
import ThemeProvider from "@/providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <TopBar />
      <SearchBox />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
