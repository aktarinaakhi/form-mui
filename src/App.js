import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Navigation from "./shared/Navigation";


function App() {
  return (

    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route exact path="home" element={<Home />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;  
