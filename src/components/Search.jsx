import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

function Search() {
    const {valor, setValor, handleSearch, valorCero} = useContext(SearchContext)


    return ( 
        <div>
            <label htmlFor="search" className="font-medium">
                Search for a character trait
            </label>
            <div className="mt-2 flex items-center gap-4">
                <input
                    placeholder="playful..."
                    name="search"
                    id="search"
                    type="text"
                    className="w-full max-w-80 bg-white px-4 py-2 ring ring-black/5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    value={valor}
                    onChange={handleSearch}
                />
                <button
                onClick={() => valorCero()}
                    className="cursor-pointer inline-block rounded bg-cyan-300 px-4 py-2 !pr-3 !pl-2.5 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                >
         <Icon icon="icon-park:delete-two" width="28" height="28" />
                </button>
            </div>
        </div>
    )
}

export default Search