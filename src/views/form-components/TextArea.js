import React from 'react';
import PropTypes from 'prop-types';
import { CFormText, CLabel } from '@coreui/react'

const TextArea = (props) => (
    <div>
        <CLabel htmlFor={props.name}>
            {props.title}
            <span className="text-danger">
                { props.manadatorySymbol ? ' *' : '' }
            </span>
        </CLabel>
        <textarea 
            className="form-control" 
            name={props.name} 
            id={props.name} 
            value={props.content} 
            style={props.resize ? null : {resize: 'none'}}
            rows={props.rows}
            onChange={props.controlFunc} 
            placeholder={props.placeholder} 
        />
        <CFormText>{ props.help_text }</CFormText>
    </div>
);

TextArea.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    controlFunc: PropTypes.func,
    content: PropTypes.string,
    rows: PropTypes.number,
    resize: PropTypes.bool,
    placeholder: PropTypes.string,
    manadatorySymbol: PropTypes.bool,
    helpText: PropTypes.string
};

export default TextArea;