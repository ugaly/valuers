import React from 'react'; // Import React

import logo from '../../assets/logo.png';

function LandingIntro() {
    return (
      <div className="hero min-h-full rounded-l-xl " style={{backgroundColor: "#f2f2f2"}}>
      <div className="hero-content py-12">
        <div className="max-w-md">

        <h1 className='text-3xl text-center font-bold '>AMS</h1>

          <div className="text-center mt-12"><img src={logo} alt="Logo" className="w-60 p-12 inline-block"></img></div>
        
        </div>

      </div>
    </div>
    );
}

export default LandingIntro;
