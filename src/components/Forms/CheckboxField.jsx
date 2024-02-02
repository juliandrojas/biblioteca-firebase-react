import React from 'react';

const CheckboxField = ({ label, id, checked, onChange }) => (
    <div className="mb-3 form-check">
        <label htmlFor={id}>{label}</label>
        <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
        />
    </div>
);

export default CheckboxField;
