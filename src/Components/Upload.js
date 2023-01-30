import { useState, useRef } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);
  const inputRef = useRef();

  const handleImageChange = event => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        Upload Image
        <input
          type="file"
          style={{ display: 'none' }}
          onChange={handleImageChange}
          ref={inputRef}
        />
      </button>
      {image && <img src={image} alt="Uploaded Image" />}
    </div>
  );
}

export default ImageUploader;
