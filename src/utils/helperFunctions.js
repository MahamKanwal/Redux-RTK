export const snakeCaseToTitle = (name) => {
  return name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

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
