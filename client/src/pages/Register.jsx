// client/src/pages/Register.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    // 🧠 États
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    // 🔥 Fonction d’inscription
    const handleRegister = async (e) => {
        e.preventDefault();

        const createUser = { name, email, password };

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL_USER}/register`,
                createUser
            );

            console.log("✅ Réponse du serveur :", res.data);
            setMessage("Compte créé avec succès 🎉");
            navigate("/");
        } catch (err) {
            setMessage("E-mail déjà utilisé", err);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <div className="w-full mt-4 flex flex-col items-center justify-center">
                <div className="max-w-sm w-full text-gray-600 space-y-5">
                    <h2 className="text-2xl font-bold text-center mb-4">
                        Créer un compte
                    </h2>

                    <form onSubmit={handleRegister} className="space-y-5">
                        {/* Nom */}
                        <div>
                            <label className="font-medium">
                                Nom <span className="text-[#193447]">*</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#193447] shadow-sm rounded-lg"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="font-medium">
                                Email <span className="text-[#193447]">*</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#193447] shadow-sm rounded-lg"
                            />
                        </div>

                        {/* Mot de passe */}
                        <div>
                            <label className="font-medium">
                                Mot de passe{" "}
                                <span className="text-[#193447]">*</span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#193447] shadow-sm rounded-lg"
                            />
                        </div>

                        {/* Message */}
                        {message && (
                            <div className=" text-center text-red-500 font-medium">
                                {message}
                            </div>
                            
                        )}

                        {/* Bouton */}
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white font-medium bg-[#193447] cursor-pointer rounded-lg duration-150"
                            >
                                Créer un compte
                            </button>
                        </div>

                        {/* Lien connexion */}
                        <div className="text-center w-full border-t pt-4 border-gray-300">
                            <a
                                href="/"
                                className="text-sm text-blue-500 hover:underline"
                            >
                                Déjà un compte ? Connectez-vous
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
