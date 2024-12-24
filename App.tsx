import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Gallery from "./pages/Gallery.tsx";
import Memory from "./pages/Memory.tsx";
export default function App() {
    return (
        <Router>
            <Routes>
                <Route>
                    <Route path="/" element={<Memory/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                </Route>
            </Routes>
        </Router>
    );
}
