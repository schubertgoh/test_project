import React from "react";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

export default function CustomInput(props) {
    return (
        <FormControl sx={{
            paddingBottom: 2,
        }}>
            <InputLabel className="input_label" htmlFor="my-input" sx={{
                fontSize: 14,
            }}>{props.labelText}</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
    );
}

CustomInput.propTypes = {
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    inputRootCustomClasses: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool
};
