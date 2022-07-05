import React from "react";

const BackToTop = ({ onTop }) => {
  return (
    <a
      href="#hero"
      className="back-to-top d-flex align-items-center justify-content-center"
      style={onTop ? { opacity: 0, cursor: "default" } : {}}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default BackToTop;
