import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import Loader from './components/Loader';

import { PhysicsProvider } from './context/PhysicsContext';

function App() {
  const [loader, setLoader] = useState(true);

  setTimeout(() => setLoader(false), 2000);

  return (
    <PhysicsProvider>
      {loader ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </PhysicsProvider>
  );
}

export default App;
