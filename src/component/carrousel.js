import React from 'react';
import './carrousel.css';


export default function carrousel(){
    return(
        <>
            <div className="slider">
                <div className="slides">
                    <div className="parent-slide">
                        <img src={require('./img/1.jpg')}className="slide"/>
                    </div>

                    <div className="parent-slide">
                        <img src={require('./img/2.jpg')}className="slide"/>
                    </div>

                    <div className="parent-slide">
                        <img src={require('./img/3.jpg')}className="slide"/>
                    </div>                
                    {/* <img src={require('./img/1.jpg')} className="slide">
                    </img>
                    }

                    className="slider"
                    className="slides"

                    {/* <div className="slide slide2">
                        <h1 className="Opening">WELCOME TO MEKSIKAN</h1>
                        <h1 className="Opening">WE MAKE THE BEST INTERIOR DESIGN</h1>
                        <h1 className="Opening">FOR YOUR HOME</h1>
                    </div> */}
                    {/* <div className="slide slide3">
                        <h1 className="Opening">WELCOME TO MEKSIKAN</h1>
                        <h1 className="Opening">WE MAKE THE BEST INTERIOR DESIGN</h1>
                        <h1 className="Opening">FOR YOUR HOME</h1>      
                    </div> */}
                    {/* 
                    <img src={require('./img/1.jpg')} className="slide">

                    </img>        
                    <img src={require('./img/2.jpg')} className="slide">

                    </img>   
                    <img src={require('./img/3.jpg')} className="slide">

                    </img>         */}
                </div>
                <div className="Opening">
                    <h1 className="inside-opening">WELCOME TO MEKSIKAN</h1>
                    <h1 className="inside-opening">WE MAKE THE BEST INTERIOR DESIGN</h1>
                    <h1 className="inside-opening">FOR YOUR HOME</h1>
                </div>
            </div>
        </>
    );
}