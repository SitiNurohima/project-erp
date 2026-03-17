import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  // Ambil role dari storage
  const userRole = localStorage.getItem('userRole');

  // Kalau nggak ada role (belum login), tendang ke login
  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  // Kalau role-nya nggak diizinkan, tendang balik
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  return children; // Kalau oke, boleh lewat
};

export default ProtectedRoute;