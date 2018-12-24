import React from 'react';

const TechSkillPartial = () => {

    // Put this into a database field once that conversion starts
    let skillImages = {
        'html': './images/html5-logo.png',
        'back': './images/backbone.png',
        'css': './images/css3-logo.png',
        'git': './images/git-icon.png',
        'handlebars': './images/handlebars-icon.png',
        'indesign': './images/indesign.png',
        'javascript': './images/javascript-logo.png',
        'jQuery': './images/jquery.png',
        'parse': './images/parse-server-logo.png',
        'photoshop': './images/photoshop.png',
        'react': './images/reactja-logo.png',
        'sass': './images/sass.svg',
        'underscore': './images/underscore.png',
        'illustrator': './images/ai.png'
    }

    const images = function() {
        for (var key in skillImages) {
            if (skillImages.hasOwnProperty(key)) {
                console.log(key + " -> " + skillImages[key]);
            }
        }
    }

    return [
        <div key="3a" className="col-12">
            <div>
                <div className="html">
                    <div>{images()}</div>
                    <img src="./images/html5-logo.png" />
                </div>            
            </div>
        </div>
    ]
}

export {TechSkillPartial};