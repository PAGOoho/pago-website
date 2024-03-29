import { useContext } from 'react';

import Logo from '../components/Logo';
import PhysicsObjects from '../components/PhysicsObjects';
import '../layout/styles/home.scss';
import ContactData from '../components/ContactData';

import PhysicsContext from '../context/PhysicsContext';

import { motion } from 'framer-motion';

function Home() {
  const { addBall } = useContext(PhysicsContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="home"
      onClick={addBall}
      onTouchStart={addBall}
    >
      <div className="overlay">
        <Logo />
        <ContactData />
      </div>
      <PhysicsObjects />
    </motion.div>
  );
}

export default Home;
