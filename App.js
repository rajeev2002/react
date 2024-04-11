import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {}, "This is built using parcel");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
