import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
