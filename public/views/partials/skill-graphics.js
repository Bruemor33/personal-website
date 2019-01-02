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
                let imgSrc = skillImages[key];

                return imgSrc
            }
        }
    }

    return [
        <div key="3a" className="col-12">
            <div>
                // Bring into for loop above
                <div className="html">
                    <div>{images()}</div>
                    <img src={images()} />
                </div>            
            </div>
        </div>
    ]
}

export {TechSkillPartial};