import React from 'react';
import {TechSkillPartial} from './partials/skill-graphics.js';

const Skills = () => {
    return [
        <div key="3" className="col-12 row">
            <div id="skills">
                <h1 className="skills-title">Aqcuired Skill Set</h1>
                <p className="skills-summary-one">
                    Over my two years in the industry I have developed a mastery over html, scss, and javascript. 
                    I have developed a great working knowledge of PHP and MySQL along with the framework Symfony.
                    I've enjoyed spending my freetime learning new front end tools such as ReactJS and vueJS, as well
                    as diving deeper into bundlers such as grulp and webpack.
                </p>
                <TechSkillPartial />
            </div>
        </div>
    ]
}

export {Skills};