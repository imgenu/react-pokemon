import { loadType } from "./actions/typesAction";
import GlobalStyled from "./components/GlobalStyles";
import Home from "./pages/Home";
function App() {
  loadType();
  return (
    <div className="App">
      <GlobalStyled />
      <Home />
    </div>
  );
}

export default App;
