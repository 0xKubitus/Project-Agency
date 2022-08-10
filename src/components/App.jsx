import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';

function App() {
    return (
        <div className="App">
            <Home />
            <About />
            <Works />
        </div>
    );
}

export default App;
