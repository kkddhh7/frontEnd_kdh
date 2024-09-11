import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Role from "./test/Role";
import Test1 from "./song/Test1";
import Second from "./song/Second";
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
            <Route path='/test1' element={<Test1 />} />
            <Route path='/test2' element={<Test2 />} />
            <Route path='/test3' element={<Test3 />} />
            <Route path='/second' element={<Second />} />
          </Routes>
        </Layout>
      </Router>
    </div >
  );
}

export default App;
