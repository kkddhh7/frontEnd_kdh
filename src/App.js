import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Role from "./test/Role";
import Test1 from "./test/Test1";
import Test2 from "./test/Test2";
import Test3 from "./test/Test3";
import Map from "./map/map";
import Injungjun from './spot/injungjun';
import Nakseonjae from './spot/nakseonjae';
import Buyongji from './spot/buyongji';
import Juniper from './spot/juniper';
import Yunghwadang from './spot/yunghwadang';
import Changhoji from './spot/changhoji';
import Loading from './loading/loading1';
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
          <Route path='/loading' element={<Loading/>} /> 
          <Route path='/map' element={<Map/>} /> 
          <Route path='/injungjun' element={<Injungjun/>} />
          <Route path='/nakseonjae' element={<Nakseonjae/>} />
          <Route path='/buyongji' element={<Buyongji/>} />
          <Route path='/yunghwadang' element={<Yunghwadang/>} />
          <Route path='/juniper' element={<Juniper/>} />
          <Route path='/nakseonjae/changhoji' element={<Changhoji/>} />
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

