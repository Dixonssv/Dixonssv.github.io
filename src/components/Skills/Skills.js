import React from 'react';
import PropTypes from 'prop-types';
import './Skills.css';
import './css/Skills.mobile.css';

const logos = [
  { description: "HTML", src: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg' },
  { description: "CSS", src: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg' },
  { description: "PHP", src: 'https://www.php.net/images/logos/new-php-logo.svg' },
  { description: "JavaScript", src: 'https://www.svgrepo.com/show/303206/javascript-logo.svg' },
  { description: "TypeScript", src: 'https://www.svgrepo.com/show/354478/typescript-icon.svg' },
  { description: "Angular", src: 'https://angular.io/assets/images/logos/angular/angular.svg' },
  { description: "React", src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { description: "C++", src: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { description: "C#", src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg' },
  { description: "Java", src: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
  { description: "MySQL", src: 'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg' },
  { description: "PostgreSQL", src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  { description: "Unity", src: 'https://static.cdnlogo.com/logos/u/20/unity.svg' },
  { description: "Git", src: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg' },
]

const Skills = () => (
  <section className='skills'>
    <div className='section-break'>
    </div>
    <div className='skills-info'>
      <div className='skills-title'>
        <h2>HABILIDADES</h2>
        <h1>Esto es lo que utilizo para trabajar.</h1>
      </div>
      <div className='skills-text'>
        <p><b>Desarrollador FullStack</b>. Actualmente me encuentro mejorando mis habilidades de Unity, JavaScript y frameworks de desarrollo Front-End.</p>
        <p>¡Creé este portafolio utilizando React!</p>
      </div>
    </div>
    <div className='skills-content'>
      <ul className='skills-grid'>
        {
          logos.map((logo) => {
            return (
              <li className='skill' key={logo.description}>
                <div className='skill-img-container'>
                  <img className='skill-img' src={logo.src}></img>
                </div>
                <div className='skill-description'>
                  <h3>{logo.description}</h3>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  </section>
);

Skills.propTypes = {};

Skills.defaultProps = {};

export default Skills;
