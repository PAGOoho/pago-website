import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>404 - Page Not Found!</p>
      <Link to="/">
        <FaHome />
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
