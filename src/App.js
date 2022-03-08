import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/homepage";
import _404 from "./pages/404";
import ProjectName from "./pages/projectName";
import Home from "./pages/projectName/home";
import Apartment from "./pages/projectName/apartment";
import Building from "./pages/projectName/building";
import Location from "./pages/projectName/location";
import Detail from "./pages/projectName/building/apartment_id/detail";


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route path="/:projectName" element={<ProjectName />} />
        <Route path=":projectName/home" element={<Home />} />
        <Route path=":projectName/apartment" element={<Apartment />} />
        <Route path=":projectName/building" element={<Building />}/>
          <Route path=":projectName/building/:apartment_id/detail" element={<Detail/>}/>

        <Route path=":projectName/location" element={<Location />} />
        <Route path="*" element={<_404 />} />
      </Routes>
    </div>
    </Router>
    
  );
}

const Trail = () =>{
  return(
    <h1>Trial</h1>
  )
}
export default App;
