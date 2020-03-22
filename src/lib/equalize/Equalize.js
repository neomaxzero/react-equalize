import React, { useContext, useRef, useEffect, useLayoutEffect } from 'react';
import equalizerContext from './equalizerContext';

const Equalize = ({ children }) => {
    const el = useRef(null);
    const { rows, setRows } = useContext(equalizerContext);

    useLayoutEffect(() => {
        const element = el.current.getBoundingClientRect();

        setRows(rows => {
            const elementIsTaller = (rows[element.y] || 0) < element.height;
            if (elementIsTaller) {
                return { ...rows, [element.y]: element.height };
            }

            return rows;
        });
    });

    const heightRow = rows[el.current && el.current.getBoundingClientRect().y];

    return (
        <div ref={el} style={{ height: heightRow || 'auto' }}>
            {children}
        </div>
    );
};

export default Equalize;
