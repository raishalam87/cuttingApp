import React, { useRef } from 'react';
import './Recover.css'
const Finder = () => {
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
           <h1 className='home-heading'>Song Key and BPM Finder</h1>
            <p className='home-pragrapgh'>Analyzes music and finds Key, Scale and BPM for any song</p>
           
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
            <h1 className='home-button-heading'>How to find Key & BPM</h1>
            <div className='side-lines'>
            <h3>This app analyzes music and estimates pitch and tempo [e.g. A♭ major, 120 bpm]. You can upload multiple files at once. Processing time takes a few seconds.</h3>
            <h3>Once you choose a song, artificial intelligence will separate the vocals from the instrumental ones. You will get two tracks - a karaoke version of your song (no vocals) and acapella version (isolated vocals).
            </h3>
            <h3>Despite the complexity and high cost of service, you can use it absolutely free. Processing usually takes about 10 seconds.</h3>
            </div>
            
            </div>
        </div>
    );
};

export default Finder;