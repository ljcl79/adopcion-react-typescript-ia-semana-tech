import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Layout/Navbar'; // Importamos la Navbar
import { AuthProvider } from './context/AuthContext'; // Importamos el AuthProvider
import './index.css'; // Asegúrate de que Tailwind CSS se está importando aquí o en main.tsx
import Dashboard from './views/Dashboard/Dashboard';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import PetDetail from './views/PetDetail/PetDetail';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider> {/* Envuelve toda la aplicación con el AuthProvider */}
        <Navbar /> {/* La Navbar ahora se renderiza aquí para que tenga acceso al AuthContext */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ¡Nueva ruta para el detalle de la mascota! */}
          <Route path="/pets/:id" element={<PetDetail />} />
          {/* Rutas Placeholder, puedes añadir más según necesites */}
          <Route path="/find-a-pet" element={<h1 className="text-center text-4xl mt-20">Página "Find a pet"</h1>} />
          <Route path="/how-it-works" element={<h1 className="text-center text-4xl mt-20">Página "How it works"</h1>} />
          <Route path="/dogs" element={<h1 className="text-center text-4xl mt-20">Página "Dogs"</h1>} />
          <Route path="/cats" element={<h1 className="text-center text-4xl mt-20">Página "Cats"</h1>} />
          <Route path="/about-us" element={<h1 className="text-center text-4xl mt-20">Página "About Us"</h1>} />
          <Route path="/donate" element={<h1 className="text-center text-4xl mt-20">Página "Donate"</h1>} />
          <Route path="/profile" element={<h1 className="text-center text-4xl mt-20">Página "Mi Perfil" (solo logueados)</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;