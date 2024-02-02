import React from 'react';

const TextField = ({ label, id, placeholder, value, onChange, inputType }) => (
    <div className="mb-3">
        <label htmlFor={id} className='label'>{label}</label>
        <input
            type={inputType}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='form-control'
        />
    </div>
);

export default TextField;
