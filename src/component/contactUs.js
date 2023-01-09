import React from 'react';
import './contactUs.css';


export default function contactUs(){
    return(
        <div className="Contact">
            <img src={require("./img/Background-ContactUs.jpg")}/>
            <div className="content">
                <h1>Do you interested to make your house beautiful?</h1>
                
                <input type="button" value="Contact Us"/>
            </div>

        </div>
    );
}