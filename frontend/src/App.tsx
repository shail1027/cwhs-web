import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div style={{ paddingTop: "60px", paddingBottom: "80px"}}>
        <Router />
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;