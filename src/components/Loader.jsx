import '../layout/styles/loader.scss';

import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="loadingWrap"
    >
      <div className="container">
        <div className="h1Container">
          <div className="cube h1 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>

        <div className="h2Container">
          <div className="cube h2 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>

        <div className="h3Container">
          <div className="cube h3 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
