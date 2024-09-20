import { ContentPane } from "@/components/ContentPane";
import { LeftBar } from "@/components/LeftBar";
import { TopBar } from "@/components/TopBar";
import ThemeProvider from "@/providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <TopBar />
      <LeftBar />
      <ContentPane />
    </ThemeProvider>
  );
}

export default App;
