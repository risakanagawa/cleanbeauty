import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => <div className="map__marker" >{text}</div>;

export default function Map() {
  const defaultProps = {
    center: [49.246292, -123.116226],
    zoom: 11
  };
  return (
    <div className="map" style={{ height: "40vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAw0RjeG-FU0WaOQs5mZTZW2oJ7gbtjk9E" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          className="map__marker"
          lat={49.2827}
          lng={-123.1207}
        />
      </GoogleMapReact>
    </div>
  );
}
