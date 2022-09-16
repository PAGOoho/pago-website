import { NavLink } from 'react-router-dom';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer>
      <NavLink
        to="/"
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activeLink' : '')
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activeLink' : '')
        }
      >
        About/Impress
      </NavLink>
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
