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
                <Home />
                <About />
                <Works />
            </div>
        </BrowserRouter>
    );
}

export default App;
