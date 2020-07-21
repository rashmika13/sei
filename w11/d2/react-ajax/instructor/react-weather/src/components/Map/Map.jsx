import React, { useRef, useEffect } from 'react';
import styles from './Map.module.css';
import mapStyle from './map-style';

// class Map extends React.Component {
//   mapDiv = React.createRef();

//   setMap() {
//     if (this.props.lat && this.props.lng) {
//       const location = { lat: this.props.lat, lng: this.props.lng };
//       const map = new window.google.maps.Map(this.mapDiv.current, {
//         zoom: this.props.zoom || 12,
//         center: location,
//         disableDefaultUI: true,
//         styles: mapStyle,
//       });
//       new window.google.maps.Marker({ position: location, map: map });
//     }
//   }

//   // Called after the first render
//   componentDidMount() {
//     this.setMap();
//   }

//   // Called when props or state change
//   componentDidUpdate() {
//     this.setMap();
//   }

//   render() {
//     return <div ref={this.mapDiv} className={styles.Map}></div>;
//   }
// }

function Map({ lat, lng, zoom }) {
  let mapDiv = useRef(null);

  useEffect(() => {
    if (lat && lng) {
      const location = { lat, lng };
      const map = new window.google.maps.Map(mapDiv.current, {
        zoom: zoom || 12,
        center: location,
        disableDefaultUI: true,
        styles: mapStyle,
      });
      new window.google.maps.Marker({ position: location, map: map });
    }
  }, [lat, lng, zoom]);

  return <div ref={mapDiv} className={styles.Map}></div>;
}

export default Map;
