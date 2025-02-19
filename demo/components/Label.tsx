import React from 'react';

const Label = ({label, required}: {label: string, required?:boolean}) => {
    return (
        <label className="font-medium text-800 block mb-1 capitalize">{label} {required && <span className={"text-red-500"}>*</span>}</label>
    );
};

export default Label;
