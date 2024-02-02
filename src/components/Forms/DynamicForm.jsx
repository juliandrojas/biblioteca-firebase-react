import React from "react";
import CustomButton from "../Buttons";
import CheckboxField from "./CheckboxField";
import TextField from "./TextField";

const DynamicForm = ({ fields, onSubmit, buttonLabel }) => (
  <form onSubmit={onSubmit}>
    {fields.map((field, index) => {
      switch (field.type) {
        case "text":
          return (
            <TextField
              key={index}
              label={field.label}
              id={field.id}
              placeholder={field.placeholder}
              value={field.value}
              onChange={field.onChange}
            />
          );
        case "email":
          return (
            <TextField
              key={index}
              label={field.label}
              id={field.id}
              placeholder={field.placeholder}
              value={field.value}
              onChange={field.onChange}
            />
          );
        case "password":
          return (
            <TextField
              key={index}
              label={field.label}
              id={field.id}
              placeholder={field.placeholder}
              value={field.value}
              onChange={field.onChange}
              inputType="password" // Cambia el tipo de input a 'password'
            />
          );

        case "checkbox":
          return (
            <CheckboxField
              key={index}
              label={field.label}
              id={field.id}
              checked={field.checked}
              onChange={field.onChange}
            />
          );
        // Puedes agregar más casos según los tipos de campos que necesites
        default:
          return null;
      }
    })}

    <CustomButton type="submit" className='btn btn-primary w-100' disabled={true}>
      {buttonLabel || "Enviar"} {/* Puedes personalizar la etiqueta del botón o dejarla por defecto como "Enviar" */}
    </CustomButton>
  </form>
);

export default DynamicForm;
