import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';
import GitHubButton from '../GitHubButton/GitHubButton';

const Contact = () => (
  <footer className='contact'>
    <div className='section-break-triangle'></div>
    <div className='contact-info'>
      <div className='contact-title'>
        <h2>CONTACTO</h2>
        <h1>¡Trabajemos juntos!</h1>
        <p>Si te interesó algo de lo que viste, envíame un e-mail.</p>
      </div>
      <br></br>
      <div className='contact-links'>
        <a className='large-button' style={{ backgroundColor: "#C31D50" }} href=''>
          santiagosotov.dev@gmail.com
        </a>
        <button className='large-button' style={{ backgroundColor: "#010F14" }} href=''>
          <GitHubButton></GitHubButton>
          Visita mi GitHub
        </button>
      </div>
    </div>
    <div className='dotted contact-corner'></div>
  </footer>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
