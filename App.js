
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gepel from './pages/gepel.js';
import NoPage from './pages/noPage.js';
import Rendez from './pages/rendez.js';
import Valaszto from './pages/valaszto.js';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
    <Route exact path="" element={<Gepel/>} />
    <Route exact path="*" element={<NoPage/>} />
    <Route exact path="rendez" element={<Rendez/>} />
    <Route exact path="valaszto" element={<Valaszto/>} />
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
