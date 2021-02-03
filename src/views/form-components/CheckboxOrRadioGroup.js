import React from 'react';
import PropTypes from 'prop-types';
import { CFormGroup, CLabel } from '@coreui/react'

const CheckboxOrRadioGroup = (props) => (  
    <div>
        <label htmlFor={props.name}>
            {props.title}
            <span className="text-danger">
                { props.manadatorySymbol ? ' *' : '' }
            </span>
        </label><br/>
        {props.options.map(opt => {
            return (
                <label key={opt} variant="custom-radio" inline="true">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                    className="form-checkbox"
                    name={props.name}
                    onChange={props.controlFunc}
                    value={opt}
                    checked={ props.selectedOptions.indexOf(opt) > -1 }
                    type={props.inputType} /> {opt}
                </label>
            );
        })}
    </div>
);

CheckboxOrRadioGroup.propTypes = {
    inputType: PropTypes.oneOf(['checkbox', 'radio']),
    title: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    selectedOptions: PropTypes.array,
    controlFunc: PropTypes.func,
    manadatorySymbol: PropTypes.bool
};

export default CheckboxOrRadioGroup;