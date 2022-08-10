import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from './Header';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/works" element={<Works />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
