import React from 'react';

import './LocationMap.scss';

const LocationMap = (props) => {

  return (
    <div className="map-container">
    <iframe
                className="map-embed"
                title="mapLocation"
                width="100%"
                height="450"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCTt5Zl1dR0DAz7OeQjZQVXoO0leAWp17M&q=КПІ+ім.+корпус+№1" allowFullScreen>    
            </iframe>
       </div>
  );
}

export default LocationMap;

