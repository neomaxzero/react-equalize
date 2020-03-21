import { createContext } from 'react';

const equalizerContext = createContext({
    rows: [],
    setRows: () => {},
});

export default equalizerContext;
