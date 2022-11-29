import React, { useState } from "react";
import { UploadFiles } from "../api/UploadFiles";
import Content from "../UI/Content";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./ImageUpload.module.css";
function ImageUpload() {
  const [enteredFilename, setEnteredFilename] = useState(null);
  const [result, setResult] = useState({});
  const [error, setError] = useState();

  function addImageUpload(event) {
    event.preventDefault();
    // To retrieve from Tree
    // console.log(event.currentTarget["img_file"].files[0]);
    if (enteredFilename == null) {
      setError({
        title: "Invalid Selection",
        message: "Please select a valid file (type = image)",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", enteredFilename);
    console.log(formData);
    UploadFiles(formData).then(setResult);
    console.log(enteredFilename);
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
              id="img_file"
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
