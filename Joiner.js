import React, { useRef } from 'react';
import './Recover.css'
const Joiner = () => {
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
           <h1 className='home-heading'>Audio Joiner</h1>
            <p className='home-pragrapgh'>Join multiple audio tracks into one. Choose audio files you want to merge</p>
            
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
            <h1 className='home-button-heading'>How to cut audio</h1>
            <div className='side-lines'>
            <h3>This app can be used to trim and/or cut audio tracks, remove an audio fragments. Fade in and fade out your music easily to make the audio harmoniously.
            </h3>
            <h3>It fast and easy to use. You can save the audio file in any format (codec parameters are configured)

            </h3>
            <h3>Despite the complexity and high cost of service, you can use it absolutely free. Processing usually takes about 10 seconds.</h3>
            </div>
            
            </div>
        </div>
    );
};

export default Joiner;