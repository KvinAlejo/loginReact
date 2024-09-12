// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const { user, setUser } = useUser(); // Obtén el usuario y setUser del contexto
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out');
    setUser(null); // Limpia el usuario del contexto
    navigate('/login'); // Redirige al login después de cerrar sesión
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">AppName</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {user ? (
              <>
                <img src={user.picture} alt="User" className="rounded-circle" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                <span className="me-2">{user.firstName} {user.lastName}</span>
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
