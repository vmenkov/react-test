import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';

//-- For ver 8.* of this module
//import  HTML5Backend  from 'react-dnd-html5-backend';

//-- For ver 16
import  { HTML5Backend }  from 'react-dnd-html5-backend';
import App from './App';
import './index.css';


ReactDOM.render(
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>,
  document.getElementById('root'),
);
