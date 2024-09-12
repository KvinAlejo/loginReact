// src/pages/Profile.jsx
import React from 'react';
import { useUser } from '../context/UserContext'; // Asegúrate de la importación correcta
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado

function Profile() {
  const { user } = useUser(); // Obtén el usuario del contexto

  if (!user) {
    return <p>No hay usuario autenticado</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="card p-4 shadow-lg">
            <img 
              src={user.picture} 
              alt="User" 
              className="rounded-circle mb-3" 
              style={{ width: '120px', height: '120px', objectFit: 'cover' }} 
            />
            <h2 className="card-title mb-3">Perfil de Usuario</h2>
            <p className="lead">
              <strong>Nombre:</strong> {user.firstName} {user.lastName}
            </p>
            <p className="lead">
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
