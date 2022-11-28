import React, { useState } from "react";
import Content from "../UI/Content";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./ImageUpload.module.css";
function ImageUpload() {
  const [enteredFilename, setEnteredFilename] = useState(null);
  const [error, setError] = useState();

  function addImageUpload(event) {
    event.preventDefault();
    if (enteredFilename == null) {
      setError({
        title: "Invalid Selection",
        message: "Please select a valid file (type = image)",
      });
      return;
    }
    // let

    console.log(enteredFilename);
    console.log(process.env.SERVER_URL);
  }
  function removeErrorHandler() {
    setError(null);
  }
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={removeErrorHandler}
        ></ErrorModal>
      )}
      <Content>
        <form onSubmit={addImageUpload}>
          <div className={classes.upload}>
            <label htmlFor="localimage">Upload an Local Image</label>
            <button className={classes.btn}>Upload a file</button>
            <input
              type="file"
              name="myfile"
              accept="image/png, image/gif, image/jpeg"
              onChange={(event) => {
                setEnteredFilename(event.target.files[0]);
              }}
            />
          </div>
          <div>
            <Button type="submit">Classify the Breed</Button>
          </div>
        </form>
        <h5>
          {enteredFilename && "File Selected"} &nbsp;
          {enteredFilename && enteredFilename["name"]}
        </h5>
      </Content>
    </div>
  );
}

export default ImageUpload;
