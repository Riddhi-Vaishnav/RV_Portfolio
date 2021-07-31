import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
//import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact"
import "./App.scss"
import {useState} from "react";


function App() {

  const [menuOpen,setMenuOpen] = useState(true)
  return (
    <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <div className="sections">
         <Intro></Intro>
         <Portfolio></Portfolio>
         <Works></Works>
         <Contact></Contact>
       </div>
        
        
    </div>
  );
}

export default App;
