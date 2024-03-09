import React, { useState } from "react";
import { TextField } from "@mui/material";

function InputText({ labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType }) {
    const [value, setValue] = useState(defaultValue);

    const updateInputValue = (val) => {
        setValue(val);
        updateFormValue({ updateType, value: val });
    };

    return (
        <div className={`mb-3 ${containerStyle}`}>
            <label className="form-label">
                <span className={`text-base ${labelStyle}`}>{labelTitle}</span>
            </label>
            <TextField 
                type={type || "text"} 
                value={value} 
                placeholder={placeholder || ""} 
                onChange={(e) => updateInputValue(e.target.value)} 
                className="form-control" 
            />
        </div>
    );
}

export default InputText;
