import React from "react";
import { useState } from "react";
import { storage } from "../firebase/config"; // Assuming you have set up Firebase storage
import { ref, uploadBytes } from "firebase/storage";
import GoogleSignInButton from "../components/GoogleSignInButton";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const storageRef = ref(storage, `uploads/${file.name}`);
    setUploading(true);
    setMessage("");

    try {
      await uploadBytes(storageRef, file);
      setMessage("File uploaded successfully!");
    } catch (error) {
      setMessage("Error uploading file: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-page">
      <h1>Upload Page</h1>
      <GoogleSignInButton />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadPage;