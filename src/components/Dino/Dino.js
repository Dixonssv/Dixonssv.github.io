import React from 'react';
import PropTypes from 'prop-types';
import './Dino.css';
import './css/Dino.mobile.css';

const Dino = (props) => (
  <button  className="dino" 
    onClick={() => props.documentRef.current.scrollIntoView({ behavior: "smooth", block: "end" })}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="20 58 80 86" version="1.1">
      <path d="M80,100L76,100L76,114L72,114L72,120L68,120L68,124L64,124L64,140L68,140L68,144L60,144L60,132L56,132L56,128L52,128L52,132L48,132L48,136L44,136L44,140L48,140L48,144L40,144L40,128L36,128L36,124L32,124L32,120L28,120L28,116L24,116L24,112L20,112L20,88L24,88L24,96L28,96L28,100L32,100L32,104L40,104L40,100L44,100L44,96L50,96L50,92L56,92L56,88L60,88L60,62L64,62L64,58L96,58L96,62L100,62L100,80L80,80L80,84L92,84L92,88L76,88L76,96L84,96L84,104L80,104L80,100M68,64L68,68L72,68L72,64L68,64Z" stroke="none" />
    </svg>
  </button>
);

Dino.propTypes = {};

Dino.defaultProps = {};

export default Dino;

