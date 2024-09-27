import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Role from "./test/Role";
import Test1 from "./test/Test1";
import Test2 from "./test/Test2";
import Test3 from "./test/Test3";
import ScrollDownPage from "./Pages_kdh/ScrollDownPage";
import Quiz1 from "./Pages_kdh/Quiz1";
import Quiz2 from "./Pages_kdh/Quiz2";
import Quiz3 from "./Pages_kdh/Quiz3";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>       
          <Route path='/' element={<Role />} />
          <Route path='/test1' element={<Test1 />} />
          <Route path='/test2' element={<Test2 />} />
          <Route path='/test3' element={<Test3 />} />

          <Route path='/scrolldownpage' element={<ScrollDownPage />} />
          <Route path='/quiz1' element={<Quiz1 />} />
          <Route path='/quiz2' element={<Quiz2 />} />
          <Route path='/quiz3' element={<Quiz3 />} />


        </Routes>   
      </Router>
      </div>
  );
}

export default App;
