
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./Components/page/Home";

import Layout from "./Hoc/Layout/Layout";
import About from "./Components/page/About";
import ACCOUNT from "./Components/page/Account";
import CONFIGURATOR from "./Components/page/Configurator";
import EXTERIORCONCEPT from "./Components/page/Exteriorconcept";
import BLOG from "./Components/page/Blog";
import ADRESS from "./Components/page/Adress";
import LEARNMORE from "./Components/page/Learn";
import IMAGES from "./Components/page/Images";
import HI from "./Components/page/Hi";






import {Route,Routes} from 'react-router-dom'
import Table from "./Components/page/Table";
function App() {

  return (
    <>
        {/* // <Layout> */}
          <Table/>
    {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<ACCOUNT />} />

        <Route path="/configurator" element={<CONFIGURATOR />} />
        <Route path="/exteriorconcept" element={<EXTERIORCONCEPT />} />
        <Route path="/blog" element={<BLOG />} />
        <Route path="/adress" element={<ADRESS />} />
        <Route path="/learn" element={<LEARNMORE/>} />
        <Route path="/images" element={<IMAGES/>} />
        <Route path="/hi" element={<HI/>} />








        
        
    </Routes> */}
    {/* // </Layout> */}
    </>
  );
}

export default App;
