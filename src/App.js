import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Role from "./test/Role";
import Test1 from "./test/Test1";
import Test2 from "./test/Test2";
import Test3 from "./test/Test3";
import EventInfo from './Pages_kdh/EventInfo';
import Quiz from './Pages_kdh/Quiz';
import TravelInfo from './Pages_kdh/TravelInfo';
import PhotoAlbum from './Pages_kdh/PhotoAlbum';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>       
          <Route path='/' element={<Role />} />
          <Route path='/test1' element={<Test1 />} />
          <Route path='/test2' element={<Test2 />} />
          <Route path='/test3' element={<Test3 />} />
          <Route path='/eventinfo' element={<EventInfo />} />
          <Route path='/travelinfo' element={<TravelInfo />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/photoalbum' element={<PhotoAlbum />} />
        </Routes>   
      </Router>
      </div>
  );
}

export default App;
