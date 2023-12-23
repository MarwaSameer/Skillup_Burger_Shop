// // Write all the code here
// import Popup from "reactjs-popup";
// <Popup trigger={<button type="button">Send</button>}></Popup>;

// Contact.jsx

import React from "react";
import Popup from "reactjs-popup";

const Contact = () => {
  return (
    <Popup trigger={<button type="button">Send</button>}>
      {/* Popup content goes here */}
    </Popup>
  );
};

export default Contact;
