import React, { useState } from 'react';
import Fieldset from '../TextField';

function Form() {
    const [formData, setFormData] = useState({
        textValue: '',
        passwordValue: '',
        emailValue: '',
        numberValue: '',
        dateValue: '',
        textareaValue: '',
        selectValue: '',
        checkboxValue: false,
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <form>
          <div className="mb-3">
          <Fieldset
                {...{
                    labelDescription: "Hola Mundo",
                    inputType: "text",
                    inputId: "textValue",
                    inputPlaceholder: "Enter text",
                    fieldType: "text",
                    value: formData.textValue,
                    onChange: handleChange,
                }}
            />
          </div>
        </form>
    );
}

export default Form;
