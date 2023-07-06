import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Photoshop from './Photoshop';
import Help from './Help';

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/PhotoApp" element={<Photoshop />} />
                <Route path="/Help" element={<Help />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
