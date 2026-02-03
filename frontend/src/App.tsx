import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./components/layout/Header";


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div style={{ paddingTop: "60px" }}>
        <Router />
      </div>
    </BrowserRouter>
  );
};

export default App;