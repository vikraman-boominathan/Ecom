import NavHeader from "./components/NavHeader";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
    <div>
      <NavHeader />
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <CreateAccount />
      </div>
      <Footer />
    </div>
  );
}

export default App;
