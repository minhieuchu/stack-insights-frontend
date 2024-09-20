import { LeftBar } from "@/components/LeftBar";
import { TopBar } from "@/components/TopBar";
import ThemeProvider from "@/providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <TopBar />
      <LeftBar />
    </ThemeProvider>
  );
}

export default App;
