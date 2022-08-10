import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './Header';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Works />
        </div>
    );
}

export default App;
