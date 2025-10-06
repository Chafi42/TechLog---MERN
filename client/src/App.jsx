// client/src/App.jsx
import "./assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
// import Header from "./components/Header.jsx";
import ProtectedRoute from "./components/Security/ProtectedRoute.jsx";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                {/* <Header /> */}
                <Routes>
                    {/* 🔒 Route protégée */}
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="/" element={<Index />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
