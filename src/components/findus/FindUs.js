import React from "react";
import Map from "./Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FindUs.scss";

export default function FindUs() {
  return (
    <div className="findus">
      <div className="findus__left">
        <div className="findus__left--text">
          <p>
            <FontAwesomeIcon icon="map-marker-alt" /> Our Store
          </p>
          <p>XXXXXXX XXXXXXXXX XXXXXXXX </p>
          <p>Vancouver, Canada</p>
          <p>TEL: 1234567890</p>
          
        </div>
      </div>
      <Map />
    </div>
  );
}
