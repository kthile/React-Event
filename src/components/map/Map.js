import React from "react";

const Map = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.016579253902!2d-81.38604218491948!3d28.53922138245464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7c90b9225939190!2sAmway+Center!5e0!3m2!1sen!2sus!4v1540826105375"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Directions</div>
      </div>
    </div>
  );
};

export default Map;
