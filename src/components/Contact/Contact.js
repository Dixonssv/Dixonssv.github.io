import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';
import './css/Contact.mobile.css';
import GitHubButton from '../GitHubButton/GitHubButton';

function activateGitHubCorner() {
  var gitHubCorner = document.getElementsByClassName("github-corner")[0];

  gitHubCorner.classList.add("animate-octo-arm");
}

function desactivateGitHubCorner() {
  var gitHubCorner = document.getElementsByClassName("github-corner")[0];

  gitHubCorner.classList.remove("animate-octo-arm");
}

function visitGitHub() {
  window.open("https://github.com/Dixonssv");
}

function sendEmail() {
  var mail = document.createElement("a");
  mail.href = "mailto:santisotov.dev@gmail.com?subject=New%20portfolio%20contact";
  mail.target = "_blank";
  mail.click();
}

const Contact = () => (
  <footer className='contact'>
    <div className='section-break-triangle'></div>
    <div className='dotted contact-corner'></div>
    <div className='contact-info'>
      <div className='contact-title'>
        <h2>CONTACTO</h2>
        <h1>¡Trabajemos juntos!</h1>
        <p>Si te interesó algo de lo que viste, envíame un <nobr>e-mail.</nobr></p>
      </div>
      <br></br>
      <div className='contact-links'>
        <button className='large-button' style={{ backgroundColor: "#C31D50" }} onClick={sendEmail}>
          santiagosotov.dev@gmail.com
        </button>
        <button className='large-button' style={{ backgroundColor: "#010F14" }} onClick={visitGitHub} onMouseEnter={activateGitHubCorner} onMouseOut={desactivateGitHubCorner}>
          <GitHubButton></GitHubButton>
          Visita mi GitHub
        </button>
      </div>
    </div>
  </footer>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
