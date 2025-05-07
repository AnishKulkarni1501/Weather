
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js'
import Astronomy from "./Astronomy.js";
function App() {
  return(
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/sunandmoon" element={<Astronomy/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
