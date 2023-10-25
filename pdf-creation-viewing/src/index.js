import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './App';
// import { CustomBasic } from './CustomBasic';
import pdf from './ProjectUML.pdf'
import { DynamicFile } from './DynamicFile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <CustomBasic/> */}
    <a href={pdf} target='_blank'>View</a>
    <DynamicFile/>
  </React.StrictMode>
);