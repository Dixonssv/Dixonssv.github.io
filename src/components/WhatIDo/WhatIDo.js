import React from 'react';
import PropTypes from 'prop-types';
import './WhatIDo.css';
import teseractVideo from "../../videos/teseracto.mp4";

const WhatIDo = () => (
  <section className='what-i-do'>
    <div className='background-video'>
      <video src={teseractVideo} autoPlay loop muted height={"100%"}></video>
    </div>
    <div className='what-i-do-info'>
      <div className="corner-border"></div>
      <div className='what-i-do-title'>
        <h2>PROYECTOS</h2>
        <h1>Estas son algunas cosas que he creado</h1>
      </div>
      <div className='what-i-do-text'>
        <h2><b>Teseracto</b></h2>
        <p>¿Ya mencioné cuánto me gustan los gráficos por computadora?</p>
        <p>Proyecto personal, hecho por diversión.</p>
        <br></br>
        <h3><i>C · OpenGL</i></h3>
        <br></br>
        <div className='center'>
          <a className='button' href=''>Mira el proyecto en GitHub</a>
        </div>
      </div>
    </div>
    <div className='section-break-diag'></div>
  </section>
);

WhatIDo.propTypes = {};

WhatIDo.defaultProps = {};

export default WhatIDo;
