// // client/src/components/Header.jsx
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Header() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // 🔍 Vérifie si un token existe dans localStorage au chargement
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   // 🚪 Fonction de déconnexion
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/"); // Redirige vers la page d’accueil
//   };

//   return (
//     <header className="flex justify-between items-center bg-[#193447] text-white px-6 py-4 shadow-md">
//       <Link to="/" className="text-xl font-bold">
//         Mon Blog
//       </Link>

//       <nav className="flex items-center space-x-4">
//         {isLoggedIn ? (
//           <>
//             <Link to="/profile" className="hover:underline">
//               Mon profil
//             </Link>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
//             >
//               Déconnexion
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/" className="hover:underline">
//               Connexion
//             </Link>
//             <Link
//               to="/register"
//               className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
//             >
//               Inscription
//             </Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }
