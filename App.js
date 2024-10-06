import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Recover from './components/Recover'
import Spliter from './components/Spliter'
import Pitcher from './components/Pitcher'
import Finder from './components/Finder'
import Culter from './components/Cutter'
import Joiner from './components/Joiner'
import AudioRecorder from './components/AudioRecorder';
import './App.css';


const App = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="content"> {/* Added a content div for layout */}
                    <Routes>
                        <Route path="/" element={<Home />} /> 
                         <Route path='/recover' element={<Recover />} />
                         <Route path='/spliter' element={<Spliter />} /> 
                         <Route path='/pitcher' element={<Pitcher />} />
                         <Route path='/finder' element={<Finder />} />
                         <Route path='/cutter' element={<Culter />} />
                         <Route path='/joiner' element={<Joiner />} />
                         <Route path='/audiorecoder' element={<AudioRecorder />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
