import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { useContext } from "react"
import { ShortContext } from "../context/ShortContext"
import { puppies } from "../data/puppies"

function ShortList() {
    const { inList, handleList } = useContext(ShortContext)

    return (
        <div>
            <h2 className="flex items-center gap-2 font-medium">
                <span>Your shortlist</span>
                <Icon icon="fluent-emoji-flat:red-heart" width="32" />
            </h2>
            <ul className="mt-4 flex flex-wrap gap-4">

                {puppies.filter((puppy) => inList.includes(puppy.name)).map((puppy) => (
                    <li key={puppy.id}
                        className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0"
                    >
                        <img
                            height="32"
                            width="32"
                            alt="Chase"
                            className="aspect-square w-8 object-cover"
                            src={`/images/${puppy.image}.jpg`}
                        />
                        <p className="px-3 text-sm text-slate-800">{puppy.name}</p>
                        <button
                            className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100 cursor-pointer"
                            onClick={() => handleList(puppy.name)}
                        >
                            <Icon icon="material-symbols-light:close" width="24" height="24" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ShortList