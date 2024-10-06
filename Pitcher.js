import React, { useRef } from 'react';
import './Recover.css'
import './Pitcher.css'
const Pitcher = () => {
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
           <h1 className='home-heading'>Audio Speed and Pitch Changer</h1>
            <p className='home-pragrapgh'>Changes pitch and tempo of the song by adjusting musical key and bpm sliders</p>
           
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
            <h1 className='home-button-heading'>Free Online Pitch Shifter</h1>
            <div className='side-lines'>
            <h3>This app changes the song pitch and/or playback speed using one of the best pitch shifting algorithms. The musical key, scale, and bpm will be automatically detected.</h3>
            <h3>You can easily transpose music to a different key and change the tempo by adjusting the pitch shifter key and bpm sliders.
            </h3>
            </div>
            <h1 className='home-privacy-heading'>Features</h1>
            <div className='recover-card'>
                <li>Analyzes music and finds musical key, scale and bpm</li>
                <li>Changes audio pitch</li>
                <li>Speed up or slow down music playback speed</li>
            </div>
            </div>
        </div>
    );
};

export default Pitcher;