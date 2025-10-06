import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import techlog from "../assets/img/techlog.png"; // ✅ importe ton image ici

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // empêche le rechargement de la page
        const loginUser = { email, password };

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL_USER}/login`,
                loginUser
            );

            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                setMessage("Connexion réussie 🎉");
                navigate("/home");
            } else {
                setMessage("Erreur lors de la connexion ❌");
            }
        } catch (err) {
            console.error(err);
            setMessage("Erreur serveur ❌");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center md:items-center space-y-6 md:space-y-0 md:space-x-16">
                {/* Texte gauche */}
                <div className="flex flex-col justify-between max-w-md md:text-left text-center py-4">
                    <img
                        src={techlog}
                        alt="TechLog"
                        className="mb-2 w-48 mx-auto"
                    />
                    <p className="text-xl font-bold text-gray-700">
                        Avec TechLog, partagez et restez en contact avec votre
                        entourage.
                    </p>
                </div>

                {/* Carte de connexion */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="font-medium">
                                Email <span className="text-[#193447]">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#193447] shadow-sm rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="font-medium">
                                Mot de passe{" "}
                                <span className="text-[#193447]">*</span>
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#193447] shadow-sm rounded-lg"
                            />
                        </div>

                        {/* Remember + Forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-x-3">
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    className="hidden peer"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="relative flex w-5 h-5 bg-white peer-checked:bg-[#193447] rounded-md border cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                ></label>
                                <span>Se souvenir</span>
                            </div>
                            <Link
                                to="/"
                                className="text-[#193447] font-bold text-xs hover:border-b"
                            >
                                Mot de passe oublié ?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-[#193447] cursor-pointer rounded-lg duration-150"
                        >
                            Connexion
                        </button>
                    </form>

                    {/* Message */}
                    {message && (
                        <p
                            className={`text-center text-sm mt-2 ${
                                message.includes("🎉")
                                    ? "text-green-600"
                                    : "text-red-500"
                            }`}
                        >
                            {message}
                        </p>
                    )}

                    {/* Google Login */}
                    <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 active:bg-gray-100 cursor-pointer mt-4">
                        <img
                            src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Continue avec Google
                    </button>

                    <div className="my-6 border-gray-300 border-t w-full"></div>

                    {/* Créer un compte */}
                    <div className="w-full flex flex-col items-center justify-center">
                        <Link
                            to="/register"
                            className="w-full px-4 py-2 text-white font-medium bg-green-500 cursor-pointer rounded-lg duration-150 flex justify-center"
                        >
                            Créer un compte
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
