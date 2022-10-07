import { NavLink } from 'react-router-dom';
import '../layout/styles/footer.scss';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          'nav-link noselect' + (isActive ? ' activeNav' : undefined)
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          'nav-link noselect' + (isActive ? ' activeNav' : undefined)
        }
      >
        About
      </NavLink>
      <div>
        <p className="noselect">
          &copy; {footerYear} PAGO - Web Development. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
