import React, { useState } from "react";
import { Button, Card, Stack } from "react-bootstrap";
const FileUploadCard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = React.useRef();

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
    <Stack direction="horizontal" gap={3}>
    <div className="bg-light border"><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>
          Upload an image of your label 
        </Card.Text>

      </Card.Body>
    </Card></div>
      <div className="bg-light border"> <Card style={{ width: '18rem' }}>
      <Card.Body>
        <input
          type="file"
          onChange={handleFileSelect}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <Button variant="primary" onClick={handleButtonClick}>
          Upload File
        </Button>
      </Card.Body>
    </Card></div>

    </Stack>
   
    </>
  );
};

export default FileUploadCard;
