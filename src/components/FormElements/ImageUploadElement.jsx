import { useState } from "react";
import { uploadToCloudinary } from "../../utils/helperFunctions";


const ImageUploadElement = ({ name, value, handleChange, error }) => {
  const [preview, setPreview] = useState(value || "");
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview before upload
    setPreview(URL.createObjectURL(file));
    setLoading(true);

    try {
      const imageUrl = await uploadToCloudinary(file);

      handleChange({
        target: { name, value: imageUrl }, // Cloudinary URL to Formik
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="space-y-1">
      <label className="font-medium">{name}</label>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full border p-2 rounded-md"
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-24 h-24 object-cover rounded-md border"
        />
      )}

      {loading && <p className="text-blue-500 text-sm">Uploading...</p>}

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ImageUploadElement;
