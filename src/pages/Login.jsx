// src/pages/Login.jsx
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUser } from '../context/UserContext'; // Asegúrate de que esta importación sea correcta

// Función para decodificar JWT manualmente
const decodeJwt = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = decodeURIComponent(atob(base64Url).replace(/\+/g, ' '));
    return JSON.parse(base64);
  } catch (e) {
    console.error('Error decoding JWT:', e);
    return null;
  }
};

function Login() {
  const { setUser } = useUser(); // Usa el hook de contexto para obtener setUser
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login Success:", credentialResponse);

    // Decodifica el JWT para obtener la información del usuario
    const decoded = decodeJwt(credentialResponse.credential);
    if (decoded) {
      console.log("Decoded Token:", decoded);

      // Extrae la información del usuario (nombre, imagen, etc.)
      const userInfo = {
        firstName: decoded.given_name,
        lastName: decoded.family_name,
        email: decoded.email,
        picture: decoded.picture,
      };

      // Guarda la información del usuario en el estado global
      setUser(userInfo);

      // Redirige al home
      navigate('/home');
    }
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="998530778811-ouepu0udqaruuituij1jg1hluulog9oh.apps.googleusercontent.com">
      <div 
        className="d-flex justify-content-center align-items-center" 
        style={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(to right, rgb(255, 126, 95), rgb(100, 176, 166))' 
        }}
      >
        <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
          <div className="card-body text-center">
            <h2 className="card-title mb-4">Iniciar Sesión</h2>
            <p className="mb-4">Accede con tu cuenta de Google</p>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginError}
              className="btn btn-outline-primary"
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
