

import React from 'react';
import ReactDOM from 'react-dom';

import face from './faceInTheCrowd.jpg';
import snow from './snowyForest.jpg';
import shadow from './shadow.jpg';
import './App.css';

let picWidth = "260px";
let picHeight = "350px";

const Photo_1 = {
  source: face,
  photoTitle: 'A Face in the Crowd',
  alternateText: 'a child\'s face',
  citation: 'Photographed by Sofiya Kirik'
}

const Photo_2 = {
  source: snow,
  photoTitle: 'Where Eagles Dare',
  alternateText: 'a snowy forest',
  citation: 'Photographed by Greg Rosenske'
}

const Photo_3 = {
  source: shadow,
  photoTitle: 'Creepy Shadow',
  alternateText: 'a hand shadow',
  citation: 'Photographed by Gryffyn'
}

function App () {
  return (
    <React.Fragment>
      <Heading />
      <Component 
        photoTitle = {Photo_1.photoTitle}
        citation = {Photo_1.citation}
        alternateText = {Photo_1.alternateText}
        source = {Photo_1.source}
      />
      <Component
        photoTitle = {Photo_2.photoTitle}
        citation = {Photo_2.citation}
        alternateText = {Photo_2.alternateText}
        source = {Photo_2.source}
      />
      <Component
        photoTitle = {Photo_3.photoTitle}
        citation = {Photo_3.citation}
        alternateText = {Photo_3.alternateText}
        source = {Photo_3.source}
      />
    </React.Fragment>
  );
}

let Heading = () => <h1>Image Gallery</h1>;

let Component = (props) => {
  console.log(props);
  return (
    <div className="composite">
      <img
        src={props.source}
        alt={props.alternateText}
        title={props.photoTitle}
        width={picWidth}
        height={picHeight}
      />
      <h2>{props.photoTitle}</h2>
      <p>{props.citation}</p>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);