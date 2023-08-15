import React from 'react';
import PropTypes from 'prop-types';
import './WhatIDo.css';
import './css/WhatIDo.mobile.css';
import TeseractVideo from "../../videos/teseracto.mp4";
import TeseractGif from "../../images/teseracto.gif";
import { useRef, useEffect } from "react"

function BackgroundVideo() {
  /*
  return (
    <div
    dangerouslySetInnerHTML={{
      __html:
      `<video autoplay loop muted width="100%">
        <source src=${TeseractVideo} type="video/mp4"/>
      </video>`
    }}
    />
  )
  */

  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.defaultMuted = true;
    videoRef.current.muted = true;
  })

  return (
    <video
      ref={videoRef}
      loop
      autoPlay
      muted
      playsInline
      height={"100%"}>
      <source src={TeseractVideo} type="video/mp4" />
      Que pasa
    </video>
  );
}

function BackgroundGif() {
  return(
    <img src={TeseractGif} width={"100%"}></img>
  )
}

const WhatIDo = () => (
  <section className='what-i-do'>
    <div className='background-video'>
      {BackgroundGif()}
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
        <p>Proyecto personal, hecho por diversión, siguiendo principios de matrices de rotación y proyección.</p>
        <br></br>
        <h3><i>C · OpenGL</i></h3>
        <br></br>
        <div className='center'>
          <a className='button' href='https://github.com/Dixonssv/Tesseract'  target='_blank'>Mira el proyecto en GitHub</a>
        </div>
      </div>
    </div>
    <div className='section-break-diag'></div>
  </section>
);

WhatIDo.propTypes = {};

WhatIDo.defaultProps = {};

export default WhatIDo;
