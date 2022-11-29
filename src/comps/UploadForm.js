import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const uploadFilesTypes = ['image/png', 'image/jpeg'];

  const onChangeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    if (selected && uploadFilesTypes.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError('Please select an image file only (.png /.jpeg)');
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={onChangeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
