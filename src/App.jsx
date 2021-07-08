import GlobalStyle from "./globalStyles";
import { AqiBanner } from "./components/aqibanner/AqiBanner";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Sidebar />
      <AqiBanner />
    </div>
  );
}

export default App;
