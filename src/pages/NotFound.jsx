import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

function NotFound() {
  return (
    <div className="notfound">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="notfoundwrap"
      >
        <h1>Oops!</h1>
        <h2>404 - Page Not Found!</h2>
        <Link className="btn" to="/">
          <FaHome />
          Back To Home
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
