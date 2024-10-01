import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Role from "./test/Role";
import Test2 from "./test/Test2";
import Test3 from "./test/Test3";

import Phaze1 from "./song/Phaze1";
import Phaze2 from "./song/Phaze2";
import Phaze3 from "./song/Phaze3";
import Phaze4 from "./song/Phaze4";
import Phaze5 from "./song/Phaze5";
import Phaze6 from "./song/Phaze6";
import Phaze7 from "./song/Phaze7";

import SelectAppeal from "./song/101";

import Layout from './song/cursor/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes> 
            <Route path='/' element={<Role />} />
            <Route path='/test2' element={<Test2 />} />
            <Route path='/test3' element={<Test3 />} />

            <Route path='/phaze1' element={<Phaze1 />} />
            <Route path='/phaze2' element={<Phaze2 />} />
            <Route path='/phaze3' element={<Phaze3 />} />
            <Route path='/phaze4' element={<Phaze4 />} />
            <Route path='/phaze5' element={<Phaze5 />} />
            <Route path='/phaze6' element={<Phaze6 />} />
            <Route path='/phaze7' element={<Phaze7 />} />

            <Route path='/101' element={<SelectAppeal />} />
          </Routes>
        </Layout>
      </Router>
    </div >
  );
}

export default App;
