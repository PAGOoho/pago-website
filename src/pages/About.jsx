import '../layout/styles/about.scss';

import { motion } from 'framer-motion';

/*
<h2>VAT Number according to par. 27a UStG:</h2>
        <p>[Umsatzsteueridentifikationsnummer]</p>
        <h2>Register Entry:</h2>
        <p>Entry in the commercial register</p>
        <p>Registergericht: [Registergericht]</p>
        <p>Registernummer: [Registernummer]</p>
        <h2>Regulatory Authority:</h2>
        <p>[Aufsichtsbehörde]</p>
        <p>Legal Occupational Title: Web Developer</p>
        <p>Appropriate Panel Chamber: Chamber of Commerce</p>
        <p>Validated by: Germany</p>
*/

function About() {
  return (
    <div className="about">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="aboutwrap"
      >
        <h1>About</h1>
        <h2>Information required according to par. 5 TMG:</h2>
        <p>Patrick Grönboldt - Web Developer</p>
        <p>Buddestraße, 22</p>
        <p>21109 Hamburg</p>
        <p>Germany</p>
        <h2>Contact:</h2>
        <p>
          E-Mail: <a href="mailto:hi@pago.codes">hi@pago.codes</a>
        </p>
      </motion.div>
    </div>
  );
}

export default About;
