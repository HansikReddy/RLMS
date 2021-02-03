import React from 'react';
import PropTypes from 'prop-types';
import { CLabel } from '@coreui/react'

const Select = (props) => (
    <div>
        <CLabel htmlFor={props.name}>
            {props.title}
            <span className="text-danger">
                { props.manadatorySymbol ? ' *' : '' }
            </span>
        </CLabel>
        <select 
            className="form-control" 
            name={props.name} 
            value={props.selectedOption}
            id={props.name}
            onChange={props.controlFunc}
        >
            <option value="">{props.placeholder}</option>
            {props.options.map(opt => {
                return (
                    <option
                        key={opt}
                        value={opt}
                    >{opt}</option>
                );
            })};
        </select>
    </div>
);

Select.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    selectedOption: PropTypes.string,
    controlFunc: PropTypes.func,
    placeholder: PropTypes.string,
    manadatorySymbol: PropTypes.bool
};

export default Select;