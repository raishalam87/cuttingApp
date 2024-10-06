import React, { useRef } from 'react';
import './Recover.css'
const Home = () => {
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
           <h1 className='home-heading'>Vocal Remover and Isolation</h1>
            <p className='home-pragrapgh'>Separate voice from music out of a song free with powerful AI algorithms</p>
            <div>
                <img className='recover-img' src='https://vocalremover.org/img/remover/player_en@2x.png' alt = '' />
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
            <h1 className='home-button-heading'>Remove vocals from a song</h1>
            <div className='side-lines'>
            <h3>This free online application will help remove vocals from a song by creating karaoke.</h3>
            <h3>Once you choose a song, artificial intelligence will separate the vocals from the instrumental ones. You will get two tracks - a karaoke version of your song (no vocals) and acapella version (isolated vocals).
            </h3>
            <h3>Despite the complexity and high cost of service, you can use it absolutely free. Processing usually takes about 10 seconds.</h3>
            </div>
            
            </div>
           
        </div>
    );
};

export default Home;