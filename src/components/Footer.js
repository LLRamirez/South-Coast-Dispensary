import React from 'react';

const Footer = props => {
    return(
        <div>
            <div className="flex flex-row justify-between">
                <p className="text-sm">© All rights reserved</p>
                <p className="text-xs">made by <u><a href="https://mi-portfolio-llramirez.netlify.app/" target="_blank"alt="Lindsey Lidia portfolio page">LLR</a></u></p>
                <p><a href="#menuContainer">Back to top ^</a></p>
            </div>
        </div>
    );
}

export default Footer;