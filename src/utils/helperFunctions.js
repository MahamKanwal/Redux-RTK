const CLOUD_NAME = "dvaczuwrm";
const UPLOAD_PRESET = "my_unsigned_preset";

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(price);
};

export const snakeCaseToTitle = (name) => {
  return name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

import axios from "axios";
import * as Yup from "yup";

export const buildSchema = (fields) => {
  const shape = {};

  fields.forEach((f) => {
    let rule = Yup.string();

    if (f.required) {
      rule = rule.required(`${snakeCaseToTitle(f.name)} is required`);
    }

    // type-based validation
    if (f.type === "email") {
      rule = rule.email("Invalid email format");
    }

    if (f.type === "number") {
      rule = Yup.string()
        .matches(/^[0-9]+$/, "Only numbers allowed")
        .required(`${snakeCaseToTitle(f.name)} is required`);
    }

    shape[f.name] = rule;
  });

  return Yup.object().shape(shape);
};

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    formData
  );

  return data.secure_url; // image URL
};
