import React from "react";
import Input from "./Input/Input";

function InputField(props) {
  const { field, form, disabled, lable, type } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "3rem" }}
    >
      {lable && (
        <label
          style={{
            fontSize: "2.2rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
          htmlFor={name}
        >
          {lable}
        </label>
      )}
      <Input id={name} disabled={disabled} type={type} {...field} />
      {showError && (
        <p style={{ color: "red", marginTop: "1rem" }}>{errors[name]}</p>
      )}
    </div>
  );
}

export default InputField;
