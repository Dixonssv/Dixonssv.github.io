import React from 'react';
import PropTypes from 'prop-types';
import './AboutMe.css';
import './css/AboutMe.mobile.css';

const AboutMe = () => (
  <section>
    <div className="about-me">
      <div className="about-me-img">

      </div>
      <div className="about-me-info">
        <div className='about-me-title'>
          <h2>SOBRE MÍ</h2>
          <h1>¡Hola, soy Santiago!</h1>
        </div>
        <div className='about-me-text'>
          <p>Soy un Ingeniero en Computación graduado de la Universidad Autónoma del Estado de México.</p>
          <p>Me apasiona aprender cosas nuevas, especialmente todo lo relacionado al desarrollo de experiencias interactivas y los gráficos de computadora. Amo ver mi código cobrar vida.</p>
          <p>En mis tiempos libres escribo historias y leo novelas de suspenso.</p>
          <p>¡Pregúntame mis diez dinosaurios favoritos!</p>
        </div>
        <div className="center">
          <a className='button' href="">Mi currículum</a>
        </div>
      </div>
    </div>
  </section>
);

AboutMe.propTypes = {};

AboutMe.defaultProps = {};

export default AboutMe;
