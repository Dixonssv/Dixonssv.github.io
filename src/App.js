import { useRef, useEffect } from 'react';

import './App.css';
import Dino from './components/Dino/Dino';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import WhatIDo from './components/WhatIDo/WhatIDo';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  const mainElem = useRef(null);

  const scrollToBottom = () => {
    console.log("Scrolling...");
    mainElem.current.scrollIntoView({ behavior: 'smooth', block: "end"});
  };

  useEffect(() => {
    console.log("Use effect...");
    console.log(mainElem.current);
  }, []);

  return (
    <main ref={mainElem}>
      <Dino documentRef={mainElem}></Dino>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <WhatIDo></WhatIDo>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
}

export default App;
