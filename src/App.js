import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <FontAwesomeIcon icon={faCircleCheck} />
      <FontAwesomeIcon icon={faCircleCheck} className="highlight" />
    </div>
  );
}
