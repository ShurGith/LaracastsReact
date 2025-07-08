import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { useContext, useState } from "react"
import { ShortContext } from "../context/ShortContext"

function ShortList() {
    const {inList, setInlist} = useContext(ShortContext)

    return (
        <div>
            <h2 className="flex items-center gap-2 font-medium">
                <span>Your shortlist</span>
                    <Icon icon="fluent-emoji-flat:red-heart" width="32" />
            </h2>
            <ul className="mt-4 flex flex-wrap gap-4">
                {inList.map((elemento)=>               
                <li
                    className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0"
                >
                    <img
                        height="32"
                        width="32"
                        alt="Chase"
                        className="aspect-square w-8 object-cover"
                        src={`/images/${elemento.image}.jpg`}
                    />
                    <p className="px-3 text-sm text-slate-800">{elemento.name}</p>
                    <button
                        className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
                    >
                      <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                    </button>
                </li>
                 )}
            </ul>
        </div>

    )
}

export default ShortList