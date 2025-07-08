import { createContext, useState } from "react";

const SearchContext = createContext()
function SearchProvider(props) {
    const [visible, setVisible] = useState("")
    const [valor, setValor] = useState("")
    const handleSearch = (e) => {
        setValor(e.target.value)
        console.log(valor)
    }
    const valorCero = () => {
        setValor("")
        console.log(valor)
    }
    return (
        <SearchContext.Provider value={{
            visible, setVisible, handleSearch,valorCero,
            valor, setValor,
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export { SearchContext, SearchProvider } 