import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Role from "./test/Role";
import Test1 from "./song/Test1";

import Phaze2 from "./song/Phaze2";
import Phaze3 from "./song/Phaze3";
import Phaze4 from "./song/Phaze4";

import Fourth from "./song/Fourth";
import Fifth from "./song/Fifth";
import SelectAppeal from "./song/101";


import Test2 from "./test/Test2";
import Test3 from "./test/Test3";
import Layout from './song/cursor/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Role />} />
            <Route path='/first' element={<Test1 />} />
            <Route path='/test2' element={<Test2 />} />
            <Route path='/test3' element={<Test3 />} />

            <Route path='/phaze2' element={<Phaze2 />} />
            <Route path='/phaze3' element={<Phaze3 />} />
            <Route path='/phaze4' element={<Phaze4 />} />

            <Route path='/fourth' element={<Fourth />} />
            <Route path='/fifth' element={<Fifth />} />
            <Route path='/101' element={<SelectAppeal />} />

          </Routes>
        </Layout>
      </Router>
    </div >
  );
}

export default App;
