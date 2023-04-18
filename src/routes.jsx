import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './App';
import GuitarPage from './pages/instruments/guitar';
import BassPage from './pages/instruments/bass';
import PianoPage from './pages/instruments/piano';
import UkelelePage from './pages/instruments/ukelele';
import SingingPage from './pages/instruments/singing';

const Nav = () => {
  return (
    <Router>
      <Switch>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/instruments/guitar' element={<GuitarPage />} />
        <Route path='/instruments/bass' element={<BassPage />} />
        <Route path='/instruments/piano' element={<PianoPage />} />
        <Route path='/instruments/ukelele' element={<UkelelePage />} />
        <Route path='/instruments/Singing' element={<SingingPage />} />
      </Routes>
      </Switch>
    </Router>
  );
}

export default Nav