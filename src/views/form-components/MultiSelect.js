import React, { useEffect, useState, Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const colourOptions = [
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' }
                    ];

const MultiSelect = () => {
    
    const handleChange = selectedOption => {
        console.log(`Option selected:`, selectedOption);
    };
    
    return (
        <form>
            <Select
                name='colors' 
                ref={ register }
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={colourOptions}
                onChange={handleChange}
            />
        </form>
    );
    
}

export default MultiSelect;