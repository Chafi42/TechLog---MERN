// client/src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirige vers l'index
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bienvenue !</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-white"
      >
        Déconnexion
      </button>
    </div>
  );
}
