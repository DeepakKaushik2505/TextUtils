import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied !", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed !", "success");
  };

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase !", "success");
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase !", "success");
  };
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared !", "success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "#FFFFFF" : "black" }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          placeholder="Enter Text here "
          onChange={(e) => handleOnChange(e)}
          style={{
            backgroundColor: props.mode === "dark" ? "	#404040" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="myBox"
          rows="8"
        />
      </div>
      <button className=" btn btn-primary" onClick={handleUpClick}>
        Covert to Uppercase
      </button>
      <button className=" btn btn-primary mx-3" onClick={handleLoClick}>
        Covert to Lowercase
      </button>
      <button className=" btn btn-primary" onClick={handleClrClick}>
        Clear text
      </button>
      <button className=" btn btn-primary mx-3" onClick={handleCopy}>
        Copy text
      </button>
      <button className=" btn btn-primary" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.length ? text.split(" ").length : 0} words and {text.length}{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
