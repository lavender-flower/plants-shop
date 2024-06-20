
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import ShopPlant from './pages/ShopPlant/ShopPlant';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Planter from './pages/Planter/Planter';
import PlantCare from './pages/PlantCare/PlantCare';
import DecorIdea from './pages/DecorIdea/DecorIdea';
import Services from './pages/Services/Services';


function App() {
  return (
    <div className="App">
       <Router>
      <Header></Header>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/shopplants" element={<ShopPlant />} />
  <Route path="/planters" element={<Planter />} />
  <Route path="/Decoridea" element={<DecorIdea />} />
  <Route path="/plantcare" element={<PlantCare />} />
  <Route path="/services" element={<Services />} />


</Routes>
<Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
