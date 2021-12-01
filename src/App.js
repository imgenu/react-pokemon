import GlobalStyled from "./components/GlobalStyles";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
function App() {
  const { isLoading } = useSelector((state) => state.types);
  return (
    <div className="App">
      <GlobalStyled />
      <Home />
    </div>
  );
}

export default App;
