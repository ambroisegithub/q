import {Route, Routes,BrowserRouter} from "react-router-dom"
import "./App.css";
import Footer from "./components/Footer.js"
import About from "./components/About"
import Nav from './components/Nav';
import Homepage from './components/Homepage';

function App() {
  return (

<BrowserRouter>
<Nav />
<Routes>

        <Route index element={<Homepage />} />
        <Route path="about" element ={<About/>}/>
        <Route index element={<Footer />} />
</Routes>
</BrowserRouter>



  );
}

export default App;
