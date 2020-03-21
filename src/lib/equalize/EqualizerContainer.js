import React, { useContext, useState, useEffect } from 'react';
import EqualizerContext from './equalizerContext';

const EqualizerProvider = ({ children, elements }) => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows([]);
    }, [elements.length]);

    return (
        <EqualizerContext.Provider value={{ rows, setRows }}>
            {children}
        </EqualizerContext.Provider>
    );
};

EqualizerProvider.defaultProps = {
    elements: [],
};

export default EqualizerProvider;
