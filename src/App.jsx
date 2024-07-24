import NavHeader from "./components/NavHeader";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <NavHeader />
      <Navbar />
      <div className="max-w-7xl mx-auto">
         <NotFound /> 
        {/* <Login /> */}
        {/* <CreateAccount /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
