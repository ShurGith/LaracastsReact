import { createContext, useState } from "react";

const ShortContext = createContext()
function ShortProvider(props) {
    const [inList, setInlist] = useState([])


    const handleList = (item) => {
        const isSelected = inList.includes(item);

        if (isSelected) {
            const nuevosItems = inList.filter(currentItem => currentItem !== item);
            setInlist(nuevosItems);
        } else {
            setInlist([item, ...inList]);
        }
    };
    return (
        <ShortContext.Provider value={{
            inList, setInlist, handleList,
        }}>
            {props.children}
        </ShortContext.Provider>
    )
}

export { ShortContext, ShortProvider } 