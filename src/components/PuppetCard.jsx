import { Icon } from '@iconify-icon/react/dist/iconify.js'
import { useContext, useState } from 'react'
import { ShortContext } from '../context/ShortContext'

function PuppetCard({ name, image, title }) {
    const [selected, setSelected] = useState(false)
     const {inList, setInlist, addToList} = useContext(ShortContext)

    function seleccionar(){
         setSelected(!selected)
       /*  setInlist([{name: name, image: image}, ...inList])
         console.log(inList);*/
        addToList(name, image)
         
    }

    const icono = selected ? "fluent-emoji-flat:red-heart"
        : "ei:heart"
    return (
        <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
            <img
                className="aspect-square object-cover"
                alt={name}
                src={`/images/${image}.jpg`}
            />
            <div className="gap flex items-center justify-between p-4 text-sm">
                <div className="flex items-center gap-2">
                    <p className="font-semibold">{name}</p>
                    <span className="text-slate-300">·</span>
                    <p className="text-slate-500">{title}</p>
                </div>
                <button className="group cursor-pointer"
                    onClick={() => seleccionar()}>
                    <Icon icon={icono} width="32" />
                </button>
            </div>
        </li>
    )
}

export default PuppetCard