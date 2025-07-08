import { createContext, useState } from "react";

const ShortContext=createContext()
function ShortProvider(props){
    const [inList, setInlist] = useState([])
    function addToList(name, image){
        inList.map((elemento)=>{
            if(elemento.name === name && elemento.image === image)
                arr = arr.filter(item => item !== 3);
        })
        setInlist([{name: name, image: image}, ...inList])
        
         console.log(inList);
    }
    return(
        <ShortContext.Provider value={{
            inList, setInlist, addToList,
        }}>
            {props.children}
        </ShortContext.Provider>
    )
}

export { ShortContext, ShortProvider } 