import React from 'react';
import { render } from 'react-dom';
// import { useTracker } from 'meteor/react-meteor-data';

import App from './ui/App';
import './main.css'
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log("Iniciando!");
  // console.log(useTracker);
  render(
    <App />,
    document.getElementById('render-target')
  );
});
