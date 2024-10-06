import React, { useRef } from 'react';
import './Recover.css'
const Spliter = () => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        // Trigger the file input click
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            alert(`Selected file: ${file.name}`);
            // You can add more logic to process the audio file here
        }
    };

    return (
        <div className="home-section">

            <div className='home-container'>
            <h3 className='top-heading'>HOW IT WORK</h3>
            </div>
            
           <div className='home'>
           <h1 className='home-heading'>Splitter AI</h1>
            <p className='home-pragrapgh'>Split music into separated parts with AI-Powered algorithms</p>
            <div>
                <img className='recover-img' src='https://vocalremover.org/img/splitter/player_en@2x.png' alt = '' />
             </div>
            <div className='home-button'>
            <button className='home-btn' onClick={handleButtonClick} >
                Browser my files
            </button>
            </div>
            <input
                type="file"
                accept="audio/*"
                ref={fileInputRef}
                style={{ display: 'none' }} // Hide the input
                onChange={handleFileChange}
            />
           </div>
           <hr />
           <div className='recover-card'>
            <h1 className='home-button-heading'>AI-Powered Music Separator</h1>
            <div className='side-lines'>
            <h3>This app allows to separate music into an individual streams such as vocal, bass, percussion, and lets you rebalance their individual volumes. This is the simplest way to get multitracks from any song.</h3>
            <h3>Once you choose a song, artificial intelligence will separate music into stems: vocals, bass, drums, others. Processing usually takes about 1 minute.
            </h3>
            
            </div>
            
            </div>
        </div>
    );
};

export default Spliter;