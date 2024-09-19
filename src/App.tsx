import { SearchBox } from "@/components/SearchBox";
import { TopBar } from "@/components/TopBar";
import ThemeProvider from "@/providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <TopBar />
      <SearchBox />
    </ThemeProvider>
  );
}

export default App;
