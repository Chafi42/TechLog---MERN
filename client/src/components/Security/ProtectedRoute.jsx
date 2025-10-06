// client/src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // ❌ Si pas de token → redirige vers /
  if (!token) {
    return <Navigate to="/" replace />;
  } else{
    return children;
  }

  // ✅ Sinon, affiche la page demandée
//   return children;
}
