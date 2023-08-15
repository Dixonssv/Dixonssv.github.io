import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';
import './css/Projects.mobile.css';

import ActuImg from '../../images/actu.PNG';
import ExpedienteSanbornsGif from '../../images/expediente_sanborns.gif';
import SpaceInvadersGif from '../../images/space_invaders.gif';

const projects = [
  {
    title: "Sistema de Tutoría Académica",
    tools: ["PHP", "MySQL", "Bootstrap", "Filezila"],
    description: "Sistema creado para la Universidad Autónoma del Estado de México para facilitar la asignación, envío y monitoreo de actividades de tutoría. Se encuentra almacenado en un servidor.",
    features: [
      "Cargas masivas de datos desde documentos CSV.",
      "Carga de documentos en formato JPEG, PDF y Word.",
      "Realizar consultas.",
      "Descargar evidencias en archivos comprimidos ZIP."
    ],
    image: ActuImg,
    background: "",
    githubRepo: null,
    siteLink: "",
  },
  {
    title: "Sistema de Expediente Digital",
    tools: ["Angular", "NodeJS", "Tailwind"],
    description: "Front-End de expediente digital creado para el corporativo Sanborns.",
    features: [
      "Búsqueda de empleados.",
      "Consume una API REST,",
      "Dashboard personalizable con tarjetas móviles y reajustables.",
      "Descarga de expediente en formato PDF",
    ],
    //image: "https://contentstatic.techgig.com/thumb/msid-77087595,width-460,resizemode-4/Guide-How-to-build-career-as-a-programmer-without-college-degree.jpg?336360",
    image: ExpedienteSanbornsGif,
    githubRepo: null,
    siteLink: null,
  },
  {
    title: "Menace From The Stars",
    tools: ["Java"],
    description: "Proyecto personal. Videojuego 2D, procedural, en el que se deben destruír naves alienigenas.",
    features: [
      "Motor de videojuego creado completamente en Java.",
      "Uso de hilos.",
      "Comportamiento distinto para cada tipo de enemigo",
      "Sistema de vida y de puntos",
      "Animaciones creadas por código",
    ],
    image: SpaceInvadersGif,
    githubRepo: "https://github.com/Dixonssv/MenaceFromTheStars",
    siteLink: null,
  }
]

function ProjectFeatures(project) {
  if(project.features != null) {
    return(
      <div className='project-features'>
        <p>Características:</p>
        <ul className="text-list">
          {
            project.features.map((feature) => {
              return (
                <li key={feature}>{feature}</li>
              )
            })
          }
        </ul>
      </div>
    )
  } else {
    return;
  }
}

function ProjectLinks(project) {
  if(project.githubRepo != null || project.siteLink!== null) {
    return(
      <div className='center'>
        {
          project.githubRepo != null &&
          <a className='button' href={project.githubRepo} target='_blank'>Visita el repositorio</a>
        }
        {
          project.siteLink !== null &&
          <a className='button' href={project.siteLink} target='_blank'>Visita el sitio</a>
        }
      </div>
    )
  }
}

const Projects = () => (
  <ul className='projects'>
    {
      projects.map((project) => {
        return (
          <li className='project' key={project.title}>
            <div className='project-img-container'>
              <div className='frame-back dotted'></div>
              <div className='frame'>
                <img className='project-img' src={project.image}></img>
              </div>
            </div>
            <div className='project-info'>
              <h2 className='project-title'><b>{project.title}</b></h2>
              <div className='line-break'></div>
              <h3 className='project-tools'><b><i>{project.tools.map((feature, index) => {
                return (
                  index == 0 ? feature : " · " + feature
                )
              })}</i></b></h3>
              <p>{project.description}</p>
              {ProjectFeatures(project)}
              <br></br>
              {ProjectLinks(project)}
            </div>
          </li>
        )
      })
    }
  </ul>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
