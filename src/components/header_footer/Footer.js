import React from "react";
import Fade from "react-reveal/Fade";

export default () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">Fakeway Center</div>
        <div className="footer_copyright">
          Fakeway Center 2018 &copy; All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};
