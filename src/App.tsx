import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Gallery from "./pages/Gallery.tsx";
import Memory from "./pages/Memory.tsx";
import { AnimatePresence } from "motion/react";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Memory/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default function App() {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    );
}