import React from 'react';
import PropTypes from 'prop-types';
import { CFormText, CLabel } from '@coreui/react';

const SingleTextInput = (props) => (
    <div>
        <CLabel htmlFor={props.name}>
            {props.title}
            <span className="text-danger">
                { props.manadatorySymbol ? ' *' : '' }
            </span>
        </CLabel>
        <input 
            className="form-control" 
            name={props.name} 
            type={props.inputType} 
            id={props.name} 
            value={props.content} 
            onChange={props.controlFunc} 
            placeholder={props.placeholder} 
        />
        <CFormText>{ props.helpText }</CFormText>
    </div>
);

SingleTextInput.propTypes = {
    inputType: PropTypes.oneOf(['text', 'number', 'email']),
    title: PropTypes.string,
    name: PropTypes.string,
    controlFunc: PropTypes.func,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    placeholder: PropTypes.string,
    manadatorySymbol: PropTypes.bool,
    helpText: PropTypes.string
};

export default SingleTextInput;